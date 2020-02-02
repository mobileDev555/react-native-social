import {Dimensions} from 'react-native';

const baseUrlProd = 'https://graphql.pauzr.com';
const httpUrlProd = 'https://graphql.pauzr.com/graphql';
const wsUrlProd = 'wss://graphql.pauzr.com/graphql';

const baseUrlDev = 'https://pauzr-laravel.test';
const httpUrlDev = 'https://pauzr-laravel.test/graphql';
const wsUrlDev = 'wss://pauzr-laravel.test/graphql';

const baseUrl = __DEV__ ? baseUrlDev : baseUrlProd;
const httpUrl = __DEV__ ? httpUrlDev : httpUrlProd;
const wsUrl = __DEV__ ? wsUrlDev : wsUrlProd;

export {baseUrl, httpUrl, wsUrl, httpUrlProd, wsUrlProd};

export const pickerSettings = {
  capturePhoto: {mediaType: 'photo'},
  recordVideo: {mediaType: 'video'},
  galleryFiles: {multiple: true},
};

export const {width, height} = Dimensions.get('window');

export const U = width / 16;
export const u = width / 64;
