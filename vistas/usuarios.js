import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import MyComponent from "../componentes/input";
import { Boton1 } from "../componentes/boton1";

const Usuarios = ({ navigation }) => {

    const [userID, setUserID] = useState(null);

    useEffect(() => {
        const obtenerUserID = async () => {
            try {
                const userIDGuardado = await AsyncStorage.getItem('userID');
                if (userIDGuardado !== null) {
                    setUserID(userIDGuardado);
                    console.log(userID)
                }
            } catch (error) {
                console.error('Error al obtener el ID del usuario:', error);
            }
        };

        obtenerUserID();
    }, []);

    // try {

    //     const [nombre, setNombre] = useState("")
    //     const [apellido, setApellido] = useState("")
    //     const [dni, setDni] = useState("")

    //     const [userData, setUserData] = useState({
    //         ID: null,
    //         nombre: nombre,
    //         apellido: apellido,
    //         dni: dni,
    //         gmail: email,
    //         contrasena: "",
    //     });

    // }
    // catch (error) {
    //     console.error("Error en la solicitud:", error);
    // }

    return (
        <View style={styles.container}>
            <View style={styles.sec1}>

                <View style={styles.textos}>
                    <Text style={styles.texto2}>Usuarios: </Text>
                    <Text style={styles.texto1}>Gmail: </Text>

                </View>

                <View style={styles.imagen}>
                    <Image
                        style={styles.logoPrincipal}
                        source={require('../assets/logoPerfil.png')}
                    />
                </View>
            </View>

            <View style={styles.sec2}>

                <ScrollView>
                    <View style={styles.sec3Create}>
                        <MyComponent texto='Nombre/s' tipo='default' icono='account'></MyComponent>
                        <MyComponent texto='Apellido/s' tipo='default' icono='account'></MyComponent>
                        <MyComponent texto='DNI' tipo='default' icono='account'></MyComponent>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.sec4Create}>
                <Boton1 style={styles.boton1} texto="Cerrar Sesión" onPres={() => 
                console.log(userID)} />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        flex: 1,
        paddingTop: 10,
    },
    sec1: {
        backgroundColor: '#F7F7F7',
        flex: 0.2,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
    },

    sec2: {
        backgroundColor: '#F7F7F7',
        flex: 0.8,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
    },
    sec3Create: {
        paddingTop: 50,
        gap: 20,
        backgroundColor: '#709E87',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        height: 400,
    },
    sec4Create: {
        marginBottom: 20,
    },
    imagen: {
        backgroundColor: '#F7F7F7',
        flex: 1
    },

    //textos

    texto1: {
        textAlign: 'left',
        color: 'black',
        width: 250,
    },

    texto2: {
        fontSize: 22,
        color: 'black',
        textAlign: 'left',
        fontWeight: '600',
        marginTop: 15,
    },

    textos: {
        backgroundColor: '#F7F7F7',
    },

    // imagenes
    logoPrincipal: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        // alignItems: 'flex-start',
        // alignContent:'flex-end',
    },

})


export default Usuarios;