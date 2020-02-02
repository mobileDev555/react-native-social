import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        padding: 16,
        marginTop: 12,
        shadowColor: 'rgba(47, 128, 237, 0.32)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        borderRadius: 25,
        backgroundColor: '#ffffff',
        elevation: 3
    },
    boxSquare: {
        width: width/2-46,
        flexDirection: 'column',
        
        // justifyContent: 'space-between',
        marginTop: 12,
        shadowColor: 'rgba(47, 128, 237, 0.32)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 3
    },
    avatar: {
        marginTop: 10,
        marginHorizontal: 14,
        width:  30,
        height: 30,
        borderRadius: 15        
    },
    avatar2: {
        alignContent: 'flex-end',
        marginHorizontal: 14,
        width:  30,
        height: 30,
        borderRadius: 15        
    },
    WrapFollow:{
        width : 50,
        height: 20,
        borderRadius: 10,
        marginTop: -130,
        marginLeft : width/2-116,
        backgroundColor: '#FFF',
        justifyContent:'center',
        alignItems:'center',
        zIndex: 1,
        shadowColor: 'rgba(47, 128, 237, 0.32)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        elevation: 3
    },
    followGradient:{
        width: 46,
        height: 16,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center'
    },
    square: {
        flexDirection:'column',
    },
    linearGradient: {
        marginLeft : 10,
        justifyContent: 'center',
        paddingTop: 5,
        paddingLeft: 30,
        paddingRight: 30,
        borderBottomRightRadius : 25,
        borderTopRightRadius : 25,
        borderBottomLeftRadius : 25,
        shadowColor: 'rgba(47, 25, 223, 0.55)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        elevation: 3
    },
    linearGradient4: {
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 25,
        paddingTop: 5,
        shadowColor: 'rgba(47, 25, 223, 0.55)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        elevation: 3
    },
    linearGradient2: {
        marginLeft: 10,
        justifyContent: 'center',
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomRightRadius : 25,
        borderTopLeftRadius : 25,
        borderBottomLeftRadius : 25,
        shadowColor: 'rgba(47, 25, 223, 0.55)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        elevation: 3
    },
    linearGradient3: {
        marginLeft: 10,
        justifyContent: 'center',
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 25,
        shadowColor: 'rgba(47, 25, 223, 0.55)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        elevation: 3
    },
    bottomView: {width:width/2-56, height:40, zIndex: 1, backgroundColor:'#FFF', marginTop: 80,
     borderBottomLeftRadius : 6,
     borderBottomRightRadius : 6    
    },
    send: {justifyContent:'center', width: 30, height: 30, backgroundColor: '#3994ED', alignItems:'center', borderRadius: 15 }
})