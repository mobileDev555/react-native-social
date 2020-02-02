import {InMemoryCache} from 'apollo-boost';

export const cache = new InMemoryCache();

cache.writeData({
  data: {
    initialScreen: 'Login',
    country: {
      id: 'e1c417cf-550a-4457-b744-1db7fd5c86fb',
      name: 'India',
      phonecode: '91',
      shortname: 'IN',
      __typename: 'Country',
    },
  },
});
