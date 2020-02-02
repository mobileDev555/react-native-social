import gql from 'graphql-tag';
import USER_INFO_FRAGMENT from '../fragments/user_info';

export default gql`
  query GetComments(
    $post_id: ID!
    $comments_count: Int!
    $replies_count: Int!
    $comments_page: Int!
    $replies_page: Int!
  ) {
    getComments(
      post_id: $post_id
      first: $comments_count
      page: $comments_page
    ) {
      data {
        id
        text
        user {
          ...UserInfo
        }
        replies(first: $replies_count, page: $replies_page) {
          data {
            id
            text
            user {
              ...UserInfo
            }
          }
        }
      }
    }
  }

  ${USER_INFO_FRAGMENT}
`;
