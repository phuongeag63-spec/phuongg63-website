/* =====================================================
   PHƯƠNG G63 - PRODUCTS.JS
   Bố muốn thêm EA mới: chỉ cần copy 1 khối sản phẩm,
   đổi id, tên, giá, mô tả, ảnh, tính năng.
   Ảnh đặt trong: assets/images/
===================================================== */
const PRODUCTS = [

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
