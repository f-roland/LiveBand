import React from "react";
import { View, Text } from "react-native";

import { useCreateStyles } from "src/theme";

type Props = {
  title: string;
};

export function SectionHeader({ title }: Props) {
  const styles = useCreateStyles(({ theme }) => ({
    author: {
      color: theme.colors.darkGrey,
      fontSize: 16,
      lineHeight: 20,
      fontWeight: "800",
    },
    sectionHeader: {
      backgroundColor: theme.colors.jetLight,
      paddingVertical: theme.spacings.s,
      marginBottom: theme.spacings.s,
      paddingHorizontal: theme.spacings.m,
    },
  }));

  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.author}>{title}</Text>
    </View>
  );
}
