/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPostsByCategory
// ====================================================

export interface GetPostsByCategory_getPostsByCategory_paginatorInfo {
  __typename: "PaginatorInfo";
  /**
   * Total count of available items in the page.
   */
  count: number;
  /**
   * If collection has more pages.
   */
  hasMorePages: boolean;
}

export interface GetPostsByCategory_getPostsByCategory_data_attachments {
  __typename: "Attachment";
  id: string;
  path: string;
  mime: string;
  source: string | null;
  thumbnail: string;
  size: string;
  height: string;
  width: string;
  status: boolean | null;
}

export interface GetPostsByCategory_getPostsByCategory_data_owner {
  __typename: "User";
  id: string;
  name: string;
  avatar: string | null;
}

export interface GetPostsByCategory_getPostsByCategory_data_category {
  __typename: "Category";
  id: string;
  name: string;
}

export interface GetPostsByCategory_getPostsByCategory_data {
  __typename: "Post";
  id: string;
  description: string | null;
  attachments: GetPostsByCategory_getPostsByCategory_data_attachments[];
  owner: GetPostsByCategory_getPostsByCategory_data_owner;
  category: GetPostsByCategory_getPostsByCategory_data_category;
  is_favorited: boolean;
  published: boolean | null;
  when: string;
  created_at: any;
  updated_at: any;
}

export interface GetPostsByCategory_getPostsByCategory {
  __typename: "PostPaginator";
  paginatorInfo: GetPostsByCategory_getPostsByCategory_paginatorInfo;
  data: GetPostsByCategory_getPostsByCategory_data[];
}

export interface GetPostsByCategory {
  getPostsByCategory: GetPostsByCategory_getPostsByCategory | null;
}

export interface GetPostsByCategoryVariables {
  category_id: string;
  first: number;
}
