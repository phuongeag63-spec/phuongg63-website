const bank = {
  bin: '970415',
  account: '888889060666',
  name: 'NGUYEN HOANG PHUONG',
  zalo: '84822299993',
  zaloText: '08222 99993'
};
const money = n => n ? new Intl.NumberFormat('vi-VN').format(n) + 'đ' : 'Liên hệ';
function productById(id){ return PRODUCTS.find(p => p.id === id); }
function renderProducts(){
  const grid = document.getElementById('productGrid');
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card reveal">
      <img src="${p.images.hero}" alt="${p.name}">
      <div class="product-card-body">
        <span class="badge">${p.badge}</span>
        <h3>${p.name}</h3>
        <p>${p.short}</p>
        <div class="price">${p.priceText || money(p.price)}</div>
        <div class="product-actions">
          ${p.price ? `<button class="btn btn-gold" data-buy="${p.id}">Mua ngay</button>` : `<a class="btn btn-gold" href="https://zalo.me/${bank.zalo}">Tư vấn</a>`}
          <button class="btn btn-blue" data-detail="${p.id}">Xem chi tiết</button>
        </div>
      </div>
    </article>
  `).join('');
}
function renderGallery(){
  const p = productById('dai-ban-doanh-g63-v8') || PRODUCTS[0];
  const imgs = [
    ['Poster sản phẩm', p.images.poster],
    ['Dashboard điều khiển', p.images.dashboard],
    ['Bảng cài đặt', p.images.setting],
    ['Giao diện website', 'assets/images/web-preview.png']
  ];
  document.getElementById('gallery').innerHTML = imgs.map(([cap,src]) => `<figure class="reveal"><img src="${src}" alt="${cap}"><figcaption>${cap}</figcaption></figure>`).join('');
}
function openDetail(id){
  const p = productById(id); if(!p) return;
  document.getElementById('detailContent').innerHTML = `
    <div class="detail-head">
      <img src="${p.images.poster}" alt="${p.name}">
      <div class="detail-content">
        <span class="badge">${p.category}</span>
        <h2>${p.name}</h2>
        <div class="price">${p.priceText || money(p.price)}</div>
        <p>${p.description}</p>
        <div class="hero-actions">
          ${p.price ? `<button class="btn btn-gold" data-buy="${p.id}">Mua ngay</button>` : `<a class="btn btn-gold" href="https://zalo.me/${bank.zalo}">Liên hệ tư vấn</a>`}
        </div>
      </div>
    </div>
    <h3 style="margin:26px 0 14px;color:var(--gold)">Bảng tính năng chi tiết</h3>
    <div class="feature-tags">${p.features.map(f => `<span>✅ ${f}</span>`).join('')}</div>
    <h3 style="margin:26px 0 14px;color:var(--gold)">Hướng dẫn cài đặt</h3>
    <div class="feature-tags">${p.install.map((s,i) => `<span>${i+1}. ${s}</span>`).join('')}</div>
  `;
  document.getElementById('detailModal').classList.add('show');
}
function openCheckout(id){
  const p = productById(id); if(!p || !p.price) return;
  const note = encodeURIComponent(`${p.name} ${bank.zaloText}`);
  const qr = `https://img.vietqr.io/image/${bank.bin}-${bank.account}-compact2.png?amount=${p.price}&addInfo=${note}&accountName=${bank.name}`;
  document.getElementById('checkoutContent').innerHTML = `
    <span class="badge">THANH TOÁN SẢN PHẨM</span>
    <h2>${p.name}</h2>
    <div class="price">${p.priceText || money(p.price)}</div>
    <p class="section-desc">Quét mã QR để thanh toán. Sau khi chuyển khoản, chụp biên lai gửi qua Zalo cho Phương G63.</p>
    <div class="qr"><img src="${qr}" alt="QR thanh toán VietinBank"></div>
    <div class="bank">
      <p><b>Ngân hàng:</b> VietinBank</p>
      <p><b>Số tài khoản:</b> ${bank.account}</p>
      <p><b>Chủ tài khoản:</b> Nguyễn Hoàng Phương</p>
      <p><b>Nội dung CK:</b> ${p.name} + Số Zalo</p>
    </div>
    <div class="hero-actions" style="justify-content:center">
      <a href="https://zalo.me/${bank.zalo}" class="btn btn-gold">Gửi biên lai qua Zalo</a>
      <button class="btn btn-blue" onclick="document.getElementById('payNotice').style.display='block'">Tôi đã chuyển khoản</button>
    </div>
    <div id="payNotice" class="notice" style="display:none">✅ Cảm ơn bạn. Vui lòng gửi ảnh biên lai qua Zalo ${bank.zaloText} để Phương G63 xác nhận và gửi file cài đặt.</div>
  `;
  document.getElementById('checkoutModal').classList.add('show');
}
function bindClicks(){
  document.body.addEventListener('click', e => {
    const buy = e.target.closest('[data-buy]');
    const detail = e.target.closest('[data-detail]');
    const close = e.target.closest('[data-close]');
    if(buy){ openCheckout(buy.dataset.buy); }
    if(detail){ openDetail(detail.dataset.detail); }
    if(close){ close.closest('.modal').classList.remove('show'); }
    if(e.target.classList.contains('modal')) e.target.classList.remove('show');
  });
}
function startSlider(){
  const slides = ['assets/images/web-preview.png','assets/images/hero-luc-mach.png','assets/images/poster-luc-mach.png','assets/images/dashboard-luc-mach.png','assets/images/input-luc-mach.png'];
  let i = 0; const img = document.getElementById('heroSlider');
  setInterval(()=>{ i=(i+1)%slides.length; img.style.opacity=.15; setTimeout(()=>{ img.src=slides[i]; img.style.opacity=1; },250); },4200);
}
function revealOnScroll(){
  const io = new IntersectionObserver(entries => entries.forEach(en => { if(en.isIntersecting) en.target.classList.add('show'); }), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}
renderProducts(); renderGallery(); bindClicks(); startSlider(); revealOnScroll();
