import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/* import api from '../../services/api'; */

function Card() {
  return (
    <View style={styles.card}>
      <MaterialCommunityIcons name="toy-brick" size={30} color="#00bf63" />
      <Text style={{color: "#333", fontWeight: "600"}}>Brinquedos</Text>
    </View>
  );
}

export default function Marcas() {
  /*   const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function carregarCategorias() {
      const response = await api.get('categories');
      setCategorias(response.data);
    }
    carregarCategorias();
  }, []); */

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Marcas</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
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
    color: "#333",
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    marginRight: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderRadius: 10,
    backgroundColor: "rgba(0,191,99,0.1)",
    height: 100,
  },
});
