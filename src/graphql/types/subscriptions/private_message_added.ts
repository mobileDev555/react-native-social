import gql from 'graphql-tag';

export default gql`
  subscription PrivateMessageAdded {
    privateMessageAdded {
      id
      text
      sender {
        id
        name
        avatar
      }
    }
  }
`;
