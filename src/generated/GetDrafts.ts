/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDrafts
// ====================================================

export interface GetDrafts_drafts_attachments {
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

export interface GetDrafts_drafts_owner {
  __typename: "User";
  id: string;
  name: string;
  avatar: string | null;
}

export interface GetDrafts_drafts_category {
  __typename: "Category";
  id: string;
  name: string;
}

export interface GetDrafts_drafts {
  __typename: "Post";
  id: string;
  description: string | null;
  attachments: GetDrafts_drafts_attachments[];
  owner: GetDrafts_drafts_owner;
  category: GetDrafts_drafts_category;
  is_favorited: boolean;
  published: boolean | null;
  when: string;
  created_at: any;
  updated_at: any;
}

export interface GetDrafts {
  drafts: GetDrafts_drafts[];
}
