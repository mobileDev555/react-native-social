import {useMutation, useQuery} from '@apollo/react-hooks';
import React, {Fragment, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, Input} from 'react-native-elements';
import {
  LoadCountries,
  LoadCountries_countries,
} from '../../../generated/LoadCountries';
import {SET_SELECTED_COUNTRY} from '../../../graphql/mutation';
import load_countries from '../../../graphql/types/queries/load_countries';
import theme from '../../../libs/theme';

export const SelectCountry = (props: any) => {
  const [keywords, setKeywords] = useState('');

  const {data: countries, loading: loadingCountries} = useQuery<
    LoadCountries,
    {}
  >(load_countries, {
    fetchPolicy: 'cache-and-network',
  });

  const [setSelectedCountry] = useMutation(SET_SELECTED_COUNTRY);

  const setSelectedCountryHandler = async (item: any) => {
    try {
      await setSelectedCountry({
        variables: {
          country: item,
        },
      });

      props.navigation.pop();
    } catch (error) {
      console.log(error);
    }
  };

  const getFilteredCountries = () => {
    const data = countries ? countries.countries : [];

    return keywords.length >= 3
      ? data.filter((country: any) => {
          return country.name.match(new RegExp(`^${keywords}`, 'gi'));
        })
      : data;
  };

  const renderItem = (data: {item: LoadCountries_countries}) => {
    const {item} = data;

    return (
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          setSelectedCountryHandler(item);
        }}>
        <Text
          style={{
            color: '#000',
            fontFamily: theme.fonts.QuicksandRegular,
            fontSize: 18,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item: any, index: number) => index.toString();
  const ItemSeparatorComponent = () => (
    <View style={{height: 1, backgroundColor: '#ccc'}} />
  );

  if (!countries && loadingCountries) {
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
          <View style={{borderBottomWidth: 1, borderBottomColor: '#bbb'}}>
            <Input
              placeholder="Filter Country"
              value={keywords}
              onChangeText={value => setKeywords(value)}
              inputContainerStyle={{borderBottomWidth: 0}}
              labelStyle={{
                color: '#000',
                fontFamily: theme.fonts.QuicksandSemiBold,
                fontSize: 18,
              }}
              inputStyle={{
                color: '#000',
                fontFamily: theme.fonts.QuicksandSemiBold,
                fontSize: 18,
              }}
            />
          </View>

          <View style={{padding: 10}}>
            <FlatList
              keyboardShouldPersistTaps="handled"
              keyExtractor={keyExtractor}
              data={getFilteredCountries()}
              ItemSeparatorComponent={ItemSeparatorComponent}
              renderItem={renderItem}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
