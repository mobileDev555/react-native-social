import gql from 'graphql-tag';

export default gql`
  query LoadCategories {
    categories {
      id
      name
      background_image
      background_color
    }
  }
`;
