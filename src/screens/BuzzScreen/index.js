import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import {FlatList} from 'react-native-gesture-handler';
import newAssets from '../../utils/newAssets';
const BuzzScreen = props => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.15}}>
        <View style={styles.header}>
          <View style={styles.headertxtview}>
            <Text style={styles.bigtext}>Buzz</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text style={styles.smllwhtxt}>
                Get Latest Entertainment News
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.smlliconview}>
            <Image source={assets.Search} style={styles.smllicon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 0.85, padding: 10}}>
        <FlatList
          data={newAssets.buzzdata}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.crd}>
              <View
                style={{
                  flex: 0.4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.img}
                  style={{
                    height: 110,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: colors.black,
                    width: 110,
                  }}></Image>
              </View>
              <View
                style={{
                  flex: 0.6,
                  justifyContent: 'center',
                }}>
                <Text style={[styles.bigtext, {color: colors.black}]}>
                  {item.data}
                </Text>
                <Text style={[styles.smllwhtxt, {color: colors.black}]}>
                  {item.time} hours ago
                </Text>
              </View>
            </TouchableOpacity>
          )}></FlatList>
      </View>
    </View>
  );
};

export default BuzzScreen;
