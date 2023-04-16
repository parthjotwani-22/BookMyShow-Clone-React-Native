import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

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
    position: 'absolute',
    paddingHorizontal: 10,
  },
  headertxtview: {
    justifyContent: 'center',
    marginLeft: 10,
    flex: 0.7,
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
    fontFamily: 'TruenoRound',
  },
  bigtextblack: {
    fontSize: 25,
    color: colors.black,
    fontWeight: '600',
    fontFamily: 'TruenoRound',
  },
  smllwhtxt: {
    fontSize: 15,
    color: colors.white,
    fontWeight: '600',
    fontFamily: 'TruenoRound',
  },
  smllredtxt: {
    fontSize: 15,
    color: colors.lightred,
    fontWeight: '300',
    fontFamily: 'TruenoRound',
  },
  smlltxt: {
    fontSize: 15,
    color: colors.black,
    fontFamily: 'TruenoRound',
    fontWeight: '300',
  },
});
