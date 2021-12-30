import React from "react";
import { View } from "react-native";
import { useCreateStyles } from "src/theme";
import { labels } from "src/utils/labels";
import { Button } from "./Button";

type Props = {
  isAdmin?: boolean;
};

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
    },
    nextButtonContainer: {
      position: "absolute",
      bottom: theme.spacings.m,
      right: theme.spacings.m,
    },
  }));
  return (
    <View style={styles.container}>
      {isAdmin && (
        <View style={styles.nextButtonContainer}>
          <Button icon="skip-next" title={labels.nextSong} />
        </View>
      )}
    </View>
  );
}
