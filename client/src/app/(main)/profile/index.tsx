import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Linking,
  Modal,
} from "react-native";
import React, { useContext, useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import {
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import FooterMenu from "@/src/components/molecules/FooterMenu";
import CustomNavbar from "@/src/components/atoms/CustomNavbar";
import { GlobalContext } from "@/src/context/globalContext";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import LogoutModal from "@/src/components/atoms/logoutModal";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("প্রোফাইল");
  const { userState, setUserState, isUserLogin, setIsUserLogin } =
    useContext(GlobalContext);
  const [openModal, setOpenModal] = useState(false);

  // //open facebook page
  // const openFbPage = () => {
  //   Linking.openURL("https://web.facebook.com/").catch((err) =>
  //     console.error("Error in opening link", err)
  //   );
  // };

  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#2754cc"} barStyle={"light-content"} />
      <CustomNavbar />
      <View style={styles.bodyContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfo}>
            <View style={styles.profileImg}>
              <Image
                source={{ uri: userState?.user?.image?.url }}
                style={styles.image}
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{userState?.user?.name}</Text>
              <Text style={styles.role}>{userState?.user?.profession}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.editButton}
              activeOpacity={0.7}
              onPress={() => router.push("/(main)/profile/updateProfile")}
            >
              <MaterialIcons name="edit" size={24} color="#ff8000" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profileMenu}>
          <TouchableOpacity
            style={styles.profileMenuList}
            activeOpacity={0.8}
            onPress={() => router.push("/(main)/profile/updateProfile")}
          >
            <View style={styles.title_icon}>
              <MaterialCommunityIcons
                name="cloud-upload-outline"
                size={24}
                color="#2754cc"
              />
              <Text style={styles.title}>আপলোড করা তথ্য</Text>
            </View>
            <View style={styles.right_arrow}>
              <FontAwesome5 name="angle-right" size={24} color="#ff8000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileMenuList}
            activeOpacity={0.8}
          >
            <View style={styles.title_icon}>
              <Ionicons name="hourglass-outline" size={24} color="#2754cc" />
              <Text style={styles.title}>অনুমোদনের অপেক্ষায় থাকা তথ্য</Text>
            </View>
            <View style={styles.right_arrow}>
              <FontAwesome5 name="angle-right" size={24} color="#ff8000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileMenuList}
            activeOpacity={0.8}
          >
            <View style={styles.title_icon}>
              <Ionicons name="bookmark-outline" size={24} color="#2754cc" />
              <Text style={styles.title}>সংরক্ষিত/প্রিয় তালিকা</Text>
            </View>
            <View style={styles.right_arrow}>
              <FontAwesome5 name="angle-right" size={24} color="#ff8000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileMenuList}
            activeOpacity={0.8}
            onPress={() => router.push("/(main)/profile/updateProfile")}
          >
            <View style={styles.title_icon}>
              <MaterialCommunityIcons
                name="shield-lock-outline"
                size={24}
                color="#2754cc"
              />
              <Text style={styles.title}>নিরাপত্তা ও গোপনীয়তা</Text>
            </View>
            <View style={styles.right_arrow}>
              <FontAwesome5 name="angle-right" size={24} color="#ff8000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileMenuList}
            activeOpacity={0.8}
            onPress={() => router.push("/(main)/profile/updateProfile")}
          >
            <View style={styles.title_icon}>
              <FontAwesome name="history" size={24} color="#2754cc" />
              <Text style={styles.title}>কার্যকলাপের ইতিহাস</Text>
            </View>
            <View style={styles.right_arrow}>
              <FontAwesome5 name="angle-right" size={24} color="#ff8000" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileMenuList}
            activeOpacity={0.8}
            onPress={()=> {
              setOpenModal(true)
            }}
          >
            <View style={styles.title_icon}>
              <MaterialCommunityIcons name="logout" size={24} color="#2754cc" />
              <Text style={styles.title}>লগআউট</Text>
            </View>
            <View style={styles.right_arrow}>
              <FontAwesome5 name="angle-right" size={24} color="#ff8000" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <LogoutModal openModal={openModal} setOpenModal={setOpenModal}/>

      {/* footer menu */}
      <FooterMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </SafeAreaView>
  );
};

export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  bodyContainer: {
    flex: 1,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e8edf9",
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(10),
    marginHorizontal: scale(10),
    borderWidth: 1,
    borderColor: "#ccc",
    // elevation: moderateScale(5),
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  editButton: {
    // backgroundColor: 'red',
    padding: moderateScale(10),
  },
  profileImg: {
    width: scale(50),
    height: verticalScale(50),
    borderRadius: moderateScale(100),
    backgroundColor: "#2754cc",
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(15),
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: moderateScale(100),
    resizeMode: "cover",
  },
  initial: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  profileInfo: {
    flexDirection: "column",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  role: {
    fontSize: 14,
    color: "gray",
  },
  profileMenu: {},
  profileMenuList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: verticalScale(50),
    backgroundColor: "#e8edf9",
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(4),
    marginHorizontal: scale(10),
    paddingHorizontal: scale(15),
    // borderWidth: 1,
    // borderColor: "#ccc",
    // elevation: moderateScale(1),
  },
  title_icon: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(20),
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
  right_arrow: {},
  
});
