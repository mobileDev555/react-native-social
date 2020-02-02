import {useMutation} from '@apollo/react-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Button, Header, Input, Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Login as LoginState, LoginVariables} from '../../../generated/Login';
import {SET_INITIAL_SCREEN} from '../../../graphql/mutation';
import login from '../../../graphql/types/mutations/login';
import {images} from '../../../libs/images';
import screens from '../../../libs/screens';
import theme from '../../../libs/theme';
import {styles} from './style';
import {TouchableHighlight} from 'react-native-gesture-handler';

export const EditProfile = (props: any) => {
  const [name, setName] = useState();
  const [education, setEducation] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();

  const [birthdaty, setBirthday] = useState();

  const editPhoto = () => {};
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
      <Image source={images.back3} style={styles.backImg} />

      <View style={styles.container}>
        <View
          style={{
            height: 120,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 60,
            marginTop: 120,
            marginBottom: 15,
          }}>
          <Image
            source={images.girl}
            style={{width: 136, height: 136}}
            borderRadius={68}></Image>
          <TouchableOpacity
            style={styles.editImage}
            onPress={() => editPhoto()}>
            <Image source={images.edit} style={{width: 16, height: 16}}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <Input
            inputContainerStyle={styles.textInput}
            placeholder="Emma Watson"
            leftIcon={{
              type: 'ionicons',
              name: 'person',
              size: 24,
              color: '#DDD',
            }}
            leftIconContainerStyle={{marginRight: 10}}
            value={name}
            onChangeText={name => setName(name)}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.editImageInput}
            onPress={() => editPhoto()}>
            <Image source={images.edit} style={{width: 16, height: 16}}></Image>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Input
            inputContainerStyle={styles.textInput2}
            placeholder="Oxford University......"
            leftIcon={{
              type: 'material',
              name: 'room',
              size: 24,
              color: '#DDD',
            }}
            multiline
            leftIconContainerStyle={{marginRight: 10}}
            value={education}
            onChangeText={education => setEducation(education)}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.editImageInput2}>
            <Image source={images.edit} style={{width: 16, height: 16}}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <Input
            inputContainerStyle={styles.textInput}
            placeholder="Emma_Watson@gmail.com"
            leftIcon={{
              type: 'ionicons',
              name: 'email',
              size: 24,
              color: '#DDD',
            }}
            leftIconContainerStyle={{marginRight: 10}}
            value={email}
            onChangeText={email => setEmail(email)}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.editImageInput}>
            <Image
              source={images.edit_remove}
              style={{width: 16, height: 18}}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <Input
            inputContainerStyle={styles.textInput}
            placeholder="+91 25258 89856"
            leftIcon={{
              type: 'ionicons',
              name: 'phone',
              size: 24,
              color: '#DDD',
            }}
            leftIconContainerStyle={{marginRight: 10}}
            value={mobile}
            onChangeText={mobile => setMobile(mobile)}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.editImageInput}>
            <Image
              source={images.edit_remove}
              style={{width: 16, height: 18}}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <Input
            inputContainerStyle={styles.textInput}
            placeholder="15/jun/1996"
            leftIcon={{
              type: 'foundation',
              name: 'calendar',
              size: 24,
              color: '#DDD',
            }}
            leftIconContainerStyle={{marginRight: 10}}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.editImageInput}>
            <Image source={images.edit} style={{width: 16, height: 16}}></Image>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['#55c9f2', '#3082ed']}
            style={styles.button}>
            <TouchableOpacity style={styles.touch}>
              <Icon
                type={'foundation'}
                name={'male-symbol'}
                size={30}
                color={'#FFF'}></Icon>
              <Text
                style={{
                  fontSize: 16,
                  color: '#FFF',
                  fontWeight: '700',
                  marginLeft: 10,
                }}>
                Male
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.button2}>
            <TouchableOpacity style={styles.touch}>
              <Icon
                type={'foundation'}
                name={'female-symbol'}
                size={30}
                color={'#000'}></Icon>
              <Text
                style={{
                  fontSize: 16,
                  color: '#000',
                  fontWeight: '700',
                  marginLeft: 10,
                }}>
                Female
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#55c9f2', '#3082ed']}
          style={styles.savebutton}>
          <TouchableOpacity style={styles.touch}>
            <Text
              style={{
                fontSize: 16,
                color: '#FFF',
                fontWeight: '700',
                marginLeft: 10,
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};
