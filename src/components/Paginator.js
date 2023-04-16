import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import colors from '../utils/colors';

const Paginator = ({data, scrollx}) => {
  const width = Dimensions.get('window').width;

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 64,
        alignSelf: 'center',
        position: 'absolute',
        top: 190,
      }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotwidth = scrollx.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[styles.dot, {width: dotwidth}]}
            key={i.toString()}></Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.lightred,
    marginHorizontal: 5,
  },
});

export default Paginator;
