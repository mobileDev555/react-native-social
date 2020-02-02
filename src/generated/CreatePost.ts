/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AttachmentInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreatePost
// ====================================================

export interface CreatePost_createPost_attachments {
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

export interface CreatePost_createPost_owner {
  __typename: "User";
  id: string;
  name: string;
  avatar: string | null;
}

export interface CreatePost_createPost_category {
  __typename: "Category";
  id: string;
  name: string;
}

export interface CreatePost_createPost {
  __typename: "Post";
  id: string;
  description: string | null;
  attachments: CreatePost_createPost_attachments[];
  owner: CreatePost_createPost_owner;
  category: CreatePost_createPost_category;
  is_favorited: boolean;
  published: boolean | null;
  when: string;
  created_at: any;
  updated_at: any;
}

export interface CreatePost {
  createPost: CreatePost_createPost;
}

export interface CreatePostVariables {
  id: string;
  category_id: string;
  description?: string | null;
  attachments: AttachmentInput[];
}
