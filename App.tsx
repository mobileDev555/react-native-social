import {ApolloProvider} from '@apollo/react-hooks';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import offixClient from './src/graphql/offix';
import {InitialScreen} from './src/screens/InitialScreen';

const App = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    offixClient
      .init()
      .then(() => setInitialized(true))
      .catch(error => console.log(error));
  }, []);

  if (initialized) {
    return (
      <ApolloProvider client={offixClient}>
        <InitialScreen />
      </ApolloProvider>
    );
  }

  return (
    <ActivityIndicator
      size="small"
      style={{flex: 1, justifyContent: 'center'}}
    />
  );
};

export default App;
