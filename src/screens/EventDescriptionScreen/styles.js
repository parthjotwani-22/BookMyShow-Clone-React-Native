import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    height: Dimensions.get('screen').width / 8,
    width: '100%',
    backgroundColor: colors.greyish,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  posterview: {
    height: Dimensions.get('screen').height / 4,
    width: '100%',
  },
  poster: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
  },
  details: {
    height: Dimensions.get('screen').height / 3.5,
    borderBottomWidth: 2,
    width: '100%',
    borderBottomColor: colors.lightgrey,
    paddingVertical: 20,
  },
  lrgtxt: {
    fontSize: 25,
    color: colors.black,
    fontWeight: 'bold',
  },
  detline: {
    flexDirection: 'row',
    height: '20%',
    marginTop: 15,
  },
  icons: {
    height: 30,
    resizeMode: 'contain',
    bottom: 5,
    right: 10,
    tintColor: colors.greyish,
  },
  smllicons: {
    height: '60%',
    transform: [{rotate: '180deg'}],
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: colors.white,
  },
  smlltext: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '400',
  },
  moreinfo: {
    height: Dimensions.get('screen').height / 4,
    borderBottomWidth: 2,
    width: '100%',
    borderBottomColor: colors.lightgrey,
    paddingVertical: 10,
  },
  footer: {
    height: Dimensions.get('screen').height / 11,
    borderTopWidth: 0.5,
    borderColor: colors.black,
    flexDirection: 'row',
    width: '100%',
  },
  bookbtn: {
    backgroundColor: colors.lightred,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
