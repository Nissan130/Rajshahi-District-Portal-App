import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import CustomNavbar from "@/src/components/atoms/CustomNavbar";
import SearchInput from "@/src/components/atoms/SearchInput";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import hospital_list from "@/src/assets/hospital_list";
import AddItemIcon from "@/src/components/atoms/AddItemIcon";

const Hospitals = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.hospitalContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.image} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.hospitalName}>{item.name}</Text>
        <Text style={styles.infoText}>
          <Text style={{ fontWeight: "700" }}>থানাঃ </Text>
          {item.thana}
        </Text>
        <Text style={styles.infoText}>
          <Text style={{ fontWeight: "700" }}>ঠিকানাঃ  </Text>
          {item.address}
        </Text>
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
  return (
    <SafeAreaView style={styles.container}>
      <CustomNavbar />
      <SearchInput placeholderText="হাসপাতাল খুজুন ... " />
      <FlatList
        data={hospital_list}
        renderItem={renderItem}
        numColumns={1}
      />
      {/* add item plus icon  */}
      <AddItemIcon />
    </SafeAreaView>
  );
};

export default Hospitals;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hospitalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    width: scale(120),
    height: verticalScale(100),
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
  hospitalName: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "#333",
    marginBottom: verticalScale(4),
  },
  infoText: {
    fontSize: moderateScale(13),
    color: "#555",
    marginBottom: verticalScale(2),
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(10),
  },
  button: {
    borderRadius: moderateScale(5),
    // borderWidth:2,
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(5),
    // borderColor:'#2754cc'
  },
  buttonText: {
    fontWeight: "700",
    color: "#fff",
  },
});
