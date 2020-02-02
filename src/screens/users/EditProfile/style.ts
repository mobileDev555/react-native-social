import {Dimensions, StyleSheet} from 'react-native';
import theme from '../../../libs/theme';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  backImg: {
    position: 'absolute',
    top: -12,
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH / 1.16,
  },
  editImage:{
      marginTop : -40,
      marginLeft: 80,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#FFF'
  },
  editImageInput:{
    marginTop : -40,
    marginLeft: WINDOW_WIDTH- 110,
  width: 30,
  height: 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 15,
  backgroundColor: '#FFF'
  },
  editImageInput2:{
    marginTop : -60,
    marginLeft: WINDOW_WIDTH- 110,
  width: 30,
  height: 30,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 15,
  backgroundColor: '#FFF',
  marginBottom: 20

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
    shadowColor: 'rgba(0, 0, 0, 0.14)',
    shadowOffset: {width: 3, height: 0},
    shadowRadius: 13,
    elevation: 3
  },
  
  textInput: {
    width: WINDOW_WIDTH - 70,
    height: 50,
    marginTop: 20,
    
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.14)',
    paddingLeft: 10,
    paddingRight: 50,
    fontFamily: 'Aileron',
    fontSize: 12,
    backgroundColor: '#FFF', 
    fontWeight: '700',
  },
  textInput2: {
    width: WINDOW_WIDTH - 70,
    height: 100,
    marginTop: 20,
    
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.14)',
    paddingLeft: 10,
    paddingRight: 50,
    fontFamily: 'Aileron',
    fontSize: 12,
    backgroundColor: '#FFF', 
    fontWeight: '700',
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
  savebutton: {
    marginTop: 20,
    width: (WINDOW_WIDTH - 100)/2,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button : {
    width: (WINDOW_WIDTH - 100)/2,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button2 : {
    width: (WINDOW_WIDTH - 100)/2,
    height: 50,
    marginLeft:20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
    , borderWidth: 2, borderColor: '#3082ed'
  },
  touch:{
    width: (WINDOW_WIDTH - 130)/2,
    height: 50,
    justifyContent:'center', alignItems:'center', flexDirection:'row'
  }

});
