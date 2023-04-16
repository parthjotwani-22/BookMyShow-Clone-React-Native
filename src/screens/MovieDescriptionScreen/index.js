import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import {FlatList} from 'react-native-gesture-handler';
import newAssets from '../../utils/newAssets';
const MovieDescription = props => {
  const details = props?.route?.params?.data;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{flex: 0.1}}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image source={assets.pointimg} style={styles.headicn} />
        </TouchableOpacity>
        <View style={{flex: 0.6}}>
          <Text style={styles.txt}>{details.name}</Text>
        </View>
        <TouchableOpacity style={{flex: 0.1}}>
          <Image source={assets.Share} style={styles.headicn} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.9}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={{paddingHorizontal: 20, paddingTop: '5%'}}>
          <View style={styles.posterview}>
            <Image source={details.img} style={styles.posterimg} />
          </View>
          <View style={styles.aboutview}>
            <View
              style={{
                height: '10%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Image style={styles.staricn} source={assets.Star} />
              <View
                style={{
                  right: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: 8,
                }}>
                <Text style={styles.txt}>
                  <Text style={{fontSize: 20}}>{details.stars}/10 </Text>
                  <Text>{details.votes} Votes</Text>
                </Text>
              </View>
              <Image
                source={assets.pointimg}
                style={{
                  height: '30%',
                  resizeMode: 'contain',
                  alignSelf: 'center',
                  bottom: 4,
                  right: 35,
                }}
              />
            </View>
            <View style={styles.addratingview}>
              <View
                style={{
                  flex: 0.7,
                  justifyContent: 'center',
                }}>
                <Text style={styles.lrgtxt}>Add your rating & review</Text>
                <Text style={styles.txt}>Your ratings matter</Text>
              </View>
              <View
                style={{
                  flex: 0.3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity style={styles.ratebttn}>
                  <Text style={[styles.txt, {color: colors.lightred}]}>
                    Rate Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.detailsview}>
              <View style={styles.smllox}>
                <Text style={styles.txt}>{details.types}</Text>
              </View>
              <View style={styles.smllox}>
                <Text style={styles.txt}>{details.lang}</Text>
              </View>
              <View style={{marginVertical: 5}}>
                <Text style={styles.txt}>{details.abt}</Text>
              </View>
              <Text style={styles.txt}>{details.description}</Text>
            </View>
          </View>
          <View style={styles.peopleflview}>
            <View style={{padding: 20}}>
              <Text style={styles.lrgtxt}>Actors</Text>
            </View>
            <FlatList
              data={newAssets.actors}
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
          <View style={styles.peopleflview}>
            <View style={{padding: 20}}>
              <Text style={styles.lrgtxt}>Actors</Text>
            </View>
            <FlatList
              data={newAssets.actors}
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
        </ScrollView>
      </View>
      <View
        style={{flex: 0.1, justifyContent: 'center', paddingHorizontal: '10%'}}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.lightred,
            height: '80%',
            borderRadius: 10,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            props.navigation.navigate('Booking', {data: details.name});
          }}>
          <Text
            style={[styles.lrgtxt, {color: colors.white, fontWeight: '600'}]}>
            Book Tickets
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieDescription;
