import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CustomOptionCard from '../../components/CustomOptionCard';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import styles from './styles';

const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.15}}>
        <View style={styles.header}>
          <View style={styles.headertxtview}>
            <Text style={styles.bigtext}>Hey!</Text>
          </View>
          <TouchableOpacity style={styles.smlliconview}>
            <Image source={assets.user} style={styles.smllicon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{flex: 0.9}} contentContainerStyle={{flexGrow: 1}}>
        <View style={{paddingVertical: 15}}>
          <FlatList
            data={assets.optiondata}
            renderItem={({item}) => (
              <CustomOptionCard
                onPress={() => {
                  props.navigation.navigate('Purchases');
                }}
                name={item.name}
                img={item.img}
                about={item.about}
                locked={item.locked}
              />
            )}
          />
        </View>
        <View style={{paddingVertical: 15}}>
          <FlatList
            data={assets.optiondata2}
            renderItem={({item}) => (
              <CustomOptionCard
                name={item.name}
                img={item.img}
                about={item.about}
                locked={item.locked}
              />
            )}
          />
        </View>
        <View
          style={{
            height: 150,
            paddingVertical: 15,
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text style={styles.smlldecoratedtxt}>Share </Text>
            <Text>|</Text>
            <Text style={styles.smlldecoratedtxt}>Rate Us</Text>
            <Text>|</Text>
            <Text style={styles.smlldecoratedtxt}>bookAsmile</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.smlldecoratedtxt}>App Version 1.0</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[styles.smlldecoratedtxt, {color: colors.blue}]}>
              Update App
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
