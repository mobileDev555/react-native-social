import {useMutation, useQuery} from '@apollo/react-hooks';
import React, {Fragment, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, View} from 'react-native';
import {Button, Header} from 'react-native-elements';
import {SelectLanguageItem} from '../../../components/SelectLanguageItem';
import {
  EditProfile,
  EditProfileVariables,
} from '../../../generated/EditProfile';
import {GetAuthUser} from '../../../generated/GetAuthUser';
import {GetLanguages} from '../../../generated/GetLanguages';
import {SET_INITIAL_SCREEN} from '../../../graphql/mutation';
import edit_profile from '../../../graphql/types/mutations/edit_profile';
import get_auth_user from '../../../graphql/types/queries/get_auth_user';
import get_languages from '../../../graphql/types/queries/get_languages';
import screens from '../../../libs/screens';
import theme from '../../../libs/theme';

export const SelectLanguage = (props: any) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const {data: authUser} = useQuery<GetAuthUser, {}>(get_auth_user);

  const {data: languages, loading: loadingLanguages} = useQuery<
    GetLanguages,
    {}
  >(get_languages, {
    fetchPolicy: 'cache-and-network',
  });

  const [editProfile, {loading}] = useMutation<
    EditProfile,
    EditProfileVariables
  >(edit_profile);

  const [setInitialScreen] = useMutation(SET_INITIAL_SCREEN);

  const setLanguage = async () => {
    try {
      await editProfile({
        variables: {
          language: selectedLanguage,
        },
      });
      await setInitialScreen({variables: {initialScreen: screens.Home}});
      props.navigation.replace(screens.Home);
    } catch (error) {
      console.log(error);
    }
  };

  if (!languages && loadingLanguages) {
    return <ActivityIndicator style={{justifyContent: 'center', flex: 1}} />;
  }

  return (
    <Fragment>
      <Header
        style={{flex: 1}}
        statusBarProps={{
          barStyle: 'light-content',
          translucent: true,
          backgroundColor: '#3082ed',
        }}
        barStyle="light-content"
        containerStyle={{backgroundColor: '#3082ed'}}
        centerComponent={{
          text: 'Select Language',
          style: {
            color: 'white',
            fontSize: 22,
            fontFamily: theme.fonts.QuicksandRegular,
          },
        }}
      />

      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList
            data={languages ? languages.languages : []}
            extraData={authUser}
            renderItem={({item}) => {
              return (
                <SelectLanguageItem
                  {...props}
                  item={item}
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                />
              );
            }}
            keyExtractor={(item: any, index: number) => index.toString()}
          />
        </View>

        <View style={{padding: 10}}>
          <Button
            title="Continue"
            titleStyle={{
              fontFamily: theme.fonts.QuicksandRegular,
            }}
            onPress={setLanguage}
            loading={loading}
            disabled={loading}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
