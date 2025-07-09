import { View, Text } from 'react-native'
import React, { Children, createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlobalContext = createContext(null);

const GlobalContextProvider = ({children}) => {
  const [userState, setUserState] = useState({
    user: null,
    token: "",
  });
  const [isUserLogin, setIsUserLogin] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      let data = await AsyncStorage.getItem("@auth");
      let loginData = data ? JSON.parse(data) : null;
      if (loginData) {
        setUserState({ user: loginData.user, token: loginData.token });
        setIsUserLogin(true);
      }
      // console.log("Global Context: ", isUserLogin); 
      // console.log("Global Context: ", userState); 
    };
     checkAuth();
  }, [isUserLogin]);

  const contextValue = {
    userState,
    setUserState,
    isUserLogin,
    setIsUserLogin,
  };

  return (
   <GlobalContext.Provider value={contextValue}>
      {children}
   </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;