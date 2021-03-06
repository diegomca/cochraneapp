import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "native-base";

function CardServiciosComunales(props) {
    return (
        <Button key={props.index} style={[styles.container, props.style]} onPress={() => props.navigation.navigate('ListaServicios', {
            nameService: props.nombre
        })}>
            <View >
                <Icon name={props.icon} style={styles.icon}></Icon>
                <Text style={styles.estiloText}>{props.nombre}</Text>
            </View>
        </Button>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(39,55,70,1)",
        borderRadius: 20
    },
    icon: {
        color: "rgba(255,255,255,1)",
        fontSize: 40,
        marginTop: 0,
        marginLeft: 10,
    },
    estiloText: {
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        marginTop: 28,
        marginLeft: 13
    }
});

export default CardServiciosComunales;
