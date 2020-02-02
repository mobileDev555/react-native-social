/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addPrivateMessage
// ====================================================

export interface addPrivateMessage_addPrivateMessage_sender {
  __typename: "User";
  id: string;
  name: string;
  avatar: string | null;
}

export interface addPrivateMessage_addPrivateMessage {
  __typename: "Chat";
  id: string;
  text: string;
  sender: addPrivateMessage_addPrivateMessage_sender;
}

export interface addPrivateMessage {
  addPrivateMessage: addPrivateMessage_addPrivateMessage;
}

export interface addPrivateMessageVariables {
  id: string;
  text: string;
  chatroom_id: string;
}
