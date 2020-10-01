import React, { useState } from 'react';
<<<<<<< HEAD
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const IsDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if(!IsDrawerOpen){
            navigation.openDrawer();
        }      
    }

=======
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) {

>>>>>>> 2787e41a208a81448f297e8dfa74848da42054f2
    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }
    
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>
<<<<<<< HEAD

                <View style={estiloInicial.header}>
                    <TouchableOpacity onPress={exibirDrawer}>
                        <AntDesign name="manu-fold" size={18} color="white" />
                    </TouchableOpacity>
                </View>
                
                <ImageBackground source={require('../../../assets/imagens/EN3vnVfW4AAOg-S.jpg')} style={estiloInicial.fundo}>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirColecao}>
                    <ImageBackground source={require('../../../assets/imagens/1148d61d6215181ab862277e7a8f8d45.jpg')} style={estiloInicial.botaoBackground} >
                        <Text style={estiloInicial.botaoTexto}>Coleção</Text>
                    </ImageBackground>
                    
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirItem}>
                    <ImageBackground source={require('../../../assets/imagens/anime-my-hero-academia-91749.jpg')} style={estiloInicial.botaoBackground} >
                        <Text style={estiloInicial.botaoTexto}>Item</Text>
                    </ImageBackground>
                   
                </TouchableOpacity>

                </ImageBackground>
=======
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Inicial</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirColecao}>
                    <Text style={estiloInicial.botaoTexto}>Coleção</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirItem}>
                    <Text style={estiloInicial.botaoTexto}>Item</Text>
                </TouchableOpacity>

            </View>
>>>>>>> 2787e41a208a81448f297e8dfa74848da42054f2
        </View>
    )
}

export default Inicial;
