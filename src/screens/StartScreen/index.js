import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import assets from '../../utils/assets';
import Paginator from '../../components/Paginator';
//import Carousel from 'react-native-reanimated-carousel';
import styles from './styles';
const StartScreen = props => {
  const [CurrrentIndex, setCurrentIndex] = useState(0);
  const slideref = useRef(null);
  const ScrollX = useRef(new Animated.Value(0)).current;
  const viewchange = useRef(({viewitems}) => {
    setCurrentIndex(viewitems[0].index);
  }).current;
  useEffect(() => {
    //slideref.current.scrollToIndex(1);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 0.8}}></View>
        <TouchableOpacity
          style={styles.skipbutton}
          onPress={() => {
            props.navigation.navigate('MainTab');
          }}>
          <Text style={styles.lrgtext}>SKIP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.carousel}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={assets.data}
            horizontal
            //onViewableItemsChanged={viewchange}
            pagingEnabled
            ref={slideref}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: ScrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            renderItem={({item}) => {
              return (
                <View style={styles.flview}>
                  <Image style={styles.flimage} source={item.img} />
                  <Text style={styles.smlltext}>{item.data}</Text>
                </View>
              );
            }}
          />
          <Paginator data={assets.data} scrollx={ScrollX} />
          {/* <Carousel loop width={'100%'} height={'50%'} data={assets.data} /> */}
        </View>
        <View style={styles.bttnview}>
          <TouchableOpacity
            style={styles.bttn}
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Text style={styles.smlltext}>Continue With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bttn}
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Text style={styles.smlltext}>Continue With Other Email</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.opt}>
          <Text>OR</Text>
        </View>
        <View style={styles.inputview}>
          <Text>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Continue with mobile number"></TextInput>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;
