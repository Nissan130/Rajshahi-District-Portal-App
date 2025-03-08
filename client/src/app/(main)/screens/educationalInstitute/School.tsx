import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import school_list from '@/src/assets/school_list'
import SearchInput from "@/src/components/atoms/SearchInput";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

const School = () => {
  return (
    <View style={styles.container}>
      <SearchInput placeholderText="স্কুল খুজুন ..." />
      {school_list.map((item, index) => {
        return (
          <View style={styles.schoolContainer} key={index}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.image} />
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.schoolName}>{item.name}</Text>
              <Text
                style={styles.infoText}
              >{`স্থাপিতঃ ${item.eastiblisedYear} সাল`}</Text>
              <Text style={styles.infoText}>{`থানাঃ ${item.thana}`}</Text>
              <Text style={styles.infoText}>{`ঠিকানাঃ ${item.address}`}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[styles.button, { backgroundColor: "#ff8000" }]}
                >
                  <Text style={styles.buttonText}>গুগল ম্যাপ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={[styles.button, { backgroundColor: "#2754cc" }]}
                >
                  <Text style={[styles.buttonText, { color: "#fff" }]}>
                    কল করুন
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}

      <View style={styles.addItem}>
        <TouchableOpacity style={styles.plusButton} activeOpacity={0.8}>
          {/* <Text style={styles.plusText}>+</Text> */}
          <FontAwesome6 name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default School;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  schoolContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: scale(12),
    padding: scale(12),
    elevation: 3,
    marginVertical: verticalScale(6),
    marginHorizontal: scale(12),
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  imageContainer: {
    width: scale(140),
    height: verticalScale(120),
    borderRadius: moderateScale(8),
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  schoolName: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "#333",
    marginBottom: verticalScale(4),
  },
  infoText: {
    fontSize: moderateScale(14),
    color: "#555",
    marginBottom: verticalScale(2),
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: scale(5)
    // paddingVertical: verticalScale(5),
  },
  button: {
    borderRadius: moderateScale(5),
    // borderWidth:2,
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(5),
    // borderColor:'#2754cc'
  },
  buttonText: {
    fontWeight: "600",
  },
  addItem: {
    alignItems: "center",
    backgroundColor: "#2754cc",
    width: scale(60),
    height: verticalScale(60),
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    bottom: verticalScale(100),
    right: scale(30),
    borderRadius: "100%",
  },
  plusButton: {
    elevation: 10,
    width:'100%',
    height: '100%',
    alignItems:'center',
    justifyContent:'center',
  },
  // plusText: {
  //   textAlign:'center',
  //   fontSize: moderateScale(40),
  //   color: '#fff',
  // }
});
