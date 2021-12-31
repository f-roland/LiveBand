import React, { useRef } from "react";
import { useAtom } from "jotai";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { currentSong } from "src/atoms/songs";
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
      borderRadius: theme.borders.radius.s,
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
      fontFamily: "Arial",
      marginTop: theme.spacings.l,
      marginBottom: theme.spacings.s,
      fontWeight: "800",
      color: theme.colors.nickel,
      fontSize: 28,
    },
    chord: {
      marginBottom: theme.spacings.s,
      marginTop: theme.spacings.m,
      color: theme.colors.dutchWhite,
    },
  }));

  const ref = useRef(null);

  const [song] = useAtom(currentSong);

  if (!song) return null;

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={song.lines}
        renderItem={({ item, index }) => {
          const isSection = item.startsWith("#");
          const isChord = item.match(chordRegex) !== null;
          const line = isSection ? item.replace("#", "") : item;

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
