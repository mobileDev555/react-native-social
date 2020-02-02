import NetInfo from '@react-native-community/netinfo';
import {
  NetworkStatus,
  NetworkStatusChangeCallback,
} from 'apollo-offline-client';

export default class ReactNativeNetworkStatus implements NetworkStatus {
  public onStatusChangeListener(callback: NetworkStatusChangeCallback): void {
    NetInfo.addEventListener((connected: any) => {
      callback.onStatusChange({online: connected});
    });
  }

  public async isOffline(): Promise<boolean> {
    return NetInfo.fetch().then(connected => !connected);
  }
}
