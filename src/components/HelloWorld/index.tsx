import React from "react";
import { View, Text } from "react-native";
import { useCreateStyles } from "../../theme";

export function HelloWorld() {
  const styles = useCreateStyles(({ theme }) => ({
    container: theme.views.container({
      minWidth: "100vw",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
    }),
    title: theme.typography.h0({ marginVertical: theme.spacings.l }),
    text: theme.typography.h1({ marginVertical: theme.spacings.s }),
  }));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello 👋</Text>
      <Text style={styles.text}>Live Band is coming soon ! 🚀 🎸 🎹 🥁 </Text>
    </View>
  );
}
