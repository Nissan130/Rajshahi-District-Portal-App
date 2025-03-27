import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import GlobalContextProvider, { GlobalContext } from '../context/globalContext'
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';

const Root = () => {
  const router = useRouter();
  const { isUserLogin } = useContext(GlobalContext);

  useEffect(() => {
    if (isUserLogin) {
      router.replace("/(main)/home");
    } else {
      router.replace("/(auth)/login");
    }
  }, []);

  return (
      <Stack screenOptions={{ headerShown: false }} />
  );
};


export default Root