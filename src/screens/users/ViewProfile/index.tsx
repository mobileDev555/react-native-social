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

const edu = "The University of Oxford is one of the leading universities in the world.";
const posts = 47;
const followers = '1,570';
const following = 80;
const ViewProfile = () => {
  const [value, onChangeList] = React.useState(false);
  return (
    <>
    <SafeAreaView style={{flex: 1, backgroundColor:'#FFF'}}>
      <View style={{margin: 12}}>
        <Header title={'My Profile'} profile notify menu
        
        statusBarProps={{
          barStyle: 'light-content',
          translucent: true,
          backgroundColor: '#FFF',
          height : 20
        }}
        
        barStyle="light-content"
        />
      </View>
          <View style={{marginHorizontal: 12}}>
            <BoxProfileComponent avatar name ={'Emma Watson'} education = {edu} post = {posts} followers = {followers} following = {following} />
          </View>
          <View style={{marginTop: 10, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <TouchableOpacity>
              <MaterialIcons 
                name="apps"
                size = {36}
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
          <Image style = {styles.avatar} source = {images.girl}></Image>
          <TouchableOpacity style={styles.plusIcon}>
            <Image style={{width: 12, height: 12,}} source={images.plus}></Image>
          </TouchableOpacity>
          <View style={styles.textInfo}>
            <Text style={{color:'#FFF', fontSize: 24, fontWeight: 'bold'}}>{props.name}</Text>
            <Text style={{color:'#FFF', fontSize: 14, fontWeight: '700'}}>{props.education}</Text>
          </View>
          
        </View>
        <View style={{flexDirection:'row'}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#55c9f2', '#3082ed']}
              style={styles.button}>
              <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} >
                <Text style={{fontSize: 16, color:'#FFF', fontWeight:'700'}}>Create Post</Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity style={styles.editProfile} >
                <Text style={{fontSize: 16, color:'#FFF', fontWeight:'700'}}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.whitebox}>
            <View style={{marginLeft: 20, justifyContent:'center', alignItems:'center'}}>
              <Text style = {{fontSize: 24, fontWeight:'bold'}}>{props.post}</Text>
              <Text style ={{ color: '#D6D6D6', fontSize: 18, fontWeight: '700'}}>Posts</Text>
            </View>
            
            <View style={{ justifyContent:'center', alignItems:'center'}}>
              <Text style = {{fontSize: 24, fontWeight:'bold'}}>{props.followers}</Text>
              <Text style ={{ color: '#D6D6D6', fontSize: 18, fontWeight: '700'}}>followers</Text>
            </View>
            <View style={{marginRight: 20, justifyContent:'center', alignItems:'center'}}>
              <Text style = {{fontSize: 24, fontWeight:'bold'}}>{props.following}k</Text>
              <Text style ={{ color: '#D6D6D6', fontSize: 18, fontWeight: '700'}}>following</Text>
            </View>
          </View>
      </LinearGradient>
  );
};



export default ViewProfile;
