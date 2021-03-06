import React, { useState, useEffect } from 'react'
import { Container, Fab, Icon, Button } from 'native-base'
import { ScrollView, ImageBackground, Dimensions } from 'react-native'
import RenderLista from '../components/Servicios/Unitario/RenderLista'



// const { height: SCREEN_HEIGHT } = Dimensions.get('window');


function ListaServicios({route, navigation}) {
    
    const [ubicacion, setubicacion] = useState(false)
    const { nameService } = route.params;


    useEffect(() => {
        navigation.setOptions({ title: nameService});
    }, [])

    return (
        <Container style={{ backgroundColor: "rgba(27,79,114,1)" }} >
            <ImageBackground style={{
                backgroundColor: "white", flex: 1,
                resizeMode: "cover"
            }}>
                <ScrollView horizontal={false}
                    style={{
                        backgroundColor: "rgba(255, 255, 255,1)"
                    }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <RenderLista servicio={nameService}></RenderLista>
                </ScrollView>
            </ImageBackground>
            <Fab
                active={ubicacion}
                direction="up"
                containerStyle={{marginEnd: -15}}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => setubicacion(!ubicacion)}
            >
                <Icon type="EvilIcons" name="location" />
                <Button disabled style={{ backgroundColor: '#DD5144'}}>
                    <Icon type="EvilIcons" name="location" />
                </Button>
            </Fab>
        </Container>
    )
}

export default ListaServicios
