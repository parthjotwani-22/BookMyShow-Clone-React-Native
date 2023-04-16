import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {movieFound} from '../../services/redux/MovieDescription/action';
import newAssets from '../../utils/newAssets';
import {showFound} from '../../services/redux/ShowDescription/action';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import colors from '../../utils/colors';
import assets from '../../utils/assets';

const BookingScreen = props => {
  //const dispatch = useDispatch();

  //const dispatch = useDispatch();
  //dispatch(showFound(newAssets.showsdata));
  //dispatch(movieFound(newAssets.bookingdata));
  const mdata = props?.route?.params?.data;
  const showdata = useSelector(value => value.ShowReducer);
  const moviesdata = useSelector(value => value.MovieReducer);
  console.log(showdata);
  const moviedata = moviesdata?.movieData?.find(x => x.name == mdata);
  //console.log(moviedata);
  const crrshows = showdata.showData.filter(item => {
    return moviedata.shows.includes(item.showName);
  });
  //console.log(crrshows);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FlatList
          data={newAssets.today}
          horizontal
          renderItem={({item}) => (
            <View style={styles.flview}>
              <Text style={styles.fltext}>{item.date}</Text>
              <Text style={[styles.fltext, {fontSize: 15, fontWeight: '300'}]}>
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={styles.allview}>
        <FlatList
          data={crrshows}
          renderItem={({item}) => (
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 5,
                width: '100%',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image style={styles.smllicn} source={assets.Star}></Image>
                  <Text style={styles.txt}>{item.cinema}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image style={styles.smllicn} source={assets.Search}></Image>
                  <Text style={styles.txt}>Info</Text>
                </View>
              </View>
              <View style={{width: '100%', paddingHorizontal: 10}}>
                <TouchableOpacity
                  style={styles.showbttn}
                  onPress={() => {
                    props.navigation.navigate('Seatsel', {
                      data: item,
                    });
                  }}>
                  <Text style={styles.availtxt}>{item.showTime}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}></FlatList>
      </View>
    </View>
  );
};

export default BookingScreen;
