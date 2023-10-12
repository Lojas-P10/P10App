import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "./Header";
import api from "../../services/api";

function Card(props) {
  return (
    <View style={styles.card}>
      <MaterialCommunityIcons
        name={props.categoria.materialCommunityIcons}
        size={30}
        color="#4cd372"
      />
      <Text style={{ color: "#333", fontWeight: "600" }}>
        {props.categoria.descricao}
      </Text>
    </View>
  );
}

export default function Nav() {
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [placeholderProduto, setPlaceholderProduto] = useState("");

  useEffect(() => {
    async function carregarCategorias() {
      const response = await api.get("categorias");
      setCategorias(response.data);
    }
    carregarCategorias();
  }, []);
  
  useEffect(() => {
    async function carregarProdutos() {
      try {
        const response = await api.get("produtos");
        const produtosArray = response.data.map((produto) => produto.nome);

        if (produtosArray.length > 0) {
          const randomIndex = Math.floor(Math.random() * produtosArray.length);
          const randomProduto = produtosArray[randomIndex];
          setPlaceholderProduto(randomProduto);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }
    carregarProdutos();
  }, []);

  const navigation = useNavigation();
  const [greeting, setGreeting] = useState("");
  const morningGreetings = [
    "Olá de manhã,",
    "Bom dia radiante,",
    "Manhã cheia de possibilidades,",
  ];
  const afternoonGreetings = ["Aproveite a tarde,", "Boa tarde produtiva,"];
  const nightGreetings = ["Boa noite,", "Boas compras,"];

  useEffect(() => {
    const currentHour = new Date().getHours();
    let greetingIndex = 0;

    if (currentHour >= 0 && currentHour < 12) {
      greetingIndex = Math.floor(Math.random() * morningGreetings.length);
      setGreeting(morningGreetings[greetingIndex]);
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingIndex = Math.floor(Math.random() * afternoonGreetings.length);
      setGreeting(afternoonGreetings[greetingIndex]);
    } else {
      greetingIndex = Math.floor(Math.random() * nightGreetings.length);
      setGreeting(nightGreetings[greetingIndex]);
    }
  }, []);

  return (
    <View>
      <View style={styles.content}>
        <View style={{ gap: 10 }}>
          <View>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
              {greeting}
            </Text>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 25 }}>
              Marco Mendes!
            </Text>
          </View>
          <View style={styles.pesquisa}>
            <TextInput
              style={styles.input}
              placeholder={`${placeholderProduto}...`}
            />
            <View
              style={{
                position: "absolute",
                right: "13%",
                bottom: "15%",
                backgroundColor: "#4cd372",
                borderRadius: 10,
                padding: 6,
              }}
            >
              <TouchableOpacity >
                <MaterialCommunityIcons
                  name="filter-outline"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: "absolute",
                right: "1%",
                bottom: "15%",
                backgroundColor: "#4cd372",
                borderRadius: 10,
                padding: 6,
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Pesquisa")}>
                <MaterialCommunityIcons
                  name="store-search-outline"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.header}>
            <Text style={styles.titulo}>Navegue por categorias</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.lista}
          >
            {categorias.map((categoria) => (
              <Card key={categoria.id} categoria={categoria} />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "column",
    marginBottom: 180,
  },
  titulo: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  lista: {},
  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 15,
  },
  pesquisa: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 90,
    width: "100%",
    color: "#4f4f4f",
    borderBottomWidth: 4,
    borderBottomColor: "rgba(0,0,0,0.1)",
    elevation: 1,
    shadowColor: "transparent",
  },
  card: {
    width: "auto",
    height: 50,
    borderRadius: 10,
    padding: 10,
    gap: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 4,
    borderBottomColor: "rgba(0,0,0,0.1)",
    elevation: 1,
    shadowColor: "transparent",
    marginRight: 10,
    backgroundColor: "#f8f8f8",
  },
  containerCards: {
    backgroundColor: "white",
    width: "100%",
    height: 100,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  btn: {
    backgroundColor: "#4cd372",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    overflow: "hidden",
    flexDirection: "row",
    borderRadius: 10,
  },
  more: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "white",
    backgroundColor: "#f8f8f8",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
