import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  header: {
    flex: 0.1,
    backgroundColor: colors.greyish,
    flexDirection: 'row',

    alignItems: 'center',
    paddingHorizontal: 20,
  },
  txt: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  btxt: {
    color: colors.black,
    fontSize: 25,
    fontWeight: '500',
  },
  img: {
    height: 15,
    width: 15,
    marginRight: 15,
    tintColor: colors.white,
    transform: [{rotate: '180deg'}],
  },
  seatview: {
    flex: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
    top: Dimensions.get('screen').height / 8,
  },
  blackline: {
    height: 0.5,
    width: '100%',
    backgroundColor: colors.black,
  },
  seats: {
    height: 25,
    width: 25,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.black,
    borderRadius: 5,
    borderWidth: 2,
  },
  actseats: {
    height: 25,
    width: 25,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.black,
    backgroundColor: 'green',
    borderRadius: 5,
    borderWidth: 2,
  },
  noseats: {
    height: 25,
    width: 25,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.black,
    borderRadius: 5,
    backgroundColor: colors.lightgrey,
    borderWidth: 2,
  },
  half: {
    height: '70%',

    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  optionTab: {
    backgroundColor: colors.white,
    height: 350,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  modsel: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  actmodsel: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.lightred,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  modseltxt: {
    fontSize: 18,
    color: colors.black,
    fontWeight: '600',
  },
  actmodseltxt: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
  screen: {
    backgroundColor: colors.blue,
    height: 10,
    width: '80%',
    alignSelf: 'center',
  },
  selectseatsbttn: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightred,
    borderRadius: 10,
  },
  nextbttn: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderTopWidth: 0.2,
    padding: 10,
    height: Dimensions.get('screen').height / 10,
    width: '100%',
  },
});
