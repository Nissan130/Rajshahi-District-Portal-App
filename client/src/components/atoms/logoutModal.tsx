import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import ButtonComponent from "./ButtonComponent";
import { GlobalContext } from "@/src/context/globalContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { router } from "expo-router";

const LogoutModal = ({ openModal, setOpenModal }) => {
  const { userState, setUserState, isUserLogin, setIsUserLogin } =
    useContext(GlobalContext);

  // logout function
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@auth");
      // setUserState({ user: null, token: "" });
      setUserState({ user: null, token: "" });
      setIsUserLogin(false);

      Toast.show({
        type: "success",
        text1: "লগআউট সফল হয়েছে",
      });

      setTimeout(() => {
        router.push("/(auth)/login");
      }, 1000);
    } catch (error) {
      console.error("Logout Error:", error);
      Toast.show({
        type: "error",
        text1: "লগআউট ব্যর্থ হয়েছে । আবার চেষ্টা করুন",
      });
    }
  };

  return (
    <Modal
      visible={openModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setOpenModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          <View>
            <Text style={{ fontSize: moderateScale(15), fontWeight: "700" }}>
              আপনি কি লগআউট করতে চান ?{" "}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => setOpenModal(false)}
            >
              <Text style={{ fontSize: moderateScale(15), fontWeight: "700" }}>
                না
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={handleLogout}
            >
              <Text style={{ fontSize: moderateScale(15), fontWeight: "700" }}>
                হ্যাঁ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  modalBody: {
    width: "70%",
    backgroundColor: "#fff",
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    elevation: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(15),
  },
  button: {
    backgroundColor: "#ddd",
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
  },
});
