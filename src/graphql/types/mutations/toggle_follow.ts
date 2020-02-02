import gql from 'graphql-tag';

export default gql`
  mutation ToggleFollow($following_id: ID!) {
    toggleFollow(following_id: $following_id)
  }
`;
