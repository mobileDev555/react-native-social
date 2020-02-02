import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Header} from '../../../../components/header';
import {styles} from './style';

export const Feeds = (props: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header {...props} title={'Feed'} camera profile />

      <View style={{flex: 1, marginTop: 16}}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{
                uri:
                  'https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/rapunzel-wreck-it-ralph-2-1.36.jpg',
              }}
              style={styles.avatar}
            />
            <View style={{marginLeft: 12, flex: 1}}>
              <Text style={styles.name}>Emma Watson</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.time}>30 Mins ago</Text>
                <Text style={styles.link}>Food</Text>
              </View>
            </View>
            <Ionicons name="md-more" size={30} color={'#cecece'} />
          </View>
          <Image
            source={{
              uri:
                'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/epic-summer-salad.jpg',
            }}
            style={styles.img}
          />

          <View style={styles.boxView}>
            <View style={styles.box}>
              <FontAwesome
                name="heart"
                size={16}
                color={'#e64c3c'}
                style={{marginTop: -12}}
              />
              <View style={{marginLeft: 12}}>
                <Text style={[styles.small, {fontSize: 12}]}>82,562</Text>
                <Text style={styles.small}>Like</Text>
              </View>
            </View>
            <View style={styles.box2}>
              <FontAwesome
                name="comment-o"
                size={16}
                color={'#b4b2b2'}
                style={{marginTop: -12}}
              />
              <View style={{marginLeft: 12}}>
                <Text style={[styles.small, {fontSize: 12}]}>815</Text>
                <Text style={styles.small}>Comment</Text>
              </View>
            </View>
            <View style={[styles.box, {justifyContent: 'flex-end'}]}>
              <Ionicons
                name="ios-refresh"
                size={16}
                color={'#b4b2b2'}
                style={{marginTop: -12}}
              />
              <View style={{marginLeft: 12}}>
                <Text style={[styles.small, {fontSize: 12}]}>456</Text>
                <Text style={styles.small}>Repost</Text>
              </View>
            </View>
          </View>

          <Text style={{color: '#111', fontSize: 12, fontWeight: '700'}}>
            Mandaypo {'  '}
            <Text style={{color: '#b4b2b2', marginLeft: 3, fontWeight: '400'}}>
              it's been a very Wonderful time on the west beach today. Best day
              ever thanks!{' '}
            </Text>
            #summertime #beachlife
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
