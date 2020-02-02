import gql from 'graphql-tag';
import POST_INFO_FRAGMENT from '../fragments/post_info';

export default gql`
  query GetPostsByCategory($category_id: ID!, $first: Int!) {
    getPostsByCategory(category_id: $category_id, first: $first) {
      paginatorInfo {
        count
        hasMorePages
      }
      data {
        ...PostInfo
      }
    }
  }

  ${POST_INFO_FRAGMENT}
`;
