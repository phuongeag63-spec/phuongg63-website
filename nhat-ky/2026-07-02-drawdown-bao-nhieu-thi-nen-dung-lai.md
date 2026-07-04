---
title: "Drawdown Bao Nhiêu Thì Nên Dừng Lại?"
date: 2026-07-02
category: Kinh nghiệm
image: null
description: "Không có con số đúng cho tất cả mọi người. Nhưng có một nguyên tắc mà trader sống sót lâu dài đều tuân theo."
---

Câu hỏi mình nhận nhiều lần: *"Anh ơi, EA tôi đang drawdown 15% rồi. Có nên tắt không?"*

Mình thường hỏi lại: *"15% so với gì? So với vốn ban đầu hay so với đỉnh tài khoản?"*

Người hỏi thường im một lúc, rồi nhắn: *"À... mình chưa nghĩ đến điều đó."*

Và đó là vấn đề. Không phải con số 15% hay 20% hay 30%. Mà là chúng ta thường không có tiêu chí rõ ràng **trước khi** drawdown xảy ra.

---

## Tại sao cần xác định ngưỡng dừng trước — không phải trong lúc

Khi tài khoản đang drawdown, não bạn không ở trạng thái ra quyết định tốt nhất.

Lo lắng. Căng thẳng. Có thể đang tiếc. Có thể đang tức. Tất cả những thứ đó ảnh hưởng đến suy nghĩ của bạn.

Nếu bạn quyết định ngưỡng dừng **trong lúc** drawdown đang xảy ra, bạn sẽ đưa ra quyết định bị ảnh hưởng bởi cảm xúc hiện tại — không phải bởi logic.

Hai kiểu quyết định sai phổ biến nhất:

**Kiểu 1: Tắt sớm vì hoảng.** Drawdown 12%, sợ quá, tắt EA. Tuần sau nó hồi lại mạnh mà không có bạn trong đó.

**Kiểu 2: Để chạy quá lâu vì hy vọng.** *"Chắc nó sẽ quay lại thôi."* Drawdown từ 20% thành 40% vì không có tiêu chí dừng rõ ràng.

Cả hai đều tệ. Và cả hai đều xuất phát từ việc không có kế hoạch từ trước.

---

## Vậy drawdown bao nhiêu thì nên dừng?

Câu trả lời trung thực: **không có con số đúng cho tất cả mọi người.**

Nhưng có một framework mình dùng để tự tìm câu trả lời cho từng hệ thống cụ thể.

**Bước 1: Xem Max Drawdown backtest**

Mỗi EA hay chiến lược đều có Max Drawdown trong backtest — mức sụt giảm lớn nhất từ đỉnh xuống đáy trong lịch sử test.

Lấy con số đó làm điểm bắt đầu.

**Bước 2: Nhân với hệ số "thực tế"**

Backtest luôn optimistic hơn thực tế — vì backtest được chạy trong điều kiện lý tưởng, không có slippage, spread luôn ổn định, không có biến cố bất ngờ.

Thực tế, mình thường nhân Max Drawdown backtest với 1.5 đến 2.0 để có kỳ vọng thực tế hơn.

Ví dụ: Max DD backtest là 15% → kỳ vọng real có thể lên đến 22–30%.

**Bước 3: Hỏi bản thân câu này**

*"Nếu tài khoản mình mất [con số đó] — mình có ngủ được không?"*

Đây không phải câu hỏi lý thuyết. Nó là câu hỏi tâm lý thật sự.

Nếu câu trả lời là "không" — bạn cần: hoặc giảm lot size để drawdown tuyệt đối nhỏ hơn, hoặc chọn hệ thống có Max DD thấp hơn.

Nếu câu trả lời là "ổn, mình chịu được" — thì đó là ngưỡng bạn có thể để hệ thống chạy đến.

**Bước 4: Đặt hard stop tự động**

Sau khi xác định ngưỡng — cài nó vào hệ thống. Không phải để bạn tự quyết định trong lúc hoảng loạn.

Với EA: cài Max Drawdown parameter trong code. Khi chạm ngưỡng, EA tự dừng — không hỏi bạn nữa.

Với trade tay: viết xuống giấy. Đặt alert. Nói với người thân hoặc accountability partner.

---

## Ngưỡng mình dùng trong thực tế

Mình không nói con số của mình là đúng cho bạn — nhưng chia sẻ để bạn có tham chiếu.

Với mỗi EA mình chạy, mình đặt ngưỡng dừng ở **2 lần Max Drawdown backtest**, tối đa 30% tài khoản.

Nghĩa là: nếu backtest cho thấy Max DD là 12%, mình cho phép hệ thống drawdown tối đa 24%. Nếu chạm 24%, EA tự dừng — và mình ngồi review lại xem điều gì đang xảy ra.

Tại sao 2 lần? Vì trong 3 năm dùng EA, mình thấy rằng nếu drawdown real vượt 2x backtest — thường có nghĩa là thị trường đang trong điều kiện mà hệ thống không được thiết kế để hoạt động. Không phải "tạm thời xui" — mà là hệ thống đang gặp vấn đề thật sự.

Và 30% là ngưỡng tâm lý tuyệt đối của mình — con số mà nếu chạm, mình không còn có thể giữ tâm lý ổn định để tiếp tục trading hiệu quả.

---

## Dừng lại không có nghĩa là bỏ cuộc

Điều quan trọng cần hiểu: dừng một EA khi nó chạm ngưỡng drawdown **không phải bỏ cuộc**.

Nó là thực hiện kế hoạch quản lý rủi ro — thứ bạn đã quyết định từ trước khi cảm xúc chen vào.

Sau khi dừng, bạn có thể:
- Review xem điều gì đã xảy ra với thị trường
- Kiểm tra xem EA có gặp lỗi logic không
- Chờ điều kiện thị trường thay đổi rồi thử lại
- Quyết định hệ thống này không phù hợp với điều kiện hiện tại và tìm hệ thống khác

Tất cả đều là quyết định có lý trí — không phải phản ứng hoảng loạn.

---

## Điều tệ nhất bạn có thể làm

Không có kế hoạch dừng. Rồi mỗi ngày nhìn tài khoản đỏ, tự hỏi *"Hôm nay có nên tắt không?"*, rồi quyết định dựa trên cảm xúc của buổi đó.

Đó là cách trader mất nhiều hơn họ nên mất.

Thị trường sẽ luôn có những giai đoạn tệ. Không có hệ thống nào không có drawdown. Câu hỏi không phải *"Có bị drawdown không?"* — mà là *"Khi bị drawdown, tôi sẽ xử lý như thế nào?"*

Trả lời câu hỏi đó từ trước — khi bạn còn đang bình tĩnh và có đầu óc sáng suốt.

---

*Bạn đang dùng EA hay trade tay? Bạn có ngưỡng drawdown tối đa cho phép không? Chia sẻ con số và lý do của bạn ở comment nhé — mình muốn nghe quan điểm của nhiều người khác nhau.*

---

**Phương G63** · Trader · Lập trình EA MT5 · Cai Lậy, Tiền Giang
📞 Zalo tư vấn: 0822 299 993 | 🌐 phuongg63.com
