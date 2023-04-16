import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey,
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
  smlliconview: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smllicon: {
    height: 30,
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
  smlldecoratedtxt: {
    color: colors.black,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
