import { StyleSheet } from 'react-native';

const estiloColecao = StyleSheet.create({
   container: {   
      flex: 1,
<<<<<<< HEAD
   },
   header: {
       height: 40,
       backgroundColor: '#14417b',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       padding: 5,
   },
   texto: {
       fontSize: 18,
       color: '#FFFFFF',
=======
      justifyContent: 'center',
      alignItems: 'center',     
   },
   borda: {   
      backgroundColor: '#081a31',  
      width: '80%',
      height: '25%',
      borderRadius: 10,
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: '#e8f2e9',
      backgroundColor: '#14417b',
      justifyContent: 'center',
      alignItems: 'center',
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
>>>>>>> 2787e41a208a81448f297e8dfa74848da42054f2
   },
});

  export default estiloColecao;