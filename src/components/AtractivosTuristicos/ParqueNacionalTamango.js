import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import FondoScreen from "../FondoScreen";

function ParqueNacionalTamango(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ImageBackground
        source={require("../../images/atractivos/Tamango2.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.fondoScreenStack}>
          <FondoScreen style={styles.fondoScreen}></FondoScreen>
          <Text style={styles.loremIpsum}>Parque Nacional Sector Tamango</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20
  },
  image: {
    height: 150,
    borderRadius: 20,
    overflow: "hidden"
  },
  image_imageStyle: {},
  fondoScreen: {
    position: "absolute",
    left: 0,
    top: 0,
    height: 150,
    right: 0
  },
  loremIpsum: {
    top: 95,
    left: 6,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    right: 0,
    fontSize: 18
  },
  fondoScreenStack: {
    height: 150
  }
});

export default ParqueNacionalTamango;
