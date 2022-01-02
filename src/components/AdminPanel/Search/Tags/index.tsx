import React, { useMemo } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useCreateStyles } from "src/theme";
import { getTags } from "../utils";

type Props = {
  songs: Song[];
  setQuery: (query: string) => void;
};

export function Tags({ songs, setQuery }: Props) {
  const styles = useCreateStyles(({ theme }) => ({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginLeft: -theme.spacings.m,
      marginRight: -theme.spacings.m,
    },
    tagBox: {
      margin: theme.spacings.m,
      backgroundColor: theme.colors.jetLight,
      width: 94,
      height: 94,
      alignItems: "center",
      justifyContent: "center",
    },
    tagLabel: theme.typography.h3({ fontWeight: "800", textAlign: "center", color: theme.colors.darkGrey }),
  }));

  const tags = useMemo(() => getTags(songs), [songs]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {tags.map((tag, index) => (
        <TouchableOpacity key={index} onPress={() => setQuery(tag)}>
          <View style={styles.tagBox}>
            <Text style={styles.tagLabel}>{tag}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
