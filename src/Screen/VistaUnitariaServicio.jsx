import React, { useState } from 'react'
import { Container, Row, Text, View, Icon } from 'native-base'
import { Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import MoreText from '../components/MoreText'
import MyCarousel from '../components/ImagenesAnexasServicios'
import MapView, { Marker, Callout } from 'react-native-maps';
import ReactNativeParallaxHeader from 'react-native-parallax-header';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT > 810 ? true : false;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;


function VistaUnitariaServicio({ route, navigation }) {

    const imgConst = "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932"
    const title = "Camping Cochrane"
    const subtitle = "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane"
    const imageAnex = ["https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/88254658_1041010249601537_9037008016957070083_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=BR_tOskeYZAAX9SVeV2&oh=cf7cdbd45840d89d5eee3c2b01b78f0c&oe=606D7115",
        "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/88254658_1041010249601537_9037008016957070083_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=BR_tOskeYZAAX9SVeV2&oh=cf7cdbd45840d89d5eee3c2b01b78f0c&oe=606D7115",
        "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/88254658_1041010249601537_9037008016957070083_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=BR_tOskeYZAAX9SVeV2&oh=cf7cdbd45840d89d5eee3c2b01b78f0c&oe=606D7115"]
    const contact = {
        direccion: "Dr.Steffens 451", telefono: "966999274", email: "campingcochrane@gmail.com"
    }
    const description = "En pleno centro de la ciudad, cuenta con todos los servicios básicos para una grata y hermosa estadía, en el corazón de la Patagonia chilena, reserva mundial de agua dulce, rodeada de belleza natural.\nSomos una pequeña empresa familiar, ofrecemos servicio de camping y hospedaje. Contamos con capacidad para 50 carpas, baños, duchas con agua caliente, cocina, luz eléctrica, agua potable. Ofrecemos servicio de lavandería, información turística, contacto con otros operadores de turismo, grato ambiente, seguro y tranquilo, a media cuadra de la plaza, supermercado, bancos y oficina de buses. También, ofrecemos paseos en bote por el rio Baker. El hospedaje es pequeño, cuento con 4 habitaciones, 1 single y 3 dobles, baño compartido, baño y ducha con agua caliente, económico."
    const socialNetwork = { instagram: "campingcochrane", facebook: "addSocialNetwork" }
    const datosGeograficos = { x: -47.254432, y: -72.574902 }

    const { servicio } = route.params;
    const { nombre } = route.params;


    const renderNavBar = () => (
        <View style={styles.navContainer}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.iconLeft} onPress={() => navigation.goBack()}>
                    <Icon style={[], {
                        color: "black", fontWeight: 'bold'
                    }} name='arrow-back' />
                </TouchableOpacity>
                <View style={{
                    position:"relative",
                    flex:1
                }}>
                    <Text style={{
                        textAlign: "center",
                        color: "white",
                        fontSize:16,
                        fontWeight: 'bold',
                        marginTop:"auto",
                        marginBottom: "auto"
                    }}>{nombre}</Text>
                </View>
            </View>
        </View>
    );

    const renderContent = () => {
        return (

            // <View style={{
            //     backgroundColor: "rgba(230, 230, 230,0.6)",
            //     marginTop: 0, marginBottom: 0
            // }}>
            <View style={{
                marginEnd: 12, marginStart: 12, marginTop: 12,
                marginBottom: 10, backgroundColor: "rgba(255,255,255,1)",
                borderRadius: 15,
                borderColor: "rgba(0,0,0,0.2)",
                borderWidth: 1,
            }}>
                {/*Top */}
                <View style={{
                    marginBottom: 10,
                    marginTop: 10,
                    marginStart: 10
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 24,
                    }}>
                        {title}
                    </Text>
                    <Text style={{
                        fontWeight: "normal",
                        fontStyle: "italic",
                        fontSize: 14,
                        color: "rgba(110, 110, 110,0.8)"
                    }}>
                        {subtitle}
                    </Text>
                </View>
                {/*Contacto */}
                <View style={{
                    flexDirection: "row", marginStart: 10,
                    flexWrap: "wrap", justifyContent: "flex-start",
                    marginBottom: 5,
                }}>
                    <Icon type="MaterialIcons" android="phone" ios="phone" style={{ fontSize: 18, color: 'black', marginRight: 15 }}>
                        <Text style={{ fontSize: 14, marginLeft: 5 }}>+56 {contact.telefono}</Text>
                    </Icon>
                    {/* <Icon type="MaterialCommunityIcons" android="google-maps" ios="google-maps" style={{ fontSize: 18, color: 'black', marginRight: 15 }}>
                                        <Text style={{ fontSize: 14, marginLeft: 5 }}>{contact.direccion}</Text>
                                    </Icon> */}
                    <Icon type="AntDesign" android="inbox" ios="inbox" style={{ fontSize: 18, color: 'black' }}>
                        <Text style={{ fontSize: 14, marginLeft: 5 }}>{contact.email}</Text>
                    </Icon>
                </View>
                {/*Descripción */}
                <View style={{
                    marginTop: 5,
                    marginEnd: 10,
                    marginStart: 10,
                    flex: 1
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        marginBottom: 10
                    }}>
                        Descripción
                                    </Text>
                    <View style={{ marginBottom: 3 }}>
                        <MoreText description={description}>
                        </MoreText>
                    </View>
                </View>
                {/*Social Network  ....... Falta los link */}
                <View style={{
                    marginBottom: 10,
                    marginTop: 3,
                    marginStart: 10
                }}>
                    <View style={{
                        flexDirection: "row",
                        flexWrap: "wrap", justifyContent: "flex-start",
                    }}>
                        <Icon style={{ marginRight: 10 }} type="AntDesign" android="instagram" ios="instagram">
                        </Icon>
                        <Icon type="AntDesign" android="facebook-square" ios="facebook-square">
                        </Icon>
                    </View>

                </View>
                {/*Fotos Carousel*/}
                <View>
                    <Text style={{
                        marginTop: 1, marginEnd: 10, marginStart: 10, flex: 1,
                        fontWeight: "bold", fontSize: 18, marginBottom: 10
                    }}> Imágenes</Text>
                    <MyCarousel dataImagen={imageAnex} ></MyCarousel>
                    <View style={{
                        borderWidth: 1, borderColor: "#99A3A4", height: 1,
                        marginBottom: 20, marginStart: 10, marginEnd: 10
                    }}></View>
                </View>
                {/**Maps */}
                <View style={{
                    marginTop: 1, marginEnd: 10, marginStart: 10,
                    flex: 1, marginBottom: 10
                }}>
                    <Text style={{
                        marginTop: 1, flex: 1,
                        fontWeight: "bold", fontSize: 18, marginBottom: 20
                    }}> Ubicación</Text>

                    <MapView style={{
                        height: 200,
                        width: "100%",
                        flex: 1,
                        marginBottom: 5,
                    }}
                        initialRegion={{
                            latitude: datosGeograficos.x,
                            longitude: datosGeograficos.y,
                            latitudeDelta: 0.0029,
                            longitudeDelta: 0.0029,
                        }}
                    >
                        <Marker coordinate={{
                            latitude: datosGeograficos.x, longitude: datosGeograficos.y
                        }}>
                            <Callout>
                                <Text>Camping Cochrane</Text>
                                {/* <Image style={{height: 40, width: 40}} source={require("../images/atractivos/Tamango2.jpg")}></Image> */}

                            </Callout>

                        </Marker>
                    </MapView>

                </View>
            </View>
            // </View>
        );
    };


    return (
        <Container style={{ backgroundColor: "rgba(27,79,114,1)" }} >
            <ReactNativeParallaxHeader
                headerMinHeight={HEADER_HEIGHT}
                headerMaxHeight={SCREEN_HEIGHT * 0.5}
                extraScrollHeight={20}
                alwaysShowTitle={false}
                alwaysShowNavBar={false}
                navbarColor="rgba(27,79,114,1)"
                // titleStyle={styles.titleStyle}
                // title={nombre}
                // headerTitleStyle={styles.headerText}
                backgroundImage={{ uri: imgConst }}
                backgroundImageScale={1.2}
                renderNavBar={renderNavBar}
                renderContent={renderContent}
                scrollViewStyle={{
                    backgroundColor: "rgba(230, 230, 230,0.6)",
                    marginTop: 0, marginBottom: 0
                }}
            // containerStyle={styles.container}
            // contentContainerStyle={styles.contentContainer}
            // innerContainerStyle={styles.container}
            />

            {/* <TabInferior></TabInferior> */}
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        marginStart: 0, marginEnd: 0, resizeMode: "cover", flex: 1
    },
    contentContainer: {
        flexGrow: 1,
    },
    navContainer: {
        height: HEADER_HEIGHT,
        marginHorizontal: 10,
    },
    statusBar: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor: 'transparent',
    },
    navBar: {
        height: NAV_BAR_HEIGHT,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    titleStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    imagenStyle: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
});

export default VistaUnitariaServicio
