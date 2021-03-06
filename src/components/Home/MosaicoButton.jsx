import React from 'react'
import { View } from 'native-base'
import { StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

function MosaicoButton() {
    return (

        <Grid style={{ height: 230, backgroundColor: "rgba(255,255,255,1)", margin:10}}>
            <Col  style={{ marginRight: 5 }}>
                <View style={styles.pequeno}></View>
                <View style={styles.grande}></View>
            </Col>
            <Col style={{ marginRight: 5, marginLeft: 5 }}>
                <View style={styles.grande}></View>
                <View style={styles.pequeno}></View>
            </Col>
            <Col style={{ marginLeft: 5}}>
                <View style={styles.pequeno}></View>
                <View style={styles.grande}></View>
            </Col>
        </Grid>

    )
}

const styles = StyleSheet.create({
    pequeno: {
        backgroundColor: "rgba(46,55,70,1)",
        borderRadius: 35,
        height: 90,
        margin: 5
    },
    grande: {
        backgroundColor: "rgba(61,63,128,1)",
        borderRadius: 35,
        height: 120,
        margin: 5
    },
});



export default MosaicoButton
