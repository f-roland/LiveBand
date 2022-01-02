import React from "react";
import { View, Text } from "react-native";
import { useAtom } from "jotai";

import { currentSong } from "src/atoms/songs";
import { useCreateStyles } from "src/theme";
import { sessionAtom } from "src/atoms/session";

export function SessionHeader() {
  const styles = useCreateStyles(({ theme, responsiveValue }) => ({
    container: {
      height: responsiveValue({ desktop: 104, tablet: 84, mobile: 35 }),
      marginBottom: theme.spacings.m,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonsContainer: {
      minWidth: 674,
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: -theme.spacings.l / 2,
    },
    text: theme.typography.h0({ lineHeight: responsiveValue({ desktop: 104, tablet: 84, mobile: 35 }) }),
  }));

  const [song] = useAtom(currentSong);
  const [session] = useAtom(sessionAtom);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{song?.title ?? session.name}</Text>
    </View>
  );
}
