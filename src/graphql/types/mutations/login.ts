import gql from 'graphql-tag';
import USER_INFO_FRAGMENT from '../fragments/user_info';

export default gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        ...UserInfo
      }
    }
  }

  ${USER_INFO_FRAGMENT}
`;
