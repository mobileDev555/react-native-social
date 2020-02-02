/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VerifyOtp
// ====================================================

export interface VerifyOtp_verifyOtp_user_country {
  __typename: "Country";
  id: string;
  name: string;
  phonecode: string;
  shortname: string;
}

export interface VerifyOtp_verifyOtp_user {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  email: string;
  mobile: string;
  language: string | null;
  avatar: string | null;
  bio: string | null;
  country: VerifyOtp_verifyOtp_user_country | null;
  is_follower: boolean;
  is_following: boolean;
}

export interface VerifyOtp_verifyOtp {
  __typename: "Auth";
  token: string;
  user: VerifyOtp_verifyOtp_user;
}

export interface VerifyOtp {
  verifyOtp: VerifyOtp_verifyOtp;
}

export interface VerifyOtpVariables {
  mobile: string;
  otp: number;
}
