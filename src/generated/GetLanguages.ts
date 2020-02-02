/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLanguages
// ====================================================

export interface GetLanguages_languages {
  __typename: "Language";
  id: string;
  name: string;
  nickname: string;
  shortname: string;
  background_image: string | null;
  background_color: string | null;
}

export interface GetLanguages {
  languages: GetLanguages_languages[];
}
