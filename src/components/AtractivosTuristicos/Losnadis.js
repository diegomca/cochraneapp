import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import FondoScreen from "../FondoScreen";

function Losnadis(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ImageBackground
        source={require("../../images/atractivos/Corte_san_carlos.jpeg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.fondoScreenStack}>
          <FondoScreen style={styles.fondoScreen}></FondoScreen>
          <Text style={styles.loremIpsum}>Corte San Carlos - Los Ñadis</Text>
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
    height: 140,
    borderRadius: 20,
    overflow: "hidden"
  },
  image_imageStyle: {},
  fondoScreen: {
    position: "absolute",
    left: 0,
    top: 0,
    height: 140,
    borderRadius: 20,
    right: 0
  },
  loremIpsum: {
    top: 106,
    left: 16,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    right: 0
  },
  fondoScreenStack: {
    height: 140
  }
});

export default Losnadis;
