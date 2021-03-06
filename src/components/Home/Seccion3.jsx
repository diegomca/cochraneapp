import React from 'react'
import { View, Text } from 'native-base'
import {
    StyleSheet, TouchableOpacity,
 } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Seccion3() {

    const navigation = useNavigation();


    return (

        <View style={styles.seccion1}>
            <View style={styles.atraccionesTuristicas1}>
                <View style={styles.rect2}>
                    <Text style={styles.actComunales2}>
                        Atracciones Turisticas
                  </Text>
                    <TouchableOpacity style={styles.button3} onPress={() => { navigation.navigate('pruebaslash')}}>
                        <View style={styles.rect3Stack}>
                            <View style={styles.rect3}></View>
                            <Text style={styles.verMas1}>Ver más</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.atraccionesTuristicas1Filler}></View>
            <View style={styles.actividadesTuristicas1}>
                <View style={styles.rect4Filler}></View>
                <View style={styles.rect2}>
                    <Text style={styles.actComunales2}>
                        Actividades Turisticas
                  </Text>
                    <TouchableOpacity style={styles.button3}>
                        <View style={styles.rect3Stack}>
                            <View style={styles.rect3}></View>
                            <Text style={styles.verMas1}>Ver más</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    
    seccion1: {
        height: 152,
        backgroundColor: "rgba(15,15, 15,0)"
    },
    atraccionesTuristicas1: {
        height: 63,
        borderRadius: 20,
        width: 192,
        backgroundColor: "rgba(15,15, 15,0.8)",
        marginTop: 13,
        marginLeft: 14
    },
    rect2: {
        width: 192,
        height: 63,
        backgroundColor: "rgba(21,67,96,0.8)",
        borderRadius: 20
    },
    actComunales2: {
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        height: 19,
        width: 180,
        marginTop: 7,
        marginLeft: 11
    },
    button3: {
        width: 61,
        height: 22,
        marginTop: 8,
        marginLeft: 123
    },
    rect3: {
        top: 0,
        left: 6,
        width: 54,
        height: 19,
        position: "absolute",
        backgroundColor: "rgba(230,230,230,0)"
    },
    verMas1: {
        top: 2,
        left: 0,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        height: 20,
        width: 59,
        textAlign: "right"
    },
    rect3Stack: {
        width: 60,
        height: 22
    },
    atraccionesTuristicas1Filler: {
        flex: 1
    },
    actividadesTuristicas1: {
        height: 63,
        borderRadius: 20,
        width: 192,
        backgroundColor: "rgba(15,15, 15,0.8)",
        flexDirection: "row",
        alignSelf: "flex-end",
        marginBottom: 5,
        marginRight: 6
    },
    rect4Filler: {
        flex: 1,
        flexDirection: "row"
    },
    rect4: {
        width: 192,
        height: 63,
        backgroundColor: "rgba(21,67,96,0.9)",
        borderRadius: 20,
        alignSelf: "flex-end"
    },
    actComunales3: {
        color: "rgba(255,255,255,1)",
        fontSize: 14,
        height: 21,
        width: 182,
        textAlign: "right",
        marginTop: 7
    },
    button4: {
        width: 61,
        height: 22,
        marginTop: 8,
        marginLeft: 118
    },
    rect5: {
        top: 0,
        left: 6,
        width: 54,
        height: 19,
        position: "absolute",
        backgroundColor: "rgba(230,230,230,0)"
    },
    verMas2: {
        top: 2,
        left: 0,
        position: "absolute",
        color: "rgba(255,255,255,1)",
        height: 20,
        width: 59,
        textAlign: "right"
    },
    rect5Stack: {
        width: 60,
        height: 22
    }
});



export default Seccion3
