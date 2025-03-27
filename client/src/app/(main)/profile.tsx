import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";
import {
  AntDesign,
  Feather,
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

const profileListItem = [
  {
    title: "প্রোফাইল আপডেট করুন",
    icon: <Feather name="edit-2" size={24} color="#2754cc" />,
  },
  {
    title: "ফেসবুক পেজ",
    icon: <FontAwesome6 name="square-facebook" size={24} color="#2754cc" />,
  },
  {
    title: "ফেসবুক গ্রুপ",
    icon: <FontAwesome5 name="facebook" size={24} color="#2754cc" />,
  },
  {
    title: "সেটিংস্‌",
    icon: <MaterialIcons name="settings" size={24} color="#2754cc" />,
  },
  {
    title: "লগআউট",
    icon: <MaterialCommunityIcons name="logout" size={24} color="#2754cc" />,
  },
];

const Profile = () => {
  const [currentPage, setCurrentPage] = useState("প্রোফাইল");
  const {userState} = useContext(GlobalContext);
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#2754cc"} barStyle={'light-content'} />
      <CustomNavbar />
      <View style={styles.bodyContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.profileImg}>
            <Image source={{uri: userState.user.image.url}} style={styles.image} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{userState.user.name}</Text>
            <Text style={styles.role}>{userState.user.profession}</Text>
          </View>
        </View>

        {profileListItem.map((item, index) => {
          return (
            <TouchableOpacity style={styles.profileMenuList} activeOpacity={0.8} key={index} onPress={()=>router.push('/(auth)/login')}>
              <View style={styles.title_icon}>
                {item.icon}
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.right_arrow}>
                <FontAwesome5 name="angle-right" size={24} color="#ff8000" />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* footer menu */}
      <FooterMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </SafeAreaView>
  );
};

export default Profile;
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
    backgroundColor: "#e8edf9",
    padding: moderateScale(10),
    borderRadius: moderateScale(15),
    marginVertical: verticalScale(15),
    marginHorizontal: scale(10),
    elevation: moderateScale(5),
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
    width: '100%',
    height:'100%',
    overflow:'hidden',
    borderRadius: moderateScale(100),
    resizeMode:'cover'
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
  profileMenuList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: verticalScale(50),
    backgroundColor: "#e8edf9",
    padding: moderateScale(10),
    borderRadius: moderateScale(15),
    marginVertical: verticalScale(5),
    marginHorizontal: scale(10),
    paddingHorizontal: scale(15),
    elevation: moderateScale(1)
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
