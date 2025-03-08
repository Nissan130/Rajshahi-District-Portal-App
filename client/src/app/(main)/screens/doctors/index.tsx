import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import CustomNavbar from "@/src/components/atoms/CustomNavbar";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import DoctorCategoryList from "@/src/components/molecules/DoctorCategoryList";
import SearchInput from "@/src/components/atoms/SearchInput";

const Doctors = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomNavbar />
      <SearchInput placeholderText="ডাক্তার খুজুন ..." /> 
      <View style={styles.alertTextContainer}>
        <Text style={styles.alertText}>
          এক নজরে দেখে নিন কোন রোগ হলে কোন ডাক্তার দেখাবেন
        </Text>
      </View>
      <View style={styles.DoctorCategoryContainer}>
        <DoctorCategoryList />
      </View>
    </SafeAreaView>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  alertTextContainer: {
    // height: verticalScale(50),
    backgroundColor: "#e8edf9",
    marginHorizontal: scale(10),
    marginVertical: verticalScale(5),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(10),
    // elevation: moderateScale(1),
  },
  alertText: {
    fontSize: moderateScale(14),
    textAlign: "center",
    fontWeight: "700",
  },
  DoctorCategoryContainer: {
    flex: 1,
  },
});
