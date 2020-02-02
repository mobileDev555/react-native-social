import {StyleSheet} from 'react-native';
import theme from '../../../libs/theme';

export const styles = StyleSheet.create({
  language: {
    margin: 2,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: theme.fonts.QuicksandBold,
  },
});
