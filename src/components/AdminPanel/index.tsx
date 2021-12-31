import React from "react";
import { View } from "react-native";
import { useCreateStyles } from "src/theme";
import { Button } from "@/components/Button";
import { useRouting } from "expo-next-react-navigation";

export function AdminPanel() {
  const { goBack } = useRouting();
  const styles = useCreateStyles(({ theme }) => ({
    panelContainer: { flex: 1, height: "100%", padding: theme.spacings.l },
    adminPanel: { maxWidth: 544 },
    buttonsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: -theme.spacings.l / 2,
    },
    adminContainer: {
      backgroundColor: theme.colors.nickel,
      flex: 1,
      padding: theme.spacings.l,
      marginTop: theme.spacings.l,
    },
  }));

  return (
    <View style={[styles.adminPanel, styles.panelContainer]}>
      <View style={styles.buttonsContainer}>
        <Button icon="skip-next" onPress={() => console.log("next")} />
        <Button icon="qr-code" onPress={() => console.log("qr-code")} />
        <Button icon="settings" onPress={() => console.log("settings")} />
        <Button icon="exit-to-app" onPress={() => goBack()} />
      </View>
      <View style={styles.adminContainer}></View>
    </View>
  );
}
