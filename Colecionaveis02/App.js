import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RotasLoginStack from './src/components/rotasStack/RotasLoginStack';

const App = () => {
  return (
    <NavigationContainer >

        <StatusBar barStyle="light-content" backgroundColor="#081a31" />  

        <RotasLoginStack />
  
    </NavigationContainer>
  );
};

export default App;
