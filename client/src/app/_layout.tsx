import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, Stack, useRouter } from "expo-router";

const RootLayout = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (isLogin) {
      router.replace("/(main)/home");
    } else {
      router.replace("/(auth)/login");
    }
  }, [isLogin]);

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
};

export default RootLayout;
