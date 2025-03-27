import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import FooterMenu from "@/src/components/molecules/FooterMenu";
import Toast from 'react-native-toast-message'


const Contact =  () => {
   const [currentPage, setCurrentPage] = useState("যোগাযোগ");

   const [hospitals, setHospitals] = useState("");
   
   useEffect(()=> {
      const fetchHospitals = async () => {
        const res = await fetch(
          "http://10.1.1.108:3000/api/main/hospitals/get-hospitals"
        );
        const data = await res.json();
        setHospitals(data);
      }
      fetchHospitals();
   },[])
  
    
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"red"} />
      <View style={styles.headerContainer}>
        <Text>Heading</Text>
      </View>
      <View style={styles.bodyContainer}></View>
      <Text>{JSON.stringify(hospitals,null,4)}</Text>

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
    
    backgroundColor: "#fff",
    width: "100%",
    height: verticalScale(50),
  },
  bodyContainer: {
  
  },
});
