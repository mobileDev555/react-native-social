/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PrivateChatroom
// ====================================================

export interface PrivateChatroom_private_chatroom_subscribers {
  __typename: "User";
  id: string;
  name: string;
  avatar: string | null;
}

export interface PrivateChatroom_private_chatroom_chats_sender {
  __typename: "User";
  id: string;
  name: string;
  avatar: string | null;
}

export interface PrivateChatroom_private_chatroom_chats {
  __typename: "Chat";
  id: string;
  text: string;
  sender: PrivateChatroom_private_chatroom_chats_sender;
}

export interface PrivateChatroom_private_chatroom {
  __typename: "Chatroom";
  id: string;
  chatroom_name: string;
  chatroom_type: string;
  subscribers: PrivateChatroom_private_chatroom_subscribers[];
  chats: PrivateChatroom_private_chatroom_chats[];
}

export interface PrivateChatroom {
  private_chatroom: PrivateChatroom_private_chatroom;
}

export interface PrivateChatroomVariables {
  friend_id: string;
}
