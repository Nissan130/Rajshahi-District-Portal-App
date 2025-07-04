import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { router } from "expo-router";
import * as mime from "react-native-mime-types";

import ButtonComponent from "@/src/components/atoms/ButtonComponent";
import InputComponent from "@/src/components/atoms/InputComponent";
import PasswordComponent from "@/src/components/atoms/PasswordInput";
import ImageUploadComponent from "@/src/components/atoms/ImageUploadComponent";
import Toast from "react-native-toast-message";
import api from "@/src/utils/api";

const Register = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (
        !image ||
        !name ||
        !mobileNumber ||
        !password ||
        !email ||
        !profession ||
        !address
      ) {
        Toast.show({
          type: "error",
          text1: "অনুগ্রহ করে সমস্ত প্রয়োজনীয় তথ্য পূরণ করুন",
        });
        return;
      }

      setLoading(true);
      const imageType = mime.lookup(image) || "image/jpeg";

      const formData = new FormData();
      formData.append("image", {
        uri: image,
        name: `profile.${imageType.split("/")[1]}`,
        type: imageType,
      } as any);

      formData.append("name", name);
      formData.append("mobileNumber", mobileNumber);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("profession", profession);
      formData.append("address", address);

      const { data } = await api.post("/auth/register", formData);

      if (data.success) {
        Toast.show({
          type: "success",
          text1: data.message,
        });

        setTimeout(() => {
          router.push("/(auth)/login");
        }, 1000);
      } else {
        Toast.show({
          type: "error",
          text1: data?.message,
        });
      }
    } catch (error) {
      let errorMessage = "কিছু ভুল হয়েছে! দয়া করে আবার চেষ্টা করুন";

      if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      }

      Toast.show({
        type: "error",
        text1: errorMessage,
      });

        // ✅ Optional: Only log in development mode (safe)
      if (__DEV__) {
        console.log("Registration error:", errorMessage);
      }
    }

    finally {
      setLoading(false);
    }
  };

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
          <Text style={styles.register_heading}>নতুন একাউন্ট খুলুন</Text>

          {/* Image upload */}
          <ImageUploadComponent
            image={image}
            setImage={setImage}
            imageStyles={{
              borderRadius: 100,
              width: scale(70),
              height: verticalScale(70),
            }}
          />

          {/* Input Fields */}
          <InputComponent
            label="আপনার নাম"
            icon="user"
            keyboardType="default"
            iconPackage="FontAwesome"
            value={name}
            setValue={setName}
          />
          <InputComponent
            label="আপনার মোবাইল নাম্বার"
            icon="mobile"
            keyboardType="numeric"
            iconPackage="FontAwesome"
            value={mobileNumber}
            setValue={setMobileNumber}
          />
          <PasswordComponent
            label="আপনার পাসওয়ার্ড"
            icon="password"
            keyboardType="default"
            iconPackage="MaterialIcons"
            hidePassword={hidePassword}
            onPress={showPassword}
            value={password}
            setValue={setPassword}
          />
          <InputComponent
            label="আপনার ই-মেইল"
            icon="email"
            keyboardType="email-address"
            iconPackage="MaterialIcons"
            value={email}
            setValue={setEmail}
          />
          <InputComponent
            label="আপনার পেশা"
            icon="bag"
            keyboardType="default"
            iconPackage="SimpleLineIcons"
            value={profession}
            setValue={setProfession}
          />
          <InputComponent
            label="আপনার ঠিকানা"
            icon="location-pin"
            keyboardType="default"
            iconPackage="SimpleLineIcons"
            value={address}
            setValue={setAddress}
          />

          {/* Submit Button */}
          <ButtonComponent
            buttonText={
              loading ? (
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <ActivityIndicator color="#fff" />
                  <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                    অপেক্ষা করুন
                  </Text>
                </View>
              ) : (
                "রেজিস্ট্রেশন করুন"
              )
            }
            onPress={handleSubmit}
            style={{ width: "100%" }}
          />

          {/* Link to login */}
          <Text style={styles.account_text}>
            একাউন্ট করা আছে?{" "}
            <Text style={styles.link_text} onPress={gotToLogin}>
              লগইন করুন
            </Text>
          </Text>
        </View>
      </ScrollView>
      <Toast />
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
    alignItems: "center",
  },
  register_heading: {
    textAlign: "center",
    paddingBottom: verticalScale(10),
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
