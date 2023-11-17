import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Boton4 } from "../componentes/boton4";
import { Boton3 } from "../componentes/boton3";
import MyComponent from "../componentes/input";

const CreateDos = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [contrasena, setContrasena] = useState("")

    const handleSingup = async (email, contrasena) => {

        try {
            const api = 'http://192.168.3.216:8000'
            const response = await fetch(`${api}/paciente/registrar`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ 
                    gmail: email,
                    contrasena: contrasena,
                    nombre: "sin datos",
                    apellido: "sin datos",
                    dni: "00000000"
                }),
                // `gmail=${encodeURIComponent(email)}&contrasena=${encodeURIComponent(contrasena)}&apellido=${encodeURIComponent("asd")}&dni=${encodeURIComponent("123")}`,

            });

            const responseData = await response.json();

            if (responseData.gmail === email) {
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
                <View style={styles.sec2Create}>
                    <Text style={styles.texto1}>Unos pasos más y ya tenes tu cuenta!</Text>
                </View>

                <View style={styles.imgCreate}>
                    <Image
                        style={styles.fotoCreate}
                        source={require('../assets/undraw_Mobile_search_jxq5.png')}
                    />
                </View>

                <View style={styles.sec2Create}></View>

                <View style={styles.sec3Create}>
                    <MyComponent texto='Gmail' tipo='email-address' icono='mail' datos={setEmail}></MyComponent>
                    <MyComponent texto='Contraseña' tipo='default' icono='account' datos={setContrasena}></MyComponent>
                </View>

                <View style={styles.sec3Create1}>
                    {/* navigation.navigate('Login')} */}
                    <Boton3 style={styles.boton3} texto="crear cuenta" onPres={() => {
                        if (
                            email.trim().length !== 0 &&
                            contrasena.trim().length !== 0
                        ) {
                            handleSingup(email, contrasena);
                        } else {
                            console.log("error")
                            // setErrorMessage("Completar los datos");
                        }
                    }} />
                </View>

                <View style={styles.sec3Create2}>
                    <Boton4 style={styles.boton4} texto="volver a la pagina inicial" onPres={() => navigation.navigate('Home')} />
                </View>

            </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 72,
    },

    sec1Create: {
        backgroundColor: '#F7F7F7',
        flex: 0.1,
        alignItems: 'center',
        alignContent: 'center'
    },
    sec2Create: {
        backgroundColor: 'white',
        flex: 0.15,
    },

    sec3Create: {
        paddingTop: 40,
        backgroundColor: '#ADD1E0',
        flex: 0.1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 300,
    },

    sec3Create1: {
        alignItems: 'center',
        backgroundColor: '#ADD1E0',
        flex: 0.2,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        height: 50,
    },

    sec3Create2: {
        paddingTop: 20,
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
    imgCreate: {
        backgroundColor: 'white',
        flex: 0.3,
        alignItems: 'center',
        justifycontent: 'center',
    },

    fotoCreate: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
})

export default CreateDos;