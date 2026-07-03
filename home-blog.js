// home-blog.js — Tải bài viết mới nhất từ posts.json lên trang chủ
// Thêm vào index.html: <script src="/home-blog.js" defer></script>
(async function () {
  const POSTS_JSON = 'https://raw.githubusercontent.com/phuongeag63-spec/phuongg63-website/main/posts.json';

  // ── Inject responsive CSS (chỉ 1 lần) ──────────────────────────────────
  if (!document.getElementById('hb-styles')) {
    const st = document.createElement('style');
    st.id = 'hb-styles';
    st.textContent = `
      .hb-row1 {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 0;
        margin-bottom: 16px;
        border: 1px solid rgba(255,211,106,.15);
        border-radius: 16px;
        overflow: hidden;
      }
      .hb-right-col {
        background: rgba(15,11,22,1);
        display: flex;
        flex-direction: column;
        border-left: 1px solid rgba(255,211,106,.12);
      }
      .hb-big-card { min-height: 420px; }
      .hb-row2 {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 16px;
        margin-bottom: 24px;
      }
      /* ── Mobile: ≤ 720px ── */
      @media (max-width: 720px) {
        .hb-row1 { grid-template-columns: 1fr; }
        .hb-big-card { min-height: 260px !important; border-radius: 0 !important; }
        .hb-right-col { border-left: none; border-top: 1px solid rgba(255,211,106,.12); }
        .hb-row2 { grid-template-columns: 1fr 1fr; gap: 10px; }
      }
      /* ── Small mobile: ≤ 480px ── */
      @media (max-width: 480px) {
        .hb-big-card { min-height: 220px !important; }
        .hb-row2 { grid-template-columns: 1fr; }
      }
    `;
    document.head.appendChild(st);
  }

  function fmt(d) {
    if (!d) return '';
    // Hỗ trợ cả YYYY-MM-DD và ISO datetime string
    const dateOnly = d.substring(0, 10);
    const p = dateOnly.split('-');
    return p[2] + '/' + p[1] + '/' + p[0];
  }

  function fixImg(src) {
    if (!src) return '';
    return src.startsWith('/') ? src : '/' + src;
  }

  // Card lớn bên trái — kiểu 24h.com.vn
  function cardBig(p) {
    return `
    <a href="/nhat-ky/post.html?file=${encodeURIComponent(p.file)}"
       class="hb-big-card"
       style="position:relative;border-radius:16px 0 0 16px;overflow:hidden;text-decoration:none;color:inherit;display:block;height:100%;transition:.3s"
       onmouseover="this.style.opacity='.92'"
       onmouseout="this.style.opacity='1'">
      ${p.image
        ? `<img src="${fixImg(p.image)}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block;position:absolute;inset:0">`
        : `<div style="position:absolute;inset:0;background:linear-gradient(135deg,#1a0a2e,#0f0620);display:flex;align-items:center;justify-content:center;font-size:80px">📖</div>`
      }
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(7,4,11,.97) 0%,rgba(7,4,11,.55) 45%,rgba(7,4,11,.05) 100%)"></div>
      <div style="position:absolute;top:16px;left:16px">
        <span style="font-size:10px;padding:4px 10px;border-radius:999px;background:var(--gold);color:#111;font-weight:900;letter-spacing:.5px">🔥 MỚI NHẤT</span>
      </div>
      <div style="position:absolute;bottom:0;left:0;right:0;padding:24px">
        <div style="margin-bottom:8px">
          <span style="font-size:10px;padding:3px 10px;border-radius:999px;border:1px solid rgba(255,211,106,.5);background:rgba(255,211,106,.12);color:var(--gold);font-weight:900">⭐ ${p.category}</span>
        </div>
        <h3 style="font-size:clamp(16px,2vw,22px);font-weight:900;color:#fff;line-height:1.3;margin-bottom:8px">${p.title}</h3>
        <p style="font-size:13px;color:rgba(255,255,255,.7);line-height:1.5;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${p.excerpt}</p>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:11px;color:rgba(255,255,255,.45)">📅 ${fmt(p.date)}</span>
          <span style="font-size:13px;color:var(--gold);font-weight:900">Đọc tiếp →</span>
        </div>
      </div>
    </a>`;
  }

  // Danh sách bài bên phải — kiểu 24h text list
  function listItem(p, isFirst) {
    return `
    <a href="/nhat-ky/post.html?file=${encodeURIComponent(p.file)}"
       style="display:flex;gap:12px;padding:12px 16px;text-decoration:none;color:inherit;border-bottom:1px solid rgba(255,211,106,.1);transition:background .2s;${isFirst ? 'border-top:none;' : ''}"
       onmouseover="this.style.background='rgba(255,211,106,.05)'"
       onmouseout="this.style.background='transparent'">
      ${p.image
        ? `<img src="${fixImg(p.image)}" alt="${p.title}" style="width:80px;height:58px;object-fit:cover;border-radius:8px;flex-shrink:0">`
        : `<div style="width:80px;height:58px;border-radius:8px;flex-shrink:0;background:linear-gradient(135deg,#16082a,#0a0518);display:flex;align-items:center;justify-content:center;font-size:24px">📖</div>`
      }
      <div style="flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;gap:5px">
        <span style="font-size:10px;color:var(--gold);font-weight:900;text-transform:uppercase;letter-spacing:.5px">${p.category}</span>
        <h4 style="font-size:14px;font-weight:700;color:#fff;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin:0">${p.title}</h4>
        <span style="font-size:11px;color:rgba(255,255,255,.4)">📅 ${fmt(p.date)}</span>
      </div>
    </a>`;
  }

  // Card mini — hàng dưới (có ảnh trên đầu kiểu 24h)
  function cardMini(p) {
    return `
    <a href="/nhat-ky/post.html?file=${encodeURIComponent(p.file)}"
       style="border-radius:14px;overflow:hidden;text-decoration:none;color:inherit;display:flex;flex-direction:column;transition:.3s;background:rgba(15,11,22,.9);border:1px solid rgba(255,211,106,.2)"
       onmouseover="this.style.transform='translateY(-3px)';this.style.borderColor='rgba(255,211,106,.5)'"
       onmouseout="this.style.transform='';this.style.borderColor='rgba(255,211,106,.2)'">
      ${p.image
        ? `<div style="width:100%;height:130px;overflow:hidden;flex-shrink:0">
             <img src="${fixImg(p.image)}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;transition:.3s" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform=''">
           </div>`
        : `<div style="width:100%;height:130px;flex-shrink:0;background:linear-gradient(135deg,#1a0a2e,#0f0620);display:flex;align-items:center;justify-content:center;font-size:40px">📖</div>`
      }
      <div style="padding:12px 14px;flex:1;display:flex;flex-direction:column;gap:5px">
        <span style="font-size:10px;color:var(--gold);font-weight:900;text-transform:uppercase;letter-spacing:.5px">${p.category}</span>
        <h3 style="font-size:13px;font-weight:800;color:#fff;line-height:1.4;margin:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${p.title}</h3>
        <span style="font-size:11px;color:rgba(255,255,255,.4);margin-top:auto">📅 ${fmt(p.date)}</span>
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

    // Xóa các hàng bài viết hardcoded
    Array.from(section.children).forEach(child => {
      if (child !== sectionHead && child !== ctaDiv) child.remove();
    });

    // ── Hàng 1: bài to bên trái + danh sách 4 bài bên phải ──
    const row1 = document.createElement('div');
    row1.className = 'hb-row1';

    // Bài to
    const leftCol = document.createElement('div');
    leftCol.innerHTML = posts[0] ? cardBig(posts[0]) : '';

    // Danh sách bên phải
    const rightCol = document.createElement('div');
    rightCol.className = 'hb-right-col';

    const rightHeader = document.createElement('div');
    rightHeader.style.cssText = 'font-size:10px;font-weight:900;letter-spacing:2px;text-transform:uppercase;color:#07040b;background:linear-gradient(135deg,#ffd36a,#ff9f1c);padding:9px 16px';
    rightHeader.textContent = 'Bài viết gần đây';
    rightCol.appendChild(rightHeader);

    const listWrap = document.createElement('div');
    listWrap.style.cssText = 'display:flex;flex-direction:column;flex:1';
    [1, 2, 3, 4].forEach((i, idx) => {
      if (posts[i]) listWrap.innerHTML += listItem(posts[i], idx === 0);
    });
    rightCol.appendChild(listWrap);

    row1.appendChild(leftCol);
    row1.appendChild(rightCol);

    // ── Hàng 2: 6 mini cards (3 cột × 2 hàng) ──
    const row2 = document.createElement('div');
    row2.className = 'hb-row2';
    row2.innerHTML =
      (posts[5]  ? cardMini(posts[5])  : '') +
      (posts[6]  ? cardMini(posts[6])  : '') +
      (posts[7]  ? cardMini(posts[7])  : '') +
      (posts[8]  ? cardMini(posts[8])  : '') +
      (posts[9]  ? cardMini(posts[9])  : '') +
      (posts[10] ? cardMini(posts[10]) : '');

    // Chèn vào trước CTA
    if (ctaDiv) {
      section.insertBefore(row2, ctaDiv);
      section.insertBefore(row1, row2);
    } else {
      section.appendChild(row1);
      section.appendChild(row2);
    }

  } catch (e) {
    console.warn('[home-blog.js]', e);
  }
})();