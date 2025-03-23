import { View, StyleSheet } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const DropDownPickerComponent = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.inputContainer, { borderColor: value ? "red" : "#aaa" }]}
      >
        {/* Icon Positioned Inside the Dropdown */}
        <FontAwesome6 name="map-pin" size={20} style={styles.icon} />

        <DropDownPicker
          style={[
            styles.dropdownPicker,
            { borderColor: value ? "#2754cc" : "#aaa" },
          ]}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="থানা"
          containerStyle={styles.dropdownContainer}
          dropDownContainerStyle={styles.dropdownList}
          labelStyle={[styles.label, { color: value ? "#333" : "#aaa" }]}
          textStyle={styles.text}
        />
      </View>
    </View>
  );
};

export default DropDownPickerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: verticalScale(35),
    marginTop: verticalScale(20),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: moderateScale(10),
    borderColor: "#aaa",
    position: "relative",
  },
  icon: {
    position: "absolute",
    left: scale(10),
    color: "#888",
  },
  dropdownPicker: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#aaa",
    backgroundColor: "transparent",
    paddingLeft: scale(40),
  },
  dropdownContainer: {
    width: "100%",
  },
  dropdownList: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: moderateScale(10),
  },
  label: {
    fontWeight: "600",
    color: "#aaa",
  },
  text: {
    color: "#333",
  },
});
