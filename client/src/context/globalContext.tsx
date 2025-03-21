import { View, Text } from 'react-native'
import React, { Children, createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlobalContext = createContext(null);

const GlobalContextProvider = ({children}) => {
  const [state, setState] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const loadLocalStorageData = async () => {
      let data = await AsyncStorage.getItem("@auth");
      let loginData = data ? JSON.parse(data) : null;
      if (loginData) {
        setState({ user: loginData.user, token: loginData.token });
      }
    };
    loadLocalStorageData();
  }, []);

  return (
   <GlobalContext.Provider value={{state, setState}}>
      {children}
   </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;