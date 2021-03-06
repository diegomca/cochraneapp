import React from 'react';
import { Container, Text, View, Button } from 'native-base';
// import Carrousel from '../components/Home/Carrousel';
import {
    StyleSheet, ScrollView, Dimensions, StatusBar
} from 'react-native';
import CardCiudad from "../components/Home/CardCiudad";
import ActividadesComunalesScroll from '../components/Home/ActividadesComunalesScroll';
import Seccion3 from '../components/Home/Seccion3';
import MosaicoButton from '../components/Home/MosaicoButton';
import FooterInfo from '../components/Home/FooterInfo';
import ReactNativeParallaxHeader from "../components/Home/Topheader"
import { useNavigation } from '@react-navigation/native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const IS_IPHONE_X = SCREEN_HEIGHT > 810 ? true : false;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;


function Home() {

    const navigation = useNavigation();

    const renderContent = () => {
        return (
            <ScrollView
                horizontal={false}
                style={{
                    backgroundColor: "rgba(255,255,255,1)"
                }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.cardHistoriaCiudad1}>
                    <Text style={styles.historiaCochraneText1}>Historia</Text>
                    <CardCiudad style={styles.cardCiudad1} navigation={navigation} ></CardCiudad>
                </View>
                <View style={{
                    marginLeft: 5
                }}>
                    <ActividadesComunalesScroll></ActividadesComunalesScroll>
                </View>
                <View style={{
                    marginLeft: 3,
                    marginRight: 3
                }}>
                    <Seccion3></Seccion3>
                </View>
                <View style={{
                    marginLeft: 3,
                    marginRight: 3
                }}>
                    <MosaicoButton></MosaicoButton>
                    <FooterInfo></FooterInfo>
                </View>

            </ScrollView>
        );
    };

    return (
        <Container style={{ 
            backgroundColor: "rgba(27,79,114,1)"
         }} >
            <StatusBar />
            <ReactNativeParallaxHeader
                // extraScrollHeight={30}
                // headerMinHeight={HEADER_HEIGHT}
                headerMinHeight={88}
                navbarColor="rgba(27,79,114,1)"
                backgroundImage={require('../images/splash.png')}
                backgroundImageScale={1.3}
                renderContent={renderContent}
                alwaysShowNavBar={false}
                alwaysShowTitle={false}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    cardHistoriaCiudad1: {
        height: 170,
        backgroundColor: "rgba(255,255,255,0)"
    },
    historiaCochraneText1: {
        color: "#121212",
        fontSize: 18,
        marginTop: 8,
        marginLeft: 12,
        marginRight: 12
    },
    cardCiudad1: {
        height: 115,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 9
    },
})


export default Home;