import {Dimensions, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    height: Dimensions.get('screen').height / 10,
    backgroundColor: colors.greyish,
    flexDirection: 'row',
  },
  backicon: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backimg: {
    height: '40%',
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
    tintColor: colors.white,
  },
  headertextview: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headertext: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '600',
  },
  ticketview: {
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: colors.white,
  },
  nameview: {
    height: Dimensions.get('screen').height / 6,
    borderStyle: 'dashed',
    borderColor: colors.black,
    borderBottomWidth: 1,
    padding: 10,
  },
  lrgtxt: {
    color: colors.black,
    fontSize: 25,
    fontWeight: '600',
  },
  smlltxt: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '400',
  },
  numtickets: {
    position: 'absolute',
    right: 20,
    top: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: 70,
    width: 70,
  },
  priceview: {
    height: Dimensions.get('screen').height / 4,
    borderColor: colors.black,
    borderBottomWidth: 0.5,
    padding: 10,
  },
  priceviewrow: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  contactview: {
    height: Dimensions.get('screen').height / 7,
    borderColor: colors.black,
    borderBottomWidth: 0.5,
    padding: 10,
  },
  paymentview: {
    height: Dimensions.get('screen').height / 3,
    borderColor: colors.black,
    borderBottomWidth: 0.5,
    padding: 10,
  },
  paymentopt: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.black,
  },
  smllicon: {
    height: 30,
    width: 30,
    tintColor: colors.black,
    alignSelf: 'center',
  },
});
