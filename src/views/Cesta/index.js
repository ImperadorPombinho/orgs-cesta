import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import Texto from '../../components/Texto';
import Detalhes from './componentsCesta/Detalhes';
import Itens from './componentsCesta/Itens';
import Topo from './componentsCesta/Topo';

const Cesta = ({topo, detalhes, itens}) =>{
    return(
        <>
            <FlatList
            
            data={itens.lista}
            renderItem={Itens}
            keyExtractor={({nome}) => nome}
            
            ListHeaderComponent={() =>(
                <>
                    <Topo {...topo} />                   
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes}/>
                        <Texto style={estilos.titulo} >{itens.titulo}</Texto>
                    </View>
                </>
            )}

            />
        </>
    );

}

const estilos = StyleSheet.create({
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

export default Cesta;