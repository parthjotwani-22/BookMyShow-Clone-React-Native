import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import colors from '../../utils/colors';
import assets from '../../utils/assets';

const EventDescription = props => {
  const details = props?.route?.params?.data;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{flex: 0.1, justifyContent: 'center'}}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image style={styles.smllicons} source={assets.pointimg} />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 0.1, justifyContent: 'center'}}>
          <Image style={styles.smllicons} source={assets.Share} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.posterview}>
          <Image source={details.img} style={styles.poster} />
        </View>
        <View style={{paddingHorizontal: 25}}>
          <View style={styles.details}>
            <View
              style={{
                width: '30%',
                alignItems: 'center',
                backgroundColor: colors.greyish,
              }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 13,
                }}>
                {details.act}
              </Text>
            </View>
            <Text style={styles.lrgtxt}>{details.name}</Text>
            <View style={{justifyContent: 'space-evenly', height: '85%'}}>
              <View style={styles.detline}>
                <View style={{flex: 0.2, justifyContent: 'center'}}>
                  <Image source={assets.QrScan} style={styles.icons} />
                </View>
                <View style={{flex: 0.8, right: 15}}>
                  <Text style={styles.smlltext}>{details.time}</Text>
                </View>
              </View>
              <View style={styles.detline}>
                <View style={{flex: 0.2}}>
                  <Image source={assets.QrScan} style={styles.icons} />
                </View>
                <View style={{flex: 0.8, right: 15}}>
                  <Text style={styles.smlltext}>{details.loc}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.detline}>
                <Text style={[styles.smlltext, {color: colors.lightred}]}>
                  View on Maps
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.moreinfo}>
            <Text style={[styles.lrgtxt, {fontSize: 20}]}>
              More Information
            </Text>
            <View style={styles.detline}>
              <View style={{flex: 0.2}}>
                <Image source={assets.QrScan} style={styles.icons} />
              </View>
              <View style={{flex: 0.8, right: 15}}>
                <Text style={styles.smlltext}>{details.duration}</Text>
              </View>
            </View>
            <View style={styles.detline}>
              <View style={{flex: 0.2}}>
                <Image source={assets.QrScan} style={styles.icons} />
              </View>
              <View style={{flex: 0.8, right: 15}}>
                <Text style={styles.smlltext}>{details.lang}</Text>
              </View>
            </View>
            <View style={styles.detline}>
              <View style={{flex: 0.2}}>
                <Image source={assets.QrScan} style={styles.icons} />
              </View>
              <View style={{flex: 0.8, right: 15}}>
                <Text style={styles.smlltext}>{details.age}</Text>
              </View>
            </View>
          </View>
          <View style={{height: Dimensions.get('screen').height}}>
            <View style={{padding: 20}}>
              <Text style={styles.lrgtxt}>Actors</Text>
            </View>
            <FlatList
              data={details.artist}
              horizontal
              renderItem={({item}) => {
                return (
                  <View style={{marginHorizontal: 15}}>
                    <View
                      style={{
                        height: 100,
                        width: 100,
                        alignItems: 'center',
                        borderRadius: 50,
                        backgroundColor: colors.lightgrey,
                      }}>
                      <Image
                        source={item.img}
                        style={{height: '100%', resizeMode: 'contain'}}
                      />
                    </View>
                    <View style={{alignItems: 'center', paddingVertical: 10}}>
                      <Text>{item.name}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View
          style={{
            flex: 0.5,
            alignItems: 'flex-start',
            padding: 20,
            justifyContent: 'center',
          }}>
          <Text style={[styles.lrgtxt, {fontSize: 20}]}>
            {details.price} Onwards
          </Text>
          <View
            style={{
              borderColor: colors.lightred,
              borderRadius: 5,
              borderWidth: 2,
              padding: 2,
            }}>
            <Text style={{color: colors.lightred}}>Filling Fast</Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={styles.bookbtn}>
            <Text style={[styles.smlltext, {color: colors.white}]}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EventDescription;
