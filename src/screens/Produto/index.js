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
import produtoApi from "../../services/produtos";
import api from "../../services/api";
import { TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
export default function Produto({ route }) {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const productId = route.params.productId;

  useEffect(() => {
    async function carregarProduto() {
      try {
        const response = await api.get(`produtos/${productId}`);
        setProductData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error loading product data");
        setLoading(false);
      }
    }
    carregarProduto();
  }, [productId]);

  const renderItem = (imagem) => (
    <Image
      source={{ uri: imagem.url }}
      style={{
        width: "100%",
        height: 500,
        borderRadius: 20,
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
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 10,
            flex: 1,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginVertical: 15,
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left-bold-outline"
              size={30}
              color="#444"
            />
          </View>
          <View>
            {productData?.imagem?.map((imagem) => renderItem(imagem))}
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.nomeProduto}>{productData.nome}</Text>
            </View>
{/*             <View>
              <View style={{backgroundColor: "#4cd37233", padding: 5, width:"fit-content"}}>
                <Text style={styles.preco}>R$ {productData.preco}</Text>
              </View>
              <Text style={{ color: "#333", fontSize: 18, marginVertical: 5 }}>
                {productData.descricao}
              </Text>
            </View> */}
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "auto",
              flexDirection: "row",
              padding: 14,
            }}
          >
            <TouchableOpacity style={styles.buttonCarrinho}>
              <Text style={{ color: "white", fontWeight: "600" }}>
                Adicionar ao carrinho
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSalvar}>
              <Fontisto name="favorite" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      )}
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
    color: "#444",
    fontWeight: 500,
    fontSize: 30,
  },
  preco: {
    color: "#4cd372",
    fontSize: 19,
    fontWeight: "700",
  },
  buttonCarrinho: {
    padding: 18,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    width: "82%",
    backgroundColor: "#6344c3",
  },
  buttonSalvar: {
    padding: 18,
    borderRadius: 10,
    marginVertical: 10,
    width: "20%",
    marginLeft: 10,
    alignItems: "center",
    backgroundColor: "#4cd372",
  },
});
