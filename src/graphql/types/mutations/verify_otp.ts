import gql from 'graphql-tag';
import USER_INFO_FRAGMENT from '../fragments/user_info';

export default gql`
  mutation VerifyOtp($mobile: String!, $otp: Int!) {
    verifyOtp(mobile: $mobile, otp: $otp) {
      token
      user {
        ...UserInfo
      }
    }
  }

  ${USER_INFO_FRAGMENT}
`;
