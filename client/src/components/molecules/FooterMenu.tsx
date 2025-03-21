import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Entypo, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { router } from "expo-router";

const menuItems = [
  {
    name: "হোম",
    icon: (color: any) => <Entypo name="home" size={24} color={color} />,
    route: "/(main)/home",
  },
  {
    name: "যোগাযোগ",
    icon: (color: any) => <Feather name="phone" size={24} color={color} />,
    route: "/(main)/contact",
  },
  {
    name: "নোটিফিকেশন",
    icon: (color: any) => (
      <Ionicons name="notifications" size={24} color={color} />
    ),
    route: "/(main)/notification",
  },
  {
    name: "প্রোফাইল",
    icon: (color: any) => <FontAwesome5 name="user" size={24} color={color} />,
    route: "/(main)/profile",
  },
];

const FooterMenu = ({ currentPage , setCurrentPage}:any) => {

  return (
    <View style={styles.footerMenuContainer}>
      {menuItems.map((item, index): any => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          style={styles.footerButton}
          onPress={() => {
            setCurrentPage(item.name);
            router.push(item.route);
          }}
        >
          {item.icon(currentPage === item.name ? "#2754cc" : "#888")}
          <Text
            style={[
              styles.footerButtonText,
              currentPage === item.name && { color: "#2754cc" },
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FooterMenu;

const styles = StyleSheet.create({
  footerMenuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: verticalScale(50),
    backgroundColor: "#fff",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(3),
    borderTopWidth: 1,
    borderColor: "#eee",
    elevation: 10
  },
  footerButton: {
    alignItems: "center",
    gap: verticalScale(2),
  },
  footerButtonText: {
    fontSize: moderateScale(15),
    fontWeight: "600",
    color: "#888",
  },
});
