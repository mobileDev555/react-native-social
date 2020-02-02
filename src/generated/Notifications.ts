/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Notifications
// ====================================================

export interface Notifications_notifications {
  __typename: "Notification";
  id: string;
  type: string;
  notifiable_id: string;
  notifiable_type: string;
  data: any;
  read_at: any | null;
  created_at: any | null;
  updated_at: any | null;
}

export interface Notifications {
  notifications: Notifications_notifications[];
}
