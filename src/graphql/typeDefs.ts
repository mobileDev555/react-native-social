import {gql} from 'apollo-boost';

export const typeDefs = gql`
  type Query {
    getInitialScreen: String!
    getSelectedCountry: Country!
  }

  type Mutation {
    setInitialScreen: String!
    setSelectedCountry: Country!
  }
`;
