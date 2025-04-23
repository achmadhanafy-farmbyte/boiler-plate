import {StyleSheet} from 'react-native-unistyles';

const lightTheme = {
  colors: {
    primary: '#34eb89',
    backgroundClear: '#fff',
    backgroundGray: '#f7f7f7',
    textColor: "#000",
    textInputBg: '#fff'
  },
};

const darkTheme = {
  colors: {
    primary: '#34eb89',
    backgroundClear: "#000",
    backgroundGray: "#000",
    textColor: '#fff',
        textInputBg: '#4a4945'
  },
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  breakpoints,
  themes: appThemes,
});
