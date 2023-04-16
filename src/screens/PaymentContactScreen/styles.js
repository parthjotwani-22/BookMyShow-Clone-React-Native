import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  header: {
    flex: 0.1,
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
  detview: {
    flex: 0.5,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  smlltxt: {
    fontSize: 15,
    color: colors.black,
  },
  inp: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    alignSelf: 'center',
    borderColor: colors.black,
    borderRadius: 5,
    borderWidth: 1,
  },
  updatebttn: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightred,
    borderRadius: 10,
  },
  next: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderTopWidth: 0.2,
    padding: 10,
    height: Dimensions.get('screen').height / 10,
    width: '100%',
  },
  txt: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
});
