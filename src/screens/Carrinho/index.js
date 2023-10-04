import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Common/Header";
import { useNavigation } from "@react-navigation/native";

export default function Home({ navigation }) {

  return (
    <View style={styles.main}>
      <Header />
      <View style={{
        justifyContetn: "center",
        alignItems: "center",
      }}>
        <View style={{ backgroundColor: "white", height: "90%", borderRadius: 10, width: "95%" }}>
          <ScrollView showsHorizontalScrollIndicator={true}>
            <View style={{justifyContent: "center", alignItems: "center"}}>
              <MaterialCommunityIcons name="login-variant" size={104} color="#909090" />
              <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text>login</Text></TouchableOpacity>
            </View>
          </ScrollView>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,

    backgroundColor: "#00bf63",
    gap: 10,
  },
});
