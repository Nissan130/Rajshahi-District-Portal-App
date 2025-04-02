import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ButtonComponent from "@/src/components/atoms/ButtonComponent";
import InputComponent from "@/src/components/atoms/InputComponent";
import PasswordComponent from "@/src/components/atoms/PasswordInput";
import { GlobalContext } from "@/src/context/globalContext";
import Toast from "react-native-toast-message";
import api from "@/src/utils/api";

const Login = () => {
  const { isUserLogin, setIsUserLogin,userState, setUserState } =
    useContext(GlobalContext);
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handle submit for login
  const handleSubmit = async () => {
    try {
      if (!email || !password) {
        Toast.show({
          type: "error",
          text1: "অনুগ্রহ করে সমস্ত প্রয়োজনীয় তথ্য পূরণ করুন",
        });
        return;
      }

      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      //send data using axios
      const { data } = await api.post("/auth/login", formData);
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      setUserState(data);

      if (data.success) {
        setIsUserLogin(true)
        Toast.show({
          type: "success",
          text1: data?.message,
        });

        setTimeout(() => {
          router.push("/(main)/home");
        }, 1000);
      } else {
        Toast.show({
          type: "error",
          text1: data?.message,
        });
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "কিছু ভুল হয়েছে! দয়া করে আবার চেষ্টা করুন",
      });
    }
  };

  const showPassword = () => {
    setHidePassword(!hidePassword);
  };
  const goToRegister = () => {
    router.push("/(auth)/register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"lightblue"} />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.login_heading}>আপনার একাউন্টে লগইন করুন </Text>

          {/* Login Fields */}
          <InputComponent
            label="আপনার ইমেইল"
            icon="email"
            keyboardType="email-address"
            iconPackage="MaterialIcons"
            value={email}
            setValue={(e: any) => {
              setEmail(e);
            }}
          />
          <PasswordComponent
            label="আপনার পাসওয়ার্ড"
            icon="password"
            keyboardType="default"
            iconPackage="MaterialIcons"
            hidePassword={hidePassword}
            onPress={showPassword}
            value={password}
            setValue={(e: any) => setPassword(e)}
          />
          {/* Forgot Password */}
          <Text style={styles.forgot_password_text}>
            পাসওয়ার্ড ভুলে গেছেন?
          </Text>

          {/* Login Button */}
          <ButtonComponent
            buttonText="লগইন করুন"
            onPress={handleSubmit}
            style={{ width: "100%" }}
          />

          {/* Register Link */}
          <Text style={styles.account_text}>
            কোনো একাউন্ট নেই?{" "}
            <Text style={styles.link_text} onPress={goToRegister}>
              রেজিস্ট্রেশন করুন
            </Text>
          </Text>
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1, // Ensures the ScrollView takes up the full height
    justifyContent: "center", // Centers the login container vertically
    alignItems: "center", // Centers horizontally
    paddingHorizontal: scale(15),
  },
  loginContainer: {
    backgroundColor: "#fff",
    padding: moderateScale(20),
    width: "100%",
    maxWidth: scale(350), // Limits width for better design on large screens
    elevation: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  login_heading: {
    textAlign: "center",
    paddingBottom: verticalScale(30),
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: "#2754cc",
  },
  forgot_password_text: {
    color: "#555",
    fontWeight: "600",
    paddingBottom: verticalScale(10),
    textAlign: "left",
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
