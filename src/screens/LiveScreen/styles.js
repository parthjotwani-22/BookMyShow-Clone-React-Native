import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
const random = Math.floor(Math.random() * colors.arrcolor.length);
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.greyish,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  headertxtview: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 0.9,
  },
  flatlistview: {
    height: 80,
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlisttext: {
    textAlign: 'center',
    color: colors.black,
    fontSize: 12,
    fontFamily: 'TruenoRound',
  },
  smlliconview: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smllicon: {
    height: 22,
    tintColor: colors.white,
    resizeMode: 'contain',
  },
  bigtext: {
    fontSize: 25,
    color: colors.white,
    fontWeight: '600',
  },
  smllwhtxt: {
    fontSize: 15,
    color: colors.white,
    fontWeight: '600',
  },
});
