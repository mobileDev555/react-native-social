import gql from 'graphql-tag';
import USER_INFO_FRAGMENT from '../fragments/user_info';

export default gql`
  query GetAuthUser {
    me {
      ...UserInfo
    }
  }

  ${USER_INFO_FRAGMENT}
`;
