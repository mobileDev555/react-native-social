/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAuthUser
// ====================================================

export interface GetAuthUser_me_country {
  __typename: "Country";
  id: string;
  name: string;
  phonecode: string;
  shortname: string;
}

export interface GetAuthUser_me {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  email: string;
  mobile: string;
  language: string | null;
  avatar: string | null;
  bio: string | null;
  country: GetAuthUser_me_country | null;
  is_follower: boolean;
  is_following: boolean;
}

export interface GetAuthUser {
  me: GetAuthUser_me | null;
}
