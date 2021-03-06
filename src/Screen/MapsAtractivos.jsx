import React from 'react'
import { Container  } from 'native-base'
import { ScrollView } from 'react-native'
import MapaAtractivosTuristicos from '../components/Maps/MapaAtractivos'

function MapsAtractivos() {
    return (
        <Container style={{ backgroundColor: "rgba(27,79,114,1)" }} >
            <ScrollView style={{
            }}>
                <MapaAtractivosTuristicos></MapaAtractivosTuristicos>
            </ScrollView>
        </Container>
    )
}

export default MapsAtractivos
