import React from 'react'
import { Container, Col } from 'native-base'
import { ImageBackground, ScrollView } from 'react-native'
import { Row, Grid } from 'react-native-easy-grid';
import CardServiciosComunales from '../components/Servicios/CardServiciosComunales'
import { useNavigation } from '@react-navigation/native';

function ServiciosComunales() {

    const cardContenidos = [
        { nombre: "Dónde comer", icon: "coffee" },
        { nombre: "Dónde dormir", icon: "sleep" },
        { nombre: "Agencias de viajes", icon: "map-legend" },
        { nombre: "Guías de turismo", icon: "wallet-travel" },
        { nombre: "Transporte", icon: "bus-multiple" },
        { nombre: "Actividades", icon: "run" }
    ]
    const navigation = useNavigation();

    return (
        <Container style={{ backgroundColor: "rgba(27,79,114,1)" }} >
            <ImageBackground
                style={{
                    flex: 1,
                    resizeMode: "cover"
                }}
                source={{ uri: "https://municochrane.cl/wp-content/uploads/2019/03/DJI_0068.jpg" }}>
                <ScrollView
                    horizontal={false}
                    style={{
                        backgroundColor: "rgba(0,0,0,0.4)"
                    }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <Grid style={{
                        marginEnd: 10, marginStart: 10, marginTop: 5,
                        flexDirection: "row",
                        flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
                        marginBottom: 10
                    }}>
                        {
                            cardContenidos.map((data, index) => {
                                return (
                                    <CardServiciosComunales key={index} style={{
                                        height: 135,
                                        width: 160,
                                        margin: 10
                                    }} nombre={data.nombre} icon={data.icon} index={index}
                                        navigation={navigation}></CardServiciosComunales>
                                )
                            })
                        }
                    </Grid>
                </ScrollView>
            </ImageBackground>
        </Container>
    )
}

export default ServiciosComunales
