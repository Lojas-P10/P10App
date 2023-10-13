import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Input from "react-native-input-style";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../../components/Common/Header";
import { useNavigation } from "@react-navigation/native";

export default function Registrar() {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View>
        <View style={{ paddingHorizontal: 15, marginBottom: 30 }}>
          <View
            style={{
              height: 50,
              flexDirection: "row",
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <MaterialCommunityIcons
                name="arrow-left-thin"
                size={25}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  textDecorationStyle: "dashed",
                  textDecorationLine: "underline",
                }}
              >
                Já tenho conta!
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 30 }}>
            Crie sua conta
          </Text>
          <Text style={{ color: "#fff" }}>
            Faça seu cadastro e tenha acesso a promoções especiais
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: "66%",
            width: "100%",
            borderTopWidth: 4,
            borderTopColor: "rgba(0,0,0,0.1)",
            elevation: 1,
            shadowColor: "transparent",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ gap: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.button}>
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color="white"
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Nome Completo"
              ></TextInput>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.button}>
                <MaterialCommunityIcons name="email" size={24} color="white" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Seu melhor Email"
              ></TextInput>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.button}>
                <MaterialCommunityIcons
                  name="shield-key-outline"
                  size={24}
                  color="white"
                />
              </View>
              <TextInput style={styles.input} placeholder="Senha"></TextInput>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.button}>
                <MaterialCommunityIcons
                  name="shield-key-outline"
                  size={24}
                  color="white"
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Repita sua senha novamente"
              ></TextInput>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonGreen}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>
              Crie uma conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 0,
    backgroundColor: "#4cd372",
  },
  input: {
    backgroundColor: "#f8f8f8",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    width: "85%",
    padding: 10,
    color: "#222",
  },
  buttonGreen: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#4cd372",
  },
  button: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F53333",
    borderRadius: 10,
  },
});
