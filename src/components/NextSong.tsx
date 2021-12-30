import React from "react";
import { View, Text } from "react-native";
import { useCreateStyles } from "src/theme";
import { labels } from "src/utils/labels";

export function NextSong() {
  const styles = useCreateStyles(({ theme }) => ({
    container: {
      width: "100%",
      backgroundColor: theme.colors.nickel,
      padding: theme.spacings.m,
      opacity: 0.5,
    },
    text: theme.typography.h2({
      color: theme.colors.lightGrey,
    }),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {labels.nextSong}: Une chanson bien</Text>
    </View>
  );
}
