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
  ImageBackground,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;
import {Header} from '../../components/header';
import {images} from '../../libs/images';
import {styles} from './style';

const Chat = () => {
  const [value, onChangeList] = React.useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{}}>
        <Header
          title={'Tom Cruise'}
          notify
          gradient
          back
          nav
          statusBarProps={{
            barStyle: 'light-content',
            translucent: true,
            backgroundColor: 'transparent',
          }}
          barStyle="light-content"
        />
      </View>
      <ScrollView>
        <View
          style={{
            marginTop: 4,
            marginLeft: 12,
            marginRight: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '36%',
              height: 1,
              backgroundColor: '#D6D6D6',
            }}></View>
          <Text style={{color: '#D6D6D6', fontWeight: '700'}}>15 jun 2019</Text>
          <View
            style={{
              width: '36%',
              height: 1,
              backgroundColor: '#D6D6D6',
            }}></View>
        </View>
        <View style={styles.square}>
          <BoxReceiveComponent
            image={images.back7}
            contents={'Hi, how are you Tom!!'}
            first
          />
          <BoxAnswerComponent
            image={images.man}
            contents={'I am fine, anyway how are you?'}
            contents2={'Wahts your plan for lunch'}
          />
        </View>
        <View
          style={{
            marginTop: 4,
            marginLeft: 12,
            marginRight: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '36%',
              height: 1,
              backgroundColor: '#D6D6D6',
            }}></View>
          <Text style={{color: '#D6D6D6', fontWeight: '700'}}>16 jun 2019</Text>
          <View
            style={{
              width: '36%',
              height: 1,
              backgroundColor: '#D6D6D6',
            }}></View>
        </View>
        <View style={styles.square}>
          <BoxReceiveComponent
            image={images.back7}
            contents={'Yes I am coming from few minutes'}
            avatar
            first
          />

          <BoxAnswerComponent
            image={images.man}
            contents={'Okay its done, ya'}
          />
        </View>
      </ScrollView>
      <View style={{margin: 14}}>
        <BoxTypeMsgComponent />
      </View>
    </SafeAreaView>
  );
};

const BoxAnswerComponent = (props: any) => {
  return (
    <>
      {props.image && (
        <View style={{marginRight: 14, alignItems: 'flex-end'}}>
          <Image style={styles.avatar2} source={props.image} />
        </View>
      )}
      <View style={{height: 40, flexWrap: 'wrap-reverse', marginRight: 35}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#56CCF2', '#367FE0']}
          style={styles.linearGradient2}>
          <Text style={{color: '#FFF', fontWeight: '700'}}>
            {props.contents}
          </Text>
        </LinearGradient>
      </View>
      {props.contents2 && (
        <View style={{height: 40, flexWrap: 'wrap-reverse', marginRight: 35}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#56CCF2', '#367FE0']}
            style={styles.linearGradient3}>
            <Text style={{color: '#FFF', fontWeight: '700'}}>
              {props.contents2}
            </Text>
          </LinearGradient>
        </View>
      )}
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <MaterialIcons
          name="check"
          size={16}
          color={'#D6D6D6'}
          style={{marginLeft: 45, marginTop: 0}}
        />
        <Text
          style={{
            color: '#D6D6D6',
            fontSize: 12,
            marginRight: 50,
            marginTop: 0,
          }}>
          10:58 AM
        </Text>
      </View>
    </>
  );
};

const BoxReceiveComponent = (props: any) => {
  return (
    <>
      <Image style={styles.avatar} source={props.image} />
      <View style={{height: 40, flexWrap: 'wrap', marginLeft: 20}}>
        <View
          style={props.first ? styles.linearGradient : styles.linearGradient4}>
          <Text style={{color: '#555', fontWeight: '700'}}>
            {props.contents}
          </Text>
        </View>
      </View>
      {props.avatar && (
        <View
          style={{
            height: 35,
            flexWrap: 'wrap',
            marginLeft: 30,
            alignItems: 'center',
          }}>
          <View style={styles.linearGradient4}>
            <Image
              style={{margin: 5, width: 20, height: 20}}
              source={images.happy_eyes}></Image>
            <Image
              style={{margin: 5, width: 20, height: 20}}
              source={images.happy_eyes}></Image>
            <Image
              style={{margin: 5, width: 20, height: 20}}
              source={images.happy_eyes}></Image>
            <Image
              style={{margin: 5, width: 20, height: 20}}
              source={images.happy_eyes}></Image>
            <Image
              style={{margin: 5, width: 20, height: 20}}
              source={images.happy_eyes}></Image>
          </View>
        </View>
      )}

      <View style={{flexDirection: 'row', marginTop: 15}}>
        <MaterialIcons
          name="check"
          size={16}
          color={'#3994ED'}
          style={{marginLeft: 45, marginTop: -10}}
        />
        <Text
          style={{
            color: '#D6D6D6',
            fontSize: 12,
            marginLeft: 10,
            marginTop: -10,
          }}>
          10:58 AM
        </Text>
      </View>
    </>
  );
};

const BoxTypeMsgComponent = (props: any) => {
  return (
    <View style={styles.box}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 8}}>
        <View style={{justifyContent: 'center'}}>
          <Image style={{width: 16, height: 16}} source={images.plus}></Image>
        </View>
        <View style={{marginLeft: 22}}>
          <TextInput
            style={{
              fontWeight: '700',
              padding: 0,
              fontSize: 16,
              width: width - 130,
              color: '#333',
            }}
            placeholder="Type a Message..."
            placeholderTextColor={'#D6D6D6'}></TextInput>
        </View>
        <View style={styles.send}>
          <Image style={{width: 16, height: 16}} source={images.send}></Image>
        </View>
      </View>
    </View>
  );
};
export default Chat;
