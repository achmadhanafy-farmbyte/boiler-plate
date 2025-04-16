import { RootNavigationParams } from "src/navigation/navigationType";

export const SCREEN_CONS: { [K in keyof RootNavigationParams]: K } = {
  HOME: 'HOME',
  ORDER_LIST: 'ORDER_LIST',
  LOGIN: 'LOGIN'
};
