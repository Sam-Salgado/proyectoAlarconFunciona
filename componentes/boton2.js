import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function Boton2 (props)
{
    const{texto, onPres} = props
    return(
        <TouchableOpacity style={styles.boton2} onPress={onPres}>
            <Text style={styles.text}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    boton2:{
        backgroundColor:'white',
        paddingVertical: '10',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems:'center',
    },

    text: {
        fontSize:22,
        color:'black',
        textAlign: 'center',
        fontWeight: '600'
    }

});