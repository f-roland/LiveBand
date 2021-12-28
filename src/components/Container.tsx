import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { createStyles } from "src/theme";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

const styles = createStyles(({ theme }) => ({
  container: theme.views.container({
    minWidth: "100vw",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  }),
}));

export function Container({ children, style = {} }: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}
