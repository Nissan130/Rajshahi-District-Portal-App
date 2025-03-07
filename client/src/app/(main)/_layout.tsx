import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const MainLayout = () => {
  return (
   <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' options={{headerShown:false}} />
        <Stack.Screen name='contact' options={{headerShown:false}} />
        <Stack.Screen name='notification' options={{headerShown:false}} />
        <Stack.Screen name='profile' options={{headerShown:false}} />
        <Stack.Screen name='doctors' options={{headerShown:false}} />
        <Stack.Screen name='hospitals' options={{headerShown:false}} />
      
   </Stack>
  )
}

export default MainLayout