import React from 'react';
import {Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Drawer} from './focus/drawer';
import {Groups} from './focus/tabs/groups';
import {Scoreboard} from './focus/tabs/scoreboard';
import {Timer} from './focus/tabs/timer';

const WINDOW_WIDTH = Dimensions.get('window').width;

const FocusTabNavigator = createBottomTabNavigator(
  {
    Groups: {
      screen: Groups,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon
            type="ionicons"
            name="person"
            style={{color: tintColor, fontSize: 28}}
          />
        ),
      },
    },
    Timer: {
      screen: Timer,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon
            type="ionicons"
            name="pause"
            style={{color: tintColor, fontSize: 28}}
          />
        ),
      },
    },
    Scoreboard: {
      screen: Scoreboard,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon
            type="ionicons"
            name="lock"
            style={{color: tintColor, fontSize: 28}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'red',
    },
    initialRouteName: 'Timer',
  },
);

const FocusStackNavigator = createStackNavigator(
  {
    FocusTabNavigator,
  },
  {
    headerLayoutPreset: 'center',
    cardStyle: {flex: 1},
    defaultNavigationOptions: ({navigation}) => {
      return {
        header: null,
      };
    },
  },
);

export const FocusContainer = createDrawerNavigator(
  {
    Main: FocusStackNavigator,
  },
  {
    contentComponent: Drawer,
    drawerWidth: WINDOW_WIDTH * 0.8,
  },
);
