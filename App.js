import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "./src/infrastructure/theme/colors";
import {
  useFonts as useManrope,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";
import {
  useFonts as useInter,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

function MapScreen() {
  return (
    <View>
      <Text>Map!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

function RestaurantListScreen() {
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

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const getTabBarIcon = (route, focused, color, size) => {
  let iconName;

  switch (route.name) {
    case "Restaurants":
      iconName = focused ? "restaurant" : "restaurant-outline";
      break;
    case "Map":
      iconName = focused ? "map" : "map-outline";
      break;
    case "Settings":
      iconName = focused ? "settings" : "settings-outline";
      break;
    default:
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            getTabBarIcon(route, focused, color, size),
          tabBarActiveTintColor: colors.ui.active,
          tabBarInactiveTintColor: colors.ui.inactive,
        })}
      >
        <Tab.Screen name="Restaurants" component={RestaurantListScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
