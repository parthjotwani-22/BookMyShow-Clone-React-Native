import React from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';

import colors from '../../utils/colors';
import assets from '../../utils/assets';

const PurchasesScreen = props => {
  const pur = useSelector(value => value.PurReducer);
  console.log('Undefined', pur);
  const purData = pur.purData;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backbttn}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image style={styles.backimg} source={assets.pointimg} />
        </TouchableOpacity>
        <View style={styles.headtxtview}>
          <Text style={styles.headtxt}>Purchase History</Text>
        </View>
      </View>
      <FlatList
        data={purData}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.crd}
            onPress={() => {
              props.navigation.navigate('PaymentComplete', {data: item});
            }}>
            <View style={styles.dview}>
              <Text style={styles.lrgtxt}>{item.mdata.mdata.name}</Text>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={[styles.lrgtxt, {color: colors.red}]}>
                  {item.mdata.ndata.numbook}
                </Text>
                <Text style={styles.smlltext}>Tickets</Text>
              </View>
            </View>
            <Text style={styles.smlltext}>{item.mdata.mdata.cinema}</Text>
            <Text style={styles.smlltext}>{item.mdata.mdata.showTime}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PurchasesScreen;
