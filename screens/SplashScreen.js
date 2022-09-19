// src/screens/SplashScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useRef, useState, useEffect, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import { AuthContext } from '../store/auth-context';

const SplashScreen = ({navigation}) => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const authCtx = useContext(AuthContext);

  useEffect(() => {

    async function fetchToken() {
    
        const storedToken = await AsyncStorage.getItem('token');
        if(storedToken) {
          authCtx.authenticate(storedToken);
        }
        setTimeout(() => {
            setAuthLoaded(true);
          }, 5000); 
    }

    fetchToken();
    
  }, []);

  useEffect(() => {
    //console.log(navigation);
    if (authLoaded) {
        navigation.replace('Main');
    }
  }, [authLoaded,navigation]);

  return (
    <View style={styles.root}>
      <Text>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;