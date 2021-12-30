import React from "react";
import { View } from "react-native";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SessionHeader } from "@/components/SessionHeader";
import { useCreateStyles } from "src/theme";
import { SongHeader } from "@/components/SongHeader";
import { Tab } from "@/components/Tab";
import { NextSong } from "@/components/NextSong";
import { useRouting } from "expo-next-react-navigation";

export function Guest() {
  const styles = useCreateStyles(({ theme, responsiveValue }) => ({
    container: { padding: theme.spacings.l, justifyContent: "flex-start" },
    headerContainer: {
      height: responsiveValue({ desktop: 104, tablet: 84, mobile: 132 }),
      flexDirection: responsiveValue({ desktop: "row", mobile: "column-reverse" }),
      width: "100%",
      justifyContent: "space-between",
    },
    buttonsContainer: { flexDirection: "row", justifyContent: "flex-end", marginHorizontal: -theme.spacings.l / 2 },
  }));

  const { goBack } = useRouting();

  return (
    <Container style={styles.container}>
      <View style={styles.headerContainer}>
        <SessionHeader />
        <View style={styles.buttonsContainer}>
          <Button icon="fullscreen" onPress={() => console.log("toggle fullscreen")} />
          <Button icon="piano" iconType="MaterialCommunityIcons" onPress={() => console.log("toggle chords")} />
          <Button icon="sync" onPress={() => console.log("reload")} />
          <Button icon="exit-to-app" onPress={() => goBack()} />
        </View>
      </View>
      <SongHeader />
      <Tab />
      <NextSong />
    </Container>
  );
}
