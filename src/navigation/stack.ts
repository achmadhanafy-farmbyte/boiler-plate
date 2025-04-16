import HomeScreen from '@screens/home/HomeScreen';
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
];
