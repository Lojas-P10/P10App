import React from "react";

import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../../components/Common/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "space-between", width: "100%" }}>
        <MaterialCommunityIcons
          name="arrow-left-bold-outline"
          size={24}
          color="#333"
        />
        <MaterialCommunityIcons
          name="cards-heart-outline"
          size={24}
          color="#333"
        />
      </View>
      <ScrollView showsHorizontalScrollIndicator={true}></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    gap: 10,
    paddingTop: 30,
  },
});
