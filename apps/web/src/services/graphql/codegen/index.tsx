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
  name?: InputMaybe<Scalars['String']>;
};

export type CouponQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CouponUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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
  deleteManyCarts: Cart;
  deleteManyCategories: Category;
  deleteManyCoupons: Coupon;
  deleteManyInventories: Inventory;
  deleteManyOrders: Order;
  deleteManyPayments: Payment;
  deleteManyProducts: Product;
  deleteManyShipments: Shipment;
  deleteManyUsers: User;
  deleteOneCart: Cart;
  deleteOneCategory: Category;
  deleteOneCoupon: Coupon;
  deleteOneInventory: Inventory;
  deleteOneOrder: Order;
  deleteOnePayment: Payment;
  deleteOneProduct: Product;
  deleteOneShipment: Shipment;
  deleteOneUser: User;
  forgotPassword: Scalars['String'];
  insertManyCarts: Cart;
  insertManyCategories: Category;
  insertManyCoupons: Coupon;
  insertManyInventories: Inventory;
  insertManyOrders: Order;
  insertManyPayments: Payment;
  insertManyProducts: Product;
  insertManyShipments: Shipment;
  insertManyUsers: User;
  insertOneCart: Cart;
  insertOneCategory: Category;
  insertOneCoupon: Coupon;
  insertOneInventory: Inventory;
  insertOneOrder: Order;
  insertOnePayment: Payment;
  insertOneProduct: Product;
  insertOneShipment: Shipment;
  insertOneUser: User;
  login: Token;
  resetPassword: Scalars['String'];
  signup: Token;
  updateManyCarts: Cart;
  updateManyCategories: Category;
  updateManyCoupons: Coupon;
  updateManyInventories: Inventory;
  updateManyOrders: Order;
  updateManyPayments: Payment;
  updateManyProducts: Product;
  updateManyShipments: Shipment;
  updateManyUsers: User;
  updateOneCart: Cart;
  updateOneCategory: Category;
  updateOneCoupon: Coupon;
  updateOneInventory: Inventory;
  updateOneOrder: Order;
  updateOnePayment: Payment;
  updateOneProduct: Product;
  updateOneShipment: Shipment;
  updateOneUser: User;
  upsertOneCart: Cart;
  upsertOneCategory: Category;
  upsertOneCoupon: Coupon;
  upsertOneInventory: Inventory;
  upsertOneOrder: Order;
  upsertOnePayment: Payment;
  upsertOneProduct: Product;
  upsertOneShipment: Shipment;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationDeleteManyCartsArgs = {
  query?: InputMaybe<CartQueryInput>;
};


export type MutationDeleteManyCategoriesArgs = {
  query?: InputMaybe<CategoryQueryInput>;
};


export type MutationDeleteManyCouponsArgs = {
  query?: InputMaybe<CouponQueryInput>;
};


export type MutationDeleteManyInventoriesArgs = {
  query?: InputMaybe<InventoryQueryInput>;
};


export type MutationDeleteManyOrdersArgs = {
  query?: InputMaybe<OrderQueryInput>;
};


export type MutationDeleteManyPaymentsArgs = {
  query?: InputMaybe<PaymentQueryInput>;
};


export type MutationDeleteManyProductsArgs = {
  query?: InputMaybe<ProductQueryInput>;
};


export type MutationDeleteManyShipmentsArgs = {
  query?: InputMaybe<ShipmentQueryInput>;
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


export type MutationDeleteOneInventoryArgs = {
  query: InventoryQueryInput;
};


export type MutationDeleteOneOrderArgs = {
  query: OrderQueryInput;
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


export type MutationInsertManyCartsArgs = {
  data: Array<CartInsertInput>;
};


export type MutationInsertManyCategoriesArgs = {
  data: Array<CategoryInsertInput>;
};


export type MutationInsertManyCouponsArgs = {
  data: Array<CouponInsertInput>;
};


export type MutationInsertManyInventoriesArgs = {
  data: Array<InventoryInsertInput>;
};


export type MutationInsertManyOrdersArgs = {
  data: Array<OrderInsertInput>;
};


export type MutationInsertManyPaymentsArgs = {
  data: Array<PaymentInsertInput>;
};


export type MutationInsertManyProductsArgs = {
  data: Array<ProductInsertInput>;
};


export type MutationInsertManyShipmentsArgs = {
  data: Array<ShipmentInsertInput>;
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


export type MutationUpdateManyCartsArgs = {
  data: CartUpdateInput;
  query?: InputMaybe<CartQueryInput>;
};


export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateInput;
  query?: InputMaybe<CategoryQueryInput>;
};


export type MutationUpdateManyCouponsArgs = {
  data: CouponUpdateInput;
  query?: InputMaybe<CouponQueryInput>;
};


export type MutationUpdateManyInventoriesArgs = {
  data: InventoryUpdateInput;
  query?: InputMaybe<InventoryQueryInput>;
};


export type MutationUpdateManyOrdersArgs = {
  data: OrderUpdateInput;
  query?: InputMaybe<OrderQueryInput>;
};


export type MutationUpdateManyPaymentsArgs = {
  data: PaymentUpdateInput;
  query?: InputMaybe<PaymentQueryInput>;
};


export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateInput;
  query?: InputMaybe<ProductQueryInput>;
};


export type MutationUpdateManyShipmentsArgs = {
  data: ShipmentUpdateInput;
  query?: InputMaybe<ShipmentQueryInput>;
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


export type MutationUpdateOneInventoryArgs = {
  data: InventoryUpdateInput;
  query: InventoryQueryInput;
};


export type MutationUpdateOneOrderArgs = {
  data: OrderUpdateInput;
  query: OrderQueryInput;
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


export type MutationUpsertOneCartArgs = {
  data: CartInsertInput;
  query?: InputMaybe<CartQueryInput>;
};


export type MutationUpsertOneCategoryArgs = {
  data: CategoryInsertInput;
  query?: InputMaybe<CategoryQueryInput>;
};


export type MutationUpsertOneCouponArgs = {
  data: CouponInsertInput;
  query?: InputMaybe<CouponQueryInput>;
};


export type MutationUpsertOneInventoryArgs = {
  data: InventoryInsertInput;
  query?: InputMaybe<InventoryQueryInput>;
};


export type MutationUpsertOneOrderArgs = {
  data: OrderInsertInput;
  query?: InputMaybe<OrderQueryInput>;
};


export type MutationUpsertOnePaymentArgs = {
  data: PaymentInsertInput;
  query?: InputMaybe<PaymentQueryInput>;
};


export type MutationUpsertOneProductArgs = {
  data: ProductInsertInput;
  query?: InputMaybe<ProductQueryInput>;
};


export type MutationUpsertOneShipmentArgs = {
  data: ShipmentInsertInput;
  query?: InputMaybe<ShipmentQueryInput>;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['String'];
  coupon: Coupon;
  customer: Customer;
  deliveryAddress: Scalars['String'];
  deliveryFee: Scalars['Int'];
  deliveryStatus: Scalars['String'];
  items: Array<OrderItem>;
  status: Scalars['String'];
  total: Scalars['Int'];
};

export type OrderInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  _id: Scalars['String'];
  product: Product;
  quantity?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
};

export type OrderQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type OrderUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Payment = {
  __typename?: 'Payment';
  _id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type PaymentInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type PaymentQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type PaymentUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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
  price?: Maybe<Scalars['Float']>;
  productType: Scalars['String'];
  properties?: Maybe<Scalars['JSONObject']>;
  quantity?: Maybe<Scalars['Int']>;
  salePrice?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  unit?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Product>>;
};

export type ProductInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  properties?: InputMaybe<Scalars['JSONObject']>;
};

export type ProductQueryInput = {
  _id?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  categories_in?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  properties?: InputMaybe<Scalars['JSONObject']>;
};

export type ProductUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  properties?: InputMaybe<Scalars['JSONObject']>;
};

export type Query = {
  __typename?: 'Query';
  Role: Array<Role>;
  aggregateUsers: UserAggregate;
  cart: Cart;
  carts: Array<Cart>;
  categories: Array<Category>;
  category: Category;
  coupon: Coupon;
  coupons: Array<Coupon>;
  inventories: Array<Inventory>;
  inventory: Inventory;
  me: User;
  order: Order;
  orders: Array<Order>;
  payment: Payment;
  payments: Array<Payment>;
  product: Product;
  products: Array<Product>;
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


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: number, email: string, fullName?: string | null, picture?: string | null, roles?: Array<string> | null } };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', _id: string, name?: string | null, price?: number | null, available?: boolean | null, barcode?: string | null, categories?: Array<{ __typename?: 'Category', name?: string | null }> | null }> };


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
    id
    email
    fullName
    picture
    roles
  }
}
    `;

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const ProductsDocument = gql`
    query Products {
  products {
    _id
    name
    price
    available
    barcode
    categories {
      name
    }
  }
}
    `;

export function useProductsQuery(options?: Omit<Urql.UseQueryArgs<ProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<ProductsQuery>({ query: ProductsDocument, ...options });
};