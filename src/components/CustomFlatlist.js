import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import assets from '../utils/assets';
import styles from '../screens/HomeScreen/styles';
import colors from '../utils/colors';
import {Dimensions} from 'react-native';
import CustomCard from './CustomCard';
interface CustomFlatlistProps {
  name?: String | undefined;
  data?: String | undefined;
  style: StyleSheet | undefined;
}
const CustomFlatlist = (props: CustomFlatlistProps) => {
  return (
    <View style={{height: Dimensions.get('screen').height / 2.5}}>
      <View
        style={{
          flex: 0.1,
          marginLeft: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <View style={{flex: 0.8, justifyContent: 'center'}}>
          <Text style={styles.bigtextblack}>{props.name}</Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={styles.smllredtxt}>See All</Text>
          <Image
            source={assets.pointimg}
            style={{
              height: 10,
              resizeMode: 'contain',
              alignSelf: 'center',
              tintColor: colors.red,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.8}}>
        <FlatList
          data={props.data}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  height: '95%',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  marginHorizontal: 10,
                  width: Dimensions.get('screen').width / 3,
                }}>
                <View style={{flex: 0.9}}>
                  <CustomCard data={item} />
                </View>
                <View style={{flex: 0.1}}>
                  <Text style={styles.smlltxt}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CustomFlatlist;
