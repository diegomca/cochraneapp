import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

function FondoScreen(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ImageBackground
        style={styles.rect}
        imageStyle={styles.rect_imageStyle}
        source={require("../images/gradiente.png")}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    borderRadius: 20,
    flex: 1,
    overflow: "hidden"
  },
  rect_imageStyle: {

  }
});

export default FondoScreen;
