import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import AuthContextProvider from './store/auth-context';
import SplashScreen from './screens/SplashScreen';
import MainScreen from './screens/MainScreen';



const Stack = createNativeStackNavigator();

function Root(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{animationEnabled: false, header: () => null}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Main"
          options={{animationEnabled: true, header: () => null}}
          component={MainScreen}
        />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
