/*
  PHƯƠNG G63 - DANH SÁCH SẢN PHẨM
  Khi có EA mới: copy 1 khối sản phẩm bên dưới, đổi tên, giá, mô tả, ảnh.
*/
const PRODUCTS = [
  {
    id: 'dai-ban-doanh-g63-v8',
    name: 'ĐẠI BẢN DOANH G63 V8',
    category: 'Dashboard MT5',
    badge: 'Sản phẩm chủ lực',
    price: 999000,
    priceText: '999.000đ',
    short: 'Dashboard quản lý lệnh MT5 chuyên nghiệp: kéo thả, thu gọn, âm thanh, đóng lệnh nhanh và theo dõi PnL realtime.',
    description: 'ĐẠI BẢN DOANH G63 V8 là bảng điều khiển quản lý lệnh cao cấp dành cho MetaTrader 5. Công cụ giúp trader theo dõi toàn bộ trạng thái tài khoản, quản lý nhiều cặp giao dịch và xử lý lệnh nhanh trong một giao diện duy nhất.',
    images: {
      hero: 'assets/images/web-preview.png',
      poster: 'assets/images/poster-luc-mach.png',
      dashboard: 'assets/images/dashboard-luc-mach.png',
      setting: 'assets/images/input-luc-mach.png'
    },
    features: [
      'Quản lý nhiều Symbol cùng lúc: XAUUSD, BTCUSD, EURUSD, GBPUSD, USDJPY...',
      'Theo dõi Balance, Equity, lợi nhuận hôm nay và Floating PnL realtime',
      'Đóng BUY, đóng SELL, xóa toàn bộ lệnh từng cặp hoặc toàn tài khoản',
      'Giao diện kéo thả, thu gọn/mở rộng, hiệu ứng LED và âm thanh nút bấm',
      'Tính toán Profit, Swap, Commission và Net Profit trực quan',
      'Phù hợp trader giao dịch nhiều cặp, scalping, vàng, forex và crypto'
    ],
    install: [
      'Nhận file EX5 sau khi Phương G63 xác nhận thanh toán.',
      'Mở MT5 → File → Open Data Folder.',
      'Vào thư mục MQL5 → Experts.',
      'Copy file EX5 vào thư mục Experts.',
      'Khởi động lại MT5 và kéo Dashboard lên chart.',
      'Bật Algo Trading và kiểm tra bảng điều khiển hiển thị đúng.'
    ]
  },
  {
    id: 'luc-mach-than-kiem-g63',
    name: 'EA LỤC MẠCH THẦN KIẾM G63',
    category: 'EA Premium',
    badge: 'EA cao cấp',
    price: 1600000,
    priceText: '1.600.000đ',
    short: 'EA Grid nhiều giai đoạn, TP đơn, TP gộp, hỗ trợ đa tài sản, Dashboard Cyberpunk và quản lý Magic Number.',
    description: 'EA LỤC MẠCH THẦN KIẾM G63 được xây dựng theo phong cách Premium Cyberpunk, có bảng điều khiển trực quan, quản lý Grid nhiều giai đoạn và hỗ trợ nhiều loại tài sản.',
    images: {
      hero: 'assets/images/hero-luc-mach.png',
      poster: 'assets/images/poster-luc-mach.png',
      dashboard: 'assets/images/dashboard-luc-mach.png',
      setting: 'assets/images/input-luc-mach.png'
    },
    features: [
      'Grid thông minh nhiều giai đoạn',
      'TP đơn và TP gộp linh hoạt',
      'Hỗ trợ XAUUSD, BTC, XAGUSD, Forex USD, Forex JPY',
      'Dashboard kéo thả, theo dõi Balance, Equity, Profit',
      'Nút đóng toàn bộ, đóng Buy, đóng Sell',
      'Quản lý Magic Number, mục tiêu ngày và tuần'
    ],
    install: [
      'Nhận file EA EX5 sau khi xác nhận thanh toán.',
      'Mở MT5 → File → Open Data Folder.',
      'Vào MQL5 → Experts và copy file EA vào đó.',
      'Khởi động lại MT5.',
      'Kéo EA vào biểu đồ đúng Symbol.',
      'Kiểm tra thông số đầu vào và bật Algo Trading.'
    ]
  },
  {
    id: 'ea-moi-template',
    name: 'EA TIẾP THEO',
    category: 'Đang cập nhật',
    badge: 'Sắp thêm',
    price: 0,
    priceText: 'Liên hệ',
    short: 'Bố gửi thêm code EA, con sẽ đọc chức năng và tạo trang giới thiệu riêng cho sản phẩm mới.',
    description: 'Sản phẩm đang được cập nhật trong hệ sinh thái Phương G63.',
    images: {
      hero: 'assets/images/brand-banner.png',
      poster: 'assets/images/brand-banner.png',
      dashboard: 'assets/images/web-preview.png',
      setting: 'assets/images/input-luc-mach.png'
    },
    features: ['Trang sản phẩm riêng', 'Ảnh giới thiệu', 'Thanh toán QR', 'Hướng dẫn cài đặt'],
    install: ['Đang cập nhật']
  }
];
