const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const bank = { bin:'970415', account:'888889060666', owner:'NGUYEN HOANG PHUONG', zalo:'84822299993', zaloText:'08222 99993' };
function money(v){ return new Intl.NumberFormat('vi-VN').format(v) + 'đ'; }
function getProduct(id){ return PRODUCTS.find(p=>p.id===id) || PRODUCTS[0]; }
function qrUrl(p){ return `https://img.vietqr.io/image/${bank.bin}-${bank.account}-compact2.png?amount=${p.price}&addInfo=${encodeURIComponent(p.name + ' ' + bank.zaloText)}&accountName=${encodeURIComponent(bank.owner)}`; }
function renderProducts(){
  $('#productGrid').innerHTML = PRODUCTS.map(p=>`<article class="product-card reveal"><img src="${p.image}" alt="${p.name}"><div class="product-card-body"><span class="badge">${p.badge}</span><h3>${p.name}</h3><p>${p.short}</p><div class="price">${p.price ? p.priceText : 'Liên hệ'}</div><div class="product-actions"><button class="btn btn-gold" data-buy="${p.id}">Mua ngay</button><button class="btn btn-blue" data-detail="${p.id}">Xem chi tiết</button></div></div></article>`).join('');
}
function renderGallery(){
  const imgs = [
    ['assets/images/poster-luc-mach.png','Poster giới thiệu EA'],['assets/images/dashboard-luc-mach.png','Bảng điều khiển EA'],['assets/images/input-luc-mach.png','Thông số cài đặt'],['assets/images/web-preview.png','Giao diện website Phương G63']
  ];
  $('#gallery').innerHTML = imgs.map(i=>`<figure class="reveal"><img src="${i[0]}" alt="${i[1]}"><figcaption>${i[1]}</figcaption></figure>`).join('');
}
function openDetail(id){
  const p = getProduct(id);
  $('#detailContent').innerHTML = `<div class="detail-head"><img src="${p.image}" alt="${p.name}"><div class="detail-content"><span class="badge">${p.category}</span><h2>${p.name}</h2><p>${p.description}</p><div class="price">${p.price ? p.priceText : 'Liên hệ'}</div><div class="hero-actions"><button class="btn btn-gold" data-buy="${p.id}">Mua ngay</button><button class="btn btn-blue" data-close>Đóng</button></div></div></div><h3 style="margin-top:26px;color:var(--gold)">Tính năng nổi bật</h3><div class="feature-tags">${p.features.map(f=>`<span>✅ ${f}</span>`).join('')}</div><h3 style="margin-top:22px;color:var(--gold)">Hướng dẫn cài đặt</h3><div class="feature-tags">${p.install.map((f,i)=>`<span><b>${i+1}.</b> ${f}</span>`).join('')}</div><div class="mini-gallery">${p.images.map(img=>`<img src="${img}" alt="${p.name}">`).join('')}</div>`;
  $('#detailModal').classList.add('show');
}
function openCheckout(id){
  const p = getProduct(id);
  $('#checkoutContent').innerHTML = `<span class="badge">THANH TOÁN SẢN PHẨM</span><h2>${p.name}</h2><div class="price">${p.price ? p.priceText : 'Liên hệ Zalo'}</div><p style="color:var(--muted);line-height:1.7">Quét QR VietinBank để thanh toán. Sau khi chuyển khoản, chụp màn hình biên lai gửi qua Zalo cho Phương G63.</p>${p.price?`<div class="qr"><img src="${qrUrl(p)}" alt="QR thanh toán ${p.name}"></div>`:''}<div class="bank"><p><b>Ngân hàng:</b> VietinBank</p><p><b>Số tài khoản:</b> ${bank.account}</p><p><b>Chủ tài khoản:</b> Nguyễn Hoàng Phương</p><p><b>Nội dung CK:</b> ${p.name} + Số Zalo</p></div><div class="hero-actions" style="justify-content:center"><a class="btn btn-gold" href="https://zalo.me/${bank.zalo}">Gửi biên lai qua Zalo</a><button class="btn btn-blue" onclick="document.getElementById('paidNotice').style.display='block'">Tôi đã chuyển khoản</button></div><div id="paidNotice" class="notice" style="display:none">✅ Cảm ơn bạn. Vui lòng gửi ảnh biên lai qua Zalo ${bank.zaloText} để Phương G63 xác nhận và gửi file cài đặt.</div>`;
  $('#checkoutModal').classList.add('show');
}
function initSlider(){
  const slides = ['assets/images/web-preview.png','assets/images/poster-luc-mach.png','assets/images/hero-luc-mach.png','assets/images/input-luc-mach.png'];
  let i=0; setInterval(()=>{ i=(i+1)%slides.length; $('#heroSlider').src = slides[i]; }, 4200);
}
function initReveal(){
  const io = new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); }),{threshold:.12});
  $$('.reveal').forEach(el=>io.observe(el));
}
document.addEventListener('click', e=>{
  const buy = e.target.closest('[data-buy]'); if(buy){ openCheckout(buy.dataset.buy); return; }
  const detail = e.target.closest('[data-detail]'); if(detail){ openDetail(detail.dataset.detail); return; }
  if(e.target.matches('[data-close]') || e.target.classList.contains('modal')) $$('.modal').forEach(m=>m.classList.remove('show'));
});
$('#menuBtn')?.addEventListener('click',()=>$('#mainNav').classList.toggle('open'));
renderProducts(); renderGallery(); initSlider(); initReveal();
