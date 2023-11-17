import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function Boton1 (props)
{
    const{texto, onPres} = props
    return(
        <TouchableOpacity style={styles.boton1} onPress={onPres}>
            <Text style={styles.text}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton1:{
        backgroundColor:'#709E87',
        paddingVertical: '10',
        margin: 10,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems:'center',
    },

    boton2:{
        backgroundColor:'white',
        paddingVertical: '10',
        margin: 20,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems:'center',
        bordertop: 20,
    },

    text: {
        fontSize:22,
        color:'black',
        textAlign: 'center',
        fontWeight: '600'
    }

});