import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '../../../../../src/components/header';
import {images} from '../../../../../src/libs/images';
import screens from '../../../../libs/screens';
import {styles} from './style';

export const Groups = (props: any) => {
  const [value, onChangeList] = React.useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header {...props} title={'Pauzr'} profile menu />

      <ScrollView>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={() => onChangeList(false)}>
              <Text style={{fontWeight: !value ? '700' : '400'}}>List</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onChangeList(true)}>
              <Text style={{fontWeight: value ? '700' : '400'}}>Square</Text>
            </TouchableOpacity>
          </View>
          {value && (
            <View style={[styles.square, {marginHorizontal: 6}]}>
              <BoxSquareComponent />
              <BoxSquareComponent />
              <BoxSquareComponent />
              <BoxSquareComponent />
              <BoxSquareComponent />
              <BoxSquareComponent />
              <BoxSquareComponent />
            </View>
          )}
          {!value && (
            <View style={{marginHorizontal: 12}}>
              <TouchableOpacity
                onPress={() => props.navigation.push(screens.GroupInfo)}>
                <BoxListComponent />
              </TouchableOpacity>
              <BoxListComponent />
            </View>
          )}
        </View>
        <View style={{width: 1, height: 12}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const BoxListComponent = (props: any) => {
  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row'}}>
        <Image source={images.man} style={styles.avatar} />
        <View style={{marginLeft: 22}}>
          <Text style={{fontWeight: '700'}}>Roman</Text>
          <Text style={styles.count}>5 Participants</Text>
        </View>
      </View>

      <View>
        <Text style={styles.createText}>Created on</Text>
        <Text>02-10-2019</Text>
      </View>
    </View>
  );
};

const BoxSquareComponent = (props: any) => {
  return (
    <View style={styles.boxSquare}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image source={images.man} style={[styles.avatar, {marginTop: 8}]} />
          <View style={{marginLeft: 12}}>
            <Text style={{fontWeight: '700', fontSize: 15}}>Roman</Text>

            <View style={{marginVertical: 6}}>
              <Text style={styles.createText}>Created on</Text>
              <Text style={{fontWeight: '700', fontSize: 14}}>02-10-2019</Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', marginVertical: 6}}>
            <Image source={images.man} style={styles.avatar2} />
            <Image source={images.man} style={styles.avatar2} />
            <View style={styles.round}>
              <Text style={styles.roundText}>+5</Text>
            </View>
          </View>
          <Text style={styles.count}>5 Participants</Text>
        </View>
      </View>
    </View>
  );
};
