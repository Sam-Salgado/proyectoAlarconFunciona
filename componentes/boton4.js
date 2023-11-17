import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function Boton4 (props)
{
    const{texto, onPres} = props
    return(
        <TouchableOpacity style={styles.boton4} onPress={onPres}>
            <Text style={styles.text}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    boton4:{
        backgroundColor:'#F7F7F7',
        paddingVertical: '100',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems:'center',
    },

    text: {
        fontSize:21,
        color:'black',
        textAlign: 'center',
        fontWeight: '600'
    }

});