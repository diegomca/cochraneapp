import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import FondoScreen from "../FondoScreen";

function Parquepatagonia(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ImageBackground
        source={require("../../images/atractivos/ParquePatagonia-Cochrane.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.fondoScreenStack}>
          <FondoScreen style={styles.fondoScreen}></FondoScreen>
          <Text style={styles.loremIpsum}>Parque Nacional Patagonia</Text>
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
    height: 208,
    borderRadius: 20,
    overflow: "hidden"
  },
  image_imageStyle: {},
  fondoScreen: {
    position: "absolute",
    left: 0,
    top: 0,
    height: 208,
    right: 0
  },
  loremIpsum: {
    left: 8,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    right: 0,
    fontSize: 18,
    bottom: 7
  },
  fondoScreenStack: {
    height: 208
  }
});

export default Parquepatagonia;
