import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {styles} from './style';
import {images} from '../../../../src/libs/images';

export const Drawer = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={images.back6}
        resizeMode="cover"
        style={styles.background}>
        <Image source={images.girl} style={styles.avatar} />
        <Text style={styles.nameText}>Emma Watson</Text>
        <Text style={styles.titleText}>Fashion Designer</Text>
      </ImageBackground>
      <View style={{flex: 1.2, marginTop: -12}}>
        <View style={styles.menuItem}>
          <Image source={images.home} style={styles.iconImg} />
          <Text style={styles.menuText}>Home</Text>
        </View>
        <View style={styles.menuItem}>
          <Image source={images.score} style={styles.iconImg} />
          <Text style={styles.menuText}>Scoreboard</Text>
        </View>
        <View style={styles.menuItem}>
          <Image source={images.clock3} style={styles.iconImg} />
          <Text style={styles.menuText}>Minutes</Text>
        </View>
        <View style={styles.menuItem}>
          <Image source={images.gear} style={styles.iconImg} />
          <Text style={styles.menuText}>Setting</Text>
        </View>
        <View style={styles.menuItem}>
          <Image source={images.world} style={styles.iconImg} />
          <Text style={styles.menuText}>Language</Text>
        </View>
        <View style={styles.menuItem}>
          <Image source={images.search} style={styles.iconImg} />
          <Text style={styles.menuText}>Search</Text>
        </View>

        <View style={{flex: 1}} />
        <View style={styles.menuItem2}>
          <Image source={images.logout} style={styles.iconImg} />
          <Text style={styles.menuText}>Sign Out</Text>
        </View>
      </View>
    </View>
  );
};
