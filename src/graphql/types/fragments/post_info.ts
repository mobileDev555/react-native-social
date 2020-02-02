import gql from "graphql-tag";

export default gql`
  fragment PostInfo on Post {
    id
    description
    attachments {
      id
      path
      mime
      source
      thumbnail
      size
      height
      width
      status
    }
    owner {
      id
      name
      avatar
    }
    category {
      id
      name
    }
    is_favorited
    published
    when
    created_at
    updated_at
  }
`;
