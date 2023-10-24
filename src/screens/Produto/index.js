import React, { useState, useEffect } from "react";
import LoadingScreen from "../Home/LoadingScreen";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";
import Header from "../../components/Common/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Produto({ route }) {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const productId = route.params.productId;

  const fetchProductData = async (productId) => {
    try {
      const response = await fetch(
        `https://p10backend-eugreg-dev.fl0.io/api/produtos/${productId}`
      );
      if (response.status === 200) {
        const data = await response.json();
        setProductData(data);
        setLoading(false);
      } else {
        setError("Produto não encontrado");
        setLoading(false);
      }
    } catch (error) {
      setError("Erro ao buscar informações do produto");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData(productId);
  }, [productId]);

  const renderItem = (imagem) => (
    <Image
      source={{ uri: imagem.url }}
      style={{
        width: "100%",
        height: 300,
        borderRadius: 20,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        marginBottom: 20,
        position: "relative",
      }}
      key={imagem.url}
    />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingScreen />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={{ paddingHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left-bold-outline"
              size={24}
              color="#000"
            />
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={24}
              color="#000"
            />
          </View>
          <View>
            {productData.imagem.map((imagem) => renderItem(imagem))}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}
            >
              <Text style={styles.nomeProduto}>{productData.nome}</Text>
              <Text style={styles.preco}>R$ {productData.preco}</Text>
            </View>
          </View>
        </View>
      )}
      <ScrollView showsHorizontalScrollIndicator={true}></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#f8f8f8",
    gap: 10,
  },
  nomeProduto: {
    color: "#222",
    fontSize: 21,
  },
  preco: {
    color: "#4cd372",
    fontSize: 21,
    fontWeight: "600",
  }
});
