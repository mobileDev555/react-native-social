import gql from 'graphql-tag';
import USER_INFO_FRAGMENT from '../fragments/user_info';

export default gql`
  query GetUserById($user_id: ID!) {
    getUserById(user_id: $user_id) {
      ...UserInfo
    }
  }

  ${USER_INFO_FRAGMENT}
`;
