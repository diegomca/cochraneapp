import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";

function CardCiudad(props) {
  return (
    <View style={[styles.container, props.style]}>
      <ImageBackground
        source={{uri: "http://photos.wikimapia.org/p/00/05/75/40/71_1280.jpg"}}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <TouchableOpacity
          gradientImage="Gradient_fVnne63.png"
          style={styles.button}
          onPress={() => { props.navigation.navigate('historia', {
            nameSreen: "Cochrane"
          })}}
        >
          <View style={styles.endWrapperFiller}></View>
          <View style={styles.cochraneColumn}>
            <Text style={styles.cochrane}>Cochrane</Text>
            <Text style={styles.loremIpsum}> 
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    borderRadius: 20
  },
  image: {
    borderRadius: 20,
    flex: 1,
    overflow: "hidden"
  },
  image_imageStyle: {},
  button: {
    borderRadius: 20,
    flex: 1
  },
  endWrapperFiller: {
    flex: 1
  },
  cochrane: {
    color: "rgba(255,255,255,1)",
    textAlign: "left"
  },
  loremIpsum: {
    color: "rgba(255,255,255,1)",
    fontSize: 13
  },
  cochraneColumn: {
    marginBottom: 11,
    marginLeft: 14,
    marginRight: 7
  }
});

export default CardCiudad;
