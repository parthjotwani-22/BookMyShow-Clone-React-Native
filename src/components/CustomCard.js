import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import newAssets from '../utils/newAssets';
import assets from '../utils/assets';
import colors from '../utils/colors';

interface CustomCardProps {
  // votes?: String | undefined;
  // stars?: String | undefined;
  // img?: String | undefined;
  // style: StyleSheet | undefined;
  // type: String | undefined;
  data: Object | undefined;
}

const CustomCard = (props: CustomCardProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (props.data.type == 'Event') {
          navigation.navigate('EventDescription', props);
        } else {
          navigation.navigate('Description', props);
        }
      }}>
      <View style={{flex: 0.85}}>
        <Image source={props.data.img} style={styles.img} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.txt}>{props.data.stars}/10</Text>
        <Text style={styles.txt}>{props.data.votes}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  img: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  footer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.black,
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  txt: {
    color: colors.white,
    fontSize: 15,
  },
});

export default CustomCard;
