import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyComponent = (props) => {
    const [text, setText] = React.useState("");

    const {texto, tipo, place, icono, datos} = props
  
    return (

      <TextInput style={styles.contenedor}
        label={texto}
        onChangeText={datos}
        mode="outlined"
        keyboardType={tipo}
        secureTextEntry
        right={< TextInput.Icon icon={icono}/>}
      />
    );
  };


  const styles = StyleSheet.create({
    contenedor:{
        marginTop:30,
        marginLeft: 20,
        marginRight: 20,
    }
});


  export default MyComponent;