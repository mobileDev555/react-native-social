import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    flex: 1,
    marginTop: -2,
    paddingTop: 35,
  },
  avatar: {
    width: 110,
    height: 110,
  },
  nameText: {
    color: '#ffffff',
    fontFamily: 'Aileron',
    fontSize: 20,
    fontWeight: '600',
  },
  titleText: {
    color: '#ffffff',
    fontFamily: 'Aileron',
    fontSize: 12,
    fontWeight: '300',
    marginTop: 4,
  },
  menuItem: {
    flexDirection: 'row',
    paddingBottom: 20,
    paddingLeft: 30,
    alignItems: 'center',
  },
  menuItem2: {
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 30,
    borderTopColor: '#dbdbdb',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  menuText: {
    color: '#717171',
    fontFamily: 'Aileron',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 20,
  },
  iconImg: {
    width: 16,
    height: 16,
  },
});
