import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import Encomendas from "./screens/Encomendas";
import Favoritos from "./screens/Favoritos";
import Produto from "./screens/Produto";
import Pesquisa from "../screens/Pesquisa";
import Mais from "./screens/Mais";
import Icon from "react-native-vector-icons/Feather";

const Stack = createStackNavigator();
const Tabs = AnimatedTabBarNavigator();

function HomeRoutes() {
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}></Stack.Screen>
    <Stack.Screen name="Pesquisa" component={Pesquisa}></Stack.Screen>
  </Stack.Navigator>;
} 