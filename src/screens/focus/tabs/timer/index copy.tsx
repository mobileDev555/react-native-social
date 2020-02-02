import React from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import {Header} from '../../../../components/header';
import {images} from '../../../../libs/images';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';

export const Timer = (props: any) => {
  return (
    <SafeAreaView style={{flex: 1, margin: 12}}>
      <Header {...props} title={'Pauzr'} profile menu />

      <ScrollView style={{flex: 1, marginTop: 12}}>
        <View style={styles.bar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.circle} />
            <Text style={styles.title}>All time Saving </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.circle, {backgroundColor: '#2f80ed'}]} />
            <Text style={styles.title}>Average Per Day</Text>
          </View>
        </View>

        <View style={styles.hr}>
          <View style={styles.notice}>
            <Text style={styles.noticeText}>16 jan 2019</Text>
          </View>
        </View>

        <View style={styles.wrap}>
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
        </View>

        <View style={styles.hr}>
          <View style={styles.notice}>
            <Text style={styles.noticeText}>17 jan 2019</Text>
          </View>
        </View>

        <View style={styles.wrap}>
          <BoxComponent />
          <BoxComponent />
          <BoxComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const BoxComponent = () => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#55c9f2', '#3082ed']}
        style={styles.linearGradient}>
        <Text style={styles.period}>40 Minutes</Text>
        <Text style={styles.time}>02 : 00 PM</Text>
      </LinearGradient>
      <Image source={images.clock1} style={styles.clock} />
    </View>
  );
};
