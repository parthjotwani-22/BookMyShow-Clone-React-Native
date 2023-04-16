import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import colors from '../../utils/colors';

const PaymentCompleteScreen = props => {
  const mdata = props?.route?.params?.data;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backicon}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image style={styles.backimg} source={assets.pointimg} />
        </TouchableOpacity>
        <View style={styles.headertextview}>
          <Text style={styles.headertext}>Tickets Confirmed !</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: colors.lightgrey,
        }}>
        <View style={styles.ticketview}>
          <View style={styles.nameview}>
            <View style={styles.numtickets}>
              <Text style={[styles.lrgtxt, {color: colors.red}]}>
                {mdata.mdata.ndata.numbook}
              </Text>
              <Text style={styles.smlltxt}>M-tickets</Text>
            </View>
            <Text style={styles.lrgtxt}>{mdata.mdata.mdata.name}</Text>
            <View style={{height: '30%', marginVertical: 10}}>
              <Text>English,2D</Text>
              <Text style={styles.smlltxt}>
                Fri,20 Jan,2023 | {mdata.mdata.mdata.showTime}
              </Text>
            </View>
            <Text>{mdata.mdata.mdata.cinema}</Text>
          </View>
          <View style={styles.priceview}>
            <View style={styles.priceviewrow}>
              <Text style={styles.smlltxt}>Ticket Price : </Text>
              <Text style={styles.smlltxt}>{mdata.mdata.ndata.amtbook} $</Text>
            </View>
            <View style={styles.priceviewrow}>
              <Text style={styles.smlltxt}>Convenience Fee : </Text>
              <Text style={styles.smlltxt}>
                {mdata.mdata.ndata.numbook * 32} $
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={[styles.smlltxt, {color: colors.red}]}>
                Cancelation Policy
              </Text>
            </TouchableOpacity>
            <View style={styles.priceviewrow}>
              <Text style={styles.smlltxt}>Total Payable Amount : </Text>
              <Text style={styles.smlltxt}>
                {mdata.mdata.ndata.numbook * 32 + mdata.mdata.ndata.amtbook} $
              </Text>
            </View>
          </View>
          <View style={styles.contactview}>
            <Text style={styles.lrgtxt}>Contact Details :</Text>
            <Text>{mdata.cdata.email}</Text>
            <Text>{mdata.cdata.phone}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentCompleteScreen;
