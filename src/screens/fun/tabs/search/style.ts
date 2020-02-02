import {StyleSheet, Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  inputView: {
    justifyContent: 'center',
  },
  textInput: {
    width: WINDOW_WIDTH - 24,
    height: 50,
    marginTop: 0,
    shadowColor: 'rgba(0, 0, 0, 0.14)',
    shadowOffset: {width: 3, height: 0},
    shadowRadius: 13,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.14)',
    paddingLeft: 50,
    paddingRight: 20,
    fontFamily: 'Aileron',
    fontSize: 15,
    fontWeight: '400',
  },
  inputImg: {
    position: 'absolute',
    width: 20,
    height: 20,
    bottom: 16,
    left: 16,
  },
  notice: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#f0f0f0',
    top: -8,
    paddingHorizontal: 8,
  },
  noticeText: {
    color: '#cecece',
    fontFamily: 'Aileron',
    fontSize: 13,
    fontWeight: '400',
  },
  hr: {
    marginTop: 20,
    marginBottom: -20,
    width: WINDOW_WIDTH - 24,
    height: 1,
    backgroundColor: '#cecece',
  },
  follow: {
    width: 60,
    height: 30,
    position: 'absolute',
    right: 12,
    top: -12,
  },
  boxImg: {
    width: WINDOW_WIDTH / 2 - 12,
    height: 100,
    // borderRadius:22
  },
  linearGradient: {
    width: WINDOW_WIDTH / 2 - 24,
    height: 26,
    marginLeft: 6,
    marginTop: 4,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ffffff',
    shadowOffset: {width: -5, height: 0},
    shadowRadius: 0,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  search: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  searchView: {
    marginTop: 50,
    width: WINDOW_WIDTH / 2 - 12,
    height: 100,
  },
});
