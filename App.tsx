import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import Root from "./navigation/Root";
import { darkTheme, lightTheme } from "./style";

export default function App() {
  const isDark = useColorScheme() === "dark";
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
