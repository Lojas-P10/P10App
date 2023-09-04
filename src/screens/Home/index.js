import React from "react";

import { ScrollView, StyleSheet, View } from "react-native";
import Visitados from "../../components/Home/Visitados";
import Marcas from "../../components/Home/Marcas";
import Dez from "../../components/Home/Dez";
import Nav from "../../components/Common/Nav";
import Sazonal from "../../components/Home/Sazonal";
import Novidades from "../../components/Home/Novidades";
import Promocao from "../../components/Home/Promocao";
import Header from "../../components/Common/Header";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsHorizontalScrollIndicator={true}
        
      >
        <Nav />
        <Novidades />
{/*         <Promocao /> */}
        <Sazonal />
        <Marcas />
        <Dez />
        <Visitados />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00bf63",
    gap: 10,
  },
});
