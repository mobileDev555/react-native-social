import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;
import {Header} from '../../../../src/components/header';
import {images} from '../../../../src/libs/images';
import {styles} from './style';

const edu = "The University of Oxford is one of the leading universities in the world. Oxford Service, Oxford University.";
const posts = 85;
const followers = '2,670';
const following = 20;

const MyProfile = () => {
  const [value, onChangeList] = React.useState(false);
  return (
    <>
    <SafeAreaView style={{flex: 1, backgroundColor:'#FFF'}}>
      <View >
        <Header title={'Kristen Stewart'} back gradient
        
        statusBarProps={{
          barStyle: 'light-content',
          translucent: true,
          backgroundColor: '#FFF',
          height : 20
        }}
        
        barStyle="light-content"
        />
      </View>
          <View style={{marginHorizontal: 12, marginTop: 12}}>
            <BoxProfileComponent avatar  education = {edu} post = {posts} followers = {followers} following = {following} />
          </View>
          <View style={{marginTop: 10, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <TouchableOpacity>
              <MaterialIcons 
                name="apps"
                size = {30}
                color = {'#3082ed'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source ={images.heart} style = {{width: 27, height: 24}} />
            </TouchableOpacity>
          </View>
          <View  style = {styles.imgBack}>
            <Image style={{width: '100%', height:'100%',resizeMode:'stretch' }} source={images.back7} ></Image>
            <View style={styles.line1}></View>
            <View style={styles.line2}></View>
            <View style={styles.line3}></View>
            <View style={styles.line4}></View>
          </View>
    </SafeAreaView>
        <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#55c9f2', '#3082ed'] }
        style = {styles.boxfooter}
        >
          <TouchableOpacity>
            <Image style = {{width: 25, height: 24}} source={images.home_outline}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons 
                name="search"
                size = {36}
                color = {'#FFF'}
              />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buybtn}>
            <Image style = {{width: 24, height: 22}} source={images.shop}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style = {{width: 22, height: 20}}  source={images.msg}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style = {{width: 24, height: 20}}  source={images.heart_white}></Image>
          </TouchableOpacity>
        </LinearGradient>
        {/* </View> */}
    </>
  );
};

const BoxProfileComponent = (props: any) => {
  return (
      <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#B7BFC2', '#2E3F51']}
          style={styles.box}>
        <View style = {styles.profileInfo}>
            <View style = {styles.avatarContain}>
                <Image style = {styles.avatar}  source = {images.girl}></Image>
           </View>
          <View style={styles.textInfo}>
            {props.name && ( <Text style={{color:'#FFF', fontSize: 16, fontWeight: 'bold'}}>{props.name}</Text> )}
            <Text style={{color:'#FFF', fontSize: 12, fontWeight: '700'}}>{props.education}</Text>
          </View>
          
        </View>
        <View style={{flexDirection:'row'}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#55c9f2', '#3082ed']}
              style={styles.button}>
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} >
                <Text style={{fontSize: 16, color:'#FFF', fontWeight:'700'}}>Follow</Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity style={styles.editProfile} >
                <Text style={{fontSize: 16, color:'#FFF', fontWeight:'700'}}>Message</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.whitebox}>
            <View style={{marginLeft: 20, justifyContent:'center', alignItems:'center'}}>
              <Text style = {{fontSize: 18, fontWeight:'bold'}}>{props.post}</Text>
              <Text style ={{ color: '#D6D6D6', fontSize: 14, fontWeight: '700'}}>Posts</Text>
            </View>
            
            <View style={{ justifyContent:'center', alignItems:'center'}}>
              <Text style = {{fontSize: 18, fontWeight:'bold'}}>{props.followers}</Text>
              <Text style ={{ color: '#D6D6D6', fontSize: 14, fontWeight: '700'}}>followers</Text>
            </View>
            <View style={{marginRight: 20, justifyContent:'center', alignItems:'center'}}>
              <Text style = {{fontSize: 18, fontWeight:'bold'}}>{props.following}k</Text>
              <Text style ={{ color: '#D6D6D6', fontSize: 14, fontWeight: '700'}}>following</Text>
            </View>
          </View>
      </LinearGradient>
  );
};



export default MyProfile;
