import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import styles from './styles';
import assets from '../../utils/assets';
import {FlatList} from 'react-native-gesture-handler';
import newAssets from '../../utils/newAssets';
import colors from '../../utils/colors';
import {useSelector} from 'react-redux';

const Seatsel = props => {
  useEffect(() => {
    if (selected.length == act) {
      setnext(true);
      // setnmdata({
      //   numbook: act,
      //   amtbook: 200 * amt,
      // });
      setamt(act);
    } else {
      setnext(false);
    }
  });

  const updateseats = obj => {
    obj.seats = obj.seats.concat(selected);
    return obj;
  };
  const [selected, setselected] = useState([]);
  const [amt, setamt] = useState(0);
  const [act, setact] = useState(1);
  const [mod, setmod] = useState(true);
  const mdata = props?.route?.params?.data;
  const [next, setnext] = useState(false);
  const [nmdata, setnmdata] = useState(mdata);
  let sel = [];
  //console.log(mdata.seats);
  //console.log(selected);
  return (
    <View style={styles.container}>
      <Modal visible={mod} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000a1',
          }}>
          <View style={styles.contentContainer}>
            <View style={styles.optionTab}>
              <View style={{flex: 0.65}}>
                <View style={{flex: 0.7}}></View>
                <View
                  style={{
                    flex: 0.3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FlatList
                    data={newAssets.numseats}
                    horizontal
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={
                          act == item.key ? styles.actmodsel : styles.modsel
                        }
                        onPress={() => {
                          setact(item.key);
                        }}>
                        <Text
                          style={
                            act == item.key
                              ? styles.actmodseltxt
                              : styles.modseltxt
                          }>
                          {item.key}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
              <View style={styles.blackline}></View>
              <View
                style={{
                  flex: 0.2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.btxt}>Premium</Text>
                  <Text style={[styles.txt, {color: 'green'}]}>$200</Text>
                </View>
              </View>
              <View style={{flex: 0.15, padding: 10}}>
                <TouchableOpacity
                  onPress={() => {
                    setmod(false);
                  }}
                  style={styles.selectseatsbttn}>
                  <Text style={styles.txt}>Select Seats</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Image source={assets.pointimg} style={styles.img} />
        <View>
          <Text style={styles.txt}>{mdata.name}</Text>
          <Text style={[styles.txt, {fontSize: 14, fontWeight: '300'}]}>
            {mdata.cinema}
          </Text>
        </View>
      </View>
      <View style={styles.seatview}>
        <View style={styles.half}>
          <FlatList
            data={newAssets.seats}
            renderItem={({item}) => (
              <FlatList
                data={item.data}
                horizontal
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={
                      !mdata.seats.includes(item.num)
                        ? selected.includes(item.num)
                          ? styles.actseats
                          : styles.seats
                        : styles.noseats
                    }
                    disabled={mdata.seats.includes(item.num)}
                    onPress={() => {
                      if (selected.includes(item.num)) {
                        (sel = selected),
                          sel.pop(item.num),
                          setselected([...sel]);
                      } else {
                        if (selected.length <= act) {
                          (sel = selected),
                            sel.push(item.num),
                            setselected([...sel]);
                        }
                      }
                    }}>
                    <Text style={{fontSize: 10}}>{item.num}</Text>
                  </TouchableOpacity>
                )}
              />
            )}></FlatList>
        </View>
        <View style={styles.half}>
          <FlatList
            data={newAssets.seats2}
            renderItem={({item}) => (
              <FlatList
                data={item.data}
                horizontal
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={
                      !mdata.seats.includes(item.num)
                        ? selected.includes(item.num)
                          ? styles.actseats
                          : styles.seats
                        : styles.noseats
                    }
                    disabled={mdata.seats.includes(item.num)}
                    onPress={() => {
                      if (selected.includes(item.num)) {
                        (sel = selected),
                          sel.pop(item.num),
                          setselected([...sel]);
                      } else {
                        if (selected.length <= act) {
                          (sel = selected),
                            sel.push(item.num),
                            setselected([...sel]);
                        }
                      }
                    }}>
                    <Text style={{fontSize: 10}}>{item.num}</Text>
                  </TouchableOpacity>
                )}
              />
            )}></FlatList>
        </View>
      </View>
      <View style={styles.screen}></View>
      <Text style={[styles.txt, {textAlign: 'center', color: colors.black}]}>
        All eyes over here
      </Text>
      {next && (
        <View style={styles.nextbttn}>
          <TouchableOpacity
            style={styles.selectseatsbttn}
            onPress={() => {
              // setnmdata({
              //   mdata: mdata,
              //   ndata: {numbook: act, amtbook: 200 * amt},
              // });
              props.navigation.navigate('PayContact', {
                data: {
                  mdata: updateseats(mdata),
                  ndata: {numbook: act, amtbook: 200 * amt},
                },
              });
            }}>
            <Text style={styles.txt}>Pay {200 * act}$</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Seatsel;
