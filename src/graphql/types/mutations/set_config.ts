import gql from 'graphql-tag';

export default gql`
  mutation SetConfig($id: ID!, $country_id: ID, $initial_screen: String) {
    setConfig(
      id: $id
      country_id: $country_id
      initial_screen: $initial_screen
    ) {
      id
      device_id
      initial_screen
      country {
        id
        name
        shortname
        phonecode
      }
    }
  }
`;
