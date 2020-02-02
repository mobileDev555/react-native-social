/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LoadCountries
// ====================================================

export interface LoadCountries_countries {
  __typename: "Country";
  id: string;
  name: string;
  phonecode: string;
  shortname: string;
}

export interface LoadCountries {
  countries: LoadCountries_countries[];
}
