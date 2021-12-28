import { Container } from "@/components/Container";
import React from "react";
import { Text } from "react-native";
import { createStyles } from "src/theme";
import { Button } from "@/components/Button";
import { labels } from "src/utils/labels";
import { useRouting } from "expo-next-react-navigation";

const styles = createStyles(({ theme }) => ({
  title: theme.typography.h0({ marginVertical: theme.spacings.l }),
  text: theme.typography.h1({ marginVertical: theme.spacings.s }),
}));

export function Admin() {
  const { goBack } = useRouting();

  return (
    <Container>
      <Text style={styles.title}>This is the admin page</Text>
      <Button icon="arrow-back" title={labels.backButton} onPress={() => goBack()} />
    </Container>
  );
}
