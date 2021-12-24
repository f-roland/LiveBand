import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});

export function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello 👋</Text>
      <Text style={styles.text}>Live Band is coming soon ! 🚀 🎸 🎹 🥁 </Text>
    </View>
  );
}
