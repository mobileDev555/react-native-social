import {createStackNavigator} from 'react-navigation-stack';
import {Login} from '../screens/auth/Login';
import {Register} from '../screens/auth/Register';
import {RequestOtp} from '../screens/auth/RequestOtp';
import {SelectCountry} from '../screens/auth/SelectCountry';
import {SelectLanguage} from '../screens/auth/SelectLanguage';
import {VerifyOtp} from '../screens/auth/VerifyOtp';
import Chat from '../screens/chat';
import {Groups} from '../screens/focus/tabs/groups';
import {Scoreboard} from '../screens/focus/tabs/scoreboard';
import {Timer} from '../screens/focus/tabs/timer';
import {Bazaar} from '../screens/fun/tabs/bazaar';
import {Feeds} from '../screens/fun/tabs/feeds';
import {Notifications} from '../screens/fun/tabs/notifications';
import {Search} from '../screens/fun/tabs/search';
import {GroupInfo} from '../screens/group/info';
import {Home} from '../screens/Home';
import {EditProfile} from '../screens/users/EditProfile';
import ViewProfile from '../screens/users/ViewProfile';
import MyProfile from '../screens/users/ViewProfile/myprofile';
import {Conversation} from '../screens/fun/tabs/conversation';

const getStackNavigator = (initialRouteName: string) => {
  return createStackNavigator(
    {
      Home: {screen: Home},
      Login: {screen: Login},
      Register: {screen: Register},
      SelectLanguage: {screen: SelectLanguage},
      SelectCountry: {screen: SelectCountry},
      RequestOtp: {screen: RequestOtp},
      VerifyOtp: {screen: VerifyOtp},
      ViewProfile: {screen: ViewProfile},
      EditProfile: {screen: EditProfile},
      Chat: {screen: Chat},
      GroupInfo: {screen: GroupInfo},
      MyProfile: {screen: MyProfile},
      Groups: {screen: Groups},
      Scoreboard: {screen: Scoreboard},
      Timer: {screen: Timer},
      Bazaar: {screen: Bazaar},
      Feeds: {screen: Feeds},
      Conversation: {screen: Conversation},
      Notifications: {screen: Notifications},
      Search: {screen: Search},
    },
    {
      initialRouteName,
      headerMode: 'none',
    },
  );
};

export default getStackNavigator;
