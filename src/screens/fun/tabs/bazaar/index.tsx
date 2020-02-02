import React, { useState } from "react";
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, Image} from "react-native";
import {Icon, } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../../../../../src/components/header';
import { styles } from './style';
import { images } from '../../../../../src/libs/images';
import {TouchableOpacity} from 'react-native';

export const Bazaar = (props: any) => {
  const [bstart1, onStart1] = useState(false);
  const [bstart2, onStart2] = useState(false);
  const [bstart3, onStart3] = useState(false);
  
  const startPlay1 = () => {
    onStart1(!bstart1);
    onStart2(false);
    onStart3(false);
  }

  const startPlay2 = () => {
    onStart2(!bstart2);
    onStart1(false);
    onStart3(false);
  }

  const startPlay3 = () =>{
     onStart3(!bstart3);
     onStart1(false);
     onStart2(false);
  }

    return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={images.back7}
        style={styles.backImg}
      >
        <View style={styles.container}>
          <Header title={'Pauzr'} profile menu/>
          <BoxFlow disp = {1} />
          
        <View style={{flexDirection:'row', position:'absolute', bottom: '20%',paddingLeft:20, paddingRight:20, height: 120,width:'100%', justifyContent:'space-between'}}>
            <BoxCircleAndPoint count = {10} onPress = {startPlay1} bstart={bstart1} time={"10:00"} />
            <BoxCircleAndPoint count = {30} onPress = {startPlay2} bstart={bstart2} time={"30:00"}/>
            <BoxCircleAndPoint count = {50} onPress = {startPlay3} bstart={bstart3} time={"50:00"}/>
        </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
  
};

const BoxFlow = (props: any) => {
  return (
    <View style={{ flexDirection: 'row'}}>
      <View style={props.disp != 0 ? styles.view2: styles.view1} >
        <View style={{ width:4, height: 4, backgroundColor: '#FFF', borderRadius:2}}></View>
      </View>
      <View style={props.disp != 1 ? styles.view2: styles.view1} >
        <View style={{ width:4, height: 4, backgroundColor: '#FFF', borderRadius:2}}></View>
      </View>
      <View style={props.disp != 2 ? styles.view2: styles.view1} >
        <View style={{ width:4, height: 4, backgroundColor: '#FFF', borderRadius:2}}></View>
      </View>
      <View style={props.disp != 3 ? styles.view2: styles.view1} >
        <View style={{ width:4, height: 4, backgroundColor: '#FFF', borderRadius:2}}></View>
      </View>
      <View style={props.disp != 4 ? styles.view2: styles.view1} >
        <View style={{ width:4, height: 4, backgroundColor: '#FFF', borderRadius:2}}></View>
      </View>
    </View>
  );
};

const BoxCircleAndPoint = (props: any)=>{
  return (
      <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        {props.bstart !== true ? <TouchableOpacity style={{flexDirection:'column', width:80, height: 80, borderRadius: 40, justifyContent:'center', alignItems:'center', backgroundColor:'#3C91F1'}}
          onPress = {()=>props.onPress()}
          >
          <Text style={{color:'#FFF', fontSize:18, fontWeight:'700'}}>{props.count}</Text>
          <View style={{flexDirection:'row'}}>
            <Icon
              type={'ionicons'}
              name={'watch'}
              size={12}
              color={'#FFF'}
            ></Icon>
            <Text style={{color:'#FFF', fontSize: 12}}>Minutes</Text>
          </View>

        </TouchableOpacity>:
        <TouchableOpacity style={{flexDirection:'column', width:80, height: 80, borderRadius: 40,  alignItems:'center', backgroundColor:'#3C91F1'}}
         onPress = {()=>props.onPress()}><Image style={{width: 80, height:80}} source={images.ball_gif}></Image>
         <Text style={{color:'#FFF', fontSize:18, fontWeight:'700', marginTop: -50}}>{props.time}</Text>
          {/* <View style={{flexDirection:'row', marginTop : 0}}>
            <Icon
              type={'ionicons'}
              name={'watch'}
              size={12}
              color={'#FFF'}
            ></Icon>
            <Text style={{color:'#FFF', fontSize: 12}}>Minutes</Text>
          </View> */}
         </TouchableOpacity>
        }
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#55c9f2', '#3082ed'] }
            style={styles.linearGradient}>
              <Text style={{fontSize: 12, color:'#FFF', fontWeight: '700'}}>{props.count}</Text>
              {props.count == 10 && (<Image style={{marginLeft:5, width: 10, height:10}} source={images.yellow_circle}></Image>)}
              {props.count == 30 && (<View style={{flexDirection:'row'}}><Image style={{marginLeft:5, width: 10, height:10}} source={images.yellow_circle}></Image>
              <Image style={{marginLeft:5, width: 10, height:10}} source={images.yellow_circle}></Image></View>)}
              {props.count == 50 && (<View style={{flexDirection:'row'}}><Image style={{marginLeft:5, width: 10, height:10}} source={images.yellow_circle}></Image>
              <Image style={{marginLeft:5, width: 10, height:10}} source={images.yellow_circle}></Image>
              <Image style={{marginLeft:5, width: 10, height:10}} source={images.yellow_circle}></Image></View>)}
          </LinearGradient>
      </View>
  );
};