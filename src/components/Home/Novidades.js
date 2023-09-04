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
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

function Card(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Produto")}>
      <View style={styles.card}>
        <Image style={styles.imagem} source={{ uri: props.produto.imagem }} />
        <View>
          <Text style={{ fontSize: 17, fontWeight: "600", color: "#333" }}>
            R${props.produto.preco}
          </Text>
          <Text style={{ fontSize: 15, color: "#333" }}>
            {props.produto.nome}
          </Text>
        </View>
        <View style={styles.save}>
          <MaterialCommunityIcons name="heart" size={20} color="white" />
        </View>
        <View style={styles.cart}>
          <MaterialCommunityIcons name="cart-plus" size={20} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function Novidades() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregarProdutos() {
      const response = await api.get("produtos");
      setProdutos(response.data);
    }
    carregarProdutos();
  }, []);

  const ultimosSeisProdutos = produtos.slice(-6).reverse();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Temos novidades para você</Text>
        <View
          style={{
            backgroundColor: "red",
            height: 10,
            width: 10,
            borderRadius: 10,
          }}
        ></View>
      </View>
      <ScrollView horizontal={true}>
        {ultimosSeisProdutos.map((produto) => (
          <Card key={produto.id} produto={produto} />
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  header: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
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
    marginVertical: 10,
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
