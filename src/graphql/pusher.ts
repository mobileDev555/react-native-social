import {Platform} from 'react-native';
import PusherLink from '../libs/pusher';
import {httpUrlProd} from '../libs/vars';

const Pusher =
  Platform.OS === 'web'
    ? require('pusher-js')
    : require('pusher-js/react-native');

const pusher = new Pusher('60d3868f66b0ab455b41', {
  cluster: 'ap2',
  authEndpoint: `${httpUrlProd}/subscriptions/auth`,
});

export const pusherLink = new PusherLink({
  pusher,
});
