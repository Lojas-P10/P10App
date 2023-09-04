import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Common/Header";

function Card(props) {
  return (
    <TouchableOpacity style={styles.option} onPress={() => {}}>
      <MaterialCommunityIcons name={props.icon} size={30} color="#333" />
      <ScrollView style={styles.info}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.descricao}</Text>
      </ScrollView>
      <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
    </TouchableOpacity>
  );
}

export default function Mais({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.list}>
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Text style={{ color: "#00bf63", fontSize: 18, fontWeight: "bold" }}>
            @marrcandre
          </Text>
          <MaterialIcons name="keyboard-arrow-right" color="#999" size={20} />
        </TouchableOpacity>
        <Card title="Notificações" descricao="Minha central de notificações" icon="bell" />
        <Card title="Endereços" descricao="Livro de endereços" icon="map-marker-account"/>
        <Card title="Gerenciamento da conta" descricao="Alterar senha, e-mail, telefone..." icon="account-box"/>
        <Card title="Atendimento" descricao="Tire suas dúvidas" icon="phone"/>
        <Card title="Avaliação" descricao="Avalie nosso aplicativo" icon="monitor-cellphone-star"/>
        <Card title="Trabalhe nas lojas P10" descricao="Oportunidade única" icon="account-network"/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  list: {
    
  },
  option: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
    margin: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  info: {
    marginLeft: 10,
  },
  title: {
    color: "#333",
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    color: "#999",
  },
  menuAdicional: {
    marginTop: 30,
  },
});
