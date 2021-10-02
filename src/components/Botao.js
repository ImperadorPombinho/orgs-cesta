import React from 'react';
import { TouchableOpacity } from 'react-native';
import Texto from './Texto';


const Botao = ({children, style}) =>{
    const estiloBotao = style[0];
    const estiloTexto = style[1];
    return(
        <TouchableOpacity style={estiloBotao}>
            <Texto style={estiloTexto} >{children}</Texto>
        </TouchableOpacity>
    );
}

export default Botao;