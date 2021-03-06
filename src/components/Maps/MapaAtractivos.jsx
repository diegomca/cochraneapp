import React, { useState, useEffect } from 'react'
import MapView, { Marker, Callout } from 'react-native-maps';
import {Text, View } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Dimensions } from 'react-native';


const {height} = Dimensions.get("window")

const dataincial = {
    main: {
        x: -47.322411, y: -72.61035, zoomX: 1.3, zoomY: 1.3
    },
}

const dataIn =
    [
        {
            x: -47.595355, y: -72.498885, texto: "Ventisquero Calluqueo", imagen: null, icon: "directions-walk", color: "black"
        },
        {
            x: -47.1209522, y: -72.7755619, texto: "Confluencias Rio Baker / Neff", imagen: null, icon: "directions-walk", color: "black"
        },
        {
            x: -47.116912, y: -72.483841, texto: "Reserva Nacional Parque Patagonía", imagen: null, icon: "star", color: "blue"
        },
        {
            x: -47.296072, y: -72.689949, texto: "El Salto", imagen: null, icon: "star", color: "blue"
        },
        {
            x: -47.242276, y: -72.523918, texto: "Reserva Nacional Sect. Tamango", imagen: null, icon: "star", color: "blue"
        },
        {
            x: -47.481651, y: -72.360722, texto: "Monte San Lorenzo", imagen: null, icon: "terrain", color: "black"
        },
        {
            x: -47.396030, y: -72.316336, texto: "Lago Brown", imagen: null, icon: "star", color: "blue"
        },
        {
            x: -47.266750, y: -72.473559, texto: "Lago Cochrane", imagen: null, icon: "star", color: "blue"
        },
        {
            x: -47.527058, y: -73.036585, texto: "Corte San Carlos", imagen: null, icon: "directions-walk", color: "black"
        }
    ]
function MapaAtractivosTuristicos() {


    const [datosAtractivosGeo, setDatosAtractivosGeo] = useState([])

    useEffect(() => {


        setDatosAtractivosGeo(dataIn)

    }, [])

    return (
        <MapView 
            style={{
                height: height * 0.95
            }}
        initialRegion={{
            latitude: dataincial.main.x,
            longitude: dataincial.main.y,
            latitudeDelta: dataincial.main.zoomX,
            longitudeDelta: dataincial.main.zoomY,
        }} >

            {
                datosAtractivosGeo.map((data, index) => {
                    return (
                        <Marker key={index} coordinate={{
                            latitude: data.x, longitude: data.y
                        }}>
                            {
                                data.icon !== null ?
                                    <Icon size={25} name={data.icon} color={data.color}></Icon>
                                    :
                                    null
                            }
                            <Callout key={index}>
                                <View style={{ width: 180 }}>
                                    <Text key={index}>{data.texto}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    )
                })
            }
            {/* <Marker coordinate={{ latitude: -47.61691, longitude: -72.360922}}>
                        <Image source={require("../../images/iconoMaps.png")}></Image>                                    
                    </Marker> */}

        </MapView>
    )
}

export default MapaAtractivosTuristicos
