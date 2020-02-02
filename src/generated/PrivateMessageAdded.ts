/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: PrivateMessageAdded
// ====================================================

export interface PrivateMessageAdded_privateMessageAdded_sender {
  __typename: "User";
  id: string;
  name: string;
  avatar: string | null;
}

export interface PrivateMessageAdded_privateMessageAdded {
  __typename: "Chat";
  id: string;
  text: string;
  sender: PrivateMessageAdded_privateMessageAdded_sender;
}

export interface PrivateMessageAdded {
  privateMessageAdded: PrivateMessageAdded_privateMessageAdded;
}
