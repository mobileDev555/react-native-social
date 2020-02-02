import gql from 'graphql-tag';
import USER_INFO_FRAGMENT from '../fragments/user_info';

export default gql`
  mutation Register(
    $email: String!
    $password: String!
    $name: String!
    $mobile: String!
    $country_id: ID!
  ) {
    register(
      email: $email
      password: $password
      name: $name
      mobile: $mobile
      country_id: $country_id
    ) {
      token
      user {
        ...UserInfo
      }
    }
  }

  ${USER_INFO_FRAGMENT}
`;
