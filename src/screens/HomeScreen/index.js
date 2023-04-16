import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CustomCard from '../../components/CustomCard';
import CustomFlatlist from '../../components/CustomFlatlist';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import styles from './styles';

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.15}}>
        <View style={styles.header}>
          <View style={styles.headertxtview}>
            <Text style={styles.bigtext}>It All Start's Here</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text style={styles.smllwhtxt}>Ahmedabad</Text>
              <Image
                source={assets.pointimg}
                style={{
                  height: 10,
                  resizeMode: 'contain',
                  tintColor: colors.white,
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.smlliconview}>
            <Image source={assets.Search} style={styles.smllicon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smlliconview}>
            <Image source={assets.Notification} style={styles.smllicon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smlliconview}>
            <Image source={assets.QrScan} style={styles.smllicon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{flex: 0.9}} contentContainerStyle={{flexGrow: 1}}>
        <View>
          <FlatList
            data={assets.hometab}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={item => (
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                  width: Dimensions.get('screen').width / 5,
                }}>
                <Image
                  source={item.item.img}
                  style={{
                    height: 30,
                    resizeMode: 'contain',
                    tintColor: colors.black,
                  }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    color: colors.black,
                    fontFamily: 'TruenoRound',
                  }}>
                  {item.item.data}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{paddingVertical: 20}}>
          <CustomFlatlist
            name={assets.homeflatlist.Movies.name}
            data={assets.Moviesdata}
          />
          <CustomFlatlist
            name={assets.homeflatlist.Event.name}
            data={assets.Moviesdata}
          />
          <CustomFlatlist
            name={assets.homeflatlist.Event.name}
            data={assets.Moviesdata}
          />
          <CustomFlatlist
            name={assets.homeflatlist.Event.name}
            data={assets.Moviesdata}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
