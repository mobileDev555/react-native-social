import gql from 'graphql-tag';

export default gql`
  mutation ToggleFavorite($post_id: ID!) {
    toggleFavorite(post_id: $post_id)
  }
`;
