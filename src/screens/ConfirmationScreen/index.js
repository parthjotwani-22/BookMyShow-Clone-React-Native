import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import colors from '../../utils/colors';
import {useDispatch, useSelector} from 'react-redux';

import {
  showFound,
  showUpdated,
} from '../../services/redux/ShowDescription/action';
import {purFound} from '../../services/redux/PurchaseDescription/action';

const Confirmation = props => {
  const [cardmod, setcardmod] = useState(false);
  const [upimod, setupimod] = useState(false);
  const pur = useSelector(value => value.PurReducer);
  console.log('Undefined', pur);
  const purData = pur.purData;
  const mdata = props?.route?.params?.data;
  const dispatch = useDispatch();
  const update = (obj, arr) => {
    arr = arr.filter(item => {
      return obj.showName != item.showName;
    });
    arr.push(obj);
    return arr;
  };
  const addpur = (obj, arr) => {
    arr.push(obj);
    return arr;
  };
  const showdata = useSelector(value => value.ShowReducer);
  //console.log(showdata);
  return (
    <View style={styles.container}>
      <Modal visible={cardmod} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000a1',
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.optionTab}>
              <View style={{flex: 0.8, padding: 25}}>
                <Text>Card Number</Text>
                <TextInput style={styles.input}></TextInput>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 0.5}}>
                    <Text>CVV</Text>
                    <TextInput style={styles.input}></TextInput>
                  </View>
                  <View style={{flex: 0.5}}>
                    <Text>Expires on</Text>
                    <TextInput style={styles.input}></TextInput>
                  </View>
                </View>
              </View>
              <View style={{flex: 0.2, padding: 10}}>
                <TouchableOpacity
                  onPress={() => {
                    setcardmod(false);
                    dispatch(
                      showFound(update(mdata.mdata.mdata, showdata.showData)),
                    );
                    dispatch(purFound(addpur(mdata, purData)));
                    //dispatch(purFound(mdata));
                    //dispatch(purFound([]));
                    props.navigation.navigate('PaymentComplete', {data: mdata});
                  }}
                  style={styles.selectseatsbttn}>
                  <Text style={styles.txt}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal visible={upimod} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000a1',
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.optionTab}>
              <View style={{flex: 0.8, padding: 25}}>
                <Text>UPI Number</Text>
                <TextInput style={styles.input}></TextInput>
              </View>
              <View style={{flex: 0.2, padding: 10}}>
                <TouchableOpacity
                  onPress={() => {
                    setupimod(false);
                    dispatch(
                      showFound(update(mdata.mdata.mdata, showdata.showData)),
                    );
                    dispatch(purFound(addpur(mdata, purData)));
                    //dispatch(purFound(mdata));
                    //dispatch(purFound([]));
                    props.navigation.navigate('PaymentComplete', {data: mdata});
                  }}
                  style={styles.selectseatsbttn}>
                  <Text style={styles.txt}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <View style={styles.backbttn}>
          <Image style={styles.backimg} source={assets.pointimg} />
        </View>
        <View style={styles.headtxtview}>
          <Text style={styles.headtxt}>Almost There !</Text>
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
          <View style={styles.paymentview}>
            <Text style={styles.lrgtxt}>Choose Payment Method :</Text>
            <TouchableOpacity
              style={styles.paymentopt}
              onPress={() => {
                setupimod(true);
              }}>
              <View style={{flex: 0.2}}>
                <Image source={assets.creditCard} style={styles.smllicon} />
              </View>
              <View style={{flex: 0.7}}>
                <Text style={styles.smlltxt}>UPI</Text>
              </View>
              <View style={{flex: 0.1}}>
                <Image source={assets.pointimg} style={styles.smllicon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.paymentopt}
              onPress={() => {
                setcardmod(true);
              }}>
              <View style={{flex: 0.2}}>
                <Image source={assets.creditCard} style={styles.smllicon} />
              </View>
              <View style={{flex: 0.7}}>
                <Text style={styles.smlltxt}>Debit Card</Text>
              </View>
              <View style={{flex: 0.1}}>
                <Image source={assets.pointimg} style={styles.smllicon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentopt}>
              <View style={{flex: 0.2}}>
                <Image source={assets.Seeall} style={styles.smllicon} />
              </View>
              <View style={{flex: 0.7}}>
                <Text style={styles.smlltxt}>More Options</Text>
              </View>
              <View style={{flex: 0.1}}>
                <Image source={assets.pointimg} style={styles.smllicon} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Confirmation;
