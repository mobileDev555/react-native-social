import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    marginTop: 24,
  },

  linearGradient: {
    flexDirection: 'row',
    width: 80,
    height: 30,
    paddingHorizontal: 12,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginLeft: 50,
    marginRight: 30,
    height: 50,
    shadowColor: 'rgba(47, 128, 237, 0.32)',
    shadowOffset: {width: 3, height: 0},
    shadowRadius: 13,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  avatar: {
    marginTop: 5,
    width: 44,
    height: 36,
    marginLeft: -22,
  },
  trophy: {
    width: 28,
    height: 34,
  },
  txt: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    width: width - 172,
  },
  rightArrow: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightArrowActive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
