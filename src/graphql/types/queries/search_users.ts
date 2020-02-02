import gql from 'graphql-tag';
import USER_INFO_FRAGMENT from '../fragments/user_info';

export default gql`
  query SearchUsers($keywords: String!, $first: Int!, $page: Int) {
    searchUsers(keywords: $keywords, first: $first, page: $page) {
      data {
        ...UserInfo
      }
      paginatorInfo {
        total
      }
    }
  }

  ${USER_INFO_FRAGMENT}
`;
