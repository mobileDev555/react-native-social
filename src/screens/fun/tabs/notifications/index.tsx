import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {Header} from '../../../../components/header';
import {styles} from './style';
import {images} from '../../../../libs/images';
import {GradientButton} from '../../../../components/gradient-button';

export const Notifications = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header {...props} title={'Likes'} camera profile />

      <View style={{flex: 1}}>
        <BoxListComponent pic />
        <BoxListComponent follow />
        <BoxListComponent pic />
        <Text style={[styles.count, {marginTop: 16}]}>10 jan 2019</Text>
        <BoxListComponent follow />
        <BoxListComponent pic />
        <BoxListComponent follow />
      </View>
    </SafeAreaView>
  );
};

const BoxListComponent = (props: any) => {
  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row'}}>
        <Image source={images.man} style={styles.avatar} />
        <View style={{marginLeft: 22}}>
          <Text style={{fontWeight: '700'}}>
            Emma Waston
            <Text style={styles.lightText}> Like Your Photo</Text>
          </Text>
          <Text style={styles.count}>6m</Text>
          <Text style={{fontWeight: '700'}}>it's Nice Pet.. I like It..</Text>
        </View>
      </View>

      <View>
        {props.pic && (
          <Image source={images.interest_nature} style={styles.avatar2} />
        )}
        {props.follow && <GradientButton title={'follow'} />}
      </View>
    </View>
  );
};
