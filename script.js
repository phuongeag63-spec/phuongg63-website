// ============================================================
// BỐ MUỐN THÊM EA MỚI: CHỈ CẦN COPY 1 KHỐI SẢN PHẨM BÊN DƯỚI
// 1) Upload ảnh vào assets/images/
// 2) Thêm sản phẩm vào danh sách products
// 3) Commit changes là xong
// ============================================================

const bank = {
  bankCode: '970415', // VietinBank
  account: '888889060666',
  accountName: 'NGUYEN HOANG PHUONG',
  zalo: '84822299993'
};

const products = [
  {
    id: 'dai-ban-doanh-g63-v8',
    name: 'ĐẠI BẢN DOANH G63 V8',
    shortName: 'Dashboard G63 V8',
    type: 'Dashboard MT5',
    price: 999000,
    priceText: '999.000đ',
    badge: 'Sản phẩm chủ lực',
    cover: 'assets/images/dashboard-luc-mach.png',
    hero: 'assets/images/web-preview.png',
    gallery: [
      'assets/images/dashboard-luc-mach.png',
      'assets/images/input-luc-mach.png',
      'assets/images/web-preview.png'
    ],
    description: 'Dashboard quản lý lệnh MT5 chuyên nghiệp, hỗ trợ trader theo dõi nhiều symbol, quản lý Balance, Equity, Floating PnL và đóng lệnh nhanh trong một giao diện duy nhất.',
    features: [
      'Quản lý nhiều Symbol cùng lúc: XAUUSD, BTCUSD, EURUSD, GBPUSD, USDJPY...',
      'Theo dõi Balance, Equity, lợi nhuận hôm nay và Floating PnL realtime',
      'Đóng BUY, đóng SELL, xóa toàn bộ lệnh từng cặp hoặc toàn tài khoản',
      'Giao diện kéo thả, thu gọn/mở rộng, hiệu ứng LED và âm thanh nút bấm',
      'Tính toán Profit, Swap, Commission và Net Profit trực quan'
    ]
  },
  {
    id: 'ea-luc-mach-than-kiem-g63',
    name: 'EA LỤC MẠCH THẦN KIẾM G63',
    shortName: 'EA Lục Mạch',
    type: 'EA Premium',
    price: 1600000,
    priceText: '1.600.000đ',
    badge: 'EA Premium',
    cover: 'assets/images/poster-luc-mach.png',
    hero: 'assets/images/hero-luc-mach.png',
    gallery: [
      'assets/images/poster-luc-mach.png',
      'assets/images/dashboard-luc-mach.png',
      'assets/images/input-luc-mach.png'
    ],
    description: 'EA Grid nhiều giai đoạn, TP đơn, TP gộp, hỗ trợ đa tài sản, Dashboard Cyberpunk và quản lý Magic Number dành cho trader MT5.',
    features: [
      'Grid thông minh nhiều giai đoạn',
      'TP đơn và TP gộp linh hoạt',
      'Hỗ trợ XAUUSD, BTC, XAGUSD, Forex USD, Forex JPY',
      'Dashboard Cyberpunk theo dõi Balance, Equity, Profit',
      'Quản lý Magic Number, Auto Buy, Auto Sell'
    ]
  },
  {
    id: 'ea-moi',
    name: 'EA TIẾP THEO',
    shortName: 'EA mới',
    type: 'Đang cập nhật',
    price: 0,
    priceText: 'Liên hệ',
    badge: 'Sắp thêm',
    cover: 'assets/images/web-preview.png',
    hero: 'assets/images/web-preview.png',
    gallery: ['assets/images/web-preview.png'],
    description: 'Bố gửi thêm code EA, con sẽ đọc chức năng và tạo trang giới thiệu riêng cho từng sản phẩm.',
    features: ['Đang cập nhật tính năng', 'Đang cập nhật hình ảnh', 'Đang cập nhật giá bán']
  }
];

function vnd(amount){ return Number(amount).toLocaleString('vi-VN') + 'đ'; }
function qrUrl(product){
  const note = encodeURIComponent(product.shortName + ' ' + product.priceText);
  return `https://img.vietqr.io/image/${bank.bankCode}-${bank.account}-compact2.png?amount=${product.price}&addInfo=${note}&accountName=${encodeURIComponent(bank.accountName)}`;
}

function renderProducts(){
  const grid = document.getElementById('productGrid');
  grid.innerHTML = products.map((p, i)=>`
    <article class="product-card ${i===0?'featured':''}">
      <img src="${p.cover}" alt="${p.name}">
      <span class="badge">${p.badge}</span>
      <h3>${p.name}</h3>
      <p class="muted">${p.description}</p>
      <div class="price">${p.priceText}</div>
      <div class="actions"><button class="btn" onclick="openCheckout(products[${i}])">Mua ngay</button><button class="btn outline" onclick="showDetail(products[${i}])">Xem chi tiết</button></div>
    </article>`).join('');
}

function showDetail(p){
  document.getElementById('detailBox').innerHTML = `
    <div class="detail-card">
      <div>
        <span class="badge">${p.type}</span>
        <h2>${p.name}</h2>
        <p class="muted">${p.description}</p>
        <div class="price">${p.priceText}</div>
        <div class="feature-list">${p.features.map(f=>`<div>✅ ${f}</div>`).join('')}</div>
        <div class="actions"><button class="btn" onclick='openCheckout(${JSON.stringify(p)})'>Mua ngay</button><a class="btn outline" href="#guide">Xem hướng dẫn</a></div>
      </div>
      <img src="${p.hero}" alt="${p.name}">
    </div>`;
  renderGallery(p);
  document.getElementById('product-detail').scrollIntoView({behavior:'smooth'});
}

function renderGallery(p){
  document.getElementById('gallery').innerHTML = p.gallery.map((img, idx)=>`
    <div class="gallery-card"><img src="${img}" alt="${p.name} ảnh ${idx+1}"><h3>${idx===0?'Ảnh giới thiệu':idx===1?'Bảng điều khiển':'Bảng cài đặt / Preview'}</h3></div>`).join('');
}

function openCheckout(p){
  if(!p.price){ window.location.href='https://zalo.me/'+bank.zalo; return; }
  document.getElementById('modalName').innerText = p.name;
  document.getElementById('modalPrice').innerText = p.priceText;
  document.getElementById('modalNote').innerText = p.shortName;
  document.getElementById('modalQr').src = qrUrl(p);
  document.getElementById('paidNotice').style.display = 'none';
  document.getElementById('checkoutModal').style.display = 'flex';
}
function closeCheckout(){ document.getElementById('checkoutModal').style.display = 'none'; }

renderProducts();
showDetail(products[0]);
setInterval(()=>{
  const img = document.getElementById('heroImage');
  const pool = products.flatMap(p=>p.gallery);
  const current = pool.indexOf(img.getAttribute('src'));
  img.src = pool[(current + 1) % pool.length];
}, 4500);
