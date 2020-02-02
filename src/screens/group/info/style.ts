import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../../libs/theme';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom : 40,
    alignItems: 'center',
  },
  backImg: {
    position: 'absolute',
    top: -12,
    width: WINDOW_WIDTH + 14,
    height: WINDOW_WIDTH / 1.12,
    resizeMode:'stretch'
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
  avatar : {
      marginTop: -60,
    width: 120,
    height: 120,
    backgroundColor: '#DDD',
    borderRadius: 60,
    shadowColor: 'rgba(47, 12, 237, 0.32)',
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 13,
    elevation: 5,
  },
  logoText: {
    fontFamily: theme.fonts.QuicksandBold,
    marginTop: 20,
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
  },
  inputView: {
    justifyContent: 'center',
  },
  textInput: {
    width: WINDOW_WIDTH - 70,
    height: 30,
    marginTop: 10,
    shadowColor: 'rgba(0, 0, 0, 0.14)',
    shadowOffset: {width: 3, height: 0},
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.14)',
    paddingLeft: 30,
    paddingRight: 20,
    paddingBottom: 0,
    fontFamily: 'Aileron',
    fontSize: 15,
    fontWeight: '400',
    elevation: 3,
  },
  boxSquare: {
      height: 50,
    width: WINDOW_WIDTH-80,
    marginHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: 16,
    marginTop: 12,
    shadowColor: 'rgba(47, 128, 237, 0.32)',
    shadowOffset: { width: 3, height: 0 },
    shadowRadius: 13,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 3
},
boxSquare2: {
    width: WINDOW_WIDTH-80,
    height: 60,
    marginHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 15,
    
    borderRadius: 8,
    backgroundColor: '#EE9CA8',
},
createText: {
    color: '#2f80ed',
    fontFamily: 'Aileron',
    fontSize: 14,
    fontWeight: '400',
},
avatar2: {
    width: 24,
    height: 24,
    marginHorizontal: 5
},
round: {
    width: 22,
    height: 22,
    shadowColor: 'rgba(47, 128, 237, 0.55)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    backgroundColor: '#2f80ed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
},
roundText: {
    color: '#ffffff',
    fontFamily: 'Aileron',
    fontSize: 12,
    fontWeight: '300',
},
count: {
    color: '#b4b2b2',
    fontFamily: 'Aileron',
    fontSize: 14,
    fontWeight: '300',
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
  leaveBtn:{
      width: WINDOW_WIDTH/3,
      height: 40,
      backgroundColor:'#E9516A',
      flexDirection: 'row',
      alignItems:'center',
      borderRadius: 5,
  }
});
