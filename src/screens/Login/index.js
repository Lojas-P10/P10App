import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Input from "react-native-input-style";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from "react-native";
import Header from "../../components/Common/Header";

export default function Login({ navigation }) {
  return (
    <View style={styles.main}>
      <View
        style={{
          justifyContetn: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.logo}
          source={require("../../../assets/logo/LojasP10/logo-menor.png")}
        />
        <Text>Vai se fuder</Text>
        <Input
          id="name"
          label="Nome completo"
          keyboardType="default"
          required
          contain=" "
          autoCapitalize="sentences"
          errorText="Your name is invalid"
          onInputChange={"YOUR_InputChangeHandler"}
          initialValue=""
          outlined
          borderColor="#4cd372"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 100,
    backgroundColor: "#f7f7f7",
    gap: 10,
  },
  logo: {
    width: 150,
    height: 130,
  },
});
