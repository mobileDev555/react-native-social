import {GET_INITIAL_SCREEN, GET_SELECTED_COUNTRY} from './query';

export const resolvers = {
  Mutation: {
    setInitialScreen: (_root: any, {initialScreen}: any, {cache}: any) => {
      cache.writeQuery({
        query: GET_INITIAL_SCREEN,
        data: {initialScreen},
      });

      return initialScreen;
    },
    setSelectedCountry: (_root: any, {country}: any, {cache}: any) => {
      cache.writeQuery({
        query: GET_SELECTED_COUNTRY,
        data: {country},
      });

      return country;
    },
  },
};
