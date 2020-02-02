import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import screens from '../../../../libs/screens';
import {Header} from '../../../../components/header';

export const Conversation = (props: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header {...props} title={'Pauzr'} profile menu />

      <View style={{flex: 1}}>
        <Text>Conversation</Text>

        <Button
          title="show chat"
          onPress={() => props.navigation.push(screens.Chat)}
        />
      </View>
    </SafeAreaView>
  );
};
