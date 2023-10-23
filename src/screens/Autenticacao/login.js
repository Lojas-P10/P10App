import React from "react";
import { AntDesign } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import { ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { login } from "../../services/login";
import { saveItem } from "../../plugins/SecureStorage/secureStorageHandler.js";
import { isValidEmail } from "../../plugins/SecureStorage/secureStorageHandler.js";
import Header from "../../components/Common/Header";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
      Password: "",
    },
  });

  const handleEmailValidation = (email) => {
    console.log("ValidateEmail was called with", email);

    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.Email && isValid) || (!errors.Email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }

    return isValid;
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const status = await login(data.Email, data.Password);

      localStorage.setItem("token", status.access);

      setLoading(false);
      navigation.replace("Carrinho");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(true);
      } else {
        console.error("Erro na solicitação:", error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior="padding"
      keyboardVerticalOffset={-400}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
      {loading && (
        <View >
          <ActivityIndicator size="large" color="#666" />
        </View>
      )}


        <View>
          <View>
            <View style={{ paddingHorizontal: 15, marginBottom: 30 }}>
              <View
                style={{
                  height: 50,
                  flexDirection: "row",
                  marginTop: 50,
                  marginBottom: 145,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                  <MaterialCommunityIcons
                    name="arrow-left-thin"
                    size={25}
                    color="white"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registrar")}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      textDecorationStyle: "dashed",
                      textDecorationLine: "underline",
                    }}
                  >
                    Crie sua conta aqui!
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 30 }}>
                Entre na sua conta
              </Text>
              <Text style={{ color: "#fff" }}>
                Temos promoções especiais só para você
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                height: "55%",
                width: "100%",
                borderTopWidth: 4,
                borderTopColor: "rgba(0,0,0,0.1)",
                elevation: 1,
                shadowColor: "transparent",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20,
                paddingVertical: 30,
                justifyContent: "space-between",
              }}
            >
              <View style={{ gap: 20 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.button}>
                    <MaterialCommunityIcons
                      name="email"
                      size={24}
                      color="white"
                    />
                  </View>
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                      />
                    )}
                    name="Email"
                    rules={{ validate: isValidEmail }}
                  />
                </View>
                {errors.Email && (
                  <Text style={{ color: "red" }}>Email inválido</Text>
                )}
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.button}>
                    <MaterialCommunityIcons
                      name="shield-key-outline"
                      size={24}
                      color="white"
                    />
                  </View>
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        onBlur={onBlur}
                        onChangeText={(value) => onChange(value)}
                        value={value}
                        secureTextEntry
                      />
                    )}
                    name="Password"
                    rules={{ required: "Senha é obrigatória" }}
                  />
                </View>
                {errors.Password && (
                  <Text style={{ color: "red" }}>{errors.Password.message}</Text>
                )}
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 15,
                    marginBottom: 20,
                  }}
                >
                  <Text style={{ color: "#333", fontWeight: "500" }}>
                    Se preferir entre com:
                  </Text>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <AntDesign name="facebook-square" size={30} color="#333" />
                    <AntDesign name="google" size={30} color="#333" />
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.buttonGreen}
                  onPress={handleSubmit(onSubmit)}
                >
                  <Text style={{ color: "white", fontWeight: "600" }}>
                    Entrar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 0,
    backgroundColor: "#4cd372",
  },
  input: {
    backgroundColor: "#f8f8f8",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    width: "85%",
    padding: 10,
    color: "#222",
  },
  buttonGreen: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#4cd372",
  },
  button: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F53333",
    borderRadius: 10,
  },
});
