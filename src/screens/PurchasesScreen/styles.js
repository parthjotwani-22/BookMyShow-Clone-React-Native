import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  smlltext: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.black,
  },
  dview: {
    alignItems: 'center',
    height: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lrgtxt: {fontSize: 25, fontWeight: '700', color: colors.black},
  crd: {
    height: Dimensions.get('screen').height / 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: colors.black,
    width: '100%',
  },
  header: {
    height: Dimensions.get('screen').height / 12,
    flexDirection: 'row',
    backgroundColor: colors.greyish,
  },
  backbttn: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backimg: {
    height: '35%',
    tintColor: colors.white,
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
  },
  headtxtview: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headtxt: {
    fontSize: 20,
    color: colors.white,
  },
});
