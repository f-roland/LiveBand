import { Container } from "@/components/Container";
import React from "react";
import { View } from "react-native";
import { useCreateStyles } from "src/theme";
import { Button } from "@/components/Button";

import { SessionHeader } from "@/components/SessionHeader";
import { SongHeader } from "@/components/SongHeader";
import { Tab } from "@/components/Tab";
import { useRouting } from "expo-next-react-navigation";

export function Admin() {
  const { goBack } = useRouting();
  const styles = useCreateStyles(({ theme }) => ({
    container: { flexDirection: "row" },
    panelContainer: { flex: 1, height: "100%", padding: theme.spacings.l },
    tabContainer: {},
    adminPanel: { maxWidth: 544 },
    title: theme.typography.h0({ marginVertical: theme.spacings.l }),
    text: theme.typography.h1({ marginVertical: theme.spacings.s }),
    buttonsContainer: { flexDirection: "row", justifyContent: "flex-end", marginHorizontal: -theme.spacings.l / 2 },
    adminContainer: {
      backgroundColor: theme.colors.nickel,
      flex: 1,
      padding: theme.spacings.l,
      marginTop: theme.spacings.l,
    },
  }));

  return (
    <Container style={styles.container}>
      <View style={[styles.tabContainer, styles.panelContainer]}>
        <SessionHeader isAdmin />
        <SongHeader />
        <View style={{ flex: 1, flexGrow: 1 }}>
          <Tab isAdmin />
        </View>
      </View>
      <View style={[styles.adminPanel, styles.panelContainer]}>
        <View style={styles.buttonsContainer}>
          <Button icon="music-note" onPress={() => console.log("transpose")} />
          <Button icon="skip-next" onPress={() => console.log("next")} />
          <Button icon="qr-code" onPress={() => console.log("qr-code")} />
          <Button icon="settings" onPress={() => console.log("settings")} />
          <Button icon="exit-to-app" onPress={() => goBack()} />
        </View>
        <View style={styles.adminContainer}></View>
      </View>
    </Container>
  );
}
