/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserById
// ====================================================

export interface GetUserById_getUserById_country {
  __typename: "Country";
  id: string;
  name: string;
  phonecode: string;
  shortname: string;
}

export interface GetUserById_getUserById {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  email: string;
  mobile: string;
  language: string | null;
  avatar: string | null;
  bio: string | null;
  country: GetUserById_getUserById_country | null;
  is_follower: boolean;
  is_following: boolean;
}

export interface GetUserById {
  getUserById: GetUserById_getUserById | null;
}

export interface GetUserByIdVariables {
  user_id: string;
}
