import gql from "graphql-tag";
import FEED_INFO_FRAGMENT from "../fragments/feed_info";

export default gql`
  query GetFeeds($page: Int!, $first: Int!) {
    feeds(page: $page, first: $first) {
      paginatorInfo {
        count
        hasMorePages
      }
      data {
        ...FeedInfo
      }
    }
  }

  ${FEED_INFO_FRAGMENT}
`;
