import React, { useState, useEffect } from "react";
import LoadingScreen from "../Home/LoadingScreen";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Header from "../../components/Common/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Produto({ route }) {
  const [productData, setProductData] = useState(null);
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
              justifyContent: "space between",
              width: "100%",
              flexDirection: "row",
              position: "absolute",
              top: 50,
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left-bold-outline"
              size={24}
              color="#FFF"
            />
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={24}
              color="#FFF"
            />
          </View>
          <FlatList
            data={productData.imagem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.url }}
                style={{ width: 400, height: 200, borderRadius: 10, marginRight: 10 }}
              />
            )}
          />
          <Text>{productData.nome}</Text>
          <Text>R$ {productData.preco}</Text>
        </View>
      )}
      <ScrollView showsHorizontalScrollIndicator={true}></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    gap: 10,
  },
});
