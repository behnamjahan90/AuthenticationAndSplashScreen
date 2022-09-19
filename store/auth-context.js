import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAthenticated: false,
    layoutContent: null,
    authenticate: ()=> {},
    logout: ()=> {},
    loadingScreen: ()=>{}
});

function AuthContextProvider({children}) {
    const [authToken,setAuthToken]=useState();
    const [screenLoaded,setScreenLoaded]=useState();

    function authenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token',token);
    }

    function logout() {
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    function loadingScreen(layoutContent) {
        setScreenLoaded(layoutContent);
    }

    const value = {
        token: authToken,
        isAthenticated: !!authToken,
        layoutContent: screenLoaded,
        authenticate: authenticate,
        logout: logout,
        loadingScreen: loadingScreen
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;