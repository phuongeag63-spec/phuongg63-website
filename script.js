const bankId='970415';
const accountNo='888889060666';
const accountName='NGUYEN HOANG PHUONG';
const zaloUrl='https://zalo.me/84822299993';
let currentProduct=PRODUCTS[0];
let activeFilter='all';
function cats(){return ['all',...new Set(PRODUCTS.map(p=>p.categoryKey))]}
function catLabel(k){return {all:'Tất cả',tamquoc:'Tam Quốc',manual:'Đánh tay',dashboard:'Dashboard',ea:'EA Premium',coming:'Sắp cập nhật'}[k]||k}
function productPageUrl(id){return 'san-pham/'+id+'/'}
function renderFilters(){const bar=document.getElementById('filterBar');bar.innerHTML=cats().map(c=>`<button class="filter-btn ${c===activeFilter?'active':''}" onclick="setFilter('${c}')">${catLabel(c)}</button>`).join('')}
function setFilter(c){activeFilter=c;renderFilters();renderProducts()}
function productMatch(p,q){q=q.trim().toLowerCase();if(!q)return true;return [p.name,p.category,p.short,p.description,...(p.tags||[]),...(p.features||[])].join(' ').toLowerCase().includes(q)}
function renderProducts(){const q=document.getElementById('searchInput')?.value||'';const list=PRODUCTS.filter(p=>(activeFilter==='all'||p.categoryKey===activeFilter)&&productMatch(p,q));const grid=document.getElementById('productGrid');grid.innerHTML=list.map(p=>`<article class="product-card reveal" data-id="${p.id}"><div class="img-wrap"><img src="${p.image}" alt="${p.name}"><span class="shine"></span></div><div class="product-body"><span class="badge">${p.badge}</span><div class="category">${p.category}</div><h3>${p.name}</h3><p>${p.short}</p><div class="tag-row">${(p.tags||[]).slice(0,3).map(t=>`<small>${t}</small>`).join('')}</div><div class="price-row"><span class="price">${p.priceText}</span><button class="btn btn-gold" onclick="openCheckoutById('${p.id}')">Mua ngay</button></div><a class="btn btn-exness" href="https://one.exnessonelink.com/intl/vi/a/20jf6d0igf" target="_blank">🎁 Đăng ký Exness — Nhận miễn phí</a><div class="product-actions"><button class="btn btn-blue" onclick="selectProduct('${p.id}')">Xem nhanh</button><a class="btn btn-blue" href="${productPageUrl(p.id)}">Trang SEO</a></div></div></article>`).join('')||'<div class="empty">Không tìm thấy sản phẩm phù hợp.</div>';observeReveal()}
function selectProduct(id){currentProduct=PRODUCTS.find(p=>p.id===id)||PRODUCTS[0];renderDetail(currentProduct);syncProductSelects(currentProduct.id);document.getElementById('details').scrollIntoView({behavior:'smooth'})}
function renderDetail(p){const box=document.getElementById('detailBox');const thumbs=p.images.map((img,i)=>`<img src="${img}" class="${i===0?'active':''}" onclick="setMainImage('${img}',this)" alt="${p.name} ảnh ${i+1}">`).join('');const warning=p.warning?`<div class="warning-box">⚠️ ${p.warning}</div>`:'';const faq=(p.faq||[]).map((f,i)=>`<details ${i===0?'open':''}><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');const video=p.video?`<div style="margin:20px 0;border-radius:14px;overflow:hidden;border:2px solid #ffd36a;box-shadow:0 0 24px rgba(255,211,106,.25)"><video controls preload="metadata" style="width:100%;display:block;background:#000"><source src="${p.video}" type="video/mp4"></video></div>`:`<div class="video-box"><span>🎬</span><h4>${p.videoTitle||'Video demo'}</h4><p>${p.videoText||'Video sẽ được cập nhật.'}</p></div>`;const lore=p.id==='chien-truong-sinh-tu-g63'?`<div class="lore-box"><h4>👑 Cốt truyện sản phẩm</h4><p>Thiên hạ chia ba. Mỗi phiên giao dịch là một trận sa trường. Người dùng không mua một lời cam kết lợi nhuận, mà bước vào hành trình Tam Quốc: chiếm thành, mở tướng, thu báu vật, hạ Boss và tự thử thách bản lĩnh của chính mình.</p></div>`:'';box.innerHTML=`<div class="detail-layout"><div><div class="gallery-main"><img id="mainGallery" src="${p.images[0]}" alt="${p.name}"></div><div class="thumbs">${thumbs}</div>${video}${lore}</div><div class="detail-copy"><span class="badge">${p.badge}</span><h3>${p.name}</h3><p>${p.description}</p>${warning}<div class="price">${p.priceText}</div><h4>Tính năng nổi bật</h4><ul class="feature-list">${p.features.map(f=>`<li>✅ ${f}</li>`).join('')}</ul><h4>Hướng dẫn nhận & cài đặt</h4><ul class="install-list">${p.install.map(x=>`<li>➜ ${x}</li>`).join('')}</ul><h4>Câu hỏi thường gặp</h4><div class="faq-list">${faq}</div><div style="margin-top:20px;padding:16px;border-radius:14px;border:2px solid rgba(255,211,106,.4);background:linear-gradient(135deg,rgba(255,211,106,.06),rgba(255,159,28,.02));box-shadow:0 0 20px rgba(255,211,106,.08)"><div style="font-size:11px;color:rgba(255,211,106,.7);font-weight:900;letter-spacing:.8px;text-transform:uppercase;margin-bottom:12px">🛒 Đặt mua & Liên hệ</div><button class="btn btn-gold" style="width:100%;margin-bottom:8px;font-size:15px;padding:13px" onclick="openCheckoutById('${p.id}')">💰 Mua ngay — ${p.priceText}</button><a class="btn btn-exness" href="https://one.exnessonelink.com/intl/vi/a/20jf6d0igf" target="_blank" style="display:block;text-align:center;margin-bottom:8px;white-space:normal;word-break:break-word">🎁 Đăng ký Exness — Nhận EA miễn phí</a><div style="display:flex;gap:8px"><a class="btn btn-blue" href="${productPageUrl(p.id)}" style="flex:1;text-align:center;min-width:0;font-size:12px">📄 Trang chi tiết</a><a class="btn btn-blue" href="${zaloUrl}" style="flex:1;text-align:center;min-width:0;font-size:12px">💬 Hỏi Zalo</a></div></div></div></div>`}
function setMainImage(src,el){document.getElementById('mainGallery').src=src;document.querySelectorAll('.thumbs img').forEach(i=>i.classList.remove('active'));el.classList.add('active')}
function renderCompare(){const t=document.getElementById('compareTable');t.innerHTML=`<thead><tr><th>Sản phẩm</th><th>Giá</th><th>Loại</th><th>Định vị</th><th>Hành động</th></tr></thead><tbody>${PRODUCTS.map(p=>`<tr><td><b>${p.name}</b></td><td>${p.priceText}</td><td>${p.category}</td><td>${p.tags?.slice(0,4).join(' • ')||''}</td><td><button class="mini-btn" onclick="selectProduct('${p.id}')">Xem</button></td></tr>`).join('')}</tbody>`}
function renderUpdates(){const el=document.getElementById('updateList');if(!el)return;el.innerHTML=UPDATES.map(u=>`<div class="time-item"><span>${u.date}</span><h3>${u.version}</h3><p>${u.text}</p></div>`).join('')}
function openCheckoutById(id){openCheckout(PRODUCTS.find(p=>p.id===id)||PRODUCTS[0])}
function openCheckout(p){syncProductSelects(p.id);document.getElementById('payName').innerText=p.name;document.getElementById('payPrice').innerText=p.priceText;document.getElementById('payNote').innerText=p.name;document.getElementById('paidNotice').style.display='none';const qrImg=document.getElementById('qrBankImg');if(qrImg){const addInfo=encodeURIComponent(p.name+' Zalo 0822299993');qrImg.src='https://img.vietqr.io/image/970415-888889060666-compact2.png?addInfo='+addInfo+'&accountName=NGUYEN%20HOANG%20PHUONG';qrImg.onerror=function(){this.onerror=null;this.src='assets/images/qr-bank.png.jpg'}}document.getElementById('checkout').style.display='flex'}
function closeCheckout(){document.getElementById('checkout').style.display='none'}
function showPaidNotice(){document.getElementById('paidNotice').style.display='block';setTimeout(()=>{closeCheckout()},1200)}
function observeReveal(){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el))}
function heroSlider(){const imgs=[...new Set(PRODUCTS.flatMap(p=>p.images))];let i=0;const el=document.getElementById('heroSlide');setInterval(()=>{i=(i+1)%imgs.length;el.src=imgs[i]},3300)}
function fillOrderProducts(){const opts=PRODUCTS.map(p=>`<option value="${p.id}">${p.name} - ${p.priceText}</option>`).join('');['orderProduct','receiptProduct'].forEach(id=>{const sel=document.getElementById(id);if(sel)sel.innerHTML=opts})}
function selectedOrderProduct(){const id=document.getElementById('orderProduct')?.value;return PRODUCTS.find(p=>p.id===id)||PRODUCTS[0]}
function selectedReceiptProduct(){const id=document.getElementById('receiptProduct')?.value||document.getElementById('orderProduct')?.value;return PRODUCTS.find(p=>p.id===id)||PRODUCTS[0]}
function syncProductSelects(id){['orderProduct','receiptProduct'].forEach(selId=>{const sel=document.getElementById(selId);if(sel)sel.value=id});updateReceiptPreview()}
function sendOrderZalo(){const p=selectedOrderProduct();const name=document.getElementById('orderName')?.value||'';const zalo=document.getElementById('orderZalo')?.value||'';const note=document.getElementById('orderNote')?.value||'';const msg=`Chào Phương G63, tôi muốn đặt mua ${p.name} giá ${p.priceText}. Tên: ${name}. Zalo: ${zalo}. Ghi chú: ${note}`;window.open(zaloUrl+'?text='+encodeURIComponent(msg),'_blank')}
function openCheckoutBySelect(){openCheckout(selectedOrderProduct())}
function buildReceiptMessage(){const p=selectedReceiptProduct();const name=document.getElementById('receiptName')?.value||document.getElementById('orderName')?.value||'';const zalo=document.getElementById('receiptZalo')?.value||document.getElementById('orderZalo')?.value||'';const amount=document.getElementById('receiptAmount')?.value||p.priceText;const code=document.getElementById('receiptCode')?.value||'Chưa nhập';const note=document.getElementById('receiptNote')?.value||'';return `Chào Phương G63, tôi đã chuyển khoản mua ${p.name}. Tên: ${name}. Zalo: ${zalo}. Số tiền: ${amount}. Mã giao dịch: ${code}. Ghi chú: ${note}. Nhờ Phương G63 xác nhận và gửi file cài đặt/license.`}
function sendReceiptZalo(){window.open(zaloUrl+'?text='+encodeURIComponent(buildReceiptMessage()),'_blank')}
function copyReceiptText(){const text=buildReceiptMessage();navigator.clipboard?.writeText(text);const preview=document.getElementById('receiptPreview');if(preview)preview.innerText='Đã copy nội dung biên lai. Nếu trình duyệt không cho copy, hãy bôi đen phần nội dung bên dưới.\n\n'+text}
function updateReceiptPreview(){const p=selectedReceiptProduct();const code='G63-V18-'+p.id.slice(0,8).toUpperCase();const licenseCode=document.getElementById('licenseCode');const licenseProduct=document.getElementById('licenseProduct');if(licenseCode)licenseCode.innerText=code;if(licenseProduct)licenseProduct.innerText=p.name;const preview=document.getElementById('receiptPreview');if(preview)preview.innerText=buildReceiptMessage()}
function updateReadyScore(){const boxes=[...document.querySelectorAll('[data-ready]')];const done=boxes.filter(x=>x.checked).length;const score=document.getElementById('readyScore');const text=document.getElementById('readyText');if(score)score.innerText=done+'/'+boxes.length;if(text)text.innerText=done===boxes.length?'Đã đủ checklist cơ bản. Khách có thể tiếp tục đặt mua, vẫn cần tự chịu trách nhiệm giao dịch.':'Hãy tick đủ checklist trước khi mua sản phẩm nâng cao.'}
document.addEventListener('DOMContentLoaded',()=>{const kpiEl=document.getElementById('kpiProducts');if(kpiEl)kpiEl.innerText=PRODUCTS.length+'+';renderFilters();renderProducts();renderDetail(PRODUCTS[0]);renderCompare();renderUpdates();fillOrderProducts();syncProductSelects(PRODUCTS[0].id);observeReveal();heroSlider();document.getElementById('searchInput')?.addEventListener('input',renderProducts);document.querySelector('[data-buy-first]')?.addEventListener('click',()=>openCheckout(PRODUCTS[0]));['orderProduct','receiptProduct','receiptName','receiptZalo','receiptAmount','receiptCode','receiptNote','orderName','orderZalo'].forEach(id=>document.getElementById(id)?.addEventListener('input',updateReceiptPreview));document.getElementById('orderProduct')?.addEventListener('change',e=>syncProductSelects(e.target.value));document.getElementById('receiptProduct')?.addEventListener('change',updateReceiptPreview);document.querySelectorAll('[data-ready]').forEach(box=>box.addEventListener('change',updateReadyScore));updateReadyScore();updateReceiptPreview()});

/* ============================================================
   V19 UX NÂNG CẤP
   ============================================================ */

/* ─── LOADING SCREEN ─────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const s = document.getElementById('loading-screen');
    if (s) s.classList.add('hidden');
  }, 1400);
});

/* ─── BACK TO TOP ────────────────────────────────────────── */
(function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ─── DARK / LIGHT MODE ──────────────────────────────────── */
(function () {
  const btn = document.getElementById('mode-toggle');
  if (!btn) return;
  // Khôi phục mode đã lưu
  if (localStorage.getItem('g63-mode') === 'light') {
    document.body.classList.add('light-mode');
    btn.textContent = '🌙';
  } else {
    btn.textContent = '☀️';
  }
  btn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    btn.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('g63-mode', isLight ? 'light' : 'dark');
  });
})();

/* ─── COUNTER ANIMATION cho KPI ─────────────────────────── */
(function () {
  function animateCount(el, end, suffix, duration) {
    let cur = 0;
    const step = Math.max(1, Math.ceil(end / (duration / 16)));
    const timer = setInterval(() => {
      cur = Math.min(cur + step, end);
      el.textContent = cur + suffix;
      el.classList.add('kpi-counting');
      setTimeout(() => el.classList.remove('kpi-counting'), 200);
      if (cur >= end) clearInterval(timer);
    }, 16);
  }

  const targets = [
    { id: 'kpiProducts', suffix: '+' },
  ];

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = parseInt(el.textContent) || 0;
      const suffix = el.textContent.replace(/[0-9]/g, '');
      animateCount(el, raw, suffix, 1200);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });

  targets.forEach(t => {
    const el = document.getElementById(t.id);
    if (el) io.observe(el);
  });
})();

/* ─── COUNTDOWN TIMER ────────────────────────────── */
(function () {
  function updateCountdown() {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 0);
    const diff = end - now;
    if (diff <= 0) return;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const el = document.getElementById('countdown-timer');
    if (el) el.textContent =
      String(h).padStart(2, '0') + ':' +
      String(m).padStart(2, '0') + ':' +
      String(s).padStart(2, '0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();

/* ─── SOCIAL PROOF POPUP ─────────────────────────── */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spIn {
      from { opacity:0; transform:translateY(16px); }
      to   { opacity:1; transform:translateY(0); }
    }
    #sp-popup { animation: spIn .4s ease; }
  `;
  document.head.appendChild(style);

  const buyers = [
    { name: 'Nguyễn V.T · TP.HCM',      product: 'Chiến Trường Sinh Tử G63',   time: '2 phút trước' },
    { name: 'Trần M.H · Hà Nội',         product: 'Đại Bản Doanh G63 V8',       time: '5 phút trước' },
    { name: 'Lê Q.A · Đà Nẵng',          product: 'Hàn Băng Chưởng G63',        time: '11 phút trước' },
    { name: 'Phạm T.B · Cần Thơ',        product: 'Chiến Trường Sinh Tử G63',   time: '18 phút trước' },
    { name: 'Hoàng V.C · Hải Phòng',     product: 'EA Lục Mạch Thần Kiếm G63', time: '24 phút trước' },
    { name: 'Đỗ M.D · Bình Dương',       product: 'Đại Bản Doanh G63 V8',       time: '31 phút trước' },
    { name: 'Vũ T.E · TP.HCM',           product: 'Phuong G63 RR',              time: '39 phút trước' },
    { name: 'Bùi Q.F · Hà Nội',          product: 'Chiến Trường Sinh Tử G63',   time: '47 phút trước' },
    { name: 'Đinh T.G · Nha Trang',      product: 'Hàn Băng Chưởng G63',        time: '55 phút trước' },
    { name: 'Cao V.H · Hồ Chí Minh',     product: 'Đại Bản Doanh G63 V8',       time: '1 giờ trước' },
    { name: 'Lý T.K · Huế',              product: 'Chiến Trường Sinh Tử G63',   time: '1 giờ 10 phút trước' },
    { name: 'Phan V.L · Vũng Tàu',       product: 'EA Lục Mạch Thần Kiếm G63', time: '1 giờ 22 phút trước' },
    { name: 'Ngô T.M · Bắc Ninh',        product: 'Đại Bản Doanh G63 V8',       time: '1 giờ 35 phút trước' },
    { name: 'Tống V.N · TP.HCM',         product: 'Hàn Băng Chưởng G63',        time: '1 giờ 48 phút trước' },
    { name: 'Dương T.O · Hà Nội',        product: 'Chiến Trường Sinh Tử G63',   time: '2 giờ trước' },
    { name: 'Trịnh V.P · Đồng Nai',      product: 'Phuong G63 RR',              time: '2 giờ 15 phút trước' },
    { name: 'Lưu T.Q · Cần Thơ',         product: 'Đại Bản Doanh G63 V8',       time: '2 giờ 30 phút trước' },
    { name: 'Hồ V.R · Đà Nẵng',          product: 'Chiến Trường Sinh Tử G63',   time: '2 giờ 45 phút trước' },
    { name: 'Đặng T.S · Hải Phòng',      product: 'Hàn Băng Chưởng G63',        time: '3 giờ trước' },
    { name: 'Mai V.T · Bình Dương',       product: 'EA Lục Mạch Thần Kiếm G63', time: '3 giờ 20 phút trước' },
    { name: 'Kiều T.U · TP.HCM',         product: 'Chiến Trường Sinh Tử G63',   time: '3 giờ 40 phút trước' },
    { name: 'Tăng V.V · Hà Nội',         product: 'Đại Bản Doanh G63 V8',       time: '4 giờ trước' },
    { name: 'Văn T.W · Long An',          product: 'Phuong G63 RR',              time: '4 giờ 15 phút trước' },
    { name: 'Thái V.X · Nghệ An',        product: 'Hàn Băng Chưởng G63',        time: '4 giờ 30 phút trước' },
    { name: 'Chu T.Y · TP.HCM',          product: 'Chiến Trường Sinh Tử G63',   time: '5 giờ trước' },
    { name: 'La V.Z · Hà Nội',           product: 'EA Lục Mạch Thần Kiếm G63', time: '5 giờ 20 phút trước' },
    { name: 'Bạch T.A · Đà Lạt',         product: 'Đại Bản Doanh G63 V8',       time: '5 giờ 40 phút trước' },
    { name: 'Tô V.B · Quảng Ngãi',       product: 'Chiến Trường Sinh Tử G63',   time: '6 giờ trước' },
    { name: 'Ung T.C · TP.HCM',          product: 'Hàn Băng Chưởng G63',        time: '6 giờ 30 phút trước' },
    { name: 'Liêu V.D · Hà Nội',         product: 'Phuong G63 RR',              time: '7 giờ trước' },
    { name: 'Khúc T.E · Hưng Yên',       product: 'Chiến Trường Sinh Tử G63',   time: '7 giờ 30 phút trước' },
    { name: 'Cù V.F · Tiền Giang',       product: 'Đại Bản Doanh G63 V8',       time: '8 giờ trước' },
    { name: 'Quách T.G · TP.HCM',        product: 'EA Lục Mạch Thần Kiếm G63', time: '8 giờ 30 phút trước' },
    { name: 'Từ V.H · Hà Nội',           product: 'Chiến Trường Sinh Tử G63',   time: '9 giờ trước' },
    { name: 'Đoàn T.I · Bắc Giang',      product: 'Hàn Băng Chưởng G63',        time: '9 giờ 30 phút trước' },
    { name: 'Phó V.J · Khánh Hòa',       product: 'Phuong G63 RR',              time: '10 giờ trước' },
    { name: 'Linh T.K · TP.HCM',         product: 'Chiến Trường Sinh Tử G63',   time: '10 giờ 30 phút trước' },
    { name: 'Minh V.L · Hà Nội',         product: 'Đại Bản Doanh G63 V8',       time: '11 giờ trước' },
    { name: 'Hùng T.M · Thái Nguyên',    product: 'EA Lục Mạch Thần Kiếm G63', time: '11 giờ 30 phút trước' },
    { name: 'Dũng V.N · TP.HCM',         product: 'Chiến Trường Sinh Tử G63',   time: '12 giờ trước' },
    { name: 'Tuấn T.O · Đà Nẵng',        product: 'Hàn Băng Chưởng G63',        time: '12 giờ 30 phút trước' },
    { name: 'Khoa V.P · Hà Nội',         product: 'Phuong G63 RR',              time: '13 giờ trước' },
    { name: 'Nam T.Q · Quảng Nam',       product: 'Chiến Trường Sinh Tử G63',   time: '13 giờ 30 phút trước' },
    { name: 'Đức V.R · TP.HCM',          product: 'Đại Bản Doanh G63 V8',       time: '14 giờ trước' },
    { name: 'Thắng T.S · Hải Dương',     product: 'EA Lục Mạch Thần Kiếm G63', time: '14 giờ 30 phút trước' },
    { name: 'Long V.T · Bình Phước',     product: 'Chiến Trường Sinh Tử G63',   time: '15 giờ trước' },
    { name: 'Phong T.U · Hà Nội',        product: 'Hàn Băng Chưởng G63',        time: '15 giờ 30 phút trước' },
    { name: 'Quang V.V · TP.HCM',        product: 'Phuong G63 RR',              time: '16 giờ trước' },
    { name: 'Sang T.W · Tây Ninh',       product: 'Chiến Trường Sinh Tử G63',   time: '16 giờ 30 phút trước' },
    { name: 'Tài V.X · Hà Nội',          product: 'Đại Bản Doanh G63 V8',       time: '17 giờ trước' },
    { name: 'Toàn T.Y · Lâm Đồng',      product: 'EA Lục Mạch Thần Kiếm G63', time: '17 giờ 30 phút trước' },
    { name: 'Trung V.Z · TP.HCM',        product: 'Chiến Trường Sinh Tử G63',   time: '18 giờ trước' },
    { name: 'Việt T.A · Hà Nội',         product: 'Hàn Băng Chưởng G63',        time: '18 giờ 30 phút trước' },
    { name: 'Xuân V.B · Đồng Tháp',      product: 'Phuong G63 RR',              time: '19 giờ trước' },
    { name: 'Yên T.C · TP.HCM',          product: 'Chiến Trường Sinh Tử G63',   time: '19 giờ 30 phút trước' },
    { name: 'An V.D · Bến Tre',          product: 'Đại Bản Doanh G63 V8',       time: '20 giờ trước' },
    { name: 'Bình T.E · Hà Nội',         product: 'EA Lục Mạch Thần Kiếm G63', time: '20 giờ 30 phút trước' },
    { name: 'Công V.F · Hà Nam',         product: 'Chiến Trường Sinh Tử G63',   time: '21 giờ trước' },
    { name: 'Danh T.G · TP.HCM',         product: 'Hàn Băng Chưởng G63',        time: '21 giờ 30 phút trước' },
    { name: 'Em V.H · Vĩnh Long',        product: 'Phuong G63 RR',              time: '22 giờ trước' },
    { name: 'Phúc T.I · Hà Nội',         product: 'Chiến Trường Sinh Tử G63',   time: '22 giờ 30 phút trước' },
    { name: 'Giang V.J · An Giang',      product: 'Đại Bản Doanh G63 V8',       time: '23 giờ trước' },
    { name: 'Hiếu T.K · TP.HCM',         product: 'EA Lục Mạch Thần Kiếm G63', time: '23 giờ 30 phút trước' },
  ];

  let idx = Math.floor(Math.random() * buyers.length);

  function showNext() {
    const popup = document.getElementById('sp-popup');
    if (!popup) return;
    const b = buyers[idx % buyers.length];
    document.getElementById('sp-name').textContent = b.name;
    document.getElementById('sp-product').textContent = '🛒 Vừa mua ' + b.product;
    document.getElementById('sp-time').textContent = '⏱ ' + b.time;
    popup.style.display = 'block';
    popup.style.animation = 'none';
    void popup.offsetWidth;
    popup.style.animation = 'spIn .4s ease';
    idx++;
    setTimeout(() => { if (popup) popup.style.display = 'none'; }, 10000);
  }

  // Popup đầu tiên sau 10 giây, sau đó mỗi 1 phút
  setTimeout(() => {
    showNext();
    setInterval(showNext, 60000);
  }, 10000);
})();
