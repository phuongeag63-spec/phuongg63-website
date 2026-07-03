#!/usr/bin/env node
// generate-posts.js — Tự động scan nhat-ky/ và tạo posts.json
// Cách dùng: node generate-posts.js
// Chạy mỗi khi thêm bài mới, sau đó commit posts.json lên GitHub

const fs   = require('fs');
const path = require('path');

const NHAT_KY_DIR = path.join(__dirname, 'nhat-ky');
const OUTPUT_FILE = path.join(__dirname, 'posts.json');

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

// Chạy
const posts = scanPosts();
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf8');
console.log(`✅ Đã tạo posts.json với ${posts.length} bài viết`);
posts.slice(0, 5).forEach((p, i) =>
  console.log(`   ${i+1}. [${p.date}] ${p.title.slice(0, 50)}`)
);
if (posts.length > 5) console.log(`   ... và ${posts.length - 5} bài nữa`);