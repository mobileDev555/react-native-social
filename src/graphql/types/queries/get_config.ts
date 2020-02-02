import gql from 'graphql-tag';

export default gql`
  query GetConfig($device_id: String!) {
    getConfig(device_id: $device_id) {
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
