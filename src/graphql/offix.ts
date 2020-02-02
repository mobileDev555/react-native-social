import AsyncStorage from '@react-native-community/async-storage';
import {ApolloLink} from 'apollo-boost';
import {setContext} from 'apollo-link-context';
import {HttpLink} from 'apollo-link-http';
import {ApolloOfflineClient} from 'offix-client';
import {httpUrlProd} from '../libs/vars';
import {cache} from './cache';
import ReactNativeNetworkStatus from './network';
import {pusherLink} from './pusher';
import {resolvers} from './resolvers';
import {cacheStorage} from './storage';
import {typeDefs} from './typeDefs';

const authLink = setContext(async (req, {headers}) => {
  const token = await AsyncStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = new HttpLink({
  uri: httpUrlProd,
});

const link = ApolloLink.from([authLink, pusherLink, httpLink]);

export default new ApolloOfflineClient({
  link,
  cache,
  offlineStorage: cacheStorage,
  cacheStorage: cacheStorage,
  networkStatus: new ReactNativeNetworkStatus(),
  retryOptions: {
    attempts: {max: Infinity},
  },
  typeDefs,
  resolvers,
});
