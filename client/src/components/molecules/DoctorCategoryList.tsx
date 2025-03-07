import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import data from "@/src/assets/list_data";
import { router } from "expo-router";

const DoctorCategoryList = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => {
        router.push(item.route);
      }}
    >
      <Image source={item.image} style={styles.icon} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3} // Creates a grid with 3 columns
        columnWrapperStyle={styles.row} // Style for row spacing
      />
    </View>
  );
};

export default DoctorCategoryList;

const styles = StyleSheet.create({
  listContainer: {},
  row: {
    gap: scale(10),
    paddingHorizontal: moderateScale(10),
  },
  card: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    aspectRatio: 1,
    marginVertical: verticalScale(5),
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    elevation: moderateScale(4),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    width: scale(60),
    height: verticalScale(60),
    resizeMode: "contain",
  },
  text: {
    // marginTop: verticalScale(0),
    fontSize: moderateScale(14),
    textAlign: "center",
    fontWeight: "700",
    color: "#555",
  },
});
