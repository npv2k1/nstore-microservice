# Order API

## Features

Quản lý thông tin giỏ hàng:
  - Thêm sửa xóa sản phần trong giỏ hàng. product_id, quantity, price, discount, total_price
  - Call product service để lấy thông tin sản phẩm.

Quản lý thông tin order:
  - Thêm order:
-> Khi order mới được thêm thành công thì sẽ publish event `OrderCreated` để các service khác có thể lấy thông tin order về để xử lý.
 
 -> Service Product khi nhận event `OrderCreated` sẽ cập nhật lại số lượng sản phẩm có thể bán được.
 