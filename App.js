import React from "react";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screens";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

function DetailsScreen() {
  return (
    <View>
      <Text>Details!</Text>
    </View>
  );
}

const TheLogo = () => {
  return (
    <Image
      source={require("./assets/reco-logo.png")}
      resizeMode="contain"
      style={{
        width: 64,
        height: 24,
      }}
    />
  );
};

const TheIcon = () => <Ionicons name="search" size={24} color="black" />;

const RestaurantsStack = createNativeStackNavigator();

function RestaurantsStackScreen() {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerTitle: null,
      }}
    >
      <RestaurantsStack.Screen
        name="Restaurant List"
        component={RestaurantsScreen}
        options={{
          title: "",
          headerLeft: TheLogo,
          headerRight: TheIcon,
        }}
      />
      <RestaurantsStack.Screen name="Details" component={DetailsScreen} />
    </RestaurantsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            getTabBarIcon(route, focused, color, size),
          tabBarActiveTintColor: colors.ui.active,
          tabBarInactiveTintColor: colors.ui.inactive,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsStackScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
