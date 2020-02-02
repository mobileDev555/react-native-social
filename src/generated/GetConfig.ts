/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetConfig
// ====================================================

export interface GetConfig_getConfig_country {
  __typename: "Country";
  id: string;
  name: string;
  shortname: string;
  phonecode: string;
}

export interface GetConfig_getConfig {
  __typename: "Config";
  id: string;
  device_id: string;
  initial_screen: string;
  country: GetConfig_getConfig_country | null;
}

export interface GetConfig {
  getConfig: GetConfig_getConfig;
}

export interface GetConfigVariables {
  device_id: string;
}
