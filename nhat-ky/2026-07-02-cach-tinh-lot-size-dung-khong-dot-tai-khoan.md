---
title: "Cách Tính Lot Size Đúng — Không Bao Giờ Đốt Tài Khoản Nữa"
date: 2026-07-02
category: Kinh nghiệm
image: /assets/images/blog-bai2.png
description: "Lot size không phải con số kỹ thuật. Đó là quyết định tâm lý. Sai lot size là nguyên nhân số 1 trader thua nhanh hơn thua chậm."
---

Lần đầu mình biết đến lot size, mình nghĩ nó là con số kỹ thuật thuần túy.

0.01 lot nhỏ. 0.1 lot vừa. 1.0 lot lớn. Chọn cái nào tuỳ thích.

Mình chọn 0.5 lot cho tài khoản 5 triệu. Không có lý do gì — mình chỉ nghĩ "nghe có vẻ ổn."

Hai tuần sau, tài khoản còn 1.8 triệu.

Không phải vì chiến lược sai. Không phải vì thị trường bất thường. Chỉ vì lot size quá lớn so với vốn.

---

## Lot size là gì và tại sao nó quan trọng

Lot size xác định **bạn đang rủi ro bao nhiêu tiền cho mỗi pip di chuyển**.

Với EURUSD hoặc XAUUSD:
- 0.01 lot = khoảng 0.1 USD/pip
- 0.10 lot = khoảng 1 USD/pip
- 1.00 lot = khoảng 10 USD/pip

Nếu tài khoản bạn có 500 USD và stop loss là 50 pips:
- 0.01 lot → rủi ro 50 × 0.1 = 5 USD (1% tài khoản) ✅
- 0.10 lot → rủi ro 50 × 1 = 50 USD (10% tài khoản) ⚠️
- 1.00 lot → rủi ro 50 × 10 = 500 USD (100% tài khoản) ❌

Con số đó có vẻ rõ ràng khi nhìn trên giấy. Nhưng khi ngồi trước màn hình, nhiều người vẫn chọn lot size quá lớn — vì họ tính theo "tôi muốn kiếm bao nhiêu" thay vì "tôi chịu được mất bao nhiêu."

---

## Quy tắc vàng: Không bao giờ rủi ro hơn 2% tài khoản mỗi lệnh

Đây không phải quy tắc mình tự nghĩ ra. Đây là quy tắc phổ biến nhất trong quản lý vốn chuyên nghiệp — và có lý do rất cụ thể để nó được chấp nhận rộng rãi.

Nếu bạn rủi ro 2% mỗi lệnh, bạn phải thua **50 lệnh liên tiếp** mới mất hết tài khoản.

Thua 50 lệnh liên tiếp? Gần như không thể xảy ra với bất kỳ hệ thống có chiến lược nào.

Nếu bạn rủi ro 10% mỗi lệnh — 10 lệnh thua liên tiếp là xong. Và 10 lệnh thua liên tiếp hoàn toàn có thể xảy ra, kể cả với hệ thống tốt, trong một giai đoạn thị trường xấu.

Rủi ro 2% không có nghĩa là kiếm ít. Nó có nghĩa là bạn còn tồn tại đủ lâu để kiếm được.

---

## Công thức tính lot size đúng

Không phức tạp. Chỉ cần 3 thông số:

1. **Vốn tài khoản** (tính bằng USD hoặc VND quy đổi)
2. **Phần trăm rủi ro tối đa mỗi lệnh** (mình thường dùng 1–2%)
3. **Stop loss của lệnh đó** (tính bằng pips)

**Công thức:**

```
Số tiền rủi ro = Vốn × % rủi ro
Lot size = Số tiền rủi ro ÷ (Stop loss pips × Pip value)
```

**Ví dụ thực tế:**

Tài khoản: 10,000,000 VND ≈ 400 USD
Rủi ro tối đa: 2% = 8 USD
Stop loss: 40 pips
Pip value (EURUSD, 0.01 lot): 0.1 USD/pip

→ Lot size = 8 ÷ (40 × 0.1) = 8 ÷ 4 = **2.0** → dùng 0.02 lot (làm tròn xuống để an toàn)

---

## Sai lầm phổ biến nhất về lot size

**Sai lầm 1: Chọn lot size dựa trên "muốn kiếm bao nhiêu"**

*"Nếu 0.01 lot kiếm được 5k một lệnh thì không đủ. Mình phải dùng 0.1 lot."*

Đây là tư duy ngược. Lot size không nên bắt đầu từ "muốn kiếm bao nhiêu" — mà phải bắt đầu từ "có thể mất bao nhiêu."

**Sai lầm 2: Dùng cùng một lot size cho mọi lệnh**

Stop loss 10 pips và stop loss 50 pips là hai mức rủi ro hoàn toàn khác nhau nếu dùng cùng lot size.

Lot size phải tính cho từng lệnh cụ thể — dựa trên stop loss của lệnh đó, không phải cố định cho mọi lệnh.

**Sai lầm 3: Tăng lot size sau chuỗi thắng**

*"Mình vừa thắng 5 lệnh liên tiếp, chắc mình đang đọc thị trường tốt. Tăng lot lên gấp đôi thôi."*

Không. Chuỗi thắng không cho bạn biết gì về khả năng thắng lệnh tiếp theo. Thị trường không nhớ lịch sử giao dịch của bạn.

Lot size phải tính dựa trên vốn hiện tại — không phải dựa trên chuỗi thắng/thua gần đây.

---

## Lot size và tâm lý trading

Đây là phần ít ai nói đến, nhưng mình nghĩ quan trọng nhất.

Lot size đúng không chỉ là bảo vệ vốn. Nó còn **bảo vệ tâm lý của bạn**.

Khi lot size quá lớn, mỗi pip di chuyển ngược chiều bạn trở thành nguồn stress thật sự. Bạn liên tục nhìn vào màn hình. Bạn cân nhắc đóng sớm. Bạn không thể suy nghĩ rõ ràng về bước tiếp theo vì đang bị cảm xúc chi phối.

Khi lot size đúng — bạn biết rằng ngay cả khi lệnh này thua, bạn chỉ mất 1–2% tài khoản. Đó là số tiền bạn đã sẵn sàng "trả học phí" cho lệnh này. Bạn có thể để lệnh chạy đúng kế hoạch mà không bị cảm xúc can thiệp.

Và **khả năng để lệnh chạy đúng kế hoạch** là một trong những thứ tách trader có lợi nhuận khỏi trader thua lỗ.

---

## Mình bắt đầu từ đâu khi set lot size

Bây giờ với mỗi lệnh, mình làm theo thứ tự này:

1. Xác định điểm vào và điểm stop loss
2. Tính khoảng cách stop loss (bao nhiêu pips)
3. Quyết định % rủi ro (thường 1–1.5% với lệnh bình thường, giảm xuống 0.5% nếu setup không chắc)
4. Dùng calculator tính lot size
5. Làm tròn **xuống** — không bao giờ làm tròn lên

Làm tròn xuống quan trọng vì: tốt hơn là rủi ro ít hơn kế hoạch, không phải nhiều hơn.

---

## Công cụ tính lot size nhanh

Không cần tự tính tay mỗi lần. Có nhiều công cụ hỗ trợ:

- Trong MT5: có thể dùng script tính lot size tự động
- Trang web: babypips.com/tools/forex-calculators (position size calculator)
- App: ICmarkets, Pepperstone đều có app có position size calculator tích hợp

Quan trọng hơn công cụ là thói quen: **mỗi lệnh đều phải tính lot size, không bao giờ đoán mò**.

---

*Bạn đang tính lot size như thế nào? Bạn có biết mình đang rủi ro bao nhiêu % tài khoản mỗi lệnh không? Nếu chưa biết — thử tính ngay hôm nay. Kết quả có thể làm bạn bất ngờ.*

---

**Phương G63** · Trader · Lập trình EA MT5 · Cai Lậy, Tiền Giang
📞 Zalo tư vấn: 0822 299 993 | 🌐 phuongg63.com
