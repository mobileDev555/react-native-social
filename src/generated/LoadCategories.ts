/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LoadCategories
// ====================================================

export interface LoadCategories_categories {
  __typename: "Category";
  id: string;
  name: string;
  background_image: string | null;
  background_color: string | null;
}

export interface LoadCategories {
  categories: LoadCategories_categories[];
}
