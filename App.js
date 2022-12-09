import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useManrope,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";

import {
  useFonts as useInter,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

export default function App() {
  const [manropeLoaded] = useManrope({
    Manrope_800ExtraBold,
  });
  const [interLoaded] = useInter({
    Inter_400Regular,
  });

  if (!manropeLoaded || !interLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
