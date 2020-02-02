import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 12,
        shadowColor: 'rgba(47, 128, 237, 0.32)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        elevation: 3
    },
    boxSquare: {
        width: width/2-18,
        marginHorizontal: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 12,
        shadowColor: 'rgba(47, 128, 237, 0.32)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        elevation: 3
    },
    avatar: {
        width: 40,
        height: 40
    },
    avatar2: {
        width: 22,
        height: 22,
        marginHorizontal: 5
    },
    createText: {
        color: '#2f80ed',
        fontFamily: 'Aileron',
        fontSize: 14,
        fontWeight: '400',
    },
    count: {
        color: '#b4b2b2',
        fontFamily: 'Aileron',
        fontSize: 14,
        fontWeight: '300',
    },
    square: {
        flexDirection: 'row',
        flexWrap: 'wrap'
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
    }
})