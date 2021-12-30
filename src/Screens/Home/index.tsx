import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

import React from "react";
import { Text } from "react-native";
import { createStyles } from "src/theme";
import { labels } from "src/utils/labels";

const styles = createStyles(({ theme }) => ({
  title: theme.typography.h0({ marginVertical: theme.spacings.l }),
  text: theme.typography.h1({ marginVertical: theme.spacings.s }),
}));

export function Home() {
  return (
    <Container>
      <Text style={styles.title}>{labels.Hello}</Text>
      <Text style={styles.text}>{labels.homeBaseline}</Text>
      <Button icon="add" title={labels.openSessionButton} href="admin" />
      <Button icon="open-in-browser" title={labels.joinSessionButton} href="guest" />
    </Container>
  );
}
