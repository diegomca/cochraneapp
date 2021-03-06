import React from 'react'
import { Container, View, Fab, Icon, Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Calluqueo from '../components/AtractivosTuristicos/Calluqueo'
import ConfluenciasBaker from '../components/AtractivosTuristicos/ConfluenciasBaker'
import ElSalto from '../components/AtractivosTuristicos/ElSalto'
import LagoBrown from '../components/AtractivosTuristicos/LagoBrown'
import LagoCochrane from '../components/AtractivosTuristicos/LagoCochrane'
import Losnadis from '../components/AtractivosTuristicos/Losnadis'
import ParqueNacionalTamango from '../components/AtractivosTuristicos/ParqueNacionalTamango'
import SanLorenzo from '../components/AtractivosTuristicos/SanLorenzo'
import Parquepatagonia from '../components/AtractivosTuristicos/Parquepatagonia'
import { useState } from 'react'
import { ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function AtractivosTuristicos() {

    const [ubicacion, setubicacion] = useState(false)
    const { height: SCREEN_HEIGHT } = Dimensions.get('window');
    const navigation = useNavigation();


    return (
        <Container style={{ backgroundColor: "rgba(27,79,114,1)" }} >
            <ScrollView
                horizontal={false}
                style={{
                    backgroundColor: "rgba(255,255,255,1)"
                }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <Grid style={{ backgroundColor: "rgba(255,255,255,1)", marginEnd: 10, marginStart: 10, marginTop: 5 }}>
                    <Row>
                        <Col style={{ margin: 5 }}>
                            <SanLorenzo></SanLorenzo>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ margin: 5 }}>
                            <View style={{ marginBottom: 10 }}>
                                <ConfluenciasBaker></ConfluenciasBaker>
                            </View>
                            <ElSalto></ElSalto>
                        </Col>
                        <Col style={{ margin: 5 }}>
                            <View style={{ marginBottom: 10 }}>
                                <Parquepatagonia></Parquepatagonia>
                            </View>
                            <ParqueNacionalTamango></ParqueNacionalTamango>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ margin: 5, marginTop: 5 }}>
                            <Calluqueo></Calluqueo>
                        </Col>
                    </Row >
                    <Row style={{
                        marginTop: 5,
                        marginBottom: 5
                    }}>
                        <Col style={{marginRight: 10}}>
                            <LagoBrown></LagoBrown>
                        </Col>
                        <Col>
                            <LagoCochrane></LagoCochrane>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ margin: 5, marginTop: 5, marginBottom: 10 }}>
                            <Losnadis></Losnadis>
                        </Col>
                    </Row >
                </Grid>
            </ScrollView>
            <Fab

                active={ubicacion}
                direction="up"
                containerStyle={{ marginEnd: -15 }}
                style={{ backgroundColor: '#5067FF', marginBottom: 0 }}
                position="bottomRight"
                onPress={() => setubicacion(!ubicacion)}
            >
                <Icon type="EvilIcons" name="plus" />
                <Button style={{ backgroundColor: '#000', marginBottom: 0 }} onPress={() => navigation.navigate('MapaAtractivos')}>
                    <Icon type="EvilIcons" name="location"  />
                </Button>
            </Fab>
        </Container>
    )
}

export default AtractivosTuristicos