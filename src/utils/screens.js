import TabNavigation from '../navigation/TabNavigation';
import BuzzScreen from '../screens/BuzzScreen';
import HomeScreen from '../screens/HomeScreen';
import LiveScreen from '../screens/LiveScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StartScreen from '../screens/StartScreen';
import MovieDescription from '../screens/MovieDescriptionScreen';
import EventDescription from '../screens/EventDescriptionScreen';
import BookingScreen from '../screens/BookingScreen';
import Seatsel from '../screens/SeatSelectScreen';
import PayContact from '../screens/PaymentContactScreen';
import Confirmation from '../screens/ConfirmationScreen';
import PaymentCompleteScreen from '../screens/PaymentCompeteScreen';
import PurchasesScreen from '../screens/PurchasesScreen';
import SignupScreen from '../screens/SignupScreen';
export default Screens = {
  Start: StartScreen,
  PaymentCompleteScreen: PaymentCompleteScreen,
  Seatsel: Seatsel,
  Home: HomeScreen,
  Login: LoginScreen,
  PurchasesScreen: PurchasesScreen,
  Buzz: BuzzScreen,
  Signup: SignupScreen,
  BookingScreen: BookingScreen,
  MovieDescription: MovieDescription,
  Profile: ProfileScreen,
  Live: LiveScreen,
  EventDescription: EventDescription,
  MainTab: TabNavigation,
  Confirmation: Confirmation,
  PayContact: PayContact,
};
