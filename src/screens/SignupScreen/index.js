import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import validation from '../../utils/validation';
const SignupScreen = props => {
  const [data, setdata] = useState({
    name: null,
    email: null,
    phone: null,
    pass: null,
  });
  const [err, seterr] = useState({
    name: null,
    email: null,
    phone: null,
    pass: null,
  });

  const [see, setsee] = useState(false);
  const valid = () => {
    validation(data).then(msg => {
      if (msg.status == 1) {
        apicall();
      } else {
        setsee(true);
        seterr(msg.error);
      }
    });
    validation(data).catch(err => {
      console.log(err);
    });
  };
  const apicall = () => {
    fetch('https://638463d63fa7acb14ff31db1.mockapi.io/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => props.navigation.navigate('Login'))
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <ImageBackground
      style={styles.container}
      source={assets.bgtheater}
      imageStyle={{opacity: 0.3}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            height: Dimensions.get('screen').height / 4,
            justifyContent: 'center',
          }}>
          <Image
            source={assets.logosmll}
            style={{
              height: '50%',
              width: '50%',
              alignSelf: 'center',
              tintColor: colors.white,
            }}
          />
        </View>
        <View
          style={{
            height: Dimensions.get('screen').height,
            paddingHorizontal: 40,
          }}>
          <View style={{marginBottom: 20}}>
            <Text style={styles.txt}>Create New Account</Text>
          </View>
          <View style={styles.inpview}>
            <Text style={styles.smlltxt}>Name:</Text>
            <TextInput
              style={styles.inp}
              cursorColor={colors.white}
              onChangeText={text => {
                setdata({...data, name: text});
              }}></TextInput>
            {see && <Text style={styles.smlltxt}>{err.name}</Text>}
          </View>
          <View style={styles.inpview}>
            <Text style={styles.smlltxt}>Email:</Text>
            <TextInput
              style={styles.inp}
              cursorColor={colors.white}
              onChangeText={text => {
                setdata({...data, email: text});
              }}></TextInput>
            {see && <Text style={styles.smlltxt}>{err.email}</Text>}
          </View>
          <View style={styles.inpview}>
            <Text style={styles.smlltxt}>Phone:</Text>
            <TextInput
              style={styles.inp}
              keyboardType="decimal-pad"
              cursorColor={colors.white}
              onChangeText={text => {
                setdata({...data, phone: text});
              }}></TextInput>
            {see && <Text style={styles.smlltxt}>{err.phone}</Text>}
          </View>
          <View style={styles.inpview}>
            <Text style={styles.smlltxt}>Password:</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.inp}
              cursorColor={colors.white}
              onChangeText={text => {
                setdata({...data, pass: text});
              }}></TextInput>
            {see && <Text style={styles.smlltxt}>{err.pass}</Text>}
          </View>
          <TouchableOpacity
            style={styles.submitbttn}
            onPress={() => {
              valid();
            }}>
            <Text style={[styles.smlltxt, {color: colors.black}]}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignupScreen;
