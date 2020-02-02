/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetComments
// ====================================================

export interface GetComments_getComments_data_user_country {
  __typename: "Country";
  id: string;
  name: string;
  phonecode: string;
  shortname: string;
}

export interface GetComments_getComments_data_user {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  email: string;
  mobile: string;
  language: string | null;
  avatar: string | null;
  bio: string | null;
  country: GetComments_getComments_data_user_country | null;
  is_follower: boolean;
  is_following: boolean;
}

export interface GetComments_getComments_data_replies_data_user_country {
  __typename: "Country";
  id: string;
  name: string;
  phonecode: string;
  shortname: string;
}

export interface GetComments_getComments_data_replies_data_user {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  email: string;
  mobile: string;
  language: string | null;
  avatar: string | null;
  bio: string | null;
  country: GetComments_getComments_data_replies_data_user_country | null;
  is_follower: boolean;
  is_following: boolean;
}

export interface GetComments_getComments_data_replies_data {
  __typename: "Reply";
  id: string;
  text: string;
  user: GetComments_getComments_data_replies_data_user;
}

export interface GetComments_getComments_data_replies {
  __typename: "ReplyPaginator";
  data: GetComments_getComments_data_replies_data[];
}

export interface GetComments_getComments_data {
  __typename: "Comment";
  id: string;
  text: string;
  user: GetComments_getComments_data_user;
  replies: GetComments_getComments_data_replies | null;
}

export interface GetComments_getComments {
  __typename: "CommentPaginator";
  data: GetComments_getComments_data[];
}

export interface GetComments {
  getComments: GetComments_getComments | null;
}

export interface GetCommentsVariables {
  post_id: string;
  comments_count: number;
  replies_count: number;
  comments_page: number;
  replies_page: number;
}
