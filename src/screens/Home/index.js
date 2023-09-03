import React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import Visitados from '../../components/Home/Visitados';
import Categorias from '../../components/Home/Categorias';
import Marcas from '../../components/Home/Marcas';
import Dez from '../../components/Home/Dez';
import Nav from "../../components/Common/Nav"
import Sazonal from '../../components/Home/Sazonal';

export default function Home({ navigation }) {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Nav />
      <Categorias />
      <Sazonal />
      <Marcas />
      <Dez />
      <Visitados />
{/*       <Sugestoes />
      <Promocoes />
      <Ofertas navigation={navigation} />
       */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00bf63",
    paddingBottom: 200,
  },
});