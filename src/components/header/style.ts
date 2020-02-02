import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
	linearGradient: {
		width: WINDOW_WIDTH - 24,
		height: 50,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		shadowColor: 'rgba(47, 128, 237, 0.55)',
		shadowOffset: { width: 6, height: 0 },
		shadowRadius: 13
	},
	linearGradient2: {
		width: WINDOW_WIDTH ,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: '#DDD',
		borderBottomWidth: 2,
		flexDirection: 'row',
		shadowColor: 'rgba(47, 128, 237, 0.55)',
		shadowOffset: { width: 6, height: 6 },
		shadowRadius: 13
	},
	headerText: {
		color: '#ffffff',
		fontFamily: 'Aileron',
		fontSize: 20,
		fontWeight: '600'
	},
	headerText2: {
		color: '#000',
		fontFamily: 'Aileron',
		fontSize: 20,
		fontWeight: '600'
	},
	avatar: {
		width: 30,
		height: 30,
		position: 'absolute',
		right: 16,
	},
	avatar2: {
		width: 8,
		height: 29,
		position: 'absolute',
		right: 16,
		backgroundColor: '#FFF',
	},
	icon: {
		width: 24,
		height: 20,
		position: 'absolute',
		left: 16
	},
	icon2:{
		width: 24,
		height: 28,
		position: 'absolute',
		left: 16
	},
	notify : {
		position : 'absolute',
		right : 15,
		top : 12,
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor : '#27BB4A'
	},
	notify2 : {
		position : 'absolute',
		right : WINDOW_WIDTH/2 - 60,
		top : 20,
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor : '#27BB4A'
	}
});
