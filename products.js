/* =====================================================
   PHƯƠNG G63 - PRODUCTS.JS
   Bố muốn thêm EA mới: chỉ cần copy 1 khối sản phẩm,
   đổi id, tên, giá, mô tả, ảnh, tính năng.
   Ảnh đặt trong: assets/images/
===================================================== */
const PRODUCTS = [

  {
    id: 'chien-truong-sinh-tu-g63',
    name: 'CHIẾN TRƯỜNG SINH TỬ G63',
    category: 'EA Top Khủng Tam Quốc',
    badge: 'TOP KHỦNG',
    price: 19999000,
    priceText: '19.999.000đ',
    rating: 'Collector Edition',
    image: 'assets/images/chien-truong-sinh-tu-poster.png',
    images: [
      'assets/images/chien-truong-sinh-tu-poster.png',
      'assets/images/chien-truong-sinh-tu-dashboard.png',
      'assets/images/chien-truong-sinh-tu-input.png',
      'assets/images/chien-truong-sinh-tu-gallery.png'
    ],
    short: 'EA Vương Quốc Tam Quốc biến mỗi phiên giao dịch thành một chiến trường sinh tử: không cam kết lợi nhuận, không dành cho người mới, chỉ dành cho đại gia đam mê Tam Quốc và thích thử thách thật sự.',
    description: 'CHIẾN TRƯỜNG SINH TỬ G63 là phiên bản EA Top Khủng mang phong cách Tam Quốc độc quyền của Phương G63. Sản phẩm không được định vị là một công cụ hứa hẹn lợi nhuận, mà là một trải nghiệm giao dịch cực kỳ khác biệt: mỗi lot là binh sĩ, mỗi mốc thành tích là thành trì, mỗi mục tiêu tuần/tháng là Boss đại chiến, mỗi phiên giao dịch là một trận sa trường. EA không dành cho người mới, không dành cho người muốn mua để mong an toàn tuyệt đối. Đây là sản phẩm dành cho người có vốn, có bản lĩnh, có chiến lược riêng và thật sự đam mê Tam Quốc Chí.',
    features: [
      'Bản đồ Tam Quốc 30 thành trì: Thục, Ngô, Ngụy – chiếm dần theo mốc lợi nhuận và lot tích lũy',
      'Hệ thống Vương Quốc: ngân khố, đại quân, quốc lực, quân lương, lịch sử vương triều',
      'Túi đồ 50 báu vật: chia nhiều nhóm, có cơ chế thăng sao và tiến hóa báu vật',
      '20 tướng Tam Quốc mở khóa theo tổng lot 365 ngày, có phẩm cấp sao và trang bị riêng',
      '7 thần thú trấn giữ theo mục tiêu ngày: Tỳ Hưu, Kỳ Lân, Bạch Hổ, Huyền Vũ, Chu Tước, Thanh Long, Ứng Long',
      'Boss tuần Quan Độ Chi Chiến và Boss tháng Đại Chiến Xích Bích',
      'Thiên mệnh hằng ngày, nhiệm vụ ngày, sử ký, chuỗi chiến thắng và phục thù',
      'Lô Fibonacci thưởng đặc biệt khi đóng toàn bộ lệnh với số lệnh thuộc 1/2/3/5/8',
      'Quản lý lệnh chuyên nghiệp: TP gộp, dời BE, tỉa lệnh, chốt 50%, trailing EMA, đóng BUY/SELL/toàn tài khoản',
      'Input tiếng Việt 100%, giao diện đại vương quốc đồ sộ, phong cách Tam Quốc – chiến trường – quốc chiến'
    ],
    install: [
      'Sản phẩm chỉ nên dùng bởi trader có kinh nghiệm, hiểu rõ rủi ro và có chiến lược giao dịch riêng',
      'Sau khi thanh toán và xác nhận qua Zalo, Phương G63 gửi file EX5 cùng hướng dẫn cài đặt',
      'Mở MT5 → File → Open Data Folder → MQL5 → Experts',
      'Copy file CHIEN_TRUONG_SINH_TU vào thư mục Experts rồi khởi động lại MT5',
      'Kéo EA vào chart phù hợp: XAU, XAG hoặc BTC theo chế độ tài sản đã chọn',
      'Cài Magic Number, mục tiêu chốt lãi, dời hòa vốn, mục tiêu ngày/tuần/tháng, EMA và các mốc Tam Quốc',
      'Bật Algo Trading. Trader tự chịu trách nhiệm chiến lược; EA phục vụ phần quản lý và trải nghiệm chiến trường'
    ],
    warning: 'Không cam kết lợi nhuận. Không dành cho người mới. Không nên mua nếu chưa có chiến lược, chưa hiểu quản trị vốn hoặc mong EA tự làm giàu. Đây là sản phẩm trải nghiệm đỉnh cao dành cho người có bản lĩnh và đam mê Tam Quốc.'
  },


  {
    id: 'han-bang-chuong-g63',
    name: 'HÀN BĂNG CHƯỞNG G63',
    category: 'Manual Trading Cockpit',
    badge: 'NEW PREMIUM',
    price: 1400000,
    priceText: '1.400.000đ',
    rating: '5.0',
    image: 'assets/images/han-bang-chuong-poster.png',
    images: ['assets/images/han-bang-chuong-poster.png','assets/images/han-bang-chuong-dashboard.png','assets/images/han-bang-chuong-input.png'],
    short: 'Premium Manual Trading Cockpit dành cho trader đã có chiến lược: bạn quyết định Buy/Sell, EA xử lý toàn bộ quản trị còn lại.',
    description: 'HÀN BĂNG CHƯỞNG G63 không phải robot tự vào lệnh. Đây là cockpit hỗ trợ đánh tay chuyên nghiệp, dành cho trader nhiều kinh nghiệm, đặc biệt khi cần thao tác nhanh trong các phiên tin mạnh, giật lag. Trader là người quyết định điểm vào lệnh; EA phục vụ phần quản trị: rải lệnh, TP gộp, dời BE, chốt 50%, quản lý PnL, Margin và đóng lệnh nhanh.',
    features: [
      'Không tự Buy/Sell, không tìm tín hiệu, không thay thế chiến lược của trader',
      'Dành cho trader đã có chiến lược rõ ràng và kinh nghiệm thực chiến từ 5 năm trở lên',
      'Hỗ trợ đánh tin, thị trường chạy nhanh, cần thao tác nhanh và giảm sai sót',
      'Dashboard Cyberpunk kéo thả, trực quan, quản lý Buy/Sell trong một bảng duy nhất',
      'Tự động rải Buy Limit / Sell Limit theo thông số sau khi trader đã vào lệnh',
      'TP gộp theo trung bình giá, dời Break Even một chạm và chốt 50% lệnh lời',
      'Theo dõi Balance, Equity, Margin, Floating PnL, mục tiêu ngày và mục tiêu tuần',
      'Hỗ trợ XAUUSD, BTCUSD, Forex, XAGUSD, USDJPY theo quy ước giá riêng'
    ],
    install: [
      'Nhận file EX5 sau khi xác nhận thanh toán qua Zalo',
      'Mở MT5 → File → Open Data Folder',
      'Vào MQL5 → Experts và copy file EX5 vào thư mục Experts',
      'Khởi động lại MT5',
      'Kéo HÀN BĂNG CHƯỞNG G63 vào chart muốn giao dịch',
      'Cài Magic Number, quy ước giá, TP gộp, BE, số lệnh Limit và mục tiêu ngày/tuần',
      'Bật Algo Trading, sau đó trader tự quyết định Buy/Sell theo chiến lược của mình'
    ]
  },
  {
    id: 'dai-ban-doanh-g63-v8',
    name: 'ĐẠI BẢN DOANH G63 V8',
    category: 'Dashboard MT5',
    badge: 'BEST SELLER',
    price: 999000,
    priceText: '999.000đ',
    rating: '5.0',
    image: 'assets/images/web-preview.png',
    images: ['assets/images/web-preview.png','assets/images/dashboard-luc-mach.png','assets/images/input-luc-mach.png'],
    short: 'Dashboard quản lý lệnh MT5 chuyên nghiệp: kéo thả, thu gọn, âm thanh, đóng lệnh nhanh và theo dõi PnL realtime.',
    description: 'ĐẠI BẢN DOANH G63 V8 là bảng điều khiển quản lý lệnh cao cấp dành cho MetaTrader 5. Công cụ giúp trader theo dõi trạng thái tài khoản, quản lý nhiều cặp giao dịch và xử lý lệnh nhanh trong một giao diện duy nhất.',
    features: [
      'Quản lý nhiều Symbol cùng lúc: XAUUSD, BTCUSD, EURUSD, GBPUSD, USDJPY',
      'Theo dõi Balance, Equity, lợi nhuận hôm nay và Floating PnL realtime',
      'Đóng BUY, đóng SELL, xóa toàn bộ lệnh từng cặp hoặc toàn tài khoản',
      'Giao diện kéo thả, thu gọn/mở rộng, hiệu ứng LED và âm thanh nút bấm',
      'Tính toán Profit, Swap, Commission và Net Profit trực quan',
      'Phù hợp trader giao dịch nhiều cặp, scalping, vàng, forex và crypto'
    ],
    install: ['Nhận file EX5 sau khi xác nhận thanh toán','Mở MT5 → File → Open Data Folder','Vào MQL5 → Experts','Copy file EX5 vào Experts','Khởi động lại MT5 và kéo Dashboard lên chart','Bật Algo Trading và kiểm tra bảng điều khiển']
  },
  {
    id: 'luc-mach-than-kiem-g63',
    name: 'EA LỤC MẠCH THẦN KIẾM G63',
    category: 'EA Premium',
    badge: 'PREMIUM',
    price: 1600000,
    priceText: '1.600.000đ',
    rating: '5.0',
    image: 'assets/images/poster-luc-mach.png',
    images: ['assets/images/poster-luc-mach.png','assets/images/hero-luc-mach.png','assets/images/dashboard-luc-mach.png','assets/images/input-luc-mach.png'],
    short: 'EA Grid nhiều giai đoạn, TP đơn, TP gộp, hỗ trợ đa tài sản, Dashboard Cyberpunk và quản lý Magic Number.',
    description: 'EA LỤC MẠCH THẦN KIẾM G63 được xây dựng theo phong cách Premium Cyberpunk, có bảng điều khiển trực quan, quản lý Grid nhiều giai đoạn và hỗ trợ nhiều loại tài sản.',
    features: ['Grid thông minh nhiều giai đoạn','TP đơn và TP gộp linh hoạt','Hỗ trợ XAUUSD, BTC, XAGUSD, Forex USD, Forex JPY','Dashboard kéo thả, theo dõi Balance, Equity, Profit','Nút đóng toàn bộ, đóng Buy, đóng Sell','Quản lý Magic Number, mục tiêu ngày và tuần'],
    install: ['Nhận file EA EX5 sau khi xác nhận thanh toán','Mở MT5 → File → Open Data Folder','Vào MQL5 → Experts và copy file EA vào đó','Khởi động lại MT5','Kéo EA vào biểu đồ đúng Symbol','Kiểm tra thông số đầu vào và bật Algo Trading']
  },
  {
    id: 'ea-huyen-vu-g63',
    name: 'EA HUYỀN VŨ G63',
    category: 'Sắp cập nhật',
    badge: 'COMING SOON',
    price: 1400000,
    priceText: '1.400.000đ',
    rating: 'Đang cập nhật',
    image: 'assets/images/brand-banner.png',
    images: ['assets/images/brand-banner.png','assets/images/web-preview.png'],
    short: 'Mẫu sản phẩm tiếp theo trong hệ sinh thái Phương G63. Bố gửi code EA, con sẽ hoàn thiện trang riêng.',
    description: 'Sản phẩm đang được chuẩn bị nội dung, hình ảnh và tính năng chi tiết.',
    features: ['Trang sản phẩm riêng','Ảnh giới thiệu riêng','Nút thanh toán QR riêng','Hướng dẫn cài đặt riêng'],
    install: ['Đang cập nhật']
  }
];
