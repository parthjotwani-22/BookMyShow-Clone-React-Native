import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../utils/colors';

interface CustomCardProps {
  img?: String | undefined;
  style: StyleSheet | undefined;
  text?: String | undefined;
}
const CustomCard = (props: CustomCardProps) => {
  const clrarray = useState(['yellow', 'green', 'red', 'blue']);

  return (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <Image source={props.img} style={styles.img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  imgcontainer: {
    borderRadius: 10,
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
});

export default CustomCard;
