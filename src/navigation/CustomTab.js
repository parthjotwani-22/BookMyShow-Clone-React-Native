import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import assets from '../utils/assets';
import colors from '../utils/colors';

const CustomTab = props => {
  const [crr, setcrr] = useState({
    Home: true,
    Live: false,
    Buzz: false,
    Profile: false,
  });
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.bttn}
        onPress={() => {
          props.navigation.navigate('Home');
          setcrr({Home: true, Live: false, Buzz: false, Profile: false});
        }}>
        <Image
          source={assets.logosmll}
          style={crr.Home ? styles.acimg : styles.img}
        />
        <Text style={crr.Home ? styles.actxt : styles.txt}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bttn}
        onPress={() => {
          props.navigation.navigate('Live');
          setcrr({Home: false, Live: true, Buzz: false, Profile: false});
        }}>
        <Image
          source={assets.LiveLogo}
          style={crr.Live ? styles.acimg : styles.img}
        />
        <Text style={crr.Live ? styles.actxt : styles.txt}>Live</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bttn}
        onPress={() => {
          props.navigation.navigate('Buzz');
          setcrr({Home: false, Live: false, Buzz: true, Profile: false});
        }}>
        <Image
          source={assets.BuzzLogo}
          style={crr.Buzz ? styles.acimg : styles.img}
        />
        <Text style={crr.Buzz ? styles.actxt : styles.txt}>Buzz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bttn}
        onPress={() => {
          props.navigation.navigate('Profile');
          setcrr({Home: false, Live: false, Buzz: false, Profile: true});
        }}>
        <Image
          source={assets.ProfileLogo}
          style={crr.Profile ? styles.acimg : styles.img}
        />
        <Text style={crr.Profile ? styles.actxt : styles.txt}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('screen').width,
    borderColor: colors.black,
    borderTopWidth: 0.8,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
  },
  txt: {
    fontSize: 15,
    color: colors.black,
  },
  actxt: {
    fontSize: 15,
    color: colors.lightred,
  },
  bttn: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 25,
    width: 25,
    tintColor: colors.black,
  },
  acimg: {
    height: 25,
    width: 25,
    tintColor: colors.lightred,
  },
});

export default CustomTab;
