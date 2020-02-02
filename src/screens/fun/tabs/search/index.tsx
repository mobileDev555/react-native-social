import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {Header} from '../../../../components/header';
import {styles} from './style';
import {images} from '../../../../libs/images';
import LinearGradient from 'react-native-linear-gradient';

export const Search = (props: any) => {
  const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header {...props} title={'Search'} profile />

      <ScrollView style={{marginTop: 12}} showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder={'Search People…'}
              placeholderTextColor={'#cecece'}
            />
            <Image source={images.search} style={styles.inputImg} />
          </View>
        </View>

        <View style={styles.hr}>
          <View style={styles.notice}>
            <Text style={styles.noticeText}>Explore your interests</Text>
          </View>
        </View>

        <View style={styles.search}>
          <BoxComponent
            title={'Fashion'}
            img={images.interest_fashion}
            colors={['#f857a6', '#ff5858']}
          />
          <BoxComponent
            title={'Traveling'}
            img={images.interest_traveling}
            colors={['#55c9f2', '#3082ed']}
          />
          <BoxComponent
            title={'Food'}
            img={images.interest_food}
            colors={['#dce35b', '#45b649']}
          />
          <BoxComponent
            title={'Technology'}
            img={images.interest_technology}
            colors={['#bdc3c7', '#2c3e50']}
          />

          <BoxComponent
            title={'Animals'}
            img={images.interest_fashion}
            colors={['#1e130c', '#9a8478']}
          />
          <BoxComponent
            title={'Nature'}
            img={images.interest_fashion}
            colors={['#52c234', '#061700']}
          />
          <BoxComponent
            title={'Automobile'}
            img={images.interest_automobile}
            colors={['#ffb75e', '#ed8f03']}
          />
          <BoxComponent
            title={'Arts & Crafts'}
            img={images.interest_arts}
            colors={['#8a2387', '#e94057', '#f27121']}
          />
          <View style={{height: 30, width: 1}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const BoxComponent = (props: any) => {
  return (
    <View style={styles.searchView}>
      <Image source={props.img} style={styles.boxImg} />
      <Image source={images.follow} style={styles.follow} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={props.colors}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </LinearGradient>
    </View>
  );
};
