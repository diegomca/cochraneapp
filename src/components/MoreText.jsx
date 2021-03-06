import React from 'react'
import { View, Text } from 'native-base'
import ReadMore from 'react-native-read-more-text'

function MoreText({ description }) {

    const handleTextReady = () => { }
    const renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: "#154360", marginTop: 8, textAlign: "right" }} onPress={handlePress}>
                Ver más
            </Text>
        );
    }
    const renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: "#922B21", marginTop: 5, textAlign: "right" }} onPress={handlePress}>
                Cerrar
            </Text>
        );
    }

    return (
        <View style={{
        }}>
            <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}
                onReady={e => handleTextReady()}>
                <Text style={{ marginBottom: 6, textAlign:"justify", fontSize: 14 }} >
                    {description}
                </Text>
            </ReadMore>
            <View style={{
                borderWidth: 1,
                borderColor: "#99A3A4",
                height: 1,
                width: "100%",
                marginTop: 5,
                marginBottom: 10
            }}></View>
        </View>

    )
}

export default MoreText
