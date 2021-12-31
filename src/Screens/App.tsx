import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as R from "ramda";

import { Screens } from ".";
import { Loading } from "./Loader/Loading";
import { Loader } from "./Loader";
import { labels } from "src/utils/labels";
import { useAtom } from "jotai";
import { songsAtom, currentSong } from "src/atoms/songs";

const Stack = createNativeStackNavigator();

const ScreensArray = Object.values(Screens);

const screenConfig = ScreensArray.reduce((screens, screen) => {
  screens[screen.name] = `/${screen.routeName}`;
  return screens;
}, {});

const linking = {
  prefixes: ["http://localhost:3000"],
  config: {
    screens: screenConfig,
  },
};

export function App({ songs }: { songs: Song[] }) {
  const [_, setSongs] = useAtom(songsAtom);

  useEffect(() => {
    setSongs(R.concat(songs));
  }, []);

  return (
    <Loader>
      <NavigationContainer linking={linking} fallback={Loading}>
        <Stack.Navigator>
          {ScreensArray.map(({ name, Component }, key) => (
            <Stack.Screen
              key={key}
              name={name}
              component={Component}
              options={{ headerShown: false, title: labels.title }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Loader>
  );
}
