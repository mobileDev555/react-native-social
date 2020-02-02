/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFeeds
// ====================================================

export interface GetFeeds_feeds_paginatorInfo {
  __typename: "PaginatorInfo";
  /**
   * Total count of available items in the page.
   */
  count: number;
  /**
   * If collection has more pages.
   */
  hasMorePages: boolean;
}

export interface GetFeeds_feeds_data {
  __typename: "Feed";
  id: string;
}

export interface GetFeeds_feeds {
  __typename: "FeedPaginator";
  paginatorInfo: GetFeeds_feeds_paginatorInfo;
  data: GetFeeds_feeds_data[];
}

export interface GetFeeds {
  feeds: GetFeeds_feeds | null;
}

export interface GetFeedsVariables {
  page: number;
  first: number;
}
