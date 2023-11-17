import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function Boton3 (props)
{
    const{texto, onPres} = props
    return(
        <TouchableOpacity style={styles.boton3} onPress={onPres}>
            <Text style={styles.text}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    boton3:{
        backgroundColor:'white',
        paddingVertical: '100',
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