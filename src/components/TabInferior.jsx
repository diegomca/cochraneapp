// import React, { useState } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Footer, FooterTab, Button, Icon, Text, Container } from 'native-base'
// import Home from '../Screen/Home';
// import AtractivosTuristicos from '../Screen/AtractivosTuristicos';
// import ServiciosComunales from '../Screen/ServiciosComunales';


// function TabInferior() {

//     const Tab = createBottomTabNavigator();

//     const BottomNavigation = ({ state, descriptors, navigation }) => {
//         return (
//             <Footer style={{ height: 50, backgroundColor: "rgba(27,79,114,1)", borderColor: "rgba(27,79,114,1)" }}>
//                 <FooterTab style={{ backgroundColor: "rgba(27,79,114,1)" }}>
//                     {state.routes.map((route, index) => {
//                         const { options } = descriptors[route.key];
//                         const label =
//                             options.tabBarLabel !== undefined
//                                 ? options.tabBarLabel
//                                 : options.title !== undefined
//                                     ? options.title
//                                     : route.name;

//                         const isFocused = state.index === index;

//                         const onPress = () => {
//                             const event = navigation.emit({
//                                 type: 'tabPress',
//                                 target: route.key,
//                             });

//                             if (!isFocused && !event.defaultPrevented) {
//                                 navigation.navigate(route.name);
//                             }
//                         };

//                         const onLongPress = () => {
//                             navigation.emit({
//                                 type: 'tabLongPress',
//                                 target: route.key,
//                             });
//                         };

//                         return (
//                             <Button
//                                 active={isFocused}
//                                 vertical
//                                 style={
//                                     !isFocused ?
//                                         { backgroundColor: "rgba(27,79,114,1)" }
//                                         :
//                                         { backgroundColor: "#3A648F" }
//                                 }
//                                 onPress={onPress}
//                                 onLongPress={onLongPress}
//                                 key={index}>
//                                 <Icon style={{ color: 'white' }} name={options.icon} />
//                             </Button>
//                         );
//                     })}
//                 </FooterTab>
//             </Footer>
//         );
//     };
    

//     return (
//         <Container>
//             <NavigationContainer>
//                 <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
//                     <Tab.Screen name="Home" component={Home} options={{
//                         icon: 'home'
//                     }} />
//                 <Tab.Screen name="Atractivos Turisticos" component={AtractivosTuristicos} options={{
//                         icon: 'navigate'
//                     }} />
//                 <Tab.Screen name="Servicios" component={ServiciosComunales} options={{
//                         icon: 'walk'
//                     }} />
//                 </Tab.Navigator>
//             </NavigationContainer>
//         </Container>
//     )
// }

// export default TabInferior
