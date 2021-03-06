import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import FondoScreen from "../FondoScreen";

function SanLorenzo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ImageBackground
        source={require("../../images/atractivos/Sanlorenzo1.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.fondoScreenStack}>
          <FondoScreen style={styles.fondoScreen}></FondoScreen>
          <Text style={styles.cordonSanLorenzo}>Cordón San Lorenzo</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(202,189,189,1)",
    borderRadius: 20
  },
  image: {
    height: 135,
    borderRadius: 20,
    overflow: "hidden"
  },
  image_imageStyle: {},
  fondoScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 135,
    right: 0
  },
  cordonSanLorenzo: {
    left: 17,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    right: 16,
    fontSize: 18,
    bottom: 8
  },
  fondoScreenStack: {
    height: 135
  }
});

export default SanLorenzo;
