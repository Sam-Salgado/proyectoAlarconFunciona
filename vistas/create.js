import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Boton3 } from "../componentes/boton3";
import { Boton4 } from "../componentes/boton4";
import MyComponent from "../componentes/input";

const Create = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.sec2Create}>
                    <Text style={styles.texto1}>Crea tu cuenta!!</Text>
                </View>

                <View style={styles.imgCreate}>
                    <Image
                        style={styles.fotoCreate}
                        source={require('../assets/undraw_Mobile_search_jxq5.png')}
                    />
                </View>

                <View style={styles.sec2Create}></View>

                <View style={styles.sec3Create}>
                    <MyComponent texto='Nombre/s' tipo='default' icono='account'></MyComponent>
                    <MyComponent texto='Apellido/s' tipo='default' icono='account'></MyComponent>
                    <MyComponent texto='DNI' tipo='default' icono='account'></MyComponent>
                </View>

                <View style={styles.sec3Create1}>
                    <Boton3 style={styles.boton3} texto="Siguiente" onPres={() => navigation.navigate('CreateDos')} />
                </View>

                <View style={styles.sec3Create2}>
                    <Boton4 style={styles.boton4} texto="volver al inicio" onPres={() => navigation.navigate('Home')} />
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
        paddingTop: 50,
        gap: 20,
        backgroundColor: '#ADD1E0',
        flex: 0.1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 400,
    },

    sec3Create1: {
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#ADD1E0',
        flex: 0.4,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        height: 60,
    },

    sec3Create2: {
        paddingTop: 50,
        backgroundColor: 'white',
        flex: 0.4,
        height: 100,
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

export default Create;