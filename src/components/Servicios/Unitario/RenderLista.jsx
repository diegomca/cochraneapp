import React, { useEffect, useState } from 'react'
import { View, Content, Left, Image, List, ListItem, Thumbnail, Body, Text, Right, Button } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

const dataService = [
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
    { nombre: "Camping Cochrane", descripcion: "Empresa familiar, que ofrece camping y hospedaje en el centro de la comuna de Cochrane", img: "https://instagram.fscl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83895611_190503515343482_2007130287868758540_n.jpg?tp=1&_nc_ht=instagram.fscl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=t1zuZdw2oSoAX-KaPoi&oh=7a52f9f91f0e114e50bba846fdda85a0&oe=606B2932", contacto: { telefono: "966999274", email: "campingcochrane@gmail.com" } },
]



function RenderLista({servicio}) {

    const [listaServicios, setlistaServicios] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        setlistaServicios(dataService);
    }, [])

    return (
        <View style={{
            marginBottom: 20,
        }}>
            <List style={{ backgroundColor: "000" }}>
                {
                    listaServicios.map((dato, index) => {
                        return (
                            <ListItem key={index} thumbnail onPress={() => navigation.navigate('UnitarioService', {
                                servicio: servicio,
                                nombre: dato.nombre
                            })}>
                                <Left>
                                    <Thumbnail large square source={{ uri: dato.img }} />
                                </Left>
                                <Body style={{
                                    marginEnd: 20
                                }}>
                                    <Text>{dato.nombre}</Text>
                                    <Text style={{
                                        color: "#566573",
                                        fontSize: 13, marginTop: 5
                                    }} >{dato.descripcion}
                                    </Text>
                                    <View style={{
                                        flexDirection: "row",
                                        flexWrap: "wrap", justifyContent: "flex-start",
                                    }}>
                                        <Icon name="phone" style={{ fontSize: 18, color: 'black' }}>
                                            <Text style={{
                                                fontSize: 12
                                            }} > +56 {dato.contacto.telefono}</Text>
                                        </Icon>
                                        <Icon name="mail" style={{ fontSize: 18, color: 'black' }}>
                                            <Text style={{
                                                fontSize: 12
                                            }} > {dato.contacto.email}</Text>
                                        </Icon>
                                    </View>
                                </Body>
                            </ListItem>
                        )
                    })
                }
            </List>
        </View>
    )
}

export default RenderLista
