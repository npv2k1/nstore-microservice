# nstore microservice

## Hướng dẫn cài đặt

Clone project:

```bash
git clone https://github.com/npv2k1/nstore-microservice.git
```

Cài đặt package ở các thư mục `api` và `web`

```
pnpm install
```

Để bắt đâu có thể sử dụng docker-compose

```bash
docker-compose up -d
```


Cấu trúc thư mục

```
apps
    api
    nginx
    web
docker
    nginx
```

## Task

- [x] Base project

## Requirements

- [x] **Authentication**
    - [x] Login
    - [x] Register
    - [ ] Verify Email

- **Category**
    - [x] CRUD Category
    - [ ] Allow sorting and changing banner images for each category
    - [x] Manage category status (active/inactive)

- **Items**
    - [x] CRUD Items
    - [x] Manage item properties:
        - [x] Name
        - [x] Barcode
        - [x] Purchase price
        - [x] Selling price
        - [ ] Weight
        - [ ] Thumbnail image
        - [ ] Detailed images
        - [ ] Product description
        - [x] Inventory management (deduct quantity when sold)

- **Order**
    - [x] Create an order
    - [ ] View order details
    - [x] Calculate total payment amount
    - [ ] Deduct item quantity from inventory

- **Voucher**
    - [x] Apply voucher to an order
    - [ ] Manage vouchers:
        - [ ] Set limitations on quantity and time
        - [x] Create voucher codes

- **FlashSale**
    - [ ] Manage flash sale time
    - [ ] Manage prices during flash sale

- [ ] **Item Quantity**
    - [x] Track and manage item quantities

- **Notification**
    - [ ] Send email notifications:
        - [ ] Notify users 15 minutes before starting
        - [ ] Include order details

- [ ] **Access Control**
    - [ ] Restrict deletion of products with associated orders
    - [ ] Only allow admin to create categories and products

- [ ] **API Features**
    - [ ] Implement search functionality
    - [ ] Enable sorting of results
    - [ ] Apply filters to narrow down results
    - [ ] Implement pagination for large result sets

- [ ] **Testing and Documentation**
    - [ ] Write unit tests for different components
    - [ ] Generate Swagger documentation for APIs

- [ ] **Email Notification**
    - [ ] Configure cron job for sending email notifications


## Additional Features

- [ ] **Authentication and Authorization**
    - [x] Implement secure user authentication and authorization mechanism (e.g., JWT, OAuth)
    - [x] Manage user roles and permissions (admin, customer, etc.)
    - [x] Ensure secure password storage using hashing and salting techniques

- [ ] **User Management**
    - [ ] Allow users to update their profile information
    - [ ] Implement password reset functionality
    - [x] Enable social login (e.g., Google, Facebook)

- [ ] **Product Management**
    - [ ] Implement advanced product search functionality (by name, category, attributes, etc.)
    - [ ] Enable product filtering and sorting options
    - [ ] Support multiple product images and thumbnails
    - [ ] Implement product recommendations or related products feature
    - [ ] Implement product reviews and ratings system
    - [ ] Add support for product variants (e.g., size, color)
    - [ ] Implement inventory management and stock tracking
    - [ ] Integrate with a third-party shipping service for real-time shipping rates
    - [ ] Enable product bundling or package deals

- [ ] **Shopping Cart and Checkout**
    - [ ] Implement a persistent shopping cart for guests and authenticated users
    - [ ] Support adding/removing items from the cart
    - [ ] Implement cart-based promotions or discounts
    - [ ] Enable guest checkout without requiring user registration
    - [ ] Implement various payment gateway integrations (e.g., PayPal, Stripe)
    - [ ] Ensure secure transmission of payment information (e.g., SSL/TLS)
    - [ ] Implement order confirmation and email notifications to customers

- [ ] **Order Management**
    - [ ] Provide order history and order tracking functionality to customers
    - [ ] Implement order status management (e.g., pending, shipped, delivered)
    - [ ] Generate printable invoices and packing slips
    - [ ] Support partial order fulfillment and backorders

- [ ] **Security Enhancements**
    - [ ] Implement rate limiting to prevent brute-force attacks and DDoS
    - [ ] Protect against common web vulnerabilities (e.g., SQL injection, XSS)
    - [ ] Implement HTTPS for secure communication
    - [ ] Regularly update and patch server dependencies

- [ ] **Performance Optimization**
    - [ ] Implement caching mechanisms to improve response times
    - [ ] Optimize database queries and indexing for faster retrieval
    - [ ] Implement asynchronous processing for resource-intensive tasks (e.g., image resizing)

- [ ] **Scalability and High Availability**
    - [ ] Design the API to be horizontally scalable by utilizing load balancers
    - [ ] Implement caching layers (e.g., Redis) for improved performance
    - [ ] Set up auto-scaling mechanisms based on traffic patterns
    - [ ] Deploy the API on a cloud infrastructure for better scalability

- [ ] **API Documentation and Testing**
    - [ ] Create comprehensive API documentation (e.g., Swagger/OpenAPI)
    - [ ] Implement automated tests for API endpoints (unit tests, integration tests)
    - [ ] Set up a continuous integration and deployment pipeline

- [ ] **Monitoring and Analytics**
    - [ ] Implement logging and error tracking mechanisms
    - [ ] Monitor API performance and uptime using tools like Prometheus or New Relic
    - [ ] Implement analytics to gain insights into user behavior and conversion rates

- [ ] **Compliance and Data Protection**
    - [ ] Ensure compliance with data protection regulations (e.g., GDPR, CCPA)
    - [ ] Encrypt sensitive data in transit and at rest
    - [ ] Regularly perform security audits and vulnerability assessments
