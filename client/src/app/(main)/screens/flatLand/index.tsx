import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.alertText}>This feature is under developement</Text>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    alertText: {
        fontSize: moderateScale(18), 
        fontWeight: 700,
        color: 'red'
    }
})