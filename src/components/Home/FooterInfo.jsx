import React from 'react'
import { View } from 'native-base'
import { StyleSheet, Text, Image } from 'react-native';
import EntypoIcon from "react-native-vector-icons/Entypo";

function FooterInfo() {
    return (

        <View style={{
            marginTop: 30
        }} >
            <Image
                source={require("../../images/imgFooter.png")}
                resizeMode="stretch"
                style={styles.image}
            ></Image>
            <EntypoIcon name="facebook" style={styles.icon1}></EntypoIcon>
            <EntypoIcon name="instagram" style={styles.icon2}></EntypoIcon>
            <Text style={{
                position: "absolute",
                left: 7,
                fontSize: 11,
                bottom: 10,
                right: 6,
                color: "white",
                fontStyle: "italic"
            }}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&#39;s
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.

            </Text>
        </View>

    )
}


const styles = StyleSheet.create({
    image: {
        marginEnd: 0,
        width: "112%",
        flex: 1, 
        height: 215, 
        marginLeft: -3

    },
    icon1: {
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontSize: 40,
        right: 48,
        top: 70
    },
    icon2: {
        position: "absolute",
        color: "rgba(255,255,255,1)",
        fontSize: 40,
        top: 70,
        right: 8
    }
});



export default FooterInfo
