import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Header} from '../../../../../src/components/header';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {images} from '../../../../../src/libs/images';
import BarChart from '../../../../../src/components/bar-chart/bar-chart';

const WINDOW_WIDTH = Dimensions.get('window').width;

const data = {
  labels: [
    '20⏱️',
    '25⏱️',
    '30⏱️',
    '35⏱️',
    '40⏱️',
    '45⏱️',
    '50⏱️',
    '55⏱️',
    '60⏱️',
  ],
  datasets: [
    {
      data: [26, 19, 31, 16, 18, 22, 12, 18],
    },
  ],
};

const _chartConfig = {
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientTo: '#FFFFFF',
  decimalPlaces: 0,
  paddingLeft: 0,
  color: () => `#111`,
};

export const Scoreboard = (props: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{padding: 12}}>
        <Header {...props} title={'Pauzr'} profile menu />

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#55c9f2', '#3082ed']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>Today</Text>
          <MaterialIcons name="arrow-drop-down" size={36} color={'#fff'} />
        </LinearGradient>

        <BarChart
          data={data}
          width={WINDOW_WIDTH - 24}
          height={220}
          chartConfig={_chartConfig}
          yAxisLabel="Points "
          style={{marginTop: 12}}
        />

        <BoxComponent gold="1" />
        <BoxComponent gold="2" />
        <BoxComponent gold="3" />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Image source={images.india} style={styles.flag} />
          <Text style={styles.flagText}>India</Text>
        </View>
        <BoxComponent gold="1" />
        <View style={{width: 1, height: 10}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const BoxComponent = (props: any) => {
  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row'}}>
        <Image source={images.man} style={styles.avatar} />
        <View style={{marginLeft: 12}}>
          <Text>Roman</Text>
          <Text>Rank 1</Text>
        </View>
      </View>

      {props.gold == '1' && (
        <Image source={images.trophy1} style={styles.trophy} />
      )}
      {props.gold == '2' && (
        <Image source={images.trophy2} style={styles.trophy} />
      )}
      {props.gold == '3' && (
        <Image source={images.trophy3} style={styles.trophy} />
      )}

      <View>
        <Text style={{marginLeft: 15}}>300</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={images.clock2} style={styles.clock} />
          <Text style={styles.minute}>Minutes</Text>
        </View>
      </View>
    </View>
  );
};
