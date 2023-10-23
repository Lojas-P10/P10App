import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import api from '../../services/api';

function Card(props) {
  return (
    <View style={styles.card}>
      <Text style={{color: "#333", fontWeight: "600", textAlign: "center"}}>{props.marca.nome}</Text>
    </View>
  );
}

export default function Marcas() {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    async function carregarMarcas() {
      const response = await api.get("marca");
      setMarcas(response.data);
    }
    carregarMarcas();
  }, []);

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
        {marcas.map((marca) => (
          <Card key={marca.id} marca={marca} /> 
        ))}
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
    backgroundColor: "#dedcff",
    height: 100,
  },
});
