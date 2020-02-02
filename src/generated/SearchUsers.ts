/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchUsers
// ====================================================

export interface SearchUsers_searchUsers_data_country {
  __typename: "Country";
  id: string;
  name: string;
  phonecode: string;
  shortname: string;
}

export interface SearchUsers_searchUsers_data {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  email: string;
  mobile: string;
  language: string | null;
  avatar: string | null;
  bio: string | null;
  country: SearchUsers_searchUsers_data_country | null;
  is_follower: boolean;
  is_following: boolean;
}

export interface SearchUsers_searchUsers_paginatorInfo {
  __typename: "PaginatorInfo";
  /**
   * Total items available in the collection.
   */
  total: number;
}

export interface SearchUsers_searchUsers {
  __typename: "UserPaginator";
  data: SearchUsers_searchUsers_data[];
  paginatorInfo: SearchUsers_searchUsers_paginatorInfo;
}

export interface SearchUsers {
  searchUsers: SearchUsers_searchUsers | null;
}

export interface SearchUsersVariables {
  keywords: string;
  first: number;
  page?: number | null;
}
