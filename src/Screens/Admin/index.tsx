import React from "react";
import { View } from "react-native";

import { Container } from "@/components/Container";
import { useCreateStyles } from "src/theme";
import { SessionHeader } from "@/components/SessionHeader";
import { SongHeader } from "@/components/SongHeader";
import { Tab } from "@/components/Tab";
import { AdminPanel } from "@/components/AdminPanel";
import { Button } from "@/components/Button";

export function Admin() {
  const styles = useCreateStyles(({ theme }) => ({
    container: { flexDirection: "row" },
    panelContainer: { flex: 1, height: "100%", padding: theme.spacings.l },
    tabContainer: {},
    buttonsContainer: {
      alignItems: "flex-start",
      height: "100%",
      paddingTop: theme.spacings.l,
      marginLeft: theme.spacings.m,
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
      <View style={styles.buttonsContainer}>
        <Button icon="play-arrow" secondary onPress={() => console.log("play")} />
        <Button
          icon="speedometer-slow"
          secondary
          iconType="MaterialCommunityIcons"
          onPress={() => console.log("play")}
        />
        <Button icon="speedometer" secondary iconType="MaterialCommunityIcons" onPress={() => console.log("play")} />
        <Button icon="fullscreen" secondary onPress={() => console.log("play")} />
        <Button icon="music-note" secondary onPress={() => console.log("transpose")} />
      </View>
      <AdminPanel />
    </Container>
  );
}
