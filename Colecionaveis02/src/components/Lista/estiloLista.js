import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    areaItems: {
        flex: 1,
        backgroundColor: '#92afd7',
    },
    itemTitulo: {
        height: 40,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
    },
    itemSubTitulo: {
        fontSize: 16,
        textAlign: 'center',
    },
    itemFoto: {
        height: 300,
        marginTop: 20,
        marginBottom: 20
    },
});

export default estiloLista;