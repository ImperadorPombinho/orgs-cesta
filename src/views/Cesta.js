import React from 'react';
import { StyleSheet, Image, Dimensions, Text } from 'react-native';
import Topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

const Cesta = () =>{
    return(
        <>
            <Image source={Topo} style={estilos.topo} />
            <Text style={estilos.titulo} >Detalhe da cesta</Text>
        </>
    );

}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        color: "white",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16
        
    }
});

export default Cesta;