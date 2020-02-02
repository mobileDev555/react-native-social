import gql from 'graphql-tag';

export default gql`
  query LoadCountries {
    countries {
      id
      name
      phonecode
      shortname
    }
  }
`;
