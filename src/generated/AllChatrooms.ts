/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllChatrooms
// ====================================================

export interface AllChatrooms_all_chatrooms_subscribers {
  __typename: "User";
  id: string;
  name: string;
  avatar: string | null;
}

export interface AllChatrooms_all_chatrooms {
  __typename: "Chatroom";
  id: string;
  chatroom_type: string;
  chatroom_name: string;
  chatroom_image: string;
  subscribers: AllChatrooms_all_chatrooms_subscribers[];
}

export interface AllChatrooms {
  all_chatrooms: AllChatrooms_all_chatrooms[];
}
