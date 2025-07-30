import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthScreen, LoginScreen, SplashScreen } from '../screens';
import BottomTabNavigator from './bottom-tab-navigator';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" 
        component={SplashScreen}
        options={{ headerShown: false }} />

        <Stack.Screen name="Auth" 
        component={AuthScreen} 
        options={{ headerShown: false }}/>

          <Stack.Screen name="LogIn" 
        component={LoginScreen} 
        options={{ headerShown: false }}/>

        <Stack.Screen name="MainApp" 
        component={BottomTabNavigator} 
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
