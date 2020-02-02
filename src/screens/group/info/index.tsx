import React from 'react';
import {Dimensions, Image, SafeAreaView, Text, View} from 'react-native';
import {Header, Icon, Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from '../../../libs/images';
import {styles} from './style';

const WINDOW_WIDTH = Dimensions.get('window').width;

export const GroupInfo = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        style={{flex: 1}}
        statusBarProps={{
          barStyle: 'light-content',
          translucent: true,
          backgroundColor: 'transparent',
        }}
        barStyle="light-content"
        containerStyle={{backgroundColor: 'transparent', height: 0}}
      />

      <Image source={images.back6} style={styles.backImg} />

      <View style={styles.container}>
        <View
          style={{
            height: 434,
            width: '80%',
            backgroundColor: '#FFF',
            // justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            shadowColor: 'rgba(47, 12, 237, 0.32)',
            shadowOffset: {width: 3, height: 0},
            shadowRadius: 13,
            elevation: 5,
          }}>
          <View style={styles.avatar}>
            <Image
              style={{width: 120, height: 120}}
              source={images.man}></Image>
          </View>
          <Text style={[styles.logoText, {color: '#333'}]}>Roman</Text>

          <View style={styles.inputView}>
            <Input
              inputContainerStyle={[styles.textInput, ]}
              placeholder="Description"
              
              leftIconContainerStyle={{marginRight: 10}}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputView}>
            <Input
              inputContainerStyle={styles.textInput}
              placeholder="cvv"
              leftIconContainerStyle={{marginRight: 10}}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>
          <View style={{width: WINDOW_WIDTH - 80, height: 20, marginTop: 20}}>
            <Text style={{fontSize: 14, color: '#333', fontWeight: '500'}}>
              Participants (2)
            </Text>
          </View>

          <BoxSquareComponent />
          <BoxSquareComponent />
          <BoxRedSquareComponent />
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.leaveBtn]}>
          <View
            style={{
              width: 35,
              height: 40,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              backgroundColor: '#EE9CA8',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={images.leave}
              style={{width: 20, height: 15}}></Image>
          </View>
          <Text
            style={{
              color: '#FFF',
              fontSize: 12,
              fontWeight: '500',
              marginLeft: 10,
            }}>
            leave group
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.leaveBtn, {marginLeft: 15}]}>
          <View
            style={{
              width: 35,
              height: 40,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              backgroundColor: '#EE9CA8',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type={'ionicons'}
              name={'delete'}
              size={20}
              color={'#FFF'}></Icon>
          </View>
          <Text
            style={{
              color: '#FFF',
              fontSize: 12,
              fontWeight: '500',
              marginLeft: 10,
            }}>
            Delete group
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#11A10B',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 15,
          }}>
          <Image
            source={images.white_plus}
            style={{width: 16, height: 16}}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const BoxSquareComponent = (props: any) => {
  return (
    <View style={styles.boxSquare}>
      <Image source={images.man} style={[styles.avatar2]} />
      <Text style={{fontWeight: '700', fontSize: 15}}></Text>
      <Text style={{fontWeight: '700', fontSize: 14, color: '#999'}}>
        New York
      </Text>
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: '#3082ed',
          borderRadius: 10,
        }}>
        <Icon type={'material'} name={'check'} size={20} color={'#FFF'} />
      </View>
    </View>
  );
};

const BoxRedSquareComponent = (props: any) => {
  return (
    <View style={[styles.boxSquare2]}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#FABDC5',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#EE9CA8',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={images.friend} style={[styles.avatar2]} />
        </View>
      </View>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 18,
          color: '#FFF',
          marginLeft: -40,
        }}>
        Invite Friends
      </Text>
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: '#FFF',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          type={'material-icons'}
          name={'keyboard-arrow-right'}
          size={22}
          color={'#EE9CA8'}
        />
      </View>
    </View>
  );
};
