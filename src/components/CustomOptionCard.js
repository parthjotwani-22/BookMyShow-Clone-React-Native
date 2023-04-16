import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import assets from '../utils/assets';
import colors from '../utils/colors';

interface CustomOptionCardProps {
  img?: String | undefined;
  name?: String | undefined;
  about?: String | undefined;
  locked?: Boolean | undefined;
  onPress?: Function | undefined;
  style: StyleSheet | undefined;
}
const CustomOptionCard = (props: CustomOptionCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.categoryimageView}>
        <Image style={styles.categoryimage} source={props.img} />
      </View>
      <View style={styles.textview}>
        <View>
          <Text style={styles.nametext}>{props.name}</Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={styles.smlltext}>{props.about}</Text>
        </View>
      </View>
      <View style={styles.arrview}>
        <Image source={assets.pointimg} style={styles.arrimg} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 60,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.black,
  },
  arrimg: {
    height: '40%',
    resizeMode: 'contain',
  },
  categoryimage: {
    height: '70%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  categoryimageView: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textview: {
    flex: 0.7,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  nametext: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '300',
    fontFamily: 'TruenoRound',
  },
  smlltext: {
    color: colors.black,
    fontSize: 10,
    fontWeight: '300',
    fontFamily: 'TruenoRound',
  },
  arrview: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomOptionCard;
