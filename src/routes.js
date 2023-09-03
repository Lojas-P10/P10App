import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Icon from "react-native-vector-icons/Feather";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Tabs = AnimatedTabBarNavigator();

function HomeRoutes() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#00bf63",
        inactiveTintColor: "#fff",
      }}
      appearance={{
        floating: true,
        activeTabBackgrounds: "white",
        tabBarBackground: "#00bf63",
        shadow: true,
        whenInactiveShow: "icon-only",
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Encomendas"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="truck"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favoritos"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="heart"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Mais"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="menu"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <HomeRoutes />
    </NavigationContainer>
  );
}
