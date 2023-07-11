# nstore microservice

## Task

- [ ] Base project
## Requirements

```
- Login
- Register
- Verify Email
- Category
1. CRUD Category
2. Cho phép xắp xếp vị trí và thay đổi ảnh banner theo từng danh mục.
3. Trạng thái~active/inactive
- Items
1. CRUD Items
2. Item bao gồm tên, barcode, giá nhập, giá bán, trọng lượng, ảnh đại diện, ảnh chi tiết , mô tả
sản phẩm
3. Quản lý được số lượng tồn kho cho items mỗi khi xuất bán cần phải trừ số lượng tồn kho
- Order
Tạo đơn hàng
Chi tiết đơn hàng
Tổng tiền thanh toán
Trừ số lượng tồn kho tại bảng item"
- Apply Voucher (apply cho order)
- Quản lý voucher (có giớ hạn về số lượng và thời gian)
- FlashSale
- Quản lý time flashsale
- Quản lý giá trong thời gian flashsale
- Số lượng item
- Notifcation
- Gửi email cho user trước khi bắt đầu 15 phút
-Không cho xóa sản phẩm khi đã có Order.
-Chỉ admin mới có thể tạo category và sản phẩm.
-Các API list cần có search, sort, fillter và phân trang.
-Unittest và swagger là điểm cộng
-Sử dụng cronjob để gửi email notification
```

