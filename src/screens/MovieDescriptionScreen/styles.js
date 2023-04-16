import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    height: Dimensions.get('screen').height / 14,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  txt: {
    fontSize: 12,
    color: colors.black,
  },
  headicn: {
    height: '40%',
    transform: [{rotate: '180deg'}],
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  posterview: {
    overflow: 'hidden',
    borderRadius: 15,
    height: Dimensions.get('screen').width / 2,
  },
  posterimg: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  aboutview: {
    marginTop: 20,
    paddingHorizontal: 5,
    height: Dimensions.get('screen').height / 3,
  },
  staricn: {
    height: '80%',
    tintColor: colors.lightred,
    resizeMode: 'contain',
    alignSelf: 'center',
    right: 10,
    bottom: 5,
  },
  addratingview: {
    height: '20%',
    backgroundColor: colors.lightgrey,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  ratebttn: {
    borderWidth: 2,
    borderColor: colors.lightred,
    justifyContent: 'center',
    borderRadius: 10,
    top: 5,
    height: '75%',
    alignItems: 'center',
    padding: 5,
    width: '80%',
  },
  detailsview: {
    paddingTop: 10,
    width: '100%',
  },
  lrgtxt: {
    fontSize: 18,
    color: colors.black,
  },
  smllox: {
    borderRadius: 2,
    marginVertical: 5,
    width: '53%',
    paddingHorizontal: 10,
    backgroundColor: colors.lightgrey,
  },
  peopleflview: {
    height: Dimensions.get('screen').height / 3,
  },
});
