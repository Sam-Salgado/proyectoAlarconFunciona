import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from "./vistas/home";
import Login from "./vistas/login";
import Create from "./vistas/create";
import CreateDos from "./vistas/createDos";
import Inicio from "./vistas/inicio";
import PrincipalUno from "./vistas/principalUno";
import Doctores from "./vistas/doctores";
import Usuarios from "./vistas/usuarios";
// import Config from "./vistas/config";


const Tabs = createBottomTabNavigator();


const TabNav = () => {
  return (
    <Tabs.Navigator activeColor='black' barStyle={{ backgroundColor: 'red' }}>
      <Tabs.Screen name="principal" component={PrincipalUno}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen name="doctores" component={Doctores}
        options={{
          tabBarLabel: 'Profesionales',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-child-outline" color={color} size={26} />
          ),
        }} />
      <Tabs.Screen name="usuario" component={Usuarios}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} />
    </Tabs.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="Create" options={{ headerShown: false }} component={Create} />
      <Stack.Screen name="CreateDos" options={{ headerShown: false }} component={CreateDos} />
      <Stack.Screen name="TabNav" options={{ headerShown: false }} component={TabNav} />
      <Stack.Screen name="Inicio" options={{ headerShown: false }} component={Inicio} />
    </Stack.Navigator>
  );
};


export default function App() {


  return (
    <NavigationContainer>
      <StatusBar />
      <StackNav />
    </NavigationContainer>
  );
}
