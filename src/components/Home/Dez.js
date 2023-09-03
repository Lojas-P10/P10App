import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/* import api from '../../services/api'; */

function Card() {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={require("../../assets/bic.webp")} />
      <View>
        <Text style={{ fontSize: 17, fontWeight: "600", color: "red" }}>
          R$1,00
        </Text>
        <Text style={{ fontSize: 15, color: "#333" }}>Caneta BIC</Text>
      </View>
      <View style={styles.save}>
        <MaterialCommunityIcons name="heart" size={20} color="white" />
      </View>
      <View style={styles.cart}>
        <MaterialCommunityIcons name="cart-plus" size={20} color="white" />
      </View>
    </View>
  );
}

export default function Sazonal() {
  /*   const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function carregarCategorias() {
      const response = await api.get('categories');
      setCategorias(response.data);
    }
    carregarCategorias();
  }, []);
 */
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="assistant" size={24} color="#333" />
        <Text style={styles.titulo}>Impossível ser menos de 10 Reais</Text>
      </View>
      <ScrollView horizontal={true}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  header: {
    flexDirection: "row",
    gap: 6
  },
  imagem: {
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  card: {
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginVertical: 10
  },
  cart: {
    backgroundColor: "#00bf63",
    width: 40,
    height: 40,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: 10,
    zIndex: 5,
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  save: {
    backgroundColor: "#00bf63",
    width: 40,
    height: 40,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    zIndex: 5,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
