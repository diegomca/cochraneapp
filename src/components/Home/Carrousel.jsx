
import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';

    const imagen = [
        "https://municochrane.cl/wp-content/uploads/2019/07/RDLP-12-1024x682.jpg",
        "https://municochrane.cl/wp-content/uploads/2019/07/Nativoprod.comPH-338-1024x682.jpg",
        "https://municochrane.cl/wp-content/uploads/2019/07/san_carlosmay-7.jpg",
        "https://municochrane.cl/wp-content/uploads/2019/07/el-salto-14-1024x682.jpg",
        "https://municochrane.cl/wp-content/uploads/2019/07/confluencia-2-1024x679.jpg"
    ]

const { width: screenWidth } = Dimensions.get('window');

const Carrousel = props => {
    const [imagenes, setImagenes] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current;
    };

    useEffect(() => {
        setImagenes(imagen);
    }, []);
    

    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                {/* <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                </Text> */}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goForward}>
            </TouchableOpacity>
            <Carousel
                autoplay
                autoplayDelay={4000}
                autoplayInterval={4000}
                loop
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth}
                data={imagenes}
                renderItem={renderItem}
                hasParallaxImages={true}
            />
        </View>
    );
};

export default Carrousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: screenWidth,
        height: screenWidth - 60,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});