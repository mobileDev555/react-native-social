import {gql} from 'apollo-boost';

export const GET_INITIAL_SCREEN = gql`
  query GetInitialScreen @client {
    initialScreen
  }
`;

export const GET_SELECTED_COUNTRY = gql`
  query GetSelectedCountry @client {
    country {
      id
      name
      phonecode
      shortname
    }
  }
`;
