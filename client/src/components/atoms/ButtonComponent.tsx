import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";

const ButtonComponent = ({buttonText}:any) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.btn_text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#2754cc",
    // backgroundColor: "#2754cc",
    width: "100%",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    borderWidth: 2,
    borderColor: "#2754cc",
    borderRadius: moderateScale(5),
    marginTop: verticalScale(10),
  },
  btn_text: {
    color: "#fff",
    // color: "#ff3377",
    fontWeight: "700",
    fontSize: moderateScale(16),
  },
});