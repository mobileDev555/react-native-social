import gql from 'graphql-tag';
import POST_INFO_FRAGMENT from '../fragments/post_info';

export default gql`
  query GetDrafts {
    drafts {
      ...PostInfo
    }
  }

  ${POST_INFO_FRAGMENT}
`;
