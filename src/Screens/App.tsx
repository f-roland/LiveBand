import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from ".";
import { Loading } from "./Loader/Loading";
import { Loader } from "./Loader";
import { labels } from "src/utils/labels";

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

export function App() {
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
