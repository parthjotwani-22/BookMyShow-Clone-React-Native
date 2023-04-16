import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey,
  },
  showbttn: {
    borderColor: colors.greyish,
    marginVertical: 10,
    borderWidth: 1,
    width: '30%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allview: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    flex: 1,
    padding: 10,
  },
  smllicn: {
    height: 15,
    margin: 5,
    width: 15,
    alignSelf: 'center',
    tintColor: colors.black,
  },
  header: {
    flex: 0.13,
    backgroundColor: colors.greyish,
  },
  flview: {
    flex: 0.15,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  fltext: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 20,
  },
  availtxt: {
    color: 'green',
    fontSize: 14,
    fontWeight: '600',
  },
  txt: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
});
