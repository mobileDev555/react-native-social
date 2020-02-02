import React from 'react';
import {Header as HeaderBar} from 'react-native-elements';
import screens from '../../libs/screens';
import theme from '../../libs/theme';
import LinearGradient from 'react-native-linear-gradient';

export const Header = (props: any) => {
  return (
    <HeaderBar
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['#55c9f2', '#3082ed'],
      }}
      placement="center"
      statusBarProps={{
        backgroundColor: 'transparent',
        barStyle: 'light-content',
        translucent: true,
      }}
      barStyle="light-content"
      leftContainerStyle={{}}
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        size: 22,
        onPress: async () => {
          props.navigation.openDrawer();
        },
      }}
      centerContainerStyle={{}}
      centerComponent={{
        text: 'test',
        style: {
          color: '#fff',
          fontSize: 22,
          fontFamily: theme.fonts.TitilliumWebBlack,
        },
      }}
      rightContainerStyle={{}}
      rightComponent={{
        icon: 'person',
        color: '#fff',
        size: 22,
        onPress: async () => {
          props.navigation.push(screens.MyProfile);
        },
      }}
    />
  );
};
