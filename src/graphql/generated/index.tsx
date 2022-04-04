import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Admin = {
  __typename?: 'Admin';
  _id: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  hashedPassword: Scalars['String'];
  hashedRt: Scalars['String'];
  roles: Array<Scalars['String']>;
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
  userId: Scalars['String'];
};

export type Brand = {
  __typename?: 'Brand';
  _id: Scalars['String'];
  name: Scalars['String'];
};

export type Cart = {
  __typename?: 'Cart';
  product: Product;
  quantity: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['String'];
  ancestors: Array<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
};

export type CreateAdminInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
};

export type CreateShippingCompanyInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateAdmin: Admin;
  DeleteAdmin: Admin;
  SellerAccountStatus: User;
  UpdateAdmin: Admin;
  adminLogin: Auth;
  createSeller: Seller;
  createShippingCompany: ShippingCompany;
  deleteShippingCompany: ShippingCompany;
  handleSellerRequest: User;
  logOut: Scalars['Boolean'];
  signIn: Auth;
  signUp: Auth;
  superAdminLogin: Auth;
  superAdminLogout: SuperAdmin;
  updateShippingCompany: ShippingCompany;
};


export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput;
};


export type MutationDeleteAdminArgs = {
  id: Scalars['String'];
};


export type MutationSellerAccountStatusArgs = {
  SellerAccountStatusInput: SellerAccountStatusInput;
};


export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput;
};


export type MutationAdminLoginArgs = {
  signinInput: SignInInput;
};


export type MutationCreateSellerArgs = {
  sellerInput: SellerInput;
};


export type MutationCreateShippingCompanyArgs = {
  createShippingCompanyInput: CreateShippingCompanyInput;
};


export type MutationDeleteShippingCompanyArgs = {
  id: Scalars['String'];
};


export type MutationHandleSellerRequestArgs = {
  sellerRequestInput: SellerRequestInput;
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationSuperAdminLoginArgs = {
  signInInput: SignInInput;
};


export type MutationUpdateShippingCompanyArgs = {
  updateShippingCompanyInput: UpdateShippingCompanyInput;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['String'];
  userId: User;
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['String'];
  brand: Brand;
  category: Category;
  description: Scalars['String'];
  pictures: Array<Scalars['String']>;
  price: Scalars['Float'];
  status: Scalars['String'];
  store: Store;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAdminById: Admin;
  getAll: Scalars['String'];
  getAllAdmins: Array<Admin>;
  getAllShippingCompanies: Array<ShippingCompany>;
  getShippingCompanyById: ShippingCompany;
  testStore: Scalars['String'];
};


export type QueryGetAdminByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetShippingCompanyByIdArgs = {
  id: Scalars['String'];
};

export type Seller = {
  __typename?: 'Seller';
  _id: Scalars['String'];
  email: Scalars['String'];
  fiscale: Scalars['String'];
  fullName: Scalars['String'];
  hash: Scalars['String'];
  qtore: Store;
  role: Scalars['String'];
  status: Scalars['String'];
};

export type SellerAccountStatusInput = {
  sellerStatus: Scalars['String'];
  userId: Scalars['String'];
};

export type SellerRequestInput = {
  request: Scalars['String'];
  userId: Scalars['String'];
};

export type ShippingCompany = {
  __typename?: 'ShippingCompany';
  _id: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Store = {
  __typename?: 'Store';
  _id: Scalars['String'];
  coverPic: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  profilePic: Scalars['String'];
  seller: Seller;
};

export type SuperAdmin = {
  __typename?: 'SuperAdmin';
  _id: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  hashedPassword: Scalars['String'];
  hashedRt: Scalars['String'];
  permissions: Array<Scalars['String']>;
};

export type UpdateAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};

export type UpdateShippingCompanyInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  address: Scalars['String'];
  cart: Cart;
  city: Scalars['String'];
  country: Scalars['String'];
  document: Scalars['String'];
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  hashedRt: Scalars['String'];
  name: Scalars['String'];
  orders: Array<Order>;
  phone: Scalars['String'];
  profilePic: Scalars['String'];
  request: Scalars['String'];
  roles: Array<Scalars['String']>;
  sellerStatus: Scalars['String'];
  store: Store;
};

export type SellerInput = {
  email: Scalars['String'];
  fiscale: Scalars['String'];
  fullName: Scalars['String'];
  hash: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  status: Scalars['String'];
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type GetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllQuery = { __typename?: 'Query', getAll: string };


export const GetAllDocument = gql`
    query getAll {
  getAll
}
    `;

/**
 * __useGetAllQuery__
 *
 * To run a query within a React component, call `useGetAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllQuery(baseOptions?: Apollo.QueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
      }
export function useGetAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllQuery, GetAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllQuery, GetAllQueryVariables>(GetAllDocument, options);
        }
export type GetAllQueryHookResult = ReturnType<typeof useGetAllQuery>;
export type GetAllLazyQueryHookResult = ReturnType<typeof useGetAllLazyQuery>;
export type GetAllQueryResult = Apollo.QueryResult<GetAllQuery, GetAllQueryVariables>;