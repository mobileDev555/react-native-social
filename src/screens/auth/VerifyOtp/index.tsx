import React, {Fragment, useState} from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StatusBar, SafeAreaView , TextInput,ScrollView
, KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './style';
import { useNavigation } from 'react-navigation-hooks';
import { GradientButton, GradientButtonWithBorder } from '../../../components/gradient-button';
import { images } from '../../../libs/images';

export const VerifyOtp = () => {
  const { navigate } = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
	return (
    <>
    <StatusBar backgroundColor={'#54CAF1'} barStyle={'dark-content'}></StatusBar>
    <View style={{flex:1,}}>
		<ImageBackground style={{flex:1,position:'absolute', top:-12, bottom:0, right: 0, left:0, flexDirection:'column', alignItems:'center',}} source={images.optBack}>
			<Text style={styles.title}>OTP Verification</Text>
      <ScrollView style={{flex:1,}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{alignItems:'center'}}>
			<Text style={styles.text}>Enter your mobile number</Text>
			<Text style={styles.text1}>We will send you a OTP Message</Text>

			<KeyboardAvoidingView style={styles.horizontal}>
        <TextInput
            style = {styles.textInput}
            placeholder="Enter your mobile number"
            value={phoneNumber}
            placeholderTextColor = "#FFF"
            keyboardType={'number-pad'}
            onChangeText={value => setPhoneNumber(value)}
          />
			</KeyboardAvoidingView>

			<View style={{ bottom: 20,  }}>
				<View style={styles.horizontal}>
					<TouchableOpacity
						onPress={() => {
							navigate('Home');
						}}
					>
						<GradientButtonWithBorder title={'SEND OTP'} />
					</TouchableOpacity>
				</View>
			</View>
      </View>
      </ScrollView>
		</ImageBackground>
    </View>
    </>
	);
};
