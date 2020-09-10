import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloItem from './estiloItem';

function Item({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.borda}>

                <Text style={estiloItem.texto}>Item</Text>

                <TouchableOpacity style={estiloItem.botaoContainer} onPress={voltar}>
                    <Text style={estiloItem.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Item;
