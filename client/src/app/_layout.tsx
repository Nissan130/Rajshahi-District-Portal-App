import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, Stack, useRouter } from "expo-router";
import GlobalContextProvider from "../context/globalContext";

const RootLayout = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (isLogin) {
      router.replace("/(main)/home");
    } else {
      router.replace("/(auth)/login");
    }
  }, [isLogin]);

  return (
    <GlobalContextProvider>
       <Stack screenOptions={{ headerShown: false }} />
    </GlobalContextProvider>
   
  );
};

export default RootLayout;
