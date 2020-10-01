import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }      
    }

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }
    
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>
             
                <View style={estiloInicial.header}>
                    <TouchableOpacity onPress={exibirDrawer}>
                        <AntDesign name="menu-fold" size={18} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
                
               <ImageBackground source={require('../../../assets/imagens/EN3vnVfW4AAOg-S.jpg')} style={estiloInicial.fundo}>

                <TouchableOpacity onPress={abrirColecao}>
                    <ImageBackground source={require('../../../assets/imagens/1148d61d6215181ab862277e7a8f8d45.jpg')} style={estiloInicial.botaoBackground} >
                        <Text style={estiloInicial.botaoTexto}>Coleção</Text>
                    </ImageBackground>
                    
                </TouchableOpacity>

                <TouchableOpacity onPress={abrirItem}>
                    <ImageBackground source={require('../../../assets/imagens/anime-my-hero-academia-91749.jpg')} style={estiloInicial.botaoBackground} >
                        <Text style={estiloInicial.botaoTexto}>Item</Text>
                    </ImageBackground>
                   
                </TouchableOpacity>

                </ImageBackground>
        </View>
    )
}

export default Inicial;