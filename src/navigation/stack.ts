import HomeScreen from '@screens/home/HomeScreen';
import LoginScreen from '@screens/home/Login';
import OrderListScreen from '@screens/home/OrderCart';
import {SCREEN_CONS} from '@utils/constant/screen.constant';

export const HOME_STACK = [
  {
    name: SCREEN_CONS.HOME,
    component: HomeScreen,
  },
  {
    name: SCREEN_CONS.ORDER_LIST,
    component: OrderListScreen,
  },
  {
    name: SCREEN_CONS.LOGIN,
    component: LoginScreen,
  },
];
