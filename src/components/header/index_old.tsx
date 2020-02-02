import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {images} from '../../libs/images';
import screens from '../../libs/screens';
import {styles} from './style';

export const HeaderOld = (props: any) => {
  return (
    <SafeAreaView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={!props.gradient ? ['#55c9f2', '#3082ed'] : ['#FFF', '#FFF']}
        style={
          !props.gradient ? styles.linearGradient : styles.linearGradient2
        }>
        {props.camera && <Image source={images.camera} style={styles.icon} />}
        {props.menu && <Image source={images.menu} style={styles.icon} />}
        {props.back && (
          <MaterialIcons
            style={styles.icon2}
            name="keyboard-arrow-left"
            size={36}
            color={'#D6D6D6'}
          />
        )}

        {props.goback && (
          <Image source={images.goback} style={[styles.icon, {height: 16}]} />
        )}

        <Text style={!props.gradient ? styles.headerText : styles.headerText2}>
          {props.title}
        </Text>

        {props.profile && (
          // <TouchableOpacity
          //   style={{flex: 1}}
          //   onPress={() => props.navigation.push(screens.MyProfile)}>
          //   <Image source={images.man} style={styles.avatar} />
          // </TouchableOpacity>

          <Image source={images.man} style={styles.avatar} />
        )}
        {props.nav && <Image style={styles.avatar2} source={images.nav} />}

        {props.notify && (
          <View style={!props.gradient ? styles.notify : styles.notify2}></View>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};
