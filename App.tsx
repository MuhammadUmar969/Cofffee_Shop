import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './src/navigators/TabsNavigator';
import DetailsScreen from './src/screen/DetailsScreen';
import PaymentScreen from './src/screen/PaymentScreen';

import React from 'react'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Tabs'
          component={TabsNavigator}
          options={{ animation: "slide_from_bottom" }}>

        </Stack.Screen>
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{ animation: "slide_from_bottom" }}>

        </Stack.Screen>
        <Stack.Screen
          name='Payment'
          component={PaymentScreen}
          options={{ animation: "slide_from_bottom" }}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

