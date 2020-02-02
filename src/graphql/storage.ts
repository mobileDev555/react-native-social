import AsyncStorage from '@react-native-community/async-storage';

export const cacheStorage = {
  getItem: async (key: any) => {
    const data = await AsyncStorage.getItem(key);
    if (typeof data === 'string') {
      return JSON.parse(data);
    }
    return data;
  },
  setItem: async (key: any, value: any) => {
    let valueStr = value;
    if (typeof valueStr === 'object') {
      valueStr = JSON.stringify(value);
    }
    return AsyncStorage.setItem(key, valueStr);
  },
  removeItem: async (key: any) => {
    return AsyncStorage.removeItem(key);
  },
};
