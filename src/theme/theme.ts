import * as R from "ramda";
import { TextStyle, ViewStyle, ScaledSize } from "react-native";

const jet = "#343536";
const nickel = "#676E6E";
const opal = "#8AB2B2";
const steelTeal = "#658C8C";
const champagne = "#F6E7CA";
const dutchWhite = "#D7C4A3";

const white = "#ffffff";
const lightGrey = "#efefef";
const black = "#000000";

const primary = opal;
const secondary = champagne;

const spacings = {
  xs: 3,
  s: 6,
  m: 12,
  l: 24,
  xl: 48,
  xxl: 96,
};

function themeStyle<T>(styles: T) {
  return function extend(newStyles: T = {} as T): T {
    return R.mergeDeepRight(styles, newStyles);
  };
}

const breakpoints = {
  mobile: 768,
  tablet: 1024,
};

export function responsiveValue<T>(specs: ResponsiveSpecs<T>, dimensions: ScaledSize): T {
  if (dimensions.width < breakpoints.mobile) {
    return specs.mobile;
  } else if (dimensions.width <= breakpoints.tablet) {
    return specs.tablet || specs.desktop;
  } else {
    return specs.desktop;
  }
}

export const theme = (dimensions: ScaledSize) => ({
  colors: {
    primary,
    secondary,
    white,
    black,
    lightGrey,
    jet,
    nickel,
    opal,
    steelTeal,
    champagne,
    dutchWhite,
  },
  spacings,
  typography: {
    h0: themeStyle<TextStyle>({
      fontSize: responsiveValue<number>({ desktop: 48, mobile: 30 }, dimensions),
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "800",
      color: dutchWhite,
    }),
    h1: themeStyle<TextStyle>({
      fontSize: responsiveValue<number>({ desktop: 24, mobile: 18 }, dimensions),
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "600",
      color: dutchWhite,
    }),
    h2: themeStyle<TextStyle>({
      fontSize: responsiveValue<number>({ desktop: 18, mobile: 14 }, dimensions),
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "600",
      color: dutchWhite,
    }),
    p: themeStyle<TextStyle>({
      fontSize: 12,
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "400",
      color: dutchWhite,
    }),
    small: themeStyle<TextStyle>({
      fontSize: 10,
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "300",
    }),
  },
  views: {
    container: themeStyle<ViewStyle>({
      flex: 1,
      backgroundColor: jet,
    }),
  },
  forms: {
    textInput: themeStyle<ViewStyle>({
      borderWidth: 1,
      borderColor: champagne,
      borderRadius: 4,
      height: responsiveValue<number>({ desktop: 48, mobile: 40 }, dimensions),
      width: "100%",
      paddingHorizontal: spacings.m,
      marginBottom: spacings.m,
    }),
  },
});
