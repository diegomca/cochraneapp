import React from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    Text,
    Dimensions,
    ScrollView
} from "react-native";
import { useNavigation } from '@react-navigation/native';


function ActividadesComunalesScroll() {

    const data = [
        { img: "https://municochrane.cl/wp-content/uploads/2019/07/costumbrista-19-1024x649.jpg", title: "Fiesta Costumbrista 2022" },
        { img: "https://municochrane.cl/wp-content/uploads/2019/07/ovejeria3-1024x682.jpg", title: "Día de la Ovejería" },
        { img: "http://www.cochranepatagoniatrail.cl/uploads/9/4/6/9/9469094/slideweb.jpg", title: "COCHRANE PATAGONIA TRAIL" },
    ]
    const navigation = useNavigation();

    const { width } = Dimensions.get("window");
    var dimension_element = width * data.length * 0.9;

    return (
        <View>
            <Text style={styles.actComunales1}>Actividades Comunales</Text>
            <View style={styles.scrollActividades1}>
                <ScrollView
                    horizontal={true}
                    contentContainerStyle={
                        {
                            width: dimension_element,
                            height: 120
                        }
                    }
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >

                    <View style={styles.group1}>
                        <View style={styles.group2}>

                            {
                                data.map((card, index) => {
                                    let rutaimg = String(card.img);
                                    return (
                                        <View key={index} style={[styles.container, styles.cardActividadComunal]}>
                                            <ImageBackground
                                                source={{ uri: rutaimg }}
                                                resizeMode="cover"
                                                style={styles.imageCardActComunales}
                                                imageStyle={styles.CardActComunales_imageStyle}
                                            >
                                                <TouchableOpacity
                                                    gradientImage="Gradient_SnJn72u.png" //
                                                    style={styles.button}
                                                    onPress={() => {
                                                        navigation.navigate('actividadesComunales',
                                                            { nameSreen: card.title}
                                                        )
                                                    }}
                                                >
                                                    <Text style={styles.styleTextCard}>{card.title}</Text>
                                                </TouchableOpacity>
                                            </ImageBackground>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255,255,255,0)",
        margin: 0
    },
    imageCardActComunales: {
        width: 300,
        height: 100,
        borderRadius: 20,
        backgroundColor: "rgba(15,15, 15,1)",
        overflow: "hidden"
    },
    CardActComunales_imageStyle: {},
    button: {
        width: 320,
        height: 100,
        borderRadius: 20,
    },
    styleTextCard: {
        color: "rgba(255,255,255,1)",
        marginTop: 75,
        marginLeft: 13
    },
    group1: {
        flexDirection: "row",
        alignItems: "center",
        height: 120,
        width: "100%"
    },
    group2: {
        flexDirection: "row",
        height: 100,
        margin: 8,
        padding: 0,
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: 2,
        marginLeft: 2,
        marginRight: 2
    },
    cardActividadComunal: {
        top: 0,
        left: 0,
        width: 320,
        marginRight: 7,
        bottom: 0
    },
    actComunales1: {
        color: "#121212",
        fontSize: 18,
        marginTop: 7,
        marginLeft: 12
    },
    scrollActividades1: {
        height: 120,
        backgroundColor: "rgba(255,255,255,0)"
    },
});

export default ActividadesComunalesScroll;
