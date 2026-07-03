// home-blog.js — Tải bài viết mới nhất từ posts.json lên trang chủ
// Thêm vào index.html: <script src="/home-blog.js" defer></script>
(async function () {
  const POSTS_JSON = 'https://raw.githubusercontent.com/phuongeag63-spec/phuongg63-website/main/posts.json';

  function fmt(d) {
    if (!d) return '';
    const p = d.split('-');
    return p[2] + '/' + p[1] + '/' + p[0];
  }

  function fixImg(src) {
    if (!src) return '';
    return src.startsWith('/') ? src : '/' + src;
  }

  // Card lớn — bài nổi bật
  function cardBig(p) {
    return `
    <a href="/nhat-ky/post.html?file=${encodeURIComponent(p.file)}"
       style="position:relative;border-radius:22px;overflow:hidden;text-decoration:none;color:inherit;display:block;min-height:400px;transition:.3s"
       onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 30px 80px rgba(0,0,0,.6)'"
       onmouseout="this.style.transform='';this.style.boxShadow=''">
      ${p.image
        ? `<img src="${fixImg(p.image)}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block;position:absolute;inset:0">`
        : `<div style="position:absolute;inset:0;background:linear-gradient(135deg,#1a0a2e,#0f0620);display:flex;align-items:center;justify-content:center;font-size:80px">📖</div>`
      }
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(8,5,11,.97) 0%,rgba(8,5,11,.6) 45%,rgba(8,5,11,.05) 100%)"></div>
      <div style="position:absolute;top:18px;left:18px">
        <span style="font-size:10px;padding:4px 10px;border-radius:999px;background:var(--gold);color:#111;font-weight:1000">🔥 MỚI NHẤT</span>
      </div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:28px">
        <div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap">
          <span style="font-size:10px;padding:3px 10px;border-radius:999px;border:1px solid rgba(255,211,106,.5);background:rgba(255,211,106,.12);color:var(--gold);font-weight:900">⭐ ${p.category}</span>
        </div>
        <h3 style="font-size:clamp(18px,2.5vw,26px);font-weight:1000;color:#fff;line-height:1.25;margin-bottom:10px">${p.title}</h3>
        <p style="font-size:14px;color:rgba(255,255,255,.75);line-height:1.6;margin-bottom:14px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${p.excerpt}</p>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:12px;color:rgba(255,255,255,.5)">📅 ${fmt(p.date)}</span>
          <span style="font-size:13px;color:var(--gold);font-weight:900">Đọc tiếp →</span>
        </div>
      </div>
    </a>`;
  }

  // Card nhỏ — cột phải
  function cardSmall(p) {
    return `
    <a href="/nhat-ky/post.html?file=${encodeURIComponent(p.file)}"
       style="position:relative;border-radius:22px;overflow:hidden;text-decoration:none;color:inherit;display:block;flex:1;min-height:185px;transition:.3s"
       onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 20px 50px rgba(0,0,0,.5)'"
       onmouseout="this.style.transform='';this.style.boxShadow=''">
      ${p.image
        ? `<img src="${fixImg(p.image)}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;position:absolute;inset:0">`
        : `<div style="position:absolute;inset:0;background:linear-gradient(135deg,#16082a,#0a0518)"></div>`
      }
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(8,5,11,.95) 0%,rgba(8,5,11,.5) 50%,rgba(8,5,11,.05) 100%)"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:18px">
        <div style="margin-bottom:6px">
          <span style="font-size:10px;padding:3px 8px;border-radius:999px;border:1px solid rgba(255,211,106,.4);background:rgba(255,211,106,.1);color:var(--gold);font-weight:900">${p.category}</span>
        </div>
        <h3 style="font-size:15px;font-weight:900;color:#fff;line-height:1.3;margin-bottom:6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${p.title}</h3>
        <span style="font-size:12px;color:var(--gold);font-weight:900">📅 ${fmt(p.date)} · Đọc →</span>
      </div>
    </a>`;
  }

  // Card mini — hàng 2
  function cardMini(p) {
    return `
    <a href="/nhat-ky/post.html?file=${encodeURIComponent(p.file)}"
       style="border-radius:18px;overflow:hidden;text-decoration:none;color:inherit;display:block;min-height:140px;transition:.3s;background:linear-gradient(135deg,rgba(255,211,106,.07),rgba(255,159,28,.03));border:1px solid rgba(255,211,106,.2)"
       onmouseover="this.style.transform='translateY(-3px)';this.style.borderColor='rgba(255,211,106,.5)'"
       onmouseout="this.style.transform='';this.style.borderColor='rgba(255,211,106,.2)'">
      <div style="padding:18px;height:100%;display:flex;flex-direction:column;justify-content:space-between">
        <div>
          <span style="font-size:10px;padding:3px 8px;border-radius:999px;border:1px solid rgba(255,211,106,.3);background:rgba(255,211,106,.08);color:var(--gold);font-weight:900">${p.category}</span>
        </div>
        <div>
          <h3 style="font-size:14px;font-weight:900;color:#fff;line-height:1.3;margin:10px 0 6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${p.title}</h3>
          <span style="font-size:12px;color:var(--gold);font-weight:900">📅 ${fmt(p.date)} · Đọc →</span>
        </div>
      </div>
    </a>`;
  }

  try {
    const res = await fetch(POSTS_JSON + '?t=' + Date.now());
    if (!res.ok) return;
    const posts = await res.json();
    if (!posts || !posts.length) return;

    const section = document.getElementById('nhat-ky');
    if (!section) return;

    // Giữ lại section-head và CTA button
    const sectionHead = section.querySelector('.section-head');
    const ctaDiv = Array.from(section.children).find(el =>
      el.querySelector && el.querySelector('a.btn-gold, a.btn')
    );

    // Xóa các hàng bài viết hardcoded (không phải section-head, không phải CTA)
    Array.from(section.children).forEach(child => {
      if (child !== sectionHead && child !== ctaDiv) child.remove();
    });

    // Hàng 1: 1 bài to + 2 bài nhỏ
    const row1 = document.createElement('div');
    row1.style.cssText = 'display:grid;grid-template-columns:1.4fr 1fr;gap:20px;margin-bottom:20px';
    row1.innerHTML = cardBig(posts[0]);

    const colRight = document.createElement('div');
    colRight.style.cssText = 'display:flex;flex-direction:column;gap:20px';
    if (posts[1]) colRight.innerHTML += cardSmall(posts[1]);
    if (posts[2]) colRight.innerHTML += cardSmall(posts[2]);
    row1.appendChild(colRight);

    // Hàng 2: 2 bài mini + nút xem tất cả
    const row2 = document.createElement('div');
    row2.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:28px';
    row2.innerHTML =
      (posts[3] ? cardMini(posts[3]) : '') +
      (posts[4] ? cardMini(posts[4]) : '') +
      `<a href="/blog.html"
         style="border-radius:18px;text-decoration:none;color:inherit;display:flex;align-items:center;justify-content:center;min-height:140px;transition:.3s;background:linear-gradient(135deg,rgba(255,211,106,.08),rgba(255,159,28,.04));border:1px dashed rgba(255,211,106,.35)"
         onmouseover="this.style.borderColor='var(--gold)';this.style.transform='translateY(-3px)'"
         onmouseout="this.style.borderColor='rgba(255,211,106,.35)';this.style.transform=''">
        <div style="text-align:center">
          <div style="font-size:32px;margin-bottom:8px">📖</div>
          <div style="font-size:13px;color:var(--muted);margin-bottom:4px">Xem tất cả bài viết</div>
          <div style="font-size:12px;color:var(--gold);font-weight:900">Nhật ký →</div>
        </div>
      </a>`;

    // Chèn vào trước CTA
    if (ctaDiv) {
      section.insertBefore(row2, ctaDiv);
      section.insertBefore(row1, row2);
    } else {
      section.appendChild(row1);
      section.appendChild(row2);
    }

  } catch (e) {
    // Silently fail — giữ nguyên bài cũ nếu lỗi
    console.warn('[home-blog.js]', e);
  }
})();
