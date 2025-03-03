import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { router } from "expo-router";

import ButtonComponent from "@/src/components/atoms/ButtonComponent";
import InputComponent from "@/src/components/atoms/InputComponent";
import { FontAwesome } from "@expo/vector-icons";
import PasswordComponent from "@/src/components/atoms/PasswordInput";

const Register = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const showPassword = () => {
    setHidePassword(!hidePassword);
  };
  const gotToLogin = () => {
    router.push("/(auth)/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"lightblue"} />

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.registerContainer}>
          <Text style={styles.register_heading}>নতুন একাউন্ট খুলুন </Text>

          {/* Register Fields */}
          <InputComponent
            label="আপনার নাম"
            icon="user"
            keyboardType="default"
            iconPackage="FontAwesome"
          />
          <InputComponent
            label="আপনার নাম্বার"
            icon="mobile"
            keyboardType="numeric"
            iconPackage="FontAwesome"
          />
          <PasswordComponent
            label="আপনার পাসওয়ার্ড"
            icon="password"
            keyboardType="default"
            iconPackage="MaterialIcons"
            hidePassword={hidePassword}
            onPress={showPassword}
          />
          <InputComponent
            label="আপনার ই-মেইল"
            icon="email"
            keyboardType="default"
            iconPackage="MaterialIcons"
          />
          <InputComponent
            label="আপনার পেশা"
            icon="bag"
            keyboardType="default"
            iconPackage="SimpleLineIcons"
          />
          <InputComponent
            label="আপনার ঠিকানা"
            icon="location-pin"
            keyboardType="default"
            iconPackage="SimpleLineIcons"
          />

          {/* Register Button */}
          <ButtonComponent buttonText="রেজিস্ট্রেশন করুন" />

          {/* Login Link */}
          <Text style={styles.account_text}>
            একাউন্ট করা আছে?{" "}
            <Text style={styles.link_text} onPress={gotToLogin}>
              লগইন করুন
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1, // Ensures the ScrollView fills the height
    justifyContent: "center", // Centers the register container vertically
    alignItems: "center", // Centers it horizontally
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(20),
  },
  registerContainer: {
    backgroundColor: "#fff",
    padding: moderateScale(20),
    width: "100%",
    maxWidth: scale(350), // Adds a max width for better design
    elevation: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  register_heading: {
    textAlign: "center",
    paddingBottom: verticalScale(30),
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: "#2754cc",
  },
  account_text: {
    fontSize: moderateScale(14),
    marginTop: verticalScale(10),
    color: "#555",
    textAlign: "center",
  },
  link_text: {
    color: "#2754cc",
    fontWeight: "600",
  },
});
