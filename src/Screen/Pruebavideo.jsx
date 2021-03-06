import React, { useEffect } from 'react'
import { Video } from 'expo-av';
import { Animated, StyleSheet, Text, View } from 'react-native';
// import { useNavigation  } from '@react-navigation/native';


function Pruebavideo({ navigation}) {

    const opacity = React.useMemo(() => new Animated.Value(0), []);
    // const navigation = useNavigation();

    useEffect(() => {
        
        // navigation.setOptions({ tabBarVisible: false })

    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Animated.View
                    style={[
                        styles.backgroundViewWrapper,
                        { opacity: opacity }
                    ]}
                >
                    <Video
                        isLooping
                        isMuted
                        positionMillis={500}
                        onLoad={() => {
                            // https://facebook.github.io/react-native/docs/animated#timing
                            Animated.timing(opacity, {
                                toValue: 1,
                                useNativeDriver: true,
                            }).start();
                        }}
                        resizeMode="cover"
                        shouldPlay
                        source={{ uri: 'https://coverr.co/9bd6dbeb-01c0-4218-8c92-460d1c91dd94' }}
                        style={{ flex: 1 }}
                    />
                </Animated.View>
            </View>
            <View style={styles.overlay}>
                <Text style={styles.title}>
                    This is where you might put a button or some other text on top of
                    the video
          </Text>
            </View>
        </View>
    );
}

export default Pruebavideo
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black'
    },
    backgroundViewWrapper: {
        ...StyleSheet.absoluteFillObject
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginTop: "auto",
        marginBottom: 80,
        paddingHorizontal: 20,
        textAlign: 'center'
    }
});