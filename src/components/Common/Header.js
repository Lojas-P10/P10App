import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import ModalLogin from "./modalLogin"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate("Home")}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderBottomWidth: 4,
              borderBottomColor: "rgba(0,0,0,0.1)",
              elevation: 1,
              borderRadius: 10,
              shadowColor: "transparent",
            }}
          >
            <Image
              source={require("../../assets/marrcandre.jpeg")}
              style={{
                borderRadius: 10,
                width: "100%",
                height: "100%",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.icones}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.btnCart} onPress={toggleModal}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={20}
              color="#4cd372"
            />
          </TouchableOpacity>
          <Modal
            style={styles.modal}
            isVisible={isModalVisible}
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection="down"
            onBackdropPress={() => setModalVisible(false)}
            onBackButtonPress={() => setModalVisible(false)}
            backdropTransitionOutTiming={800}
          >
           <ModalLogin />
          </Modal>
          <Text style={styles.carrinhoText}>.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#fff",
    margin: 0,
    marginTop: 480,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    backgroundColor: "#4cd372",
    paddingHorizontal: 20,
    height: 100,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "space-between",
  },
  btnCart: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderBottomWidth: 4,
    borderBottomColor: "rgba(0,0,0,0.1)",
    elevation: 1,
    shadowColor: "transparent",
    height: 40,
    width: 40,
  },
  carrinhoText: {
    backgroundColor: "red",
    paddingHorizontal: 3,
    textAlign: "center",
    height: 10,
    width: 10,
    borderRadius: 30,
    marginLeft: -8,
    zIndex: 10,
    color: "#4cd372",
  },
});
