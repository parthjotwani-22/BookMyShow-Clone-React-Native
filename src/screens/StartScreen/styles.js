import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
  },
  skipbutton: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lrgtext: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.black,
  },
  smlltext: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.black,
  },
  body: {
    flex: 0.9,
  },
  carousel: {
    flex: 0.3,
    marginBottom: '10%',
  },
  bttnview: {
    flex: 0.25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bttn: {
    flex: 0.4,
    width: '90%',
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  opt: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputview: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    borderBottomWidth: 1,
    width: '75%',
    borderBottomColor: colors.black,
    margin: 5,
    padding: 5,
  },
  flview: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flimage: {
    height: '50%',
    resizeMode: 'contain',
  },
});
