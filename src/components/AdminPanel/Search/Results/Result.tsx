import * as React from "react";
import { Text, View } from "react-native";
import { useAtom } from "jotai";

import { currentSong } from "src/atoms/songs";
import { useCreateStyles } from "src/theme";
import { Button } from "@/components/Button";

type Props = {
  song: Song;
};

export function Result({ song }: Props) {
  const styles = useCreateStyles(({ theme }) => ({
    result: {
      padding: theme.spacings.m,
      borderBottomWidth: 1,
      borderColor: theme.colors.jetLight,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: theme.typography.h3({ lineHeight: 24 }),
  }));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCurrentSong] = useAtom(currentSong);

  return (
    <View style={styles.result}>
      <Text style={styles.title}>{song.title}</Text>
      {/* @ts-ignore */}
      <Button icon="add-task" onPress={() => setCurrentSong(song)} iconOnly />
    </View>
  );
}
