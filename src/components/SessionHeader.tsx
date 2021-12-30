import React from "react";
import { View, Text } from "react-native";
import { useCreateStyles } from "src/theme";
import { Button } from "./Button";

type Props = {
  isAdmin?: boolean;
};

export function SessionHeader({ isAdmin }: Props) {
  const styles = useCreateStyles(({ theme, responsiveValue }) => ({
    container: {
      height: responsiveValue({ desktop: 104, tablet: 84, mobile: 35 }),
      marginBottom: theme.spacings.m,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    text: theme.typography.h0({ lineHeight: responsiveValue({ desktop: 104, tablet: 84, mobile: 35 }) }),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Session Name</Text>
      {isAdmin && <Button icon="play-arrow" onPress={() => console.log("play")} />}
    </View>
  );
}
