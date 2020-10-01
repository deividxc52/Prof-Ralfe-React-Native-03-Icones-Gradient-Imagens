import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estiloLista from './estiloLista';

const Lista = ({data}) => {

    const[item, setItem] = useState(data);

    return(
        <View style={estiloLista.areaItens}>

            <LinearGradient colors={['#14417b','#92afd7','#92afd7']}>
            <Text style={estiloLista.itemTitulo}> {item.titulo}</Text>
            </LinearGradient>
            <Text style={estiloLista.itemSubTitulo}> {item.autor} ({item.anoPublicado})</Text>

            <LinearGradient colors={['#92afd7b','#92afd7','#14417b']}>
            <Image 
                source={item.foto} 
                style={estiloLista.itemFoto} 
                resizeMode='contain'/>
            </LinearGradient>
        </View>
    );
}

export default Lista;