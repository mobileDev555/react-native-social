import gql from 'graphql-tag';
import USER_INFO_FRAGMENT from '../fragments/user_info';

export default gql`
  mutation EditProfile(
    $name: String
    $language: String
    $dob: String
    $gender: String
    $avatar: String
    $bio: String
    $username: String
  ) {
    editProfile(
      name: $name
      language: $language
      dob: $dob
      gender: $gender
      avatar: $avatar
      bio: $bio
      username: $username
    ) {
      ...UserInfo
    }
  }

  ${USER_INFO_FRAGMENT}
`;
