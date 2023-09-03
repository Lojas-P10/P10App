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

import api from "../../services/api";

function Card(props) {
  return (
    <View style={styles.card}>
      <MaterialCommunityIcons name={props.categoria.materialCommunityIcons} size={30} color="#00bf63" />
      <Text style={{ color: "#333", fontWeight: "600" }}>
        {props.categoria.descricao}
      </Text>
    </View>
  );
}

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function carregarCategorias() {
      const response = await api.get("categorias");
      setCategorias(response.data);
    }
    carregarCategorias();
  }, []);

  return (
    <View style={styles.container}>
{/*       <View style={styles.header}>
        <Text style={styles.titulo}>Navegue por categorias</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
        {categorias.map((categoria) => (
          <Card
            key={categoria.id}
            categoria={categoria}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
/*   container: {
    marginTop: 60,
    marginHorizontal: 20,
  }, */
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
