import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import FondoScreen from "../FondoScreen";

function LagoCochrane(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ImageBackground
        source={require("../../images/atractivos/CochraneLAke.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.fondoScreenStack}>
          <FondoScreen style={styles.fondoScreen}></FondoScreen>
          <Text style={styles.text}>Lago Cochrane</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 176,
    borderRadius: 20,
    overflow: "hidden"
  },
  image_imageStyle: {},
  fondoScreen: {
    position: "absolute",
    left: 0,
    top: 0,
    height: 176,
    right: 0
  },
  text: {
    top: 133,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    right: 0,
    fontSize: 18
  },
  fondoScreenStack: {
    height: 176
  }
});

export default LagoCochrane;
