import React from "react";
import { View, Text } from "react-native";
import { useCreateStyles } from "src/theme";

export function SongHeader() {
  const styles = useCreateStyles(({ theme, responsiveValue }) => ({
    container: {
      width: "100%",
      marginBottom: responsiveValue({ desktop: theme.spacings.s, mobile: theme.spacings.xs }),
    },
    titleContainer: { flexDirection: "row", alignItems: "flex-end", paddingTop: theme.spacings.s },
    songTitle: theme.typography.h1({ lineHeight: 40, flexGrow: 1 }),
    songAuthor: theme.typography.h2({ lineHeight: 30, fontWeight: "400" }),
    tempo: theme.typography.h1({ lineHeight: 40, fontWeight: "400" }),
    tempoSignature: theme.typography.h2({
      lineHeight: 35,
      fontWeight: "400",
      paddingLeft: theme.spacings.xs,
    }),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.songAuthor}>Author</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.songTitle}>Song Title</Text>
        <Text style={styles.tempo}>A - 120</Text>
        <Text style={styles.tempoSignature}>bpm</Text>
      </View>
    </View>
  );
}
