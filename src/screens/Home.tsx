import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {FocusContainer} from './FocusContainer';
import {FunContainer} from './FunContainer';

export const Home = createMaterialTopTabNavigator(
  {
    Focus: FocusContainer,
    Fun: FunContainer,
  },
  {
    defaultNavigationOptions: {
      tabBarVisible: false,
      swipeEnabled: true,
    },
  },
);
