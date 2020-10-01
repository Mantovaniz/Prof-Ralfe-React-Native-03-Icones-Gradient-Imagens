<<<<<<< HEAD
import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState([
        {
            id: '1',
            titulo: 'Admirável Mundo Novo',
            descricao: 'Um clássico moderno, o romance distópico de Aldous Huxley é indispensável...',
            autor: 'Aldous Huxley',
            anoPublicacao: '1932',
            foto: require('../../../assets/itens/amn.jpg'),
        },
        {
            id: '2',
            titulo: '1984',
            descricao: 'Uma das obras mais contundentes e influentes do século XX ganha nova...',
            autor: 'George Orwell',
            anoPublicacao: '1949',
            foto: require('../../../assets/itens/1984.jpg'),
        },
        {
            id: '3',
            titulo: 'Laranja Mecânica',
            descricao: 'Publicado pela primeira vez em 1962, e imortalizado 9 anos depois pelo filme de Stanley Kubrick,...',
            autor: 'Anthony Burgess',
            anoPublicacao: '1962',
            foto: require('../../../assets/itens/lm.jpg'), 
        },
        {
            id: '4',
            titulo: 'Neuromancer',
            descricao: 'O Céu sobre o porto tinha cor de televisão num canal fora do ar. Considerada a obra precursora...',
            autor: 'William Gibson',
            anoPublicacao: '1984',
            foto: require('../../../assets/itens/n.webp'),
        }

    ]);
    
    
=======
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloColecao from './estiloColecao';

function Colecao({ navigation, route }) {

>>>>>>> 2787e41a208a81448f297e8dfa74848da42054f2
    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>
<<<<<<< HEAD

            <View style={estiloColecao.header}> 
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloColecao.texto}> Coleção </Text>
                <MaterialIcons name="add" size={24} color="white" />
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <Lista data={item} /> }
            />
=======
            <View style={estiloColecao.borda}>

                <Text style={estiloColecao.texto}>Coleção</Text>

                <TouchableOpacity style={estiloColecao.botaoContainer} onPress={voltar}>
                    <Text style={estiloColecao.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
>>>>>>> 2787e41a208a81448f297e8dfa74848da42054f2
        </View>
    )
}

export default Colecao;
