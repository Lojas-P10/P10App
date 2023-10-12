import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Home from "../screens/Home";
import Encomendas from "../screens/Encomendas";
import Favoritos from "../screens/Favoritos";
import Mais from "../screens/Mais";
import Icon from "react-native-vector-icons/Feather";

const Tabs = AnimatedTabBarNavigator();

export function TabNavigator() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#4cd372",
        inactiveTintColor: "#fff",
      }}
      appearance={{
        activeTabBackgrounds: "white",
        tabBarBackground: "#4cd372",
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
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Encomendas"
        component={Encomendas}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="truck"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="heart"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Mais"
        component={Mais}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="menu"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
