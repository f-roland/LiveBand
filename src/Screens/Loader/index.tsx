import React, { ReactNode, useLayoutEffect, useCallback, useState } from "react";
import { Loading } from "./Loading";
import { Image } from "react-native";
import * as Font from "expo-font";
import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  children: ReactNode;
};

const Fonts = [MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons].map((font) => font.font);

export function Loader({ children }: Props) {
  const [loaded, setLoaded] = useState(false);

  const startLoading = useCallback(async () => {
    const promises = Fonts.map((font) => Font.loadAsync(font));
    await Promise.all(promises);

    setLoaded(true);
  }, []);

  useLayoutEffect(() => {
    startLoading();
  }, []);

  return loaded ? <>{children}</> : <Loading />;
}
