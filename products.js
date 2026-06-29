/* =====================================================
   PHƯƠNG G63 ENTERPRISE V18 - PRODUCTS.JS
   Thêm EA mới: copy 1 khối sản phẩm, đổi thông tin và ảnh.
   Ảnh đặt trong: assets/images/
===================================================== */
const PRODUCTS = [
  {
    id: 'chien-truong-sinh-tu-g63',
    name: 'CHIẾN TRƯỜNG SINH TỬ G63',
    category: 'EA Top Khủng Tam Quốc', categoryKey:'tamquoc',
    badge: 'TOP KHỦNG', price: 19999000, priceText: '19.999.000đ', rating: 'Collector Edition',
    image: 'assets/images/chien-truong-sinh-tu-poster.png',
    images: ['assets/images/chien-truong-sinh-tu-poster.png','assets/images/chien-truong-sinh-tu-dashboard.png','assets/images/chien-truong-sinh-tu-input.png','assets/images/chien-truong-sinh-tu-gallery.png'],
    tags:['Tam Quốc','Top khủng','Trải nghiệm','Dashboard','Quốc chiến'],
    short: 'EA Vương Quốc Tam Quốc biến mỗi phiên giao dịch thành một chiến trường sinh tử. Không cam kết lợi nhuận, không dành cho người mới.',
    description: 'CHIẾN TRƯỜNG SINH TỬ G63 là phiên bản EA Top Khủng mang phong cách Tam Quốc độc quyền của Phương G63. Sản phẩm không được định vị là công cụ hứa hẹn lợi nhuận, mà là một trải nghiệm giao dịch khác biệt: mỗi lot là binh sĩ, mỗi mốc thành tích là thành trì, mỗi mục tiêu tuần/tháng là Boss đại chiến, mỗi phiên giao dịch là một trận sa trường.',
    features: ['Bản đồ Tam Quốc 30 thành trì: Thục, Ngô, Ngụy','Hệ thống Vương Quốc: ngân khố, đại quân, quốc lực, quân lương','Túi đồ 50 báu vật, thăng sao và tiến hóa','20 tướng Tam Quốc mở khóa theo tổng lot 365 ngày','7 thần thú trấn giữ theo mục tiêu ngày','Boss tuần Quan Độ và Boss tháng Xích Bích','Thiên mệnh hằng ngày, nhiệm vụ ngày, sử ký, chuỗi chiến thắng','Quản lý lệnh: TP gộp, dời BE, tỉa lệnh, chốt 50%, trailing EMA'],
    install: ['Chỉ nên dùng bởi trader có kinh nghiệm và hiểu rõ rủi ro','Nhận file EX5 sau khi xác nhận thanh toán','Copy file vào MQL5 → Experts','Khởi động lại MT5 và kéo EA lên chart','Cài Magic, tài sản, TP, BE, EMA, tỉa lệnh và mục tiêu','Trader tự chịu trách nhiệm chiến lược; EA phục vụ phần quản lý và trải nghiệm chiến trường'],
    faq:[['EA này có cam kết lợi nhuận không?','Không. Đây là sản phẩm trải nghiệm Tam Quốc và công cụ quản lý giao dịch, không phải lời hứa lợi nhuận.'],['Người mới có nên mua không?','Không nên. Sản phẩm dành cho người có vốn, có chiến lược và hiểu rủi ro.'],['Vì sao giá cao?','Đây là phiên bản Collector / Top Khủng với hệ thống giao diện, gamification và trải nghiệm rất khác biệt.']],
    warning:'Không cam kết lợi nhuận. Không dành cho người mới. Không nên mua nếu chưa có chiến lược, chưa hiểu quản trị vốn hoặc mong EA tự làm giàu.',
    videoTitle:'', videoText:''
  },
  {
    id: 'han-bang-chuong-g63', name: 'HÀN BĂNG CHƯỞNG G63', category: 'Manual Trading Cockpit', categoryKey:'manual', badge:'NEW PREMIUM', price:1400000, priceText:'1.400.000đ', rating:'5.0',
    image:'assets/images/han-bang-chuong-poster.png', images:['assets/images/han-bang-chuong-poster.png','assets/images/han-bang-chuong-dashboard.png','assets/images/han-bang-chuong-input.png'],
    tags:['Đánh tay','Tin tức','Cockpit','BE','TP gộp'],
    short:'Premium Manual Trading Cockpit: trader quyết định Buy/Sell, EA xử lý toàn bộ quản trị còn lại.',
    description:'HÀN BĂNG CHƯỞNG G63 không phải robot tự vào lệnh. Đây là cockpit hỗ trợ đánh tay chuyên nghiệp, dành cho trader nhiều kinh nghiệm, đặc biệt khi cần thao tác nhanh trong các phiên tin mạnh, giật lag.',
    features:['Không tự Buy/Sell, không tìm tín hiệu, không thay thế chiến lược','Dành cho trader đã có chiến lược rõ ràng','Hỗ trợ đánh tin, thị trường chạy nhanh','Dashboard Cyberpunk kéo thả','Tự động rải Buy Limit / Sell Limit sau khi trader đã vào lệnh','TP gộp, dời BE một chạm, chốt 50%','Theo dõi Balance, Equity, Margin, Floating PnL','Hỗ trợ XAUUSD, BTCUSD, Forex, XAGUSD, USDJPY'],
    install:['Nhận file EX5 sau khi xác nhận thanh toán','Copy vào MQL5 → Experts','Restart MT5','Kéo EA vào chart','Cài Magic Number, quy ước giá, TP gộp, BE','Bật Algo Trading và trader tự quyết định Buy/Sell'],
    faq:[['EA có tự vào lệnh không?','Không. Trader là người quyết định, EA chỉ phục vụ quản trị sau đó.'],['Có phù hợp người mới không?','Không nên. Bố định vị cho trader kinh nghiệm cao.']],
    videoTitle:'', videoText:''
  },
  {
    id: 'dai-ban-doanh-g63-v8', name:'ĐẠI BẢN DOANH G63 V8', category:'Dashboard MT5', categoryKey:'dashboard', badge:'BEST SELLER', price:999000, priceText:'999.000đ', rating:'5.0',
    image:'assets/images/web-preview.png', images:['assets/images/web-preview.png','assets/images/dashboard-luc-mach.png','assets/images/input-luc-mach.png'], tags:['Dashboard','Quản lý lệnh','Multi Symbol'],
    short:'Dashboard quản lý lệnh MT5 chuyên nghiệp: kéo thả, thu gọn, âm thanh, đóng lệnh nhanh và PnL realtime.',
    description:'ĐẠI BẢN DOANH G63 V8 là bảng điều khiển quản lý lệnh cao cấp dành cho MetaTrader 5. Công cụ giúp trader theo dõi tài khoản, quản lý nhiều cặp và xử lý lệnh nhanh trong một giao diện duy nhất.',
    features:['Quản lý nhiều Symbol cùng lúc','Theo dõi Balance, Equity, lợi nhuận hôm nay, Floating PnL','Đóng BUY, SELL, từng cặp hoặc toàn tài khoản','Giao diện kéo thả, thu gọn/mở rộng, LED và âm thanh','Tính Profit, Swap, Commission và Net Profit','Phù hợp trader giao dịch nhiều cặp, scalping, vàng, forex, crypto'],
    install:['Nhận file EX5','Mở MT5 → File → Open Data Folder','Vào MQL5 → Experts','Copy EX5 vào Experts','Restart MT5 và kéo Dashboard lên chart','Bật Algo Trading'],
    faq:[['Dashboard có tự giao dịch không?','Không. Đây là bảng quản lý lệnh và tài khoản.'],['Giá bao nhiêu?','999.000đ.']],
    videoTitle:'', videoText:''
  },
  {
    id:'luc-mach-than-kiem-g63', name:'EA LỤC MẠCH THẦN KIẾM G63', category:'EA Premium', categoryKey:'ea', badge:'PREMIUM', price:1600000, priceText:'1.600.000đ', rating:'5.0',
    image:'assets/images/poster-luc-mach.png', images:['assets/images/poster-luc-mach.png','assets/images/hero-luc-mach.png','assets/images/dashboard-luc-mach.png','assets/images/input-luc-mach.png'], tags:['Grid','TP gộp','EA Premium'],
    short:'EA Grid nhiều giai đoạn, TP đơn, TP gộp, đa tài sản, Dashboard Cyberpunk và Magic Number.',
    description:'EA LỤC MẠCH THẦN KIẾM G63 được xây dựng theo phong cách Premium Cyberpunk, có bảng điều khiển trực quan, quản lý Grid nhiều giai đoạn và hỗ trợ nhiều loại tài sản.',
    features:['Grid nhiều giai đoạn','TP đơn và TP gộp','Hỗ trợ XAUUSD, BTC, XAGUSD, Forex USD, Forex JPY','Dashboard kéo thả','Nút đóng toàn bộ, đóng Buy, đóng Sell','Quản lý Magic Number, mục tiêu ngày và tuần'],
    install:['Nhận file EX5','Copy vào MQL5 → Experts','Restart MT5','Kéo EA vào biểu đồ đúng Symbol','Kiểm tra thông số đầu vào và bật Algo Trading'],
    faq:[['EA dùng nền tảng nào?','MetaTrader 5.'],['Có ảnh hướng dẫn không?','Có thể bổ sung trong gallery và docs.']],
    videoTitle:'', videoText:''
  },
  {
    id:'ea-huyen-vu-g63', name:'EA HUYỀN VŨ G63', category:'Sắp cập nhật', categoryKey:'coming', badge:'COMING SOON', price:1400000, priceText:'1.400.000đ', rating:'Đang cập nhật',
    image:'assets/images/brand-banner.png', images:['assets/images/brand-banner.png','assets/images/web-preview.png'], tags:['Sắp cập nhật'], short:'Mẫu sản phẩm tiếp theo trong hệ sinh thái Phương G63.',
    description:'Sản phẩm đang được chuẩn bị nội dung, hình ảnh và tính năng chi tiết.', features:['Trang sản phẩm riêng','Ảnh giới thiệu riêng','Nút thanh toán QR riêng','Hướng dẫn cài đặt riêng'], install:['Đang cập nhật'], faq:[['Khi nào ra mắt?','Bố gửi code, ảnh và giá, con sẽ đưa lên website.']], videoTitle:'', videoText:''
  }
];

const UPDATES = [
  {version:'V18 SEO Product Pages + Trust Center', date:'29/06/2026', text:'Tự sinh trang SEO riêng cho từng sản phẩm, thêm Trust Center, hướng dẫn sau mua, checklist upload GitHub và tối ưu mobile cho khách xem bằng điện thoại.'},
  {version:'V17 License & Receipt Center', date:'Trước đó', text:'Thêm khu gửi biên lai qua Zalo, License Preview, checklist trước khi mua, Customer Center mô phỏng và đồng bộ nội dung V17.'},
  {version:'V16 SEO + Sales', date:'Trước đó', text:'Thêm SEO meta, chính sách sử dụng, form đặt mua qua Zalo, trung tâm video hướng dẫn và tăng độ tin cậy trước khi mua tên miền.'},
  {version:'V15 Enterprise', date:'Trước đó', text:'Thêm tìm kiếm, bộ lọc, so sánh sản phẩm, Academy, Patch Notes, Customer Center và hệ thống thêm EA dễ mở rộng.'},
  {version:'V14 Thương Hiệu', date:'Trước đó', text:'Nâng cấp giao diện thương hiệu Phương G63, thêm định vị thương hiệu và trang Chiến Trường Sinh Tử.'},
  {version:'V12 Hàn Băng Chưởng', date:'Trước đó', text:'Thêm sản phẩm Hàn Băng Chưởng G63, định vị cockpit đánh tay chuyên nghiệp.'},
  {version:'V11 Ultimate', date:'Trước đó', text:'Chuẩn hóa sản phẩm, QR thanh toán, gallery và trang chi tiết.'}
];
