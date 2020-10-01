import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Lista from '../../components/Lista/lista';
import estiloColecao from './estiloColecao';

function Colecao({ navigation}) {

    const [colecao, setColecao] = useState([
        {
            id:'1',
            titulo: 'Campeão da Terra',
            descricao:'Ultimo Campeão',
            autor: 'Xandão',
            anoPublicado: '1400',
            foto: require('../../../assets/imagens/itens/1.JPG'),
        },

        {
            id:'2',
            titulo: 'Pitbull Lavajato',
            descricao:'Campeão',
            autor: 'PitBull Lavajato',
            anoPublicado: '1500',
            foto:require('../../../assets/imagens/itens/2.JPG'),
        },
        {
            id:'3',
            titulo: 'Lucão do Café',
            descricao: 'Café Top',
            autor: 'Lucão do Café',
            anoPublicado: '1600',
            foto:require('../../../assets/imagens/itens/3.jpg'),
        }
    ]);
    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>

            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name="add" size={24} color="white" />
            </View>

            <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={colecao}
            renderItem={ ({item}) => <Lista data={item} />}
            
            />
        </View>
    )
}

export default Colecao;