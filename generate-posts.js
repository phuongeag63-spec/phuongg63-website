#!/usr/bin/env node
// generate-posts.js — Tự động scan nhat-ky/ và tạo posts.json
// Cách dùng: node generate-posts.js
// Chạy mỗi khi thêm bài mới, sau đó commit posts.json lên GitHub

const fs   = require('fs');
const path = require('path');

const NHAT_KY_DIR  = path.join(__dirname, 'nhat-ky');
const OUTPUT_FILE  = path.join(__dirname, 'posts.json');
const SITEMAP_FILE = path.join(__dirname, 'sitemap.xml');
const BASE_URL     = 'https://phuongg63.com';

// Đọc frontmatter từ file .md
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const raw = match[1];
  const result = {};
  for (const line of raw.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key   = line.slice(0, idx).trim();
    let   value = line.slice(idx + 1).trim();
    // Bỏ dấu ngoặc kép bao ngoài
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    // null → null
    if (value === 'null' || value === '') value = null;
    result[key] = value;
  }
  return result;
}

// Tạo excerpt từ nội dung bài (bỏ qua frontmatter và heading)
function makeExcerpt(content, maxLen = 160) {
  // Bỏ frontmatter
  const body = content.replace(/^---[\s\S]*?---\r?\n/, '');
  // Bỏ markdown image, heading, hr
  const text = body
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/^#{1,6}\s+.+$/gm, '')
    .replace(/^---+$/gm, '')
    .replace(/\*{1,3}(.*?)\*{1,3}/g, '$1')
    .replace(/`[^`]+`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\n{2,}/g, ' ')
    .replace(/\n/g, ' ')
    .trim();
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).replace(/\s+\S*$/, '') + '...';
}

// Đọc tất cả file .md trong nhat-ky/
function scanPosts() {
  if (!fs.existsSync(NHAT_KY_DIR)) {
    console.error('❌ Không tìm thấy thư mục nhat-ky/');
    process.exit(1);
  }

  const files = fs.readdirSync(NHAT_KY_DIR)
    .filter(f => f.endsWith('.md') && f !== 'README.md');

  const posts = [];

  for (const file of files) {
    const filePath = path.join(NHAT_KY_DIR, file);
    const content  = fs.readFileSync(filePath, 'utf8');
    const meta     = parseFrontmatter(content);
    const fileName = file.replace(/\.md$/, '');

    // Bỏ qua file không có tiêu đề
    if (!meta.title) {
      console.warn(`⚠️  Bỏ qua ${file} — không có title trong frontmatter`);
      continue;
    }

    // Lấy date từ frontmatter hoặc từ tên file (YYYY-MM-DD-...)
    let date = meta.date || null;
    if (!date) {
      const m = fileName.match(/^(\d{4}-\d{2}-\d{2})/);
      if (m) date = m[1];
    }

    // Tạo excerpt: ưu tiên description trong frontmatter, sau đó tự tạo
    const excerpt = meta.description || meta.excerpt || makeExcerpt(content);

    posts.push({
      file:     fileName,
      title:    meta.title,
      date:     date || '',
      category: meta.category || 'Bài viết',
      image:    meta.image || null,
      excerpt:  excerpt,
    });
  }

  // Sắp xếp: mới nhất trước
  posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return  1;
    return a.file < b.file ? 1 : -1; // cùng ngày: sort ngược theo tên
  });

  return posts;
}

// Tạo sitemap.xml
function generateSitemap(posts) {
  const today = new Date().toISOString().split('T')[0];
  const staticPages = [
    { loc: BASE_URL + '/',          priority: '1.0', changefreq: 'weekly',  lastmod: today },
    { loc: BASE_URL + '/blog.html', priority: '0.9', changefreq: 'daily',   lastmod: today },
    { loc: BASE_URL + '/san-pham',  priority: '0.8', changefreq: 'weekly',  lastmod: today },
  ];
  const postPages = posts.map(p => ({
    loc: `${BASE_URL}/nhat-ky/${p.file}.html`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: p.date || today,
  }));
  const allUrls = [...staticPages, ...postPages];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  fs.writeFileSync(SITEMAP_FILE, xml, 'utf8');
  console.log(`✅ Đã tạo sitemap.xml với ${allUrls.length} URLs`);
}

// Tạo file HTML tĩnh cho mỗi bài (giúp Google index tốt hơn)
function generateStaticPages(posts) {
  const { marked } = require('marked');
  let count = 0;
  for (const p of posts) {
    const mdPath = path.join(NHAT_KY_DIR, p.file + '.md');
    if (!fs.existsSync(mdPath)) continue;
    const raw = fs.readFileSync(mdPath, 'utf8');
    const body = raw.replace(/^---[\s\S]*?---\r?\n/, '');
    const htmlBody = marked.parse(body);
    const image = p.image ? `https://phuongg63.com${p.image}` : 'https://phuongg63.com/assets/images/chien-truong-sinh-tu-poster.png';
    const canonical = `${BASE_URL}/nhat-ky/${p.file}.html`;
    const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${p.title} | Phương G63</title>
<meta name="description" content="${p.excerpt.replace(/"/g,'&quot;')}">
<meta name="author" content="Phương G63">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="article">
<meta property="og:title" content="${p.title}">
<meta property="og:description" content="${p.excerpt.replace(/"/g,'&quot;')}">
<meta property="og:image" content="${image}">
<meta property="og:url" content="${canonical}">
<meta property="article:published_time" content="${p.date}">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BlogPosting","headline":"${p.title.replace(/"/g,'\\"')}","description":"${p.excerpt.replace(/"/g,'\\"')}","datePublished":"${p.date}","author":{"@type":"Person","name":"Phương G63","url":"${BASE_URL}/"},"publisher":{"@type":"Person","name":"Phương G63"},"url":"${canonical}","image":"${image}"}
</script>
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-B8KME2DB3L"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-B8KME2DB3L');</script>
<style>
body{font-family:system-ui,sans-serif;max-width:800px;margin:0 auto;padding:20px 24px;line-height:1.7;color:#e8e0f0;background:#07040b}
h1,h2,h3{color:#ffd36a}img{max-width:100%;border-radius:12px}a{color:#ffd36a}
.back{display:inline-block;margin-bottom:24px;color:#ffd36a;text-decoration:none;font-weight:700}
.meta{color:rgba(255,255,255,.5);font-size:14px;margin-bottom:32px}
</style>
</head>
<body>
<a class="back" href="/blog.html">← Quay lại Nhật ký</a>
<h1>${p.title}</h1>
<div class="meta">📅 ${p.date} &nbsp;·&nbsp; ${p.category}</div>
${p.image ? `<img src="${p.image}" alt="${p.title}" style="width:100%;margin-bottom:24px">` : ''}
<article>${htmlBody}</article>
<hr style="border-color:rgba(255,211,106,.2);margin:40px 0">
<p><a href="/blog.html">← Xem tất cả bài viết</a></p>
</body>
</html>`;
    fs.writeFileSync(path.join(NHAT_KY_DIR, p.file + '.html'), html, 'utf8');
    count++;
  }
  console.log(`✅ Đã tạo ${count} trang HTML tĩnh trong nhat-ky/`);
}

// Chạy
const posts = scanPosts();
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf8');
console.log(`✅ Đã tạo posts.json với ${posts.length} bài viết`);
posts.slice(0, 5).forEach((p, i) =>
  console.log(`   ${i+1}. [${p.date}] ${p.title.slice(0, 50)}`)
);
if (posts.length > 5) console.log(`   ... và ${posts.length - 5} bài nữa`);
generateSitemap(posts);
generateStaticPages(posts);