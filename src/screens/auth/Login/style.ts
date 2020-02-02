import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../../libs/theme';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImg: {
    position: 'absolute',
    top: -12,
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH / 1.16,
  },
  logoImg: {
    width: 110,
    height: 110,
    marginTop: 70,
    shadowColor: 'rgba(0, 0, 0, 0.27)',
    shadowOffset: {width: 3, height: 0},
    shadowRadius: 6,
  },
  inputImg: {
    position: 'absolute',
    width: 20,
    height: 20,
    bottom: 16,
    left: 16,
  },
  logoText: {
    fontFamily: theme.fonts.QuicksandBold,
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
  },
  inputView: {
    justifyContent: 'center',
  },
  textInput: {
    width: WINDOW_WIDTH - 70,
    height: 50,
    marginTop: 10,
    shadowColor: 'rgba(0, 0, 0, 0.14)',
    shadowOffset: {width: 3, height: 0},
    shadowRadius: 13,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.14)',
    paddingLeft: 10,
    paddingRight: 20,
    fontFamily: 'Aileron',
    fontSize: 15,
    fontWeight: '400',
  },
  iconView: {
    marginTop: 45,
    flexDirection: 'row',
  },
  iconImg: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});
