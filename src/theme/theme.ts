import * as R from "ramda";
import { TextStyle, ViewStyle, ScaledSize } from "react-native";

const jet = "#343536";
const jetLight = "#585D5D";
const nickel = "#676E6E";
const opal = "#8AB2B2";
const steelTeal = "#658C8C";
const champagne = "#F6E7CA";
const dutchWhite = "#D7C4A3";

const white = "#ffffff";
const lightGrey = "#efefef";
const darkGrey = "#8F9494";
const black = "#000000";

const primary = opal;
const secondary = champagne;

export const colors = {
  primary,
  secondary,
  white,
  black,
  lightGrey,
  darkGrey,
  jet,
  jetLight,
  nickel,
  opal,
  steelTeal,
  champagne,
  dutchWhite,
};

export const spacings = {
  xs: 3,
  s: 6,
  m: 12,
  l: 24,
  xl: 48,
  xxl: 96,
};

export const borders = {
  radius: {
    s: 4,
    m: 10,
    l: 20,
    circle: "50%",
  },
  width: {
    s: 1,
    m: 4,
    l: 6,
  },
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
  colors,
  spacings,
  borders,
  typography: {
    h0: themeStyle<TextStyle>({
      fontSize: responsiveValue<number>({ desktop: 48, mobile: 30 }, dimensions),
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "800",
      color: lightGrey,
    }),
    h1: themeStyle<TextStyle>({
      fontSize: responsiveValue<number>({ desktop: 24, mobile: 18 }, dimensions),
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "600",
      color: lightGrey,
    }),
    h2: themeStyle<TextStyle>({
      fontSize: responsiveValue<number>({ desktop: 18, mobile: 14 }, dimensions),
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "600",
      color: lightGrey,
    }),
    h3: themeStyle<TextStyle>({
      fontSize: responsiveValue<number>({ desktop: 14, mobile: 10 }, dimensions),
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "600",
      color: lightGrey,
    }),
    p: themeStyle<TextStyle>({
      fontSize: 12,
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "400",
      color: lightGrey,
    }),
    small: themeStyle<TextStyle>({
      fontSize: 10,
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "300",
    }),
    buttonLabel: themeStyle<TextStyle>({
      fontSize: responsiveValue<number>({ desktop: 18, mobile: 14 }, dimensions),
      lineHeight: 24,
      fontFamily: "SFProText, Roboto, Arial, sans-serif",
      fontWeight: "600",
      color: lightGrey,
    }),
  },
  views: {
    container: themeStyle<ViewStyle>({
      flex: 1,
      backgroundColor: jet,
    }),
    textButton: themeStyle<ViewStyle>({
      backgroundColor: colors.opal,
      borderRadius: borders.radius.m,
      paddingHorizontal: spacings.l,
      paddingVertical: spacings.m,
      margin: spacings.m,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "center",
      minWidth: 300,
    }),
    iconButton: themeStyle<ViewStyle>({
      backgroundColor: colors.opal,
      borderRadius: borders.radius.m,
      paddingHorizontal: spacings.m,
      paddingVertical: spacings.m,
      margin: spacings.m,
      alignItems: "center",
      justifyContent: "center",
      width: responsiveValue({ desktop: 80, tablet: 60, mobile: 40 }, dimensions),
      height: responsiveValue({ desktop: 80, tablet: 60, mobile: 40 }, dimensions),
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
