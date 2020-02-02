import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 12,
      marginTop: 24
    },
    backImg: {
        position: 'absolute',
        top: -12,
        width: width,
        height: height,
    },
    linearGradient: {
        flexDirection: 'row',
        width: width-24,
        height: 45,
        marginTop: 20,
        paddingHorizontal: 12,
        borderRadius: 6,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '600',
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        marginTop: 12,
        shadowColor: 'rgba(47, 128, 237, 0.32)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        elevation: 3
    },
    avatar: {
        width: 36,
        height: 36
    },
    trophy: {
        width: 28,
        height: 34,
    },
    clock: {
        width: 12,
        height: 15,
    },
    minute: {
        color: '#000000',
        fontFamily: 'Aileron',
        fontSize: 11,
        fontWeight: '300',
        marginLeft: 4,
    },
    flag: {
        width: 22,
        height: 22,
        borderRadius: 3
    },
    flagText: {
        color: '#000000',
        fontFamily: 'Aileron',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 12
    }
})