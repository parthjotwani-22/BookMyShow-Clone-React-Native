import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import CustomEventFlatlist from '../../components/CustomEventFlatlist';
import CustomFlatlist from '../../components/CustomFlatlist';
import Paginator from '../../components/Paginator';
import assets from '../../utils/assets';
import colors from '../../utils/colors';
import styles from './styles';

const LiveScreen = props => {
  const [width, setwidth] = useState(Dimensions.get('screen').width);
  const ScrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <View style={{flex: 0.15}}>
        <View style={styles.header}>
          <View style={styles.headertxtview}>
            <Text style={styles.bigtext}>Experience Begins Here</Text>
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
        </View>
      </View>
      <ScrollView style={{flex: 0.85}} contentContainerStyle={{flexGrow: 1}}>
        <View style={{height: '15%', padding: 15}}>
          <FlatList
            data={assets.livefl}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View
                style={{
                  marginRight: 15,
                  width: Dimensions.get('screen').width / 5,
                }}>
                <View
                  style={[
                    styles.flatlistview,
                    {
                      backgroundColor:
                        colors.arrcolor[index % colors.arrcolor.length],
                    },
                  ]}>
                  <Image
                    source={item.img}
                    style={{
                      height: '100%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={{flex: 0.1}}>
                  <Text style={styles.flatlisttext}>{item.name}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View
          collapsable={false}
          style={{
            height: Dimensions.get('screen').height / 4,
            marginBottom: 40,
          }}>
          <Carousel
            loop
            snapEnabled
            mode="parallax"
            pagingEnabled={true}
            width={width}
            autoPlay={true}
            data={assets.livecarousel}
            scrollAnimationDuration={1000}
            // onSnapToItem={Animated.event(
            //   [{nativeEvent: {contentOffset: {x: ScrollX}}}],
            //   {
            //     useNativeDriver: false,
            //   },
            // )}
            renderItem={({item}) => {
              return (
                <View>
                  <Image
                    source={item.img}
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'stretch',
                    }}></Image>
                </View>
              );
            }}
          />
          <Paginator data={assets.livecarousel} scrollx={ScrollX} />
        </View>
        <View
          style={{
            flex: 0.3,
            backgroundColor: colors.black,
            justifyContent: 'center',
            padding: 10,
          }}>
          <CustomEventFlatlist
            name={assets.liveflatlist.Comedy.name}
            data={assets.liveflatlist.Comedy.data}
          />
        </View>

        <View
          style={{
            padding: 10,
            flex: 0.3,
            backgroundColor: colors.black,
            marginVertical: 20,
            justifyContent: 'center',
          }}>
          <CustomEventFlatlist
            name={assets.liveflatlist.Music.name}
            data={assets.liveflatlist.Music.data}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LiveScreen;
