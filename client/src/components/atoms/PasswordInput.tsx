import {
  View,
  Text,
  Animated,
  TextStyle,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState, useRef } from "react";
import IconPackageName from "./IconPackageName";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const PasswordComponent = ({
  label,
  icon,
  keyboardType = "default",
  iconPackage,
  hidePassword,
  onPress,
  value,
  setValue,
}: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabel, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
      Animated.timing(animatedLabel, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle: Animated.WithAnimatedObject<TextStyle> = {
    position: "absolute",
    left: 40,
    top: animatedLabel.interpolate({
      inputRange: [0, 1], // Fixed input range
      outputRange: [17, -8], // Moves label up when focused or has value
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: isFocused ? "#2754cc" : "#aaa",
    backgroundColor: "#fff",
    paddingHorizontal: 5,
  };

  return (
    <View
      style={[styles.passwordContainer, isFocused && styles.focusedContainer]}
    >
      <IconPackageName
        iconPackage={iconPackage}
        name={icon}
        size={20}
        color={isFocused ? "#2754cc" : "#aaa"}
        style={styles.icon}
      />
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        style={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType={keyboardType}
        secureTextEntry={hidePassword}
        value={value}
        onChangeText={setValue}
      />
      <FontAwesome
        style={styles.eye_icon}
        name={hidePassword ? "eye-slash" : "eye"}
        size={16}
        color={"#333"}
        onPress={onPress}
      />
    </View>
  );
};

export default PasswordComponent;

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: moderateScale(1),
    borderColor: "#aaa",
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(6),
    paddingHorizontal: scale(10),
    marginBottom: verticalScale(15),
    position: "relative",
    backgroundColor: "#fff",
    width: "100%",
  },
  focusedContainer: {
    borderColor: "#2754cc",
  },
  icon: {
    marginRight: scale(10),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(16),
    color: "#000",
    paddingLeft: scale(5),
  },
  eye_icon: {
    padding: moderateScale(8),
    // backgroundColor:'red'
  },
});
