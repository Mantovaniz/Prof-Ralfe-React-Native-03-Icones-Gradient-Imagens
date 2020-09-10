import React from 'react';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloPerfil.container}>
            <View style={estiloPerfil.borda}>
                
                <Text style={estiloPerfil.texto}>Perfil</Text>

                <TouchableOpacity style={estiloPerfil.botaoContainer} onPress={voltar}>
                    <Text style={estiloPerfil.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Perfil;
