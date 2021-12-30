import React, { Fragment } from "react";
import { Text, View, Pressable } from "react-native";
import * as IconComponents from "@expo/vector-icons";
import { Link } from "expo-next-react-navigation";

import { useCreateStyles, colors, useResponsiveValue } from "src/theme";
import { noop } from "src/utils/functions";

type Props = {
  icon: string;
  onPress?: () => void;
  href?: string;
  title?: string;
  iconType?:
    | "MaterialIcons"
    | "Ionicons"
    | "FontAwesome"
    | "AntDesign"
    | "MaterialCommunityIcons"
    | "Entypo"
    | "EvilIcons"
    | "Feather"
    | "Fontisto"
    | "Foundation"
    | "Octicons"
    | "SimpleLineIcons"
    | "Zocial";
};

export function Button(props: Props) {
  const { icon, onPress, href, title = null, iconType = "MaterialIcons" } = props;

  const styles = useCreateStyles(({ theme }) => ({
    container: title ? theme.views.textButton() : theme.views.iconButton(),
    hoveredContainer: {
      backgroundColor: theme.colors.steelTeal,
    },
    text: theme.typography.buttonLabel({ color: theme.colors.lightGrey, marginHorizontal: theme.spacings.m }),
  }));

  const _iconSize = useResponsiveValue({ desktop: 32, mobile: 24 });

  const iconSize = title ? 24 : _iconSize;

  const Component = IconComponents[iconType] ?? IconComponents.MaterialIcons;

  const LinkWrapper = onPress ? Fragment : Link;
  const linkProps = onPress
    ? {}
    : {
        routeName: href || "#",
        web: {
          path: "/index",
          as: `/${href}`,
        },
        nextLinkProps: { passHref: true, href },
      };

  return (
    <Pressable onPress={onPress || noop}>
      {/* @ts-ignore */}
      {({ hovered }) => (
        <LinkWrapper {...linkProps}>
          <View style={[styles.container, hovered ? styles.hoveredContainer : {}]}>
            {/* @ts-ignore */}
            <Component name={icon} size={iconSize} color={colors.lightGrey} />
            {title && <Text style={styles.text}>{title}</Text>}
          </View>
        </LinkWrapper>
      )}
    </Pressable>
  );
}
