import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { Boton1 } from "../componentes/boton1";

const Inicio = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <View style={styles.sec2Home}></View>
                <View style={styles.imgHome}>
                    <Image
                        style={styles.logoPrincipal}
                        source={require('../assets/logoHome.png')}
                    />
                </View>
            <View style={styles.sec3Home}></View>

            <View style={styles.sec1Home}>
                <Boton1 style = {styles.boton1} texto="crear cuenta" onPres={() => navigation.navigate('Create')}/>
                <Boton1 style = {styles.boton1} texto="iniciar sesión" onPres={() => navigation.navigate('Login')}/>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        flex: 1,
        paddingTop: 1,
    },
    sec1Home: {
        backgroundColor: '#F7F7F7',
        // flex: 0.1,
        alignItems:'center',
        alignContent:'center',
        marginTop:10,
    },
    sec2Home: {
        backgroundColor: '#F7F7F7',
        flex: 0.1
    },

    sec3Home: {
        backgroundColor: '#F7F7F7',
        flex: 0.1,
    },

    imgHome: {
        backgroundColor: '#F7F7F7',
        flex: 0.3,
        alignItems: 'center',
        justifycontent: 'center',
    },

    //textos

    texto: {
        backgroundColor: '#93BEDB',
        textAlign: 'center',
    },

    texto1: {
        fontSize:22,
        color:'black',
        textAlign: 'center',
        fontWeight: '600',
        marginTop:10,
    },

    // imagenes
    logoPrincipal: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        },

    })


export default Inicio;