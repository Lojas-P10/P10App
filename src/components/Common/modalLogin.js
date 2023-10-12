import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ModalLogin() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.modalContent}>
      <View style={{ alignItems: "center", marginVertical: 6 }}>
        <View
          style={{
            backgroundColor: "#666",
            width: 100,
            height: 5,
            borderRadius: 10,
          }}
        ></View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontWeight: "600",
            textAlign: "center",
            fontSize: 20,
            color: "#666",
            marginBottom: 20,
          }}
        >
          Parece que você não tem uma conta em nossas lojas!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            Crie uma conta
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text>Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                textDecorationStyle: "dashed",
                textDecorationColor: "#666",
                textDecorationLine: "underline",
              }}
            >
              Entrar agora
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#fff",
    margin: 0,
    marginTop: 480,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#4cd372",
  },
  modalContent: {
    flex: 1,
    padding: 10,
  },
});
