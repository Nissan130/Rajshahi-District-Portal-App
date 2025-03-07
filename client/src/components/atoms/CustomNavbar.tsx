import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export default function CustomNavbar() {
  return (
    <View style={styles.navbar}>
      {/* Logo Text */}
      <Text style={styles.text}>
        <Text style={styles.blueText}>Rajshahi</Text>
        <Text style={styles.orangeText}> District Portal</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
       backgroundColor: "#fff",
       width: "100%",
       height: verticalScale(45),
       alignItems:'center',
       justifyContent:'center',
       elevation: moderateScale(3),
  },
  text: {
    fontSize: moderateScale(25),
    fontWeight: "bold",
    textTransform:'uppercase'
  },
  blueText: {
    color: "#2754cc",
    fontWeight: "bold",
  },
  orangeText: {
    color: "#ff8000",
    fontStyle: "italic",
  },
});
