import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicial from '../../views/Inicial/Inicial';
import Colecao from '../../views/Colecao/Colecao';
import Item from '../../views/Item/Item';
import Perfil from '../../views/Perfil/Perfil';
<<<<<<< HEAD
import { MaterialIcons } from '@expo/vector-icons';
import DrawerPersonalizado from './DrawerPersonalizado';
=======
>>>>>>> 2787e41a208a81448f297e8dfa74848da42054f2

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
<<<<<<< HEAD
    <Drawer.Navigator drawerContent={DrawerPersonalizado}>

      <Drawer.Screen name="Inicial" component={Inicial}
        options={{
            drawerIcon: ({color, size}) => (
                <MaterialIcons name='home' size={size} color={color} />
            )
        }}
      />
      <Drawer.Screen name="Colecao" component={Colecao}
        options={{
            drawerIcon: ({color, size}) => (
                <MaterialIcons name="storage" size={size} color={color} />
            )
        }}
      />
      <Drawer.Screen name="Item" component={Item}
        options={{
            drawerIcon: ({color, size}) => (
                <MaterialIcons name='done-all' size={size} color={color} />
            )
        }}
      />
      <Drawer.Screen name="Perfil" component={Perfil}
        options={{
            drawerIcon: ({color, size}) => (
                <MaterialIcons name='person' size={size} color={color} />
            )
        }}
      />
=======
    <Drawer.Navigator>
      <Drawer.Screen name="Inicial" component={Inicial}/>
      <Drawer.Screen name="Colecao" component={Colecao}/>
      <Drawer.Screen name="Item" component={Item}/>
      <Drawer.Screen name="Perfil" component={Perfil}/>
>>>>>>> 2787e41a208a81448f297e8dfa74848da42054f2
    </Drawer.Navigator>
  );
}

export default RotasDrawer;