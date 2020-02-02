import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    avatar:{
        width: 45,
        height: 45,
        shadowColor: 'rgba(47, 128, 237, 0.55)',
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 6,
        borderRadius: 23
    },
    name: {
        color: '#000000',
        fontFamily: 'Aileron',
        fontSize: 15,
        fontWeight: '600',
    },
    time: {
        color: '#b4b2b2',
        fontFamily: 'Aileron',
        fontSize: 12,
        fontWeight: '400',
    },
    link: {
        color: '#2f80ed',
        fontFamily: 'Aileron',
        fontSize: 12,
        fontWeight: '400',
        textDecorationLine: 'underline',
        textDecorationColor: '#2f80ed',
        marginLeft: 8
    },
    img: {
        marginVertical: 12,
        width: WINDOW_WIDTH-24,
        height: 320,
        shadowColor: 'rgba(47, 128, 237, 0.33)',
        shadowOffset: { width: 7, height: 0 },
        shadowRadius: 9,
        borderRadius: 20,
    },
    small: {
        color: '#b4b2b2',
        fontFamily: 'Aileron',
        fontSize: 9,
        fontWeight: '400',
        lineHeight: 12
    },
    boxView: {
        flexDirection: 'row', 
        height: 40,
        marginTop: 5,
        marginBottom: 12,
    },
    box: {
        flexDirection: 'row', 
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 8
    },
    box2: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1.4,
        borderRightColor: '#b4b2b2',
        borderRightWidth: 1,
        borderLeftColor: '#b4b2b2',
        borderLeftWidth: 1
    }
})