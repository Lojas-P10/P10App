import { ScrollView, StyleSheet, View, Text } from "react-native";
import Visitados from "../../components/Home/Visitados";
import Marcas from "../../components/Home/Marcas";
import Dez from "../../components/Home/Dez";
import Nav from "../../components/Common/Nav";
import Sazonal from "../../components/Home/Sazonal";
import Novidades from "../../components/Home/Novidades";
import Header from "../../components/Common/Header";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsHorizontalScrollIndicator={true}>
        <Nav />
        <Novidades />
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
    backgroundColor: "#4cd372",
    gap: 10,
  },
});
