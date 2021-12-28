import React from "react";
import { Text, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-next-react-navigation";

import { useCreateStyles, colors } from "src/theme";
import { noop } from "src/utils/functions";

type Props = {
  icon: string;
  onPress?: () => void;
  href?: string;
  title: string;
};

export function Button(props: Props) {
  const { icon, onPress = noop, href, title } = props;

  const styles = useCreateStyles(({ theme }) => ({
    container: theme.views.textButton(),
    hoveredContainer: {
      backgroundColor: theme.colors.steelTeal,
    },
    text: theme.typography.buttonLabel({ color: theme.colors.lightGrey, marginHorizontal: theme.spacings.m }),
  }));

  return (
    <Pressable>
      {/* @ts-ignore */}
      {({ hovered }) => (
        <Link
          routeName={href || "#"}
          web={{
            path: "/index",
            as: `/${href}`,
          }}
          touchableOpacityProps={{ onPress }}
          nextLinkProps={{ passHref: true, href }}
        >
          <View style={[styles.container, hovered ? styles.hoveredContainer : {}]}>
            {/* @ts-ignore */}
            <MaterialIcons name={icon} size={24} color={colors.lightGrey} />
            <Text style={styles.text}>{title}</Text>
          </View>
        </Link>
      )}
    </Pressable>
  );
}
