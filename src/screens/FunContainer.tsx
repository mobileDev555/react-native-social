import React from 'react';
import {Icon} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Bazaar} from './fun/tabs/bazaar';
import {Conversation} from './fun/tabs/conversation';
import {Feeds} from './fun/tabs/feeds';
import {Notifications} from './fun/tabs/notifications';
import {Search} from './fun/tabs/search';

const FocusTabNavigator = createBottomTabNavigator(
  {
    Feeds: {
      screen: Feeds,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon
            type="SimpleLineIcons"
            name="grid-on"
            style={{color: tintColor, fontSize: 36}}
          />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon
            type="SimpleLineIcons"
            name="search"
            style={{color: tintColor, fontSize: 36}}
          />
        ),
      },
    },
    Bazaar: {
      screen: Bazaar,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon
            type="SimpleLineIcons"
            name="shop"
            style={{color: tintColor, fontSize: 36}}
          />
        ),
      },
    },
    Conversation: {
      screen: Conversation,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon
            type="Entypo"
            name="chat"
            style={{color: tintColor, fontSize: 36}}
          />
        ),
      },
    },
    Notifications: {
      screen: Notifications,
      navigationOptions: {
        tabBarIcon: ({tintColor}: any) => (
          <Icon
            type="SimpleLineIcons"
            name="favorite"
            style={{color: tintColor, fontSize: 36}}
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
    initialRouteName: 'Bazaar',
  },
);

export const FunContainer = createStackNavigator(
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
