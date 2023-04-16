import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../../utils/colors';

const PayContact = props => {
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const mdata = props?.route?.params?.data;
  console.log({
    mdata: mdata,
    cdata: {
      email: email,
      phone: phone,
    },
  });
  console.log(mdata);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backbttn}>
          <Image source={assets.pointimg} style={styles.backimg} />
        </View>
        <View style={styles.headtxtview}>
          <Text style={styles.headtxt}>Contact Details</Text>
        </View>
      </View>
      <View style={styles.detview}>
        <Text style={styles.smlltxt}>Your Email</Text>
        <TextInput
          style={styles.inp}
          onChangeText={text => {
            setemail(text);
          }}></TextInput>
        <Text style={styles.smlltxt}>Your Number</Text>
        <TextInput
          style={styles.inp}
          onChangeText={text => {
            setphone(text);
          }}></TextInput>
        <TouchableOpacity style={{bottom: 0, right: 0}}>
          <Text
            style={[
              styles.txt,
              {
                color: colors.lightred,
                textDecorationLine: 'underline',
              },
            ]}>
            Terms And Conditions
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.next}>
        <TouchableOpacity
          style={styles.updatebttn}
          onPress={() => {
            props.navigation.navigate('Confirmation', {
              data: {
                mdata: mdata,
                cdata: {
                  email: email,
                  phone: phone,
                },
              },
            });
          }}>
          <Text style={styles.txt}>Update Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PayContact;
