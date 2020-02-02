import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './style';

export const SelectLanguageItem = (props: any) => {
  const {item, setSelectedLanguage, selectedLanguage} = props;
  const selectedLang = selectedLanguage === item.shortname;

  return (
    <View style={styles.box}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{uri: item.background_image}} style={styles.avatar} />
        <Text style={styles.txt}>{item.name}</Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#55c9f2', '#3082ed']}
          style={styles.linearGradient}>
          <TouchableOpacity
            onPress={() => setSelectedLanguage(item.shortname)}
            style={selectedLang ? styles.rightArrowActive : styles.rightArrow}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color={selectedLang ? '#519FF8' : '#fff'}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};
