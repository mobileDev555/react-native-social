import { StyleSheet, Dimensions } from 'react-native';
import { MaterialTopTabBar } from 'react-navigation-tabs';

const {width, height} = Dimensions.get('window');
const w = width > height ? height : width;
export const styles = StyleSheet.create({
    box: {
        height: w*2/3 - 40,
        padding: 12,
        marginTop: 0,
        flexDirection:'column',
        shadowColor: 'rgba(47, 128, 237, 0.32)',
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 13,
        borderRadius: 14,
        elevation: 3
    },
    boxfooter:{
        width: w - 24,
        marginLeft: 12,
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'space-between',
        backgroundColor:'#DDD',
		alignItems: 'center',
		flexDirection: 'row',
		shadowColor: 'rgba(47, 128, 237, 0.55)',
		shadowOffset: { width: 6, height: 0 },
        shadowRadius: 13,
        zIndex : 1,
    },
    profileInfo: {
        width: '100%',
        flexDirection: 'row',
    },
    avatar: {
        width : w/4 - 20,
        height: w/4 - 20,
        resizeMode :'stretch',
        alignItems:'center',
        borderRadius: w/8 - 10
        
    },
    avatarContain: {
        width : w/4 - 20,
        height: w/4 - 20,
        overflow: 'hidden',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: w/8 - 10
        
    },
    textInfo:{flexDirection: 'column', justifyContent:'center', marginLeft:20, padding: 10,
        width: 3*w/4 - 40
    },
    plusIcon: {width: 20, height: 20, 
        borderRadius: 10,
        marginTop: 3*w/16 - 20,
        marginLeft : -w/16 +5,
        backgroundColor: '#FFF',
        justifyContent:'center',
        alignItems: 'center'
        
    },
    button:{
        width: w/2 - 40,
        height: 30,
        justifyContent:'center',
        marginTop: 10,
        marginLeft: 5,
        borderRadius: 20
    },
    editProfile: {
        justifyContent:'center', alignItems:'center',
        width: w/2 - 40,
        height: 30,
        borderWidth: 2,
        borderColor: '#FFF',
        borderRadius: 20,
        marginTop:10,
        marginLeft: 20,
    },
    whitebox:{
        width: w - 60,
        marginLeft: 5,
        marginTop: 12,
        height : 2*w/10 - 14,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 12,
        justifyContent: 'space-between',
        alignItems: 'center'
    },    
    imgBack:{
        marginTop:10,
        height: height/2,
        marginLeft: 12,
        marginRight: 12
    },

    buybtn : {
        width: 50,
        height: 50,
        marginTop: -50,
        backgroundColor: '#F595BB',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(47, 128, 237, 0.55)',
		shadowOffset: { width: 6, height: 0 },
        shadowRadius: 13,
    },

    line1:{
        position: 'absolute',
         height: 2, backgroundColor: '#DDD', 
         bottom: 2*(height/2 - 40)/3 + 40,
         width: '100%',
    },
    line2:{
        position:'absolute',
        height: 2, backgroundColor: '#DDD', 
        bottom: (height/2 - 40)/3 + 40,
        width: '100%',
    },       
    line3:{
        position: 'absolute',
        height: height/2, 
        backgroundColor: '#DDD', 
        left: (w-24)/3 ,
        width: 2,
        bottom: 0,
    },
    line4:{
        position: 'absolute',
        height: height/2, 
        backgroundColor: '#DDD', 
        left: 2*(w-24)/3 ,
        width: 2,
        bottom: 0,
    },
    square: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center'
    },
    
    linearGradient: {
        marginTop: -10,
        width: width/2-56,
		height: 35,
		justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius : 6,
        borderBottomLeftRadius : 6,
    },
    bottomView: {width:width/2-56, height:40, zIndex: 1, backgroundColor:'#FFF', marginTop: 80,
     borderBottomLeftRadius : 6,
     borderBottomRightRadius : 6    
    }
})