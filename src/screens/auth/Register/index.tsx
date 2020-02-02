import {useMutation} from '@apollo/react-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {Alert, Image, SafeAreaView, Text, View} from 'react-native';
import {Button, Header, Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Login as LoginState, LoginVariables} from '../../../generated/Login';
import {SET_INITIAL_SCREEN} from '../../../graphql/mutation';
import login from '../../../graphql/types/mutations/login';
import {images} from '../../../libs/images';
import screens from '../../../libs/screens';
import theme from '../../../libs/theme';
import {styles} from './style';

export const Register = (props: any) => {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [processLogin] = useMutation<LoginState, LoginVariables>(login, {
    errorPolicy: 'all',
  });

  const [setInitialScreen] = useMutation(SET_INITIAL_SCREEN);

  const setAuth = async ({user, token}: any, props: any) => {
    const initialScreen = user.language ? screens.Home : screens.SelectLanguage;

    await AsyncStorage.setItem('token', token);
    await setInitialScreen({variables: {initialScreen}});

    props.navigation.replace(initialScreen);
  };

  const doSignIn = async () => {
    try {
      const {data} = await processLogin({
        variables: {
          email,
          password,
        },
      });

      await setAuth(data?.login, props);
    } catch (error) {
      const response = error.networkError || error.graphQLErrors;
      const message = response[0].extensions.reason;

      Alert.alert('Oops', message);
    }
  };

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
            backgroundColor: '#35477d',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            marginBottom: 20,
          }}>
          <Text style={styles.logoText}>Pauzr</Text>
        </View>

        <View>
          <Text style={[styles.logoText, {color: '#000000'}]}>Register</Text>
        </View>

        <View style={styles.inputView}>
          <Input
            inputContainerStyle={styles.textInput}
            placeholder="Full Name"
            leftIcon={{
              type: 'ionicons',
              name: 'person',
              size: 20,
            }}
            leftIconContainerStyle={{marginRight: 10}}
            value={name}
            onChangeText={name => setName(name)}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputView}>
          <Input
            inputContainerStyle={styles.textInput}
            placeholder="Phone Number"
            leftIcon={{
              type: 'ionicons',
              name: 'phone',
              size: 20,
            }}
            leftIconContainerStyle={{marginRight: 10}}
            value={mobile}
            onChangeText={mobile => setMobile(mobile)}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputView}>
          <Input
            inputContainerStyle={styles.textInput}
            placeholder="Email Address"
            leftIcon={{
              type: 'ionicons',
              name: 'email',
              size: 20,
            }}
            leftIconContainerStyle={{marginRight: 10}}
            value={email}
            onChangeText={email => setEmail(email)}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputView}>
          <Input
            inputContainerStyle={styles.textInput}
            placeholder="Password"
            leftIcon={{
              type: 'ionicons',
              name: 'lock',
              size: 20,
            }}
            leftIconContainerStyle={{marginRight: 10}}
            value={password}
            onChangeText={password => setPassword(password)}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            raised={true}
            onPress={() => doSignIn()}
            title="SIGN UP"
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#55c9f2', '#3082ed'],
            }}
            buttonStyle={{
              width: '100%',
              backgroundColor: '#f97794',
              elevation: 5,
              borderRadius: 5,
            }}
            titleStyle={{
              textTransform: 'uppercase',
              fontSize: 16,
              color: '#fff',
              fontFamily: theme.fonts.QuicksandBold,
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <Button
            raised={true}
            onPress={() => props.navigation.replace(screens.Login)}
            title="SIGN IN"
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#55c9f2', '#3082ed'],
            }}
            buttonStyle={{
              width: '100%',
              backgroundColor: '#f97794',
              elevation: 5,
              borderRadius: 5,
            }}
            titleStyle={{
              textTransform: 'uppercase',
              fontSize: 16,
              color: '#fff',
              fontFamily: theme.fonts.QuicksandBold,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
