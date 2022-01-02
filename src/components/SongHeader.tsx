import React from "react";
import { useAtom } from "jotai";
import { View, Text } from "react-native";
import { currentSong } from "src/atoms/songs";
import { sessionAtom } from "src/atoms/session";
import { useCreateStyles } from "src/theme";

export function SongHeader() {
  const [song] = useAtom(currentSong);
  const [session] = useAtom(sessionAtom);

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

  if (!song) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.songAuthor}>{session.name}</Text>
      <View style={styles.titleContainer}>
        <Text style={styles.songTitle}>{song.author}</Text>
        <Text style={styles.tempo}>{song.key} - 120</Text>
        <Text style={styles.tempoSignature}>bpm</Text>
      </View>
    </View>
  );
}
