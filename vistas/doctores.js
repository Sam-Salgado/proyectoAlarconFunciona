import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Searchbar, ToggleButton } from 'react-native-paper';
import { Cards, Tarjetas } from "../componentes/cards";
import { Boton1 } from "../componentes/boton1";
import Constants from "expo-constants"

const Doctores = ({ navigation }) => {

    const [value, setValue] = React.useState('left');
    const Data = [
        {
            id: 1,
            nombre: "Dr. Isabel Cruz",
            especialidad: "Neurocosmología",
        },
        {
            id: 2,
            nombre: "Dr. Alejandro Vargas",
            especialidad: "Oncodermatología",
        },
        {
            id: 3,
            nombre: "Dra. Martina Torres ",
            especialidad: "Psicogeriatría",

        },
        {
            id: 4,
            nombre: "Dr. Carlos Mendoza",
            especialidad: "Medicina Pediátrica Deportiva",
        },
        {
            id: 5,
            nombre: "Dra. Elena González ",
            especialidad: "Medicina Tropical",
        },
        {
            id: 6,
            nombre: "Dr. Juan Ramírez",
            especialidad: "Psiconeuroinmunología",
        },
        {
            id: 7,
            nombre: "Dra. Sofia Fernández",
            especialidad: "Cardiología Espacial",
        },
        {
            id: 8,
            nombre: "Dr. Luis Rodríguez",
            especialidad: "Oftalmología Geriátrica",
        },
        {
            id: 9,
            nombre: "Dra. Valentina Ruiz",
            especialidad: " Medicina Holográfica",
        },
        {
            id: 10,
            nombre: "Dr. Manuel Sánchez",
            especialidad: "Gastrología Virtual",
        }

    ]

    return (
        <View style={styles.container}>
            <View style={styles.sec2Home}>

                <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
                    <ToggleButton icon="filter" value="left" />
                    <ToggleButton icon="magnify" value="right" />
                    <ToggleButton icon="order-bool-ascending" value="center" />
                </ToggleButton.Row>
                <Searchbar
                    placeholder="Buscar"
                />
                <FlatList style={{ padding: 5 }}
                    data={Data}
                    renderItem={
                        ({ item }) => <Tarjetas
                            nombre={item.nombre}
                            especialidad={item.especialidad}
                        />
                    }
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 8 }} />
                    )}
                    ListHeaderComponent={<Text></Text>}
                >
                </FlatList>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    sec2Home: {
        backgroundColor: '#F7F7F7',
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 1,
        marginTop: Constants.statusBarHeight

    },
    superior: {
        flex: 1,
        paddingBottom: 10
    },
    flat: {

    },
    flatti: {
        padding: 5
    },

})


export default Doctores;