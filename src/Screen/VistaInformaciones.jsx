import React, { useEffect } from 'react'
import { Container, View, Icon, Text } from 'native-base'
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet, Image } from 'react-native';
import Markdown from 'react-native-markdown-display';


const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT > 810 ? true : false;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

function VistaInformaciones({ route, navigation }) {

    const { nameSreen } = route.params;
    const texto = "La comuna de Cochrane está ubicada a 331 kilómetros al sur de la ciudad de Coyhaique, está situada entre los 47o y 47o 45′ de latitud sur y los 71o 50′ y 73o 45′ de longitud oeste. Sus límites son por el norte la comuna de Chile Chico, al este la República Argentina, al oeste Campo de Hielo Norte, perteneciente a la comuna de Tortel, y al sur la comuna de O’Higgins. Cochrane es la comuna capital de la Provincia de Capitán Prat o Provincia de los Glaciares, integrada por las comunas de Tortel y Villa O´Higgins. Su mayor potencial es ser la puerta de acceso a los Campos de Hielo, siendo el principal centro urbano de la provincia contando con todos los servicios basicos para la gran cantidad de visitantes que llegan a la zona sur de la Región de Aysen. El visitante puede encontrar, en esta la principal ciudad del sur de la región de Aysén, alojamiento, comercio, servicio de comidas, transporte de pasajeros, campings, servicio de telefonía e internet, además de servicios bancarios, museo, centro cultural, mercado municipal, actividades culturales y fiestas costumbristas.\n"
    const texto2 = "\nDesde el punto de vista turístico, destacan como sus principales atractivos el gran y caudaloso Río Baker junto al transparente rio Cochrane. Destacan tambien los lagos Cochrane, lago Brown, Lago Esmeralda y lago Vargas. Los glaciares Calluqueo y Neff. Destaca tambien el impresionante Monte San Lorenzo, la segunda cima más alta de los Andes Patagonicos Australes. Y por supuesto la calidez de sus habitantes, Pioneros que habitan en los distintos y hermosos sectores rurales de esta comuna: Los Ñadis, Lago Vargas, San Lorenzo, Lago Brown, El Maiten, El Neff, Colonia Norte, Colonia Sur y sector Tres Lagos, entre otros. Esta orgullosa Tierra de Pioneros, generosa en ríos, glaciares y montañas, los invita a recorrer sus distintos atractivos, al sur de la Carretera Austral."

    const copy = `# Heading 8-)
 
**This is some bold text!**
 
This is normal textThis is normal textThis is normal textThis is normal textThis is normal textThis is normal textThis is normal textThis is normal textThis is normal textThis is normal textThis is normal text salto


  ![Minion](https://octodex.github.com/images/minion.png)
  ![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
  
  asdasdsad

  ![CochraneDrone](https://municochrane.cl/wp-content/uploads/2019/03/DJI_0068.jpg)

  Like links, Images also have a footnote style syntax

  ![Alt text][id]

  With a reference later in the document defining the URL location:

  [id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
`;

    const url = "http://photos.wikimapia.org/p/00/05/75/40/71_1280.jpg"

    const contenidoScroll = () => {
        return (
            <View style={{
                marginEnd: 12, marginStart: 12, marginTop: 12,
                marginBottom: 10, backgroundColor: "rgba(255,255,255,1)",
                borderRadius: 15,
                borderColor: "rgba(0,0,0,0.2)",
                borderWidth: 1,
            }}>
                <View style={{
                    textAlign: "justify",
                    fontSize: 18,
                    color: "black",
                    margin: 15
                }}>
                    <Markdown
                    // style={{
                    //     body: { color: 'black', fontSize: 12 },
                    //     heading1: { color: 'black' },
                    //     code_block: { color: 'black', fontSize: 14 }
                    // }}
                    >
                        {copy}
                    </Markdown>
                </View>

            </View>
        )
    }

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
                    position: "relative",
                    flex: 1
                }}>
                    <Text style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginTop: "auto",
                        marginBottom: "auto"
                    }}>{nameSreen}</Text>
                </View>
            </View>
        </View>
    );



    return (
        <Container style={{ backgroundColor: "rgba(27,79,114,1)" }} >
            <ReactNativeParallaxHeader
                headerMinHeight={HEADER_HEIGHT}
                headerMaxHeight={SCREEN_HEIGHT * 0.5}
                extraScrollHeight={20}
                alwaysShowTitle={false}
                alwaysShowNavBar={false}
                navbarColor="rgba(27,79,114,1)"
                backgroundImage={{ uri: url }}
                backgroundImageScale={1.2}
                renderNavBar={renderNavBar}
                renderContent={contenidoScroll}
                backgroundImageStyle={styles.imagenStyle}
                scrollViewStyle={{
                    backgroundColor: "rgba(230, 230, 230,0.6)",
                    marginTop: 0, marginBottom: 0
                }}
            />
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
        borderBottomRightRadius: 30
    }
});

export default VistaInformaciones
