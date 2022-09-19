import axios from 'axios';
import { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const[fetchMessage,setFetchMessage]=useState();

  const authContext=useContext(AuthContext);
  const token=authContext.token;

  useState(()=>{
    axios.get(
      'https://rn-behnam-test-default-rtdb.firebaseio.com/message.json?auth='+token
      ).then((response)=>{
        setFetchMessage(response.data);
      })
  },[token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
