import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaDolar from './screens/dolarScreen';
import TelaEuro from './screens/euroScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dólar" component={TelaDolar} />
        <Drawer.Screen name="Euro" component={TelaEuro} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

