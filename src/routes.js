/* import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Encomendas from "./screens/Encomendas";
import Favoritos from "./screens/Favoritos";
import Produto from "./screens/Produto";
import Pesquisa from "./screens/Pesquisa";
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

export default function Routes() {
  return (
    <NavigationContainer>
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
          component={HomeRoutes}
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
          component={Encomendas}
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
          component={Favoritos}
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
          component={Mais}
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
    </NavigationContainer>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabRoutes" headerMode="false">
        <Stack.Screen name="Produto" component={Produto} />
        <Stack.Screen name="Pesquisa" component={Pesquisa} />
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 */