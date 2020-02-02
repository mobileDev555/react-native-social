import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'yellow'
	},
	linearGradient: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width
	},
	title: {
		color: '#ffffff',
		fontFamily: 'Aileron',
		fontSize: 30,
		fontWeight: '700',
		marginTop: 20
	},
	text: {
        marginTop: 150,
		color: '#ffffff',
		fontFamily: 'Aileron',
		fontSize: 24,
		fontWeight: '500',
		marginVertical: 5
    },
    text1: {
		color: '#ffffff',
		fontFamily: 'Aileron',
		fontSize: 15,
		fontWeight: '500',
		marginVertical: 15
	},
	horizontal: {
        flexDirection: 'row',
        marginTop: 100,
    },
    textInput:{
        color:'#FFF',
        width: '85%',
        textAlign : 'center',
        fontSize: 20,
        height: 50,
        borderBottomColor: '#DDD',
        borderBottomWidth : 1,
    },
	square: {
		marginTop: 60,
		marginHorizontal: 12,
		width: 45,
		height: 50,
		borderRadius: 5,
		backgroundColor: '#57d6ff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	numberText: {
		color: '#ffffff',
		fontFamily: 'Aileron',
		fontSize: 25,
		fontWeight: '600'
	},
	padText: {
		color: '#ffffff',
		fontFamily: 'Aileron',
		fontSize: 30,
		fontWeight: '400'
	},
	icon: {
		width: 37,
		height: 22
	},
});
