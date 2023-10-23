import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require("../../../assets/logo/LojasP10/logo-menor.png")} />
      <ActivityIndicator size="large" color="#4cd372" /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
    position: "absolute"
  },
  logo: {
    width: 120,
    height:  105,
    marginBottom: 50
  }
});

export default LoadingScreen;
