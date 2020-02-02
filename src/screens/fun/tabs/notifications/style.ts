import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingBottom: 20,
    marginTop: 8,
    borderRadius: 8,
    borderBottomColor: '#777',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  avatar2: {
    width: 40,
    height: 46,
    shadowColor: 'rgba(47, 128, 237, 0.33)',
    shadowOffset: {width: 7, height: 0},
    shadowRadius: 9,
    borderRadius: 3,
  },
  createText: {
    color: '#2f80ed',
    fontFamily: 'Aileron',
    fontSize: 14,
    fontWeight: '400',
  },
  count: {
    color: '#b4b2b2',
    fontFamily: 'Aileron',
    fontSize: 14,
    fontWeight: '300',
  },
  lightText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '300',
  },
});
