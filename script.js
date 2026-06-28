const bankId = '970415';
const accountNo = '888889060666';
const accountName = 'NGUYEN HOANG PHUONG';
const zaloUrl = 'https://zalo.me/84822299993';
let currentProduct = PRODUCTS[0];

function moneyNote(str){return encodeURIComponent(str.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D'));}
function qrUrl(product){return `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png?amount=${product.price}&addInfo=${moneyNote(product.name)}&accountName=${accountName}`;}
function renderProducts(){
  const grid=document.getElementById('productGrid');
  grid.innerHTML=PRODUCTS.map((p,i)=>`<article class="product-card reveal" data-id="${p.id}"><img src="${p.image}" alt="${p.name}"><div class="product-body"><span class="badge">${p.badge}</span><div class="category">${p.category}</div><h3>${p.name}</h3><p>${p.short}</p><div class="price-row"><span class="price">${p.priceText}</span><button class="btn btn-gold" onclick="openCheckoutById('${p.id}')">Mua ngay</button></div><button class="btn btn-blue" onclick="selectProduct('${p.id}')">Xem chi tiết</button></div></article>`).join('');
  observeReveal();
}
function selectProduct(id){
  currentProduct = PRODUCTS.find(p=>p.id===id) || PRODUCTS[0];
  renderDetail(currentProduct);
  document.getElementById('details').scrollIntoView({behavior:'smooth'});
}
function renderDetail(p){
  const box=document.getElementById('detailBox');
  const thumbs=p.images.map((img,i)=>`<img src="${img}" class="${i===0?'active':''}" onclick="setMainImage('${img}',this)" alt="${p.name} ảnh ${i+1}">`).join('');
  const warning = p.warning ? `<div class="warning-box">⚠️ ${p.warning}</div>` : '';
  const install = p.install ? `<h4>Hướng dẫn nhận & cài đặt</h4><ul class="install-list">${p.install.map(x=>`<li>➜ ${x}</li>`).join('')}</ul>` : '';
  const lore = p.id==='chien-truong-sinh-tu-g63' ? `<div class="lore-box"><h4>👑 Cốt truyện sản phẩm</h4><p>Thiên hạ chia ba. Mỗi phiên giao dịch là một trận sa trường. Trader không mua một lời cam kết lợi nhuận, mà bước vào một hành trình Tam Quốc: chiếm thành, mở tướng, thu báu vật, hạ Boss và tự thử thách bản lĩnh của chính mình.</p></div>` : '';
  box.innerHTML=`<div class="detail-layout"><div><div class="gallery-main"><img id="mainGallery" src="${p.images[0]}" alt="${p.name}"></div><div class="thumbs">${thumbs}</div>${lore}</div><div class="detail-copy"><span class="badge">${p.badge}</span><h3>${p.name}</h3><p>${p.description}</p>${warning}<div class="price">${p.priceText}</div><ul class="feature-list">${p.features.map(f=>`<li>✅ ${f}</li>`).join('')}</ul>${install}<div class="modal-actions"><button class="btn btn-gold" onclick="openCheckoutById('${p.id}')">Mua ngay</button><a class="btn btn-blue" href="${zaloUrl}">Hỏi Zalo</a></div></div></div>`;
}
function setMainImage(src,el){document.getElementById('mainGallery').src=src;document.querySelectorAll('.thumbs img').forEach(i=>i.classList.remove('active'));el.classList.add('active');}
function openCheckoutById(id){openCheckout(PRODUCTS.find(p=>p.id===id)||PRODUCTS[0]);}
function openCheckout(p){
  document.getElementById('payName').innerText=p.name;
  document.getElementById('payPrice').innerText=p.priceText;
  document.getElementById('payNote').innerText=p.name;
  document.getElementById('payQr').src=qrUrl(p);
  document.getElementById('paidNotice').style.display='none';
  document.getElementById('checkout').style.display='flex';
}
function closeCheckout(){document.getElementById('checkout').style.display='none';}
function showPaidNotice(){document.getElementById('paidNotice').style.display='block';}
function observeReveal(){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
function heroSlider(){
  const imgs=[...new Set(PRODUCTS.flatMap(p=>p.images))];let i=0;const el=document.getElementById('heroSlide');
  setInterval(()=>{i=(i+1)%imgs.length;el.src=imgs[i];},3600);
}
document.addEventListener('DOMContentLoaded',()=>{renderProducts();renderDetail(PRODUCTS[0]);observeReveal();heroSlider();document.querySelector('[data-buy-first]')?.addEventListener('click',()=>openCheckout(PRODUCTS[0]));});
