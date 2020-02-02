/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register_user_country {
  __typename: "Country";
  id: string;
  name: string;
  phonecode: string;
  shortname: string;
}

export interface Register_register_user {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  email: string;
  mobile: string;
  language: string | null;
  avatar: string | null;
  bio: string | null;
  country: Register_register_user_country | null;
  is_follower: boolean;
  is_following: boolean;
}

export interface Register_register {
  __typename: "Auth";
  token: string;
  user: Register_register_user;
}

export interface Register {
  register: Register_register;
}

export interface RegisterVariables {
  email: string;
  password: string;
  name: string;
  mobile: string;
  country_id: string;
}
