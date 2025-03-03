import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import FooterMenu from "@/src/components/molecules/FooterMenu";

const Contact = () => {
   const [currentPage, setCurrentPage] = useState("যোগাযোগ"); 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"red"} />
      <View style={styles.headerContainer}>
        <Text>Heading</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>Body of Contact</Text>
      </View>

      {/* footer menu */}
      <FooterMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </SafeAreaView>
  );
};

export default Contact;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  headerContainer: {
    backgroundColor: "yellow",
    width: "100%",
    height: verticalScale(50),
  },
  bodyContainer: {
    flex: 1,
  },
});
