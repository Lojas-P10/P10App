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

import api from "../../services/api";

function Card({ produto }) {
  return (
    <View style={styles.card}>
      <Image style={styles.imagem} source={{ uri: produto.imagem }} />
      <View>
        <Text style={{ fontSize: 17, fontWeight: "600", color: "#333" }}>
          R${produto.preco}
        </Text>
        <Text style={{ fontSize: 15, color: "#333" }}>{produto.nome}</Text>
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
  const [sazonais, setSazonais] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function carregarSazonais() {
      try {
        const response = await api.get("sazonal");
        setSazonais(response.data);
      } catch (error) {
        console.error("Erro ao carregar produtos sazonais:", error);
      }
    }
    carregarSazonais();
  }, []);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const response = await api.get("produtos");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao carregar todos os produtos:", error);
      }
    }
    carregarProdutos();
  }, []);

  return (
    <View style={styles.container}>
      {sazonais.map((categoriaSazonal, index) => (
        <View key={index}>
          <View style={styles.header}>
            <Text style={styles.titulo}>{categoriaSazonal.descricao}</Text>
          </View>
          <ScrollView horizontal={true}>
            {produtos
              .filter((produto) => produto.sazonal === categoriaSazonal.id).map((produto) => (
                <Card key={produto.id} produto={produto} />
              ))}
          </ScrollView>
        </View>
      ))}
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
  imagem: {
    width: "100%",
    height: 160,
    borderRadius: 10,
  },
  card: {
    width: 250,
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
