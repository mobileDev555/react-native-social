import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '../../../../components/header';
import TimerCard from '../../../../components/Timer/card';
import {baseUrl} from '../../../../libs/vars';

const size = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const Timer = (props: any) => {
  const [tab, setTab] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    // dispatch.quote.getQuotes(null);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTab();
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [tab]);

  const loading = false;
  const quotes: any = [
    {
      title: 'hello',
      image:
        'https://api.pauzr.com/storage/2WEPeFhawg3RfStxt92n1lb3GiirWeAZHY3TmK0e.jpeg',
    },
    {
      title: 'hello',
      image:
        'https://api.pauzr.com/storage/pMuSo0C9ADpLiwdmGZSfLz4TQfChDWhtMYIDDeiH.jpeg',
    },
    {
      title: 'hello',
      image:
        'https://api.pauzr.com/storage/jPzwScDAbvPI4OYwGisIryfLQK8yj5kZphcKZLPG.jpeg',
    },
    {
      title: 'hello',
      image:
        'https://api.pauzr.com/storage/ENpyNC1THCp6sOn9OCmawM9WoSyP4vcnbZhchqWv.jpeg',
    },
    {
      title: 'hello',
      image:
        'https://api.pauzr.com/storage/7NCvBBEO47h7r8vRH19J2p2wC1Ii6ye08eIdn2Pf.jpeg',
    },
  ];
  const currentQuote = quotes[tab];

  const tps = [
    {time: 10, point: 5},
    {time: 20, point: 10},
    {time: 30, point: 20},
  ];

  const stopPlaying = () => setPlaying(false);
  const startPlaying = () => setPlaying(true);
  const showPreviousTab = () => previousTab();
  const showNextTab = () => nextTab();

  const previousTab = () => {
    if (!playing) return;
    const previousTab = tab > 0 ? tab - 1 : quotes.length - 1;
    setTab(previousTab);
  };

  const nextTab = () => {
    if (!playing) return;
    const nextTab = tab < quotes.length - 1 ? tab + 1 : 0;
    setTab(nextTab);
  };

  const RenderLayout = () => (
    <Fragment>
      <Header {...props} title={'Pauzr'} profile menu />

      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: 'skyblue',
            }}>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              {quotes.map((quote: any, index: number) => {
                const width = size.width / quotes.length - 4;

                return (
                  <View
                    key={index.toString()}
                    style={{
                      height: 3,
                      width,
                      backgroundColor: index == tab ? 'black' : 'grey',
                      marginHorizontal: 2,
                      marginVertical: 5,
                    }}
                  />
                );
              })}
            </View>

            <View>
              <Image
                style={{
                  width: size.width - 20,
                  height: size.height - 150,
                  borderRadius: 10,
                }}
                resizeMode="cover"
                source={{uri: `${baseUrl}/storage/${currentQuote.image}`}}
              />
            </View>
          </View>

          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignSelf: 'center',
              bottom: 20,
            }}>
            {tps.map((tp: any, index: number) => {
              const startTimer = useCallback(() => {
                props.navigation.push('StartTimer', {time: tp.time});
              }, []);

              return (
                <TimerCard
                  key={index.toString()}
                  onTimerCardTap={startTimer}
                  cardMargin={5}
                  cardWidth={size.width / 3.1}
                  minutes={tp.point}
                  points={5}
                />
              );
            })}
          </View>

          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignSelf: 'center',
              top: 0,
              left: 0,
              height: '100%',
              backgroundColor: 'transparent',
            }}>
            <TouchableOpacity
              onLongPress={stopPlaying}
              onPressOut={startPlaying}
              onPress={showPreviousTab}
              style={{width: '50%'}}
            />
            <TouchableOpacity
              onLongPress={stopPlaying}
              onPressOut={startPlaying}
              onPress={showNextTab}
              style={{width: '50%'}}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );

  if (loading) {
    return <ActivityIndicator style={{flex: 1, justifyContent: 'center'}} />;
  }

  if (quotes.length) {
    return <RenderLayout />;
  }

  return null;
};
