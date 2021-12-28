import React, { useLayoutEffect, useRef } from "react";
import { View, ImageStyle, Animated, Easing } from "react-native";
import { logo } from "src/assets";
import { createStyles } from "src/theme";

const styles = createStyles(({ theme }) => ({
  container: theme.views.container(),
  logo: {
    width: 100,
    height: 150,
  },
}));

export function Loading() {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const duration = 3_000;

  useLayoutEffect(() => {
    const loop = Animated.timing(animatedValue, {
      toValue: 1,
      duration,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    Animated.loop(loop, { iterations: 10 }).start(() => animatedValue.setValue(0));
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={logo}
        style={[
          styles.logo as ImageStyle,
          { opacity: animatedValue.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 0.2, 1] }) },
        ]}
      />
    </View>
  );
}
