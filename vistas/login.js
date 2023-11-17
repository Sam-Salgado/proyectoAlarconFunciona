import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Boton2 } from "../componentes/boton2";
import MyComponent from "../componentes/input";

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [contrasena, setContrasena] = useState("")

    const handLeLogin = async (email, contrasena) => {

        try {
            const api = 'http://192.168.3.216:8000'
            const response = await fetch(`${api}/paciente/login`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                body: `nombre=${encodeURIComponent(email)}&contrasena=${encodeURIComponent(contrasena)}`,

            });

            const responseData = await response.json();

            if (responseData.nombre === email) { //se inicio la session 
                await AsyncStorage.setItem('userID', responseData.ID.toString());
                navigation.navigate("TabNav");
            } else {
                console.log("Usuario o contraseña incorrecto");
            }

            console.log(responseData);

        }

        catch (error) {
            console.error("Error en la solicitud:", error);
        }

    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.sec2Login}>
                    <Text style={styles.texto1}>Iniciar Sesión</Text>
                </View>

                <View style={styles.imgLogin}>
                    <Image
                        style={styles.fotoLogin}
                        source={require('../assets/undraw_Sign_up_n6im.png')}
                    />
                </View>

                <View style={styles.sec2Login}></View>

                <View style={styles.sec3Login}>
                    <MyComponent texto='Gmail' tipo='email-address' icono='mail' datos={setEmail}></MyComponent>
                    <MyComponent texto='contraseña' tipo='default' icono='eye' datos={setContrasena}></MyComponent>
                </View>

                <View style={styles.sec3Login1}>

                    <Boton2 style={styles.boton2} texto="Iniciar Sesión" onPres={() => {
                        if (email === "" || contrasena === "") {
                            console.log("if")
                        } else {
                            handLeLogin(email, contrasena)
                        }
                    }} />
                    <Boton2 style={styles.boton2} texto="volver" onPres={() => navigation.navigate('Home')} />
                </View>

            </ScrollView>

        </View>
    );
};


// estilos

const styles = StyleSheet.create({
    container: {
        paddingTop: 39,
        backgroundColor: 'white',
        flex: 1,
    },

    sec1Login: {
        backgroundColor: '#F7F7F7',
        flex: 0.1,
        alignItems: 'center',
        alignContent: 'center'
    },
    sec2Login: {
        backgroundColor: 'white',
        flex: 0.15,
    },

    sec3Login: {
        paddingTop: 20,
        gap: 10,
        backgroundColor: '#ADD1E0',
        flex: 0.1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 280,
    },

    sec3Login1: {
        paddingTop: 50,
        gap: 15,
        backgroundColor: '#ADD1E0',
        flex: 0.1,
        height: 190,
    },


    //texto
    texto1: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 15,
    },


    // imagenes
    imgLogin: {
        backgroundColor: 'white',
        flex: 0.3,
        alignItems: 'center',
        justifycontent: 'center',
    },

    fotoLogin: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
})

export default Login;