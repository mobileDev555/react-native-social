/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditProfile
// ====================================================

export interface EditProfile_editProfile_country {
  __typename: "Country";
  id: string;
  name: string;
  phonecode: string;
  shortname: string;
}

export interface EditProfile_editProfile {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  email: string;
  mobile: string;
  language: string | null;
  avatar: string | null;
  bio: string | null;
  country: EditProfile_editProfile_country | null;
  is_follower: boolean;
  is_following: boolean;
}

export interface EditProfile {
  editProfile: EditProfile_editProfile;
}

export interface EditProfileVariables {
  name?: string | null;
  language?: string | null;
  dob?: string | null;
  gender?: string | null;
  avatar?: string | null;
  bio?: string | null;
  username?: string | null;
}
