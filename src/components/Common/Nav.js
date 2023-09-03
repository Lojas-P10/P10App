import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
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
        color="#00bf63"
      />
      <Text style={{ color: "#333", fontWeight: "600" }}>
        {props.categoria.descricao}
      </Text>
    </View>
  );
}

export default function Nav() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function carregarCategorias() {
      const response = await api.get("categorias");
      setCategorias(response.data);
    }
    carregarCategorias();
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
      <Header />
      <View style={styles.content}>
        <View style={{gap: 10}}>
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
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 5,
                paddingLeft: 10,
                width: "100%",
                color: "#4f4f4f",
              }}
              placeholder="O que você procura?"
            />
            <View
              style={{
                position: "absolute",
                right: "1%",
                bottom: "8%",
                backgroundColor: "#00bf63",
                borderRadius: 10,
                padding: 6,
              }}
            >
              <MaterialCommunityIcons
                name="filter-outline"
                size={20}
                color="white"
              />
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
            {categorias.map((categoria) => (
              <Card key={categoria.id} categoria={categoria} />
            ))}
            {categorias.map((categoria) => (
              <Card key={categoria.id} categoria={categoria} />
            ))}
            {categorias.map((categoria) => (
              <Card key={categoria.id} categoria={categoria} />
            ))}
            {categorias.map((categoria) => (
              <Card key={categoria.id} categoria={categoria} />
            ))}
            {categorias.map((categoria) => (
              <Card key={categoria.id} categoria={categoria} />
            ))}
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
    paddingVertical: 30,
    gap: 15,
  },
  pesquisa: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#00bf63",
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
