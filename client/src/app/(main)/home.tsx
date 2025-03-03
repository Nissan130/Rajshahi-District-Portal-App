import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import FooterMenu from "@/src/components/molecules/FooterMenu";
import CustomNavbar from "@/src/components/atoms/CustomNavbar";
import HomeItemList from "@/src/components/molecules/HomeItemList";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("হোম");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#2754cc"} barStyle={"light-content"} />
      <CustomNavbar />

      <View style={styles.bodyContainer}>
          <HomeItemList />
      </View>

      {/* footer menu */}
      <FooterMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  bodyContainer: {
    flex: 1,
    paddingLeft: scale(10)
  },
});
