import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import validlogin from '../../utils/validlogin';
const LoginScreen = props => {
  const [alldata, setalldata] = useState([]);
  const apicall = () => {
    fetch('https://638463d63fa7acb14ff31db1.mockapi.io/users', {method: 'GET'})
      .then(res => res.json())
      .then(val => setalldata(val), console.log(alldata))
      .catch(e => console.log(e));
  };
  useEffect(() => {
    apicall();
  }, []);
  const [see, setsee] = useState(false);
  const [det, setdet] = useState({
    name: null,
    pass: null,
  });
  const [err, seterr] = useState({
    name: null,
    pass: null,
  });
  const checkdata = data => {
    console.log(data);
    var user = alldata.find(item => {
      return item.name == data.name && item.pass == data.pass;
    });
    var checkobj = validlogin(data);
    if (user) {
      setsee(false);
      props.navigation.navigate('Home');
    } else if (!checkobj.valid) {
      seterr(checkobj.err);
      setsee(true);
    } else {
      setsee(false);
      seterr({
        name: null,
        pass: null,
      });
    }
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
            paddingHorizontal: 40,
          }}>
          <View style={{marginBottom: 20}}>
            <Text style={styles.txt}>Login To Your Account</Text>
          </View>
          <View style={styles.inpview}>
            <Text style={styles.smlltxt}>Name:</Text>
            <TextInput
              onChangeText={text => {
                setdet({...det, name: text});
              }}
              style={styles.inp}
              cursorColor={colors.white}></TextInput>
            {see && <Text style={styles.smlltxt}>{err.name}</Text>}
          </View>

          <View style={styles.inpview}>
            <Text style={styles.smlltxt}>Password:</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={text => {
                setdet({...det, pass: text});
              }}
              style={styles.inp}
              cursorColor={colors.white}></TextInput>
            {see && <Text style={styles.smlltxt}>{err.pass}</Text>}
          </View>
          <TouchableOpacity
            style={styles.submitbttn}
            onPress={() => {
              checkdata(det);
            }}>
            <Text style={[styles.smlltxt, {color: colors.black}]}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{top: Dimensions.get('screen').height / 14}}
            onPress={() => {
              props.navigation.navigate('Signup');
            }}>
            <Text style={[styles.smlltxt, {textAlign: 'center'}]}>
              Dont Have an account{' '}
              <Text
                style={{
                  textDecorationLine: 'underline',
                  textDecorationColor: colors.white,
                }}>
                Sign up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;
