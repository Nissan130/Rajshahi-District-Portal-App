import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import { GlobalContext } from "@/src/context/globalContext";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { FontAwesome, FontAwesome6, SimpleLineIcons } from "@expo/vector-icons";
import ButtonComponent from "@/src/components/atoms/ButtonComponent";
import { router } from "expo-router";
import ImageUploadComponent from "@/src/components/atoms/ImageUploadComponent";

const UpdateProfile = () => {
  const { userState, setUserState } = useContext(GlobalContext);

  const userName = userState?.user?.name;
  const userProfession = userState?.user?.profession;
  const userAddress = userState?.user?.address;

  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState(userName);
  const [profession, setProfession] = useState(userProfession);
  const [address, setAddress] = useState(userAddress);

  // console.log(userState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.editContainer}>
        <View style={styles.titleContainer}>
          <Text
            style={{
              fontSize: moderateScale(18),
              fontWeight: "700",
              color: "#444",
            }}
          >
            প্রোফাইল আপডেট করুন
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <ImageUploadComponent
            image={image ? image : userState?.user?.image?.url}
            setImage={setImage}
            imageStyles={{
              borderRadius: "100%",
              width: scale(70),
              height: verticalScale(70),
            }}
          />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.labelText}>আপনার নাম </Text>
            <FontAwesome
              name="user"
              size={24}
              color="#2754cc"
              style={styles.icon}
            />
            <TextInput
              value={name}
              onChangeText={(e) => setName(e)}
              style={styles.inputField}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelText}>আপনার পেশা </Text>
            <FontAwesome
              name="briefcase"
              size={22}
              color="#2754cc"
              style={styles.icon}
            />
            <TextInput
              value={profession}
              onChangeText={(e) => setProfession(e)}
              style={styles.inputField}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.labelText}>আপনার ঠিকানা </Text>
            <FontAwesome6
              name="location-dot"
              size={24}
              color="#2754cc"
              style={styles.icon}
            />
            <TextInput
              value={address}
              onChangeText={(e) => setAddress(e)}
              style={styles.inputField}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            buttonText="বাতিল করুন"
            style={styles.canelButton}
            onPress={() => router.push("/(main)/profile")}
          />
          <ButtonComponent
            buttonText="আপডেট করুন"
            style={styles.submitButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  
  },
  editContainer: {
    alignItems: "center",
    // backgroundColor: "#ababab",
    // width: "100%",
    padding: moderateScale(15),
    margin: 10,
    // borderWidth: 1,
    // borderColor: '#ddd'
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  imageContainer: {
    width: scale(70),
    height: verticalScale(70),
    borderRadius: moderateScale(100),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: moderateScale(100),
  },
  infoContainer: {
    width: "90%",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
    // backgroundColor: "red",
    borderWidth: 1,
    borderColor: "#2754cc",
    paddingLeft: scale(10),
    paddingVertical: verticalScale(3),
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
  },
  inputField: {
    padding: moderateScale(10),
    width: "100%",
    paddingHorizontal: scale(10),
    fontSize: moderateScale(16),
    color: "#444",
    marginLeft: scale(20),
  },
  icon: {
    position: "absolute",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: scale(10),
  },
  canelButton: {
    paddingHorizontal: scale(30),
    backgroundColor: "#ff8000",
  },
  submitButton: {
    paddingHorizontal: scale(30),
  },
  labelText: {
    position: "absolute",
    top: scale(-8),
    left: scale(40),
    backgroundColor: "#fff",
    paddingHorizontal: scale(2),
    fontSize: moderateScale(12),
    color: "#2754cc",
    fontWeight: "600",
  },
});
