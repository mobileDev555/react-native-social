/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetConfig
// ====================================================

export interface SetConfig_setConfig_country {
  __typename: "Country";
  id: string;
  name: string;
  shortname: string;
  phonecode: string;
}

export interface SetConfig_setConfig {
  __typename: "Config";
  id: string;
  device_id: string;
  initial_screen: string;
  country: SetConfig_setConfig_country | null;
}

export interface SetConfig {
  setConfig: SetConfig_setConfig;
}

export interface SetConfigVariables {
  id: string;
  country_id?: string | null;
  initial_screen?: string | null;
}
