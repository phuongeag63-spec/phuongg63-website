---
title: Cách Tính Lot Size Đúng — Đừng Bấm Đại Nữa
date: 2026-07-02T16:46:00.000+07:00
image: /assets/images/blog-bai2.png
category: Nhật ký lệnh
---
Tôi hỏi thật nhé — khi bạn vào lệnh, bạn chọn lot size bằng cách nào?

Nếu câu trả lời là "tôi cảm giác vào 0.1 cho nó tròn" hoặc "hôm nay thấy chắc nên vào 0.5" — thì bài này viết cho bạn.

Vì đó chính xác là những gì tôi đã làm trong suốt mấy tháng đầu. Và đó cũng là lý do tôi thua nhiều hơn mức cần thiết rất nhiều.

---

## Lot Size Là Gì Và Tại Sao Nó Quan Trọng Đến Vậy

Lot size quyết định **mỗi pip di chuyển bạn lãi hoặc lỗ bao nhiêu tiền.**

Với Gold (XAU/USD) trên tài khoản USD:
- 0.01 lot = khoảng 0.1$ mỗi pip
- 0.1 lot = khoảng 1$ mỗi pip
- 1.0 lot = khoảng 10$ mỗi pip

Nghe đơn giản. Nhưng vấn đề là phần lớn người mới không kết nối được con số này với **kích thước tài khoản của họ.**

Bạn có tài khoản 500$. Bạn vào 0.5 lot vàng. Stoploss 50 pip.

Nếu chạm SL: 0.5 lot × 50 pip × 1$/pip = **25$** — tức là **5% tài khoản** chỉ một lệnh.

Vào 3 lệnh như vậy một ngày mà thua cả 3 → bay 15% tài khoản chỉ trong vài tiếng.

Đó không phải trading. Đó là đánh bạc có màu kỹ thuật.

---

## Công Thức Tính Lot Size Đúng

Đây là công thức tôi dùng mỗi ngày — không cần học thuộc, chỉ cần hiểu logic:

**Lot size = Số tiền risk ÷ (Stoploss tính bằng pip × Giá trị mỗi pip)**

Nghe phức tạp nhưng thực ra rất đơn giản. Tôi ví dụ cụ thể luôn:

---

### Ví dụ thực tế với Gold

**Tài khoản:** 10,000,000đ (khoảng 400$)
**Rule:** Chỉ risk 1% mỗi lệnh = 100,000đ ≈ 4$
**Setup:** Vào lệnh BUY Gold, stoploss cách điểm vào 50 pip

**Tính:**
- Số tiền risk: 4$
- Stoploss: 50 pip
- Giá trị 1 pip của 0.01 lot Gold ≈ 0.1$

→ Số lot = 4$ ÷ (50 × 0.1$) = 4 ÷ 5 = **0.8**

Vậy với setup này, bạn chỉ nên vào tối đa **0.08 lot** (làm tròn xuống để an toàn).

Nếu chạm stoploss: mất đúng 4$ = 1% tài khoản. Không hơn.

---

### Ví dụ với Forex (EUR/USD)

**Tài khoản:** 500$
**Risk:** 1% = 5$
**Stoploss:** 20 pip

- Giá trị 1 pip của 0.01 lot EUR/USD ≈ 0.1$

→ Số lot = 5$ ÷ (20 × 0.1$) = 5 ÷ 2 = **2.5**

→ Vào **0.025 lot** (tức 2-3 micro lot)

---

## Tôi Không Muốn Tính Mỗi Lần — Có Cách Nào Nhanh Hơn Không?

Có. Tôi dùng 2 cách:

**Cách 1:** Lưu sẵn bảng tính nhỏ trong điện thoại. Điền vào 3 ô: tài khoản, stoploss, tỷ lệ risk → ra lot ngay.

**Cách 2:** Dùng Position Size Calculator — gõ Google có vô số trang web miễn phí. Điền số vào là có kết quả trong 5 giây.

Không có lý do gì để bấm đại nữa khi có công cụ tính sẵn như vậy.

---

## Dấu Hiệu Bạn Đang Vào Lệnh Quá To

Nếu bạn có bất kỳ triệu chứng nào dưới đây — đó là tín hiệu lot size đang sai:

**Bạn liên tục nhìn vào chart sau khi vào lệnh** — vì mỗi pip đi ngược lại khiến tim bạn đập nhanh hơn. Nếu risk đúng mức, bạn sẽ không cần nhìn liên tục vì mức thua tối đa nằm trong tầm kiểm soát.

**Bạn hay dời stoploss** — vì khi giá đang đi về phía SL, bạn hoảng và dời ra xa hơn. Gốc rễ là vì số tiền đang mất quá lớn so với tâm lý bạn chịu được.

**Bạn thắng lệnh mà vẫn không vui** — vì thắng nhỏ nhưng nhớ lại lần thua trước to hơn nhiều. Đây là hệ quả của lot size không nhất quán.

---

## Sự Thật Mà Ít Ai Nói

Tính lot size đúng không giúp bạn thắng nhiều hơn. Nhưng nó giúp bạn **thua ít hơn mức cần thiết** — và trong trading, đó chính là lợi thế.

Hầu hết trader thua không phải vì họ không có khả năng phân tích. Mà vì một vài lệnh thua quá to đã xóa sạch 10-20 lệnh thắng trước đó.

Bạn có thể thắng 7/10 lệnh mà vẫn lỗ tổng — nếu 3 lệnh thua có lot size gấp 5 lần 7 lệnh thắng.

Ngược lại, bạn chỉ cần thắng 5/10 lệnh mà vẫn lời đều — nếu lot size nhất quán và quản lý vốn đúng.

Đó là toán học. Và toán học không bao giờ nói dối.

---

## Bắt Đầu Từ Hôm Nay

Từ lệnh tiếp theo, trước khi bấm Buy hay Sell, hãy trả lời 3 câu hỏi:

1. Tài khoản tôi hiện tại là bao nhiêu?
2. Stoploss của lệnh này là bao nhiêu pip?
3. 1% tài khoản của tôi là bao nhiêu tiền?

Rồi tính lot size từ đó. Không phải cảm giác. Không phải thói quen. Tính.

30 giây thôi. Nhưng 30 giây đó có thể là ranh giới giữa một tài khoản sống sót và một tài khoản bị xóa.

*Mình Thật Sự Thất Bại Khi Mình Từ Bỏ.*

— Phương G63
