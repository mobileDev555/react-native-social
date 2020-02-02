import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

export const GradientButton = (props: any) => {
  return (
    <SafeAreaView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#55c9f2', '#3082ed']}
        style={ styles.linearGradient}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};
export const GradientButtonWithBorder = (props: any) => {
  return (
    <SafeAreaView style={styles.linearGradient2}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#55c9f2', '#3082ed']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};
