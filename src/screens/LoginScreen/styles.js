import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    backgroundColor: colors.lightred,
  },
  txt: {
    color: colors.white,
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  smlltxt: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
  inpview: {
    height: Dimensions.get('screen').height / 10,
    justifyContent: 'center',
    marginVertical: 20,
  },
  inp: {
    height: '70%',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.white,
  },
  submitbttn: {
    height: Dimensions.get('screen').height / 15,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 40,
  },
});
