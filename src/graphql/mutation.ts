import {gql} from 'apollo-boost';

export const SET_INITIAL_SCREEN = gql`
  mutation SetInitialScreen($initialScreen: String) {
    setInitialScreen(initialScreen: $initialScreen) @client
  }
`;

export const SET_SELECTED_COUNTRY = gql`
  mutation SetSelectedCountry($country: Country) {
    setSelectedCountry(country: $country) @client
  }
`;
