import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Boton1 } from "../componentes/boton1";
import Calendario from "../componentes/calendario";

const PrincipalUno = ({ navigation }) => {

    const [selected, setSelected] = React.useState('');
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.texto1}>Calendario</Text>
            </View>

            <View>
                <Calendario
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                />

            </View>

            <View>
                <Boton1 style={styles.boton1} texto="ver recetas" onPres={() => navigation.navigate('')} />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        flex: 1,
        paddingTop: 80,
    },
    sec1Home: {
        backgroundColor: '#F7F7F7',
        flex: 0.2,
        alignItems: 'center',
        alignContent: 'center'
    },
    sec2Home: {
        backgroundColor: '#F7F7F7',
        flex: 0.1
    },

    sec3Home: {
        backgroundColor: '#F7F7F7',
        flex: 0.4,
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
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 15,
    },

    // imagenes
    logoPrincipal: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },

})


export default PrincipalUno;