import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';

import IconButton from '../components/ui/IconButton';
import { AuthContext } from '../store/auth-context';
import { Colors } from '../constants/styles';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import WelcomeScreen from './WelcomeScreen';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login"  component={LoginScreen} />
      <Stack.Screen name="Signup"  component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome"  component={WelcomeScreen} options={{
        headerRight: ({tintColor})=> (
          <IconButton icon='exit' 
            color={tintColor}
            size={24}
            onPress={authCtx.logout}
          />
        ),
      }}/>
    </Stack.Navigator>
  );
}

function MainScreen() {

  const authCtx=useContext(AuthContext);

  if(!authCtx.isAthenticated){
    return <AuthStack/>;
  }
  else {
    return <AuthenticatedStack/>;
  }

}

export default MainScreen;