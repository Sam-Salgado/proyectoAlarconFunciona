import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';


export function Cards(props) {

    const { titulo, subtitulo, ptovta, rutaimg } = props

    return (
        <Card style={{ paddingHorizontal: 10 }}>
            <Card.Title title={titulo} subtitle={"Precio $" + subtitulo} />
            <Card.Content>
                <Text variant="bodyMedium">Punto de venta: {ptovta}</Text>
            </Card.Content>
            {/* <Card.Cover source={{uri: {rutaimg}}} /> */}
            <Card.Actions>
                <Button>Detalles</Button>
            </Card.Actions>
        </Card>
    );
}

export function Tarjetas(props) {
    const { especialidad, nombre} = props
    
    return (
        
        <View style={styles.card}>
            <View style={styles.secimg}>
            </View>

            <View style={styles.desc}>
                <Text>{especialidad}</Text>
                <Text>nombre: {nombre}</Text>
            </View>
            
            <View style={styles.tipo}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#88A199',
        borderRadius: 25,
        width: '99%',
        shadowColor: 'gray',
        shadowOpacity: 1,
        paddingHorizontal: 10
    },
    tipo: {
        backgroundColor: '#D0E5C1',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        width: 50,
        height: 25,
        left: 0,
        bottom: 2
    },
    text: {
        textAlign: 'center'
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 50
    },
    desc: {
        width: 230
    },
    secimg: {
        width: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})