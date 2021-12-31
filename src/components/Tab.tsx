import React, { useRef } from "react";
import { ScrollView, View, Text, FlatList, TouchableOpacity } from "react-native";
import { useCreateStyles } from "src/theme";
import { labels } from "src/utils/labels";
import { Button } from "./Button";

type Props = {
  isAdmin?: boolean;
};

const chordRegex = /([CDEFGAB][b#]?(maj|m|M|∆|°)?(4|6|7|9|13)?(\s+|\n))/g;

export function Tab({ isAdmin }: Props) {
  const styles = useCreateStyles(({ theme }) => ({
    container: {
      flex: 1,
      position: "relative",
      width: "100%",
      flexGrow: 1,
      borderWidth: 1,
      borderColor: theme.colors.dutchWhite,
      marginBottom: isAdmin ? 0 : theme.spacings.l,
      padding: theme.spacings.l,
    },
    nextButtonContainer: {
      position: "absolute",
      bottom: theme.spacings.m,
      right: theme.spacings.m,
    },
    tabText: {
      fontFamily: "DejaVu Sans",
      color: theme.colors.lightGrey,
      fontSize: 24,
      lineHeight: 30,
      margintop: theme.spacings.s,
      marginBottom: theme.spacings.l,
    },
    section: {
      fontFamily: "SFProText-bold",
      marginTop: theme.spacings.l,
      marginBottom: theme.spacings.s,
      fontWeight: "800",
      color: theme.colors.nickel,
      fontSize: 28,
    },
    chord: {
      fontFamily: "SFProText-regular",
      marginBottom: theme.spacings.s,
      marginTop: theme.spacings.m,
      color: theme.colors.dutchWhite,
    },
  }));

  const ref = useRef(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={song.lines}
        renderItem={({ item, index }) => {
          const isSection = item.startsWith("#");
          const isChord = item.match(chordRegex) !== null;
          const line = isSection ? item.replace("#", "") : item;

          console.log({ line, isChord, index });

          if (isSection) {
            return (
              <TouchableOpacity onPress={() => ref?.current.scrollToIndex({ index, animated: true })}>
                <Text style={[styles.tabText, isSection ? styles.section : {}]}>{line}</Text>
              </TouchableOpacity>
            );
          }

          return (
            <Text style={[styles.tabText, isSection ? styles.section : {}, isChord ? styles.chord : {}]}>{line}</Text>
          );
        }}
      />

      {isAdmin && (
        <View style={styles.nextButtonContainer}>
          <Button icon="skip-next" title={labels.nextSong} />
        </View>
      )}
    </View>
  );
}

const song = {
  title: "je dis Aime",
  author: "-M-",
  key: "F#m",
  tags: "pop variété soirée karaoke",
  lines: [
    "#Intro",
    "F#m    F#m/A    Bm6    G#m7-5",
    "",
    "F#m    F#m/A    Bm7    D7",
    "",
    "",
    "#Verse 1",
    "F#m     F#m/A    Bm6     G#m7-5",
    "J'ai les méninges nomades",
    "F#m    F#m/A   Bm7    D7",
    "J'ai le miroir maussade",
    "F#m        F#m/A     Bm6      G#m7-5",
    "Tantôt mobile, Tantôt tranquille",
    "F#m       F#m/A       Bm7    D7",
    "Je moissonne sans bousculade",
    "",
    "",
    "#Chorus",
    "        E   D         A",
    "Je dis Aime et je le sème",
    " C#/G#       F#m   C#7/G#   F#m   C#7/G#",
    "Sur ma planète",
    "       E  D             A",
    "Je dis M, Comme un emblème",
    " C#/G#            F#m   C#7/G#   F#m   C#7/G#",
    "La haine je la jette",
    "     E       D7      C#7",
    "Je dis Aime, Aime, Aime",
    "",
    "",
    "#Instrumental",
    "F#m    F#m/A    Bm6    G#m7-5",
    "",
    "F#m    F#m/A    Bm7    D7",
    "",
    "",
    "#Verse 2",
    "F#m   F#m/A       Bm6   G#m7-5",
    "Du Sphinx dans mon rimeur",
    "F#m   F#m/A   Bm7   D7",
    "Paris au fil du cœur",
    "F#m   F#m/A     Bm6   G#m7-5",
    "Du Nil dans mes veines",
    "F#m        F#m/A     Bm7     D7",
    "Dans mes artères coule la Seine",
    "",
    "",
    "#Chorus",
    "        E   D         A",
    "Je dis Aime et je le sème",
    " C#/G#       F#m   C#7/G#   F#m   C#7/G#",
    "Sur ma planète",
    "       E  D             A",
    "Je dis M, Comme un emblème",
    " C#/G#            F#m   C#7/G#   F#m   C#7/G#",
    "La haine je la jette",
    "     E       D7      C#7",
    "Je dis Aime, Aime, Aime",
    "",
    "",
    "#Bridge",
    "Bm9            F#m/A                         C#7/G#",
    "Pour le dehors le dedans, pour l'après pour l'avant",
    "       F#m     Bm9",
    "Je dis AIME, AIME",
    "",
    "Bm9            F#m/A                         C#7/G#",
    "Pour le dehors le dedans, pour l'après pour l'avant",
    "F#m",
    "Aime",
    "Bm9   F#m/A   C#7/G#   F#m",
    "Aime, Aime, Aime, Aime",
    "",
    "",
    "#Solo",
    "Bm9    F#m/A    C#7/G#    F#m",
    "",
    "Bm9    F#m/A    C#7/G#    F#m",
    "",
    "",
    "#Bridge",
    "Bm9   F#m/A   C#7/G#   F#m",
    "Aime, Aime, Aime, Aime",
    "Bm9   F#m/A   C#7/G#   F#m",
    "Aime, Aime, Aime, Aime",
    "",
    "Bm9            F#m/A                         C#7/G#   F#m",
    "Pour le dehors le dedans, pour l'après pour l'avant",
    "Bm9            F#m/A                         C#7/G#   F#m",
    "Pour le dehors le dedans, pour l'après pour l'avant",
    "",
    "",
    "#Chorus",
    "        E   D         A",
    "Je dis Aime et je le sème",
    " C#/G#       F#m   C#7/G#   F#m   C#7/G#",
    "Sur ma planète",
    "       E  D             A",
    "Je dis M, Comme un emblème",
    " C#/G#            F#m   C#7/G#   F#m   C#7/G#",
    "La haine je la jette",
    "     E       D7      C#7",
    "Je dis Aime, Aime, Aime",
    "",
  ],
};
