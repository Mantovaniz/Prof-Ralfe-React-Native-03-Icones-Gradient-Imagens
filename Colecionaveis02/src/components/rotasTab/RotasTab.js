import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Colecao from '../../views/Colecao/Colecao';
<<<<<<< HEAD
import { MaterialIcons } from '@expo/vector-icons';
=======
>>>>>>> 2787e41a208a81448f297e8dfa74848da42054f2
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

<<<<<<< HEAD
const icones = {
    Inicial: { name: 'home'},
    Colecao: { name: 'storage'},
    Perfil: { name: 'person'},
}

=======
>>>>>>> 2787e41a208a81448f297e8dfa74848da42054f2
const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
      {
<<<<<<< HEAD
        style: {backgroundColor: '#081a31', borderTopColor: '#081a31'},
        showLabel: false,
        activeTintColor: '#FFFFFF' ,
      }
      }
      screenOptions={ ({route}) => ({
          tabBarIcon: ({color, size}) => {
              const {name} = icones[route.name];
              return <MaterialIcons name={name} size={size} color={color} />
          }
      })
     }
    >
      <Tab.Screen name="Inicial" component={RotasDrawer} 
        options={{
            unmountOnBlur: true
        }}
      />
      <Tab.Screen name="Colecao" component={Colecao}  />
=======
        labelStyle: { fontSize: 24 },
        style: {backgroundColor: '#14417b'},
        activeTintColor: '#FFFFFF' 
      }
      }
    >
      <Tab.Screen name="Inicial" component={RotasDrawer} />
      <Tab.Screen name="Colecao" component={Colecao} />
>>>>>>> 2787e41a208a81448f297e8dfa74848da42054f2
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default RotasTab;