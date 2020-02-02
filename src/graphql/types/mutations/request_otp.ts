import gql from 'graphql-tag';

export default gql`
  mutation RequestOtp($mobile: String!) {
    requestOtp(mobile: $mobile)
  }
`;
