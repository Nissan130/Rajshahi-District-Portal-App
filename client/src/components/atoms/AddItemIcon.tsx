import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { scale, verticalScale } from 'react-native-size-matters';

const AddItemIcon = ({onPress}:any) => {
  return (
    <View style={styles.addItemIcon}>
      <TouchableOpacity style={styles.plusButton} activeOpacity={0.8} onPress={onPress}>
        {/* <Text style={styles.plusText}>+</Text> */}
        <FontAwesome6 name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export default AddItemIcon

const styles = StyleSheet.create({
    addItemIcon: {
        alignItems: "center",
        backgroundColor: "#2754cc",
        width: scale(50),
        height: verticalScale(50),
        justifyContent: "center",
        textAlign: "center",
        position: "absolute",
        bottom: verticalScale(100),
        right: scale(30),
        borderRadius: "100%",
      },
      plusButton: {
        elevation: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
})