import { RootNavigationParams } from "src/navigation/navigationType";

export const SCREEN_CONS: { [K in keyof RootNavigationParams]: K } = {
  HOME: 'HOME',
};
