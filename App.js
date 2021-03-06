import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { Footer, FooterTab, Button, Icon, Container, View, Text } from 'native-base'
import Home from './src/Screen/Home';
import AtractivosTuristicos from './src/Screen/AtractivosTuristicos';
import ServiciosComunales from './src/Screen/ServiciosComunales';
import MapsAtractivos from './src/Screen/MapsAtractivos';
import ListaServicios from './src/Screen/ListaServicios';
import VistaUnitariaServicio from './src/Screen/VistaUnitariaServicio';
import VistaInformaciones from './src/Screen/VistaInformaciones';
import Pruebavideo from './src/Screen/Pruebavideo';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    const Tab = createBottomTabNavigator();
    const HomeStack = createStackNavigator();
    const AtractivoStack = createStackNavigator();
    const ServiciosStack = createStackNavigator();

    const BottomNavigation = ({ state, descriptors, navigation }) => {
      return (
        <Footer style={{ height: 50, backgroundColor: "rgba(27,79,114,1)", borderColor: "rgba(27,79,114,1)" }}>
          <FooterTab style={{ backgroundColor: "rgba(27,79,114,1)" }}>
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                    ? options.title
                    : route.name;

              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };

              return (
                <Button
                  active={isFocused}
                  vertical
                  style={
                    !isFocused ?
                      { backgroundColor: "rgba(27,79,114,1)" }
                      :
                      { backgroundColor: "#3A648F" }
                  }
                  onPress={onPress}
                  onLongPress={onLongPress}
                  key={index}>
                  <Icon style={{ color: 'white' }} name={options.icon} />
                </Button>
              );
            })}
          </FooterTab>
        </Footer>
      );
    };

    const createHomeStack = ({navigation}) => {
      navigation.setOptions({ tabBarVisible: false })
      return (
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={Home}
            options={{ headerMode: 'none', headerShown: false }}
          />
          <HomeStack.Screen name="historia" component={VistaInformaciones}
            options={{ headerMode: 'none', headerShown: false }}
          />
          <HomeStack.Screen name="actividadesComunales" component={VistaInformaciones}
            options={{ headerMode: 'none', headerShown: false }}
          />
          <HomeStack.Screen name="pruebaslash" component={Pruebavideo}
            options={{ headerMode: 'none', headerShown: false }}
          />
        </HomeStack.Navigator>
      )
    }

    const createAtractivosStack = () => {
      return (
        <AtractivoStack.Navigator>
          <AtractivoStack.Screen name="Atractivo" component={AtractivosTuristicos}
            options={{
              title: "Atractivos Turisticos", headerStyle: {
                backgroundColor: "rgba(27,79,114,1)"
              }, headerTitleStyle: {
                color: "white"
              }
            }} />
          <AtractivoStack.Screen name="MapaAtractivos" component={MapsAtractivos}
            options={{
              title: "Atractivos Turisticos", headerStyle: {
                backgroundColor: "rgba(27,79,114,1)"
              }, headerTitleStyle: {
                color: "white"
              },
              headerBackTitleStyle: {
                color: "white"
              }, headerTintColor: "white"
            }}
          />
        </AtractivoStack.Navigator>
      )
    }

    const createServiciosStack = () => {
      return (
        <ServiciosStack.Navigator>
          <ServiciosStack.Screen name="Servicios" component={ServiciosComunales}
            options={{
              title: "Servicios", headerStyle: {
                backgroundColor: "rgba(27,79,114,1)"
              }, headerTitleStyle: {
                color: "white"
              },
              headerBackTitleStyle: {
                color: "white"
              }, headerTintColor: "white"
            }}
          />
          <ServiciosStack.Screen name="ListaServicios" component={ListaServicios}
            options={{
              title: "agregar nombres",
              headerStyle: {
                backgroundColor: "rgba(27,79,114,1)"
              }, headerTitleStyle: {
                color: "white"
              },
              headerBackTitleStyle: {
                color: "white"
              }
            }}
          />
          <ServiciosStack.Screen name="UnitarioService" component={VistaUnitariaServicio}
            options={{ headerMode: 'none', headerShown: false }}
          />
        </ServiciosStack.Navigator>
      )
    }

    return (
      <Container>
        <NavigationContainer>
          <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>

            <Tab.Screen name="Home" component={createHomeStack} options={{
              icon: 'home'
            }} />
            <Tab.Screen name="Atractivos Turisticos" component={createAtractivosStack} options={{
              icon: 'navigate'
            }} />
            <Tab.Screen name="Servicios" component={createServiciosStack} options={{
              icon: 'walk'
            }} />
          </Tab.Navigator>
        </NavigationContainer>
      </Container>);
  }
}

