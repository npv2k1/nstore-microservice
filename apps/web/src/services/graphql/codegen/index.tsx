import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSONObject: any;
};

export type Cart = {
  __typename?: 'Cart';
  _id: Scalars['String'];
  customer: Customer;
  product: Product;
  quantity: Scalars['Int'];
  subtotal: Scalars['Int'];
};

export type CartInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<Scalars['String']>;
  product: Scalars['String'];
  quantity?: Scalars['Int'];
};

export type CartQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type CartUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Category>;
  products?: Maybe<Array<Product>>;
  slug?: Maybe<Scalars['String']>;
};

export type CategoryInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CategoryPagination = {
  __typename?: 'CategoryPagination';
  docs: Array<Category>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type CategoryQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type Coupon = {
  __typename?: 'Coupon';
  _id: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  discountType: Scalars['String'];
  discountValue?: Maybe<Scalars['Int']>;
  product?: Maybe<Scalars['Int']>;
  status: Scalars['Boolean'];
  type: Scalars['String'];
};

export type CouponInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
  discountType: DiscountType;
  discountValue: Scalars['Int'];
  product?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  type: CouponType;
};

export type CouponQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  discountType?: InputMaybe<DiscountType>;
  discountValue?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<CouponType>;
};

export enum CouponType {
  Delivery = 'DELIVERY',
  Order = 'ORDER',
  Product = 'PRODUCT'
}

export type CouponUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  discountType?: InputMaybe<DiscountType>;
  discountValue?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<CouponType>;
};

export type Customer = {
  __typename?: 'Customer';
  _id: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['Int']>;
};

export enum DiscountType {
  Fixed = 'FIXED',
  Percent = 'PERCENT'
}

export type FlashSale = {
  __typename?: 'FlashSale';
  _id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  product?: Maybe<Scalars['Int']>;
  salePrice: Scalars['Int'];
  startDate: Scalars['DateTime'];
  status: Scalars['String'];
};

export type FlashSaleInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate: Scalars['DateTime'];
  product: Scalars['String'];
  salePrice: Scalars['Int'];
  startDate: Scalars['DateTime'];
  status: Scalars['Boolean'];
};

export type FlashSaleQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  product?: InputMaybe<Scalars['String']>;
  salePrice?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type FlashSaleUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  product?: InputMaybe<Scalars['String']>;
  salePrice?: InputMaybe<Scalars['Int']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type Inventory = {
  __typename?: 'Inventory';
  _id: Scalars['String'];
  product: Product;
  purchasePrice: Scalars['Float'];
  quantity: Scalars['Int'];
  salePrice: Scalars['Float'];
};

export type InventoryInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  properties?: InputMaybe<Scalars['JSONObject']>;
};

export type InventoryQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  categories_in?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  properties?: InputMaybe<Scalars['JSONObject']>;
};

export type InventoryUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  properties?: InputMaybe<Scalars['JSONObject']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: Scalars['String'];
  deleteManyUsers: User;
  deleteOneCart: Cart;
  deleteOneCategory: Category;
  deleteOneCoupon: Coupon;
  deleteOneFlashSale: FlashSale;
  deleteOneInventory: Inventory;
  deleteOnePayment: Payment;
  deleteOneProduct: Product;
  deleteOneShipment: Shipment;
  deleteOneUser: User;
  forgotPassword: Scalars['String'];
  insertManyUsers: User;
  insertOneCart: Cart;
  insertOneCategory: Category;
  insertOneCoupon: Coupon;
  insertOneFlashSale: FlashSale;
  insertOneInventory: Inventory;
  insertOneOrder: Order;
  insertOnePayment: Payment;
  insertOneProduct: Product;
  insertOneShipment: Shipment;
  insertOneUser: User;
  login: Token;
  resetPassword: Scalars['String'];
  signup: Token;
  updateManyUsers: User;
  updateOneCart: Cart;
  updateOneCategory: Category;
  updateOneCoupon: Coupon;
  updateOneFlashSale: FlashSale;
  updateOneInventory: Inventory;
  updateOnePayment: Payment;
  updateOneProduct: Product;
  updateOneShipment: Shipment;
  updateOneUser: User;
  upsertOneCoupon: Coupon;
  upsertOneFlashSale: FlashSale;
  upsertOneProduct: Product;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationDeleteManyUsersArgs = {
  where: UserQueryInput;
};


export type MutationDeleteOneCartArgs = {
  query: CartQueryInput;
};


export type MutationDeleteOneCategoryArgs = {
  query: CategoryQueryInput;
};


export type MutationDeleteOneCouponArgs = {
  query: CouponQueryInput;
};


export type MutationDeleteOneFlashSaleArgs = {
  query: FlashSaleQueryInput;
};


export type MutationDeleteOneInventoryArgs = {
  query: InventoryQueryInput;
};


export type MutationDeleteOnePaymentArgs = {
  query: PaymentQueryInput;
};


export type MutationDeleteOneProductArgs = {
  query: ProductQueryInput;
};


export type MutationDeleteOneShipmentArgs = {
  query: ShipmentQueryInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserQueryUniqueInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
};


export type MutationInsertOneCartArgs = {
  data: CartInsertInput;
};


export type MutationInsertOneCategoryArgs = {
  data: CategoryInsertInput;
};


export type MutationInsertOneCouponArgs = {
  data: CouponInsertInput;
};


export type MutationInsertOneFlashSaleArgs = {
  data: FlashSaleInsertInput;
};


export type MutationInsertOneInventoryArgs = {
  data: InventoryInsertInput;
};


export type MutationInsertOneOrderArgs = {
  data: OrderInsertInput;
};


export type MutationInsertOnePaymentArgs = {
  data: PaymentInsertInput;
};


export type MutationInsertOneProductArgs = {
  data: ProductInsertInput;
};


export type MutationInsertOneShipmentArgs = {
  data: ShipmentInsertInput;
};


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationUpdateManyUsersArgs = {
  data: UpdateUserInput;
  where: UserQueryUniqueInput;
};


export type MutationUpdateOneCartArgs = {
  data: CartUpdateInput;
  query: CartQueryInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  query: CategoryQueryInput;
};


export type MutationUpdateOneCouponArgs = {
  data: CouponUpdateInput;
  query: CouponQueryInput;
};


export type MutationUpdateOneFlashSaleArgs = {
  data: FlashSaleUpdateInput;
  query: FlashSaleQueryInput;
};


export type MutationUpdateOneInventoryArgs = {
  data: InventoryUpdateInput;
  query: InventoryQueryInput;
};


export type MutationUpdateOnePaymentArgs = {
  data: PaymentUpdateInput;
  query: PaymentQueryInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  query: ProductQueryInput;
};


export type MutationUpdateOneShipmentArgs = {
  data: ShipmentUpdateInput;
  query: ShipmentQueryInput;
};


export type MutationUpdateOneUserArgs = {
  data: UpdateUserInput;
  where: UserQueryUniqueInput;
};


export type MutationUpsertOneCouponArgs = {
  data: CouponInsertInput;
  query?: InputMaybe<CouponQueryInput>;
};


export type MutationUpsertOneFlashSaleArgs = {
  data: FlashSaleInsertInput;
  query?: InputMaybe<FlashSaleQueryInput>;
};


export type MutationUpsertOneProductArgs = {
  data: ProductInsertInput;
  query?: InputMaybe<ProductQueryInput>;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['String'];
  coupon: Coupon;
  customer: Customer;
  deliveryAddress: Scalars['String'];
  deliveryFee: Scalars['Int'];
  deliveryStatus: Scalars['String'];
  discount: Scalars['Int'];
  items: Array<OrderItem>;
  payment: Payment;
  paymentMethod: Scalars['String'];
  phone: Scalars['String'];
  productTotal: Scalars['Int'];
  status: Scalars['String'];
  total: Scalars['Int'];
};

export type OrderInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  coupon?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<Scalars['String']>;
  deliveryAddress: Scalars['String'];
  paymentMethod?: PaymentMethod;
  phone: Scalars['String'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  _id: Scalars['String'];
  price: Scalars['Int'];
  product: Product;
  quantity?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
};

export type OrderQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  coupon?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<Scalars['String']>;
  deliveryAddress?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PaymentMethod>;
  phone?: InputMaybe<Scalars['String']>;
};

export type PaginateOptionsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type Payment = {
  __typename?: 'Payment';
  _id: Scalars['String'];
  order?: Maybe<Scalars['String']>;
  paymentAmount?: Maybe<Scalars['Int']>;
  paymentDate?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<Scalars['String']>;
};

export type PaymentInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  paymentAmount?: InputMaybe<Scalars['Int']>;
  paymentDate?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<Scalars['String']>;
  paymentStatus?: InputMaybe<Scalars['String']>;
};

export enum PaymentMethod {
  Cod = 'COD',
  CreditCard = 'CREDIT_CARD',
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE'
}

export type PaymentQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  paymentAmount?: InputMaybe<Scalars['Int']>;
  paymentDate?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<Scalars['String']>;
  paymentStatus?: InputMaybe<Scalars['String']>;
};

export type PaymentUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  paymentAmount?: InputMaybe<Scalars['Int']>;
  paymentDate?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<Scalars['String']>;
  paymentStatus?: InputMaybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['String'];
  available?: Maybe<Scalars['Boolean']>;
  barcode?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Category>>;
  gallery?: Maybe<Array<Scalars['String']>>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  productType: Scalars['String'];
  properties?: Maybe<Scalars['JSONObject']>;
  quantity?: Maybe<Scalars['Int']>;
  salePrice?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  unit?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Product>>;
};

export type ProductInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  properties?: InputMaybe<Scalars['JSONObject']>;
};

export type ProductPagination = {
  __typename?: 'ProductPagination';
  docs: Array<Product>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ProductQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  categories_in?: InputMaybe<Array<Scalars['String']>>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  properties?: InputMaybe<Scalars['JSONObject']>;
};

export type ProductUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  properties?: InputMaybe<Scalars['JSONObject']>;
};

export type Query = {
  __typename?: 'Query';
  Role: Array<Role>;
  aggregateUsers: UserAggregate;
  cart: Cart;
  carts: Array<Cart>;
  categories: CategoryPagination;
  category: Category;
  coupon: Coupon;
  coupons: Array<Coupon>;
  flashsale: FlashSale;
  flashsales: Array<FlashSale>;
  inventories: Array<Inventory>;
  inventory: Inventory;
  me: User;
  order: Order;
  orders: Array<Order>;
  payment: Payment;
  payments: Array<Payment>;
  product: Product;
  products: ProductPagination;
  profile: Customer;
  shipment: Shipment;
  shipments: Array<Shipment>;
  user: User;
  users: Array<User>;
};


export type QueryAggregateUsersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserQueryInput>;
};


export type QueryCartArgs = {
  query: CartQueryInput;
};


export type QueryCartsArgs = {
  query?: InputMaybe<CartQueryInput>;
};


export type QueryCategoriesArgs = {
  paginate?: InputMaybe<PaginateOptionsInput>;
  query?: InputMaybe<CategoryQueryInput>;
};


export type QueryCategoryArgs = {
  query: CategoryQueryInput;
};


export type QueryCouponArgs = {
  query: CouponQueryInput;
};


export type QueryCouponsArgs = {
  query?: InputMaybe<CouponQueryInput>;
};


export type QueryFlashsaleArgs = {
  query: FlashSaleQueryInput;
};


export type QueryFlashsalesArgs = {
  query?: InputMaybe<FlashSaleQueryInput>;
};


export type QueryInventoriesArgs = {
  query?: InputMaybe<InventoryQueryInput>;
};


export type QueryInventoryArgs = {
  query: InventoryQueryInput;
};


export type QueryOrderArgs = {
  query: OrderQueryInput;
};


export type QueryOrdersArgs = {
  query?: InputMaybe<OrderQueryInput>;
};


export type QueryPaymentArgs = {
  query: PaymentQueryInput;
};


export type QueryPaymentsArgs = {
  query?: InputMaybe<PaymentQueryInput>;
};


export type QueryProductArgs = {
  query: ProductQueryInput;
};


export type QueryProductsArgs = {
  paginate?: InputMaybe<PaginateOptionsInput>;
  query?: InputMaybe<ProductQueryInput>;
};


export type QueryShipmentArgs = {
  query: ShipmentQueryInput;
};


export type QueryShipmentsArgs = {
  query?: InputMaybe<ShipmentQueryInput>;
};


export type QueryUserArgs = {
  where: UserQueryUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserQueryInput>;
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Shipment = {
  __typename?: 'Shipment';
  _id: Scalars['String'];
  order: Order;
  status: Scalars['String'];
};

export type ShipmentInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ShipmentQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ShipmentUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export enum SortOrder {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['String']>>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
};

export type UserAggregate = {
  __typename?: 'UserAggregate';
  _count?: Maybe<Scalars['Int']>;
};

export type UserInsertInput = {
  address?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['String']>>;
};

export type UserOrderByInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserQueryInput = {
  address?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['String']>>;
};

export type UserQueryUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type ForgotPasswordMutationVariables = Exact<{
  input: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: string };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: string };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: string };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', address?: string | null, bio?: string | null, dateOfBirth?: any | null, email: string, fullName?: string | null, gender?: boolean | null, id: number, password?: string | null, phone?: string | null, picture?: string | null, roles?: Array<string> | null } };

export type CategoriesQueryVariables = Exact<{
  paginate?: InputMaybe<PaginateOptionsInput>;
  query?: InputMaybe<CategoryQueryInput>;
}>;


export type CategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'CategoryPagination', hasNextPage: boolean, hasPrevPage: boolean, limit: number, nextPage?: number | null, offset?: number | null, page?: number | null, pagingCounter: number, prevPage?: number | null, totalDocs: number, totalPages: number, docs: Array<{ __typename?: 'Category', _id: string, description?: string | null, image?: string | null, name?: string | null, slug?: string | null }> } };

export type InsertOneCategoryMutationVariables = Exact<{
  data: CategoryInsertInput;
}>;


export type InsertOneCategoryMutation = { __typename?: 'Mutation', insertOneCategory: { __typename?: 'Category', _id: string, description?: string | null, image?: string | null, name?: string | null, slug?: string | null } };

export type DeleteOneCategoryMutationVariables = Exact<{
  query: CategoryQueryInput;
}>;


export type DeleteOneCategoryMutation = { __typename?: 'Mutation', deleteOneCategory: { __typename?: 'Category', _id: string, description?: string | null, image?: string | null, name?: string | null, slug?: string | null } };

export type UpdateOneCategoryMutationVariables = Exact<{
  data: CategoryUpdateInput;
  query: CategoryQueryInput;
}>;


export type UpdateOneCategoryMutation = { __typename?: 'Mutation', updateOneCategory: { __typename?: 'Category', _id: string, description?: string | null, image?: string | null, name?: string | null, slug?: string | null } };

export type ProductsQueryVariables = Exact<{
  paginate?: InputMaybe<PaginateOptionsInput>;
  query?: InputMaybe<ProductQueryInput>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductPagination', hasNextPage: boolean, hasPrevPage: boolean, limit: number, nextPage?: number | null, offset?: number | null, page?: number | null, pagingCounter: number, prevPage?: number | null, totalDocs: number, totalPages: number, docs: Array<{ __typename?: 'Product', _id: string, available?: boolean | null, barcode?: string | null, gallery?: Array<string> | null, image?: string | null, name?: string | null, price?: number | null, productType: string, properties?: any | null, quantity?: number | null, salePrice?: number | null, status?: string | null, tags?: Array<string> | null, unit?: string | null, categories?: Array<{ __typename?: 'Category', _id: string, name?: string | null }> | null }> } };

export type InsertOneProductMutationVariables = Exact<{
  data: ProductInsertInput;
}>;


export type InsertOneProductMutation = { __typename?: 'Mutation', insertOneProduct: { __typename?: 'Product', _id: string, name?: string | null, price?: number | null } };

export type DeleteOneProductMutationVariables = Exact<{
  query: ProductQueryInput;
}>;


export type DeleteOneProductMutation = { __typename?: 'Mutation', deleteOneProduct: { __typename?: 'Product', _id: string, name?: string | null } };

export type UpdateOneProductMutationVariables = Exact<{
  data: ProductUpdateInput;
  query: ProductQueryInput;
}>;


export type UpdateOneProductMutation = { __typename?: 'Mutation', updateOneProduct: { __typename?: 'Product', _id: string, available?: boolean | null, barcode?: string | null, gallery?: Array<string> | null, image?: string | null, name?: string | null, price?: number | null, productType: string, properties?: any | null, quantity?: number | null, salePrice?: number | null, status?: string | null, tags?: Array<string> | null, unit?: string | null, categories?: Array<{ __typename?: 'Category', _id: string, name?: string | null }> | null } };

export type GetUsersQueryVariables = Exact<{
  where?: InputMaybe<UserQueryInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderByInput> | UserOrderByInput>;
}>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', address?: string | null, email: string, fullName?: string | null, id: number, password?: string | null, roles?: Array<string> | null, gender?: boolean | null }>, aggregateUsers: { __typename?: 'UserAggregate', _count?: number | null } };

export type DeleteUserMutationVariables = Exact<{
  where: UserQueryUniqueInput;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteOneUser: { __typename?: 'User', id: number } };

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = { __typename?: 'Query', Role: Array<{ __typename?: 'Role', description?: string | null, name: string }> };

export type CreateUserMutationVariables = Exact<{
  data: UserInsertInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', insertOneUser: { __typename?: 'User', id: number, roles?: Array<string> | null } };

export type FindDetailUserQueryVariables = Exact<{
  where: UserQueryUniqueInput;
}>;


export type FindDetailUserQuery = { __typename?: 'Query', user: { __typename?: 'User', address?: string | null, picture?: string | null, email: string, fullName?: string | null, id: number, password?: string | null, roles?: Array<string> | null, gender?: boolean | null } };

export type UpdateUserMutationVariables = Exact<{
  where: UserQueryUniqueInput;
  data: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateOneUser: { __typename?: 'User', address?: string | null, picture?: string | null, email: string, fullName?: string | null, id: number, password?: string | null, roles?: Array<string> | null, gender?: boolean | null } };

export type GetListRoleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListRoleQuery = { __typename?: 'Query', Role: Array<{ __typename?: 'Role', name: string, description?: string | null }> };


export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    refreshToken
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($input: ForgotPasswordInput!) {
  forgotPassword(input: $input)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const ChangePasswordDocument = gql`
    mutation ChangePassword($input: ChangePasswordInput!) {
  changePassword(input: $input)
}
    `;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const ResetPasswordDocument = gql`
    mutation ResetPassword($input: ResetPasswordInput!) {
  resetPassword(input: $input)
}
    `;

export function useResetPasswordMutation() {
  return Urql.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument);
};
export const SignupDocument = gql`
    mutation Signup($input: SignupInput!) {
  signup(input: $input) {
    accessToken
    refreshToken
  }
}
    `;

export function useSignupMutation() {
  return Urql.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    address
    bio
    dateOfBirth
    email
    fullName
    gender
    id
    password
    phone
    picture
    roles
  }
}
    `;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const CategoriesDocument = gql`
    query Categories($paginate: PaginateOptionsInput, $query: CategoryQueryInput) {
  categories(paginate: $paginate, query: $query) {
    docs {
      _id
      description
      image
      name
      slug
    }
    hasNextPage
    hasPrevPage
    limit
    nextPage
    offset
    page
    pagingCounter
    prevPage
    totalDocs
    totalPages
  }
}
    `;

export function useCategoriesQuery(options?: Omit<Urql.UseQueryArgs<CategoriesQueryVariables>, 'query'>) {
  return Urql.useQuery<CategoriesQuery>({ query: CategoriesDocument, ...options });
};
export const InsertOneCategoryDocument = gql`
    mutation InsertOneCategory($data: CategoryInsertInput!) {
  insertOneCategory(data: $data) {
    _id
    description
    image
    name
    slug
  }
}
    `;

export function useInsertOneCategoryMutation() {
  return Urql.useMutation<InsertOneCategoryMutation, InsertOneCategoryMutationVariables>(InsertOneCategoryDocument);
};
export const DeleteOneCategoryDocument = gql`
    mutation DeleteOneCategory($query: CategoryQueryInput!) {
  deleteOneCategory(query: $query) {
    _id
    description
    image
    name
    slug
  }
}
    `;

export function useDeleteOneCategoryMutation() {
  return Urql.useMutation<DeleteOneCategoryMutation, DeleteOneCategoryMutationVariables>(DeleteOneCategoryDocument);
};
export const UpdateOneCategoryDocument = gql`
    mutation UpdateOneCategory($data: CategoryUpdateInput!, $query: CategoryQueryInput!) {
  updateOneCategory(data: $data, query: $query) {
    _id
    description
    image
    name
    slug
  }
}
    `;

export function useUpdateOneCategoryMutation() {
  return Urql.useMutation<UpdateOneCategoryMutation, UpdateOneCategoryMutationVariables>(UpdateOneCategoryDocument);
};
export const ProductsDocument = gql`
    query Products($paginate: PaginateOptionsInput, $query: ProductQueryInput) {
  products(paginate: $paginate, query: $query) {
    docs {
      _id
      available
      barcode
      categories {
        _id
        name
      }
      gallery
      image
      name
      price
      productType
      properties
      quantity
      salePrice
      status
      tags
      unit
    }
    hasNextPage
    hasPrevPage
    limit
    nextPage
    offset
    page
    pagingCounter
    prevPage
    totalDocs
    totalPages
  }
}
    `;

export function useProductsQuery(options?: Omit<Urql.UseQueryArgs<ProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<ProductsQuery>({ query: ProductsDocument, ...options });
};
export const InsertOneProductDocument = gql`
    mutation InsertOneProduct($data: ProductInsertInput!) {
  insertOneProduct(data: $data) {
    _id
    name
    price
  }
}
    `;

export function useInsertOneProductMutation() {
  return Urql.useMutation<InsertOneProductMutation, InsertOneProductMutationVariables>(InsertOneProductDocument);
};
export const DeleteOneProductDocument = gql`
    mutation DeleteOneProduct($query: ProductQueryInput!) {
  deleteOneProduct(query: $query) {
    _id
    name
  }
}
    `;

export function useDeleteOneProductMutation() {
  return Urql.useMutation<DeleteOneProductMutation, DeleteOneProductMutationVariables>(DeleteOneProductDocument);
};
export const UpdateOneProductDocument = gql`
    mutation UpdateOneProduct($data: ProductUpdateInput!, $query: ProductQueryInput!) {
  updateOneProduct(data: $data, query: $query) {
    _id
    available
    barcode
    categories {
      _id
      name
    }
    gallery
    image
    name
    price
    productType
    properties
    quantity
    salePrice
    status
    tags
    unit
  }
}
    `;

export function useUpdateOneProductMutation() {
  return Urql.useMutation<UpdateOneProductMutation, UpdateOneProductMutationVariables>(UpdateOneProductDocument);
};
export const GetUsersDocument = gql`
    query GetUsers($where: UserQueryInput, $take: Int, $skip: Int, $orderBy: [UserOrderByInput!]) {
  users(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {
    address
    email
    fullName
    id
    password
    roles
    gender
    roles
  }
  aggregateUsers(where: $where) {
    _count
  }
}
    `;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUsersQuery>({ query: GetUsersDocument, ...options });
};
export const DeleteUserDocument = gql`
    mutation DeleteUser($where: UserQueryUniqueInput!) {
  deleteOneUser(where: $where) {
    id
  }
}
    `;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument);
};
export const GetRolesDocument = gql`
    query GetRoles {
  Role {
    description
    name
  }
}
    `;

export function useGetRolesQuery(options?: Omit<Urql.UseQueryArgs<GetRolesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetRolesQuery>({ query: GetRolesDocument, ...options });
};
export const CreateUserDocument = gql`
    mutation CreateUser($data: UserInsertInput!) {
  insertOneUser(data: $data) {
    id
    roles
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const FindDetailUserDocument = gql`
    query FindDetailUser($where: UserQueryUniqueInput!) {
  user(where: $where) {
    address
    picture
    email
    fullName
    id
    password
    roles
    gender
  }
}
    `;

export function useFindDetailUserQuery(options: Omit<Urql.UseQueryArgs<FindDetailUserQueryVariables>, 'query'>) {
  return Urql.useQuery<FindDetailUserQuery>({ query: FindDetailUserDocument, ...options });
};
export const UpdateUserDocument = gql`
    mutation UpdateUser($where: UserQueryUniqueInput!, $data: UpdateUserInput!) {
  updateOneUser(where: $where, data: $data) {
    address
    picture
    email
    fullName
    id
    password
    roles
    gender
  }
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};
export const GetListRoleDocument = gql`
    query GetListRole {
  Role {
    name
    description
  }
}
    `;

export function useGetListRoleQuery(options?: Omit<Urql.UseQueryArgs<GetListRoleQueryVariables>, 'query'>) {
  return Urql.useQuery<GetListRoleQuery>({ query: GetListRoleDocument, ...options });
};