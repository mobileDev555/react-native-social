/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostInfo
// ====================================================

export interface PostInfo_attachments {
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

export interface PostInfo_owner {
  __typename: "User";
  id: string;
  name: string;
  avatar: string | null;
}

export interface PostInfo_category {
  __typename: "Category";
  id: string;
  name: string;
}

export interface PostInfo {
  __typename: "Post";
  id: string;
  description: string | null;
  attachments: PostInfo_attachments[];
  owner: PostInfo_owner;
  category: PostInfo_category;
  is_favorited: boolean;
  published: boolean | null;
  when: string;
  created_at: any;
  updated_at: any;
}
