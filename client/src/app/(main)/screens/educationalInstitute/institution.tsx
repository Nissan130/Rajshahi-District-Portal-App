import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import institution_list from "@/src/assets/institution_list";
import SearchInput from "@/src/components/atoms/SearchInput";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import AddItemIcon from "@/src/components/atoms/AddItemIcon";
import AddEducationalInstitute from "@/src/components/molecules/AddEducationalInstitute";

const Institution = ({
  institutionType,
  institutionTypeBan,
  filteredInstitution,
  refreshInstitutions,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const renderItem = ({ item }: any) => (
    <View style={styles.institutionContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.image.url }} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.institutionName}>{item.institutionName}</Text>
        <Text
          style={styles.infoText}
        >{`স্থাপিতঃ ${item.establishedYear} সাল`}</Text>
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
            <Text style={styles.buttonText}>কল করুন</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <SearchInput placeholderText={`${institutionTypeBan} খুজুন...`} />

      <FlatList
        data={filteredInstitution}
        renderItem={renderItem}
        numColumns={1}
      />

      {/* Add item plus icon  */}
      <AddItemIcon
        onPress={() => {
          setOpenModal(true);
        }}
      />
      {/* show input modal  */}
      <AddEducationalInstitute
        openModal={openModal}
        setOpenModal={setOpenModal}
        institutionType={institutionType}
        institutionTypeBan={institutionTypeBan}
        refreshInstitutions={refreshInstitutions}
      />
    </View>
  );
};

export default Institution;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  institutionContainer: {
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
  institutionName: {
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
    marginTop: verticalScale(3)
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
    color: '#fff'
  },
});
