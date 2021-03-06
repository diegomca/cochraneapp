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

const { width: screenWidth } = Dimensions.get('window');

function ImagenesAnexasServicios({dataImagen}) {

    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    useEffect(() => {
        setEntries(dataImagen);
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
                ref={carouselRef}
                sliderWidth={screenWidth * 0.85}
                sliderHeight={screenWidth}
                itemWidth={(screenWidth - 60)}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
            />

        </View>
    );
};

export default ImagenesAnexasServicios;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        marginBottom:15
    },
    item: {
        width: screenWidth - 60,
        height: (screenWidth - 60) * 0.5,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});
