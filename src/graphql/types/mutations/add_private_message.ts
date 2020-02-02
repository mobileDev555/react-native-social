import gql from 'graphql-tag';

export default gql`
  mutation addPrivateMessage($id: ID!, $text: String!, $chatroom_id: ID!) {
    addPrivateMessage(id: $id, text: $text, chatroom_id: $chatroom_id) {
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
