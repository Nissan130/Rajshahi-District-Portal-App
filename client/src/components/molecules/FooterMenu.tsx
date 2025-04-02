import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { memo } from "react";
import { Entypo, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { router } from "expo-router";

const menuItems = [
  {
    name: "হোম",
    icon: (color) => <Entypo name="home" size={24} color={color} />,
    route: "/(main)/home",
  },
  {
    name: "যোগাযোগ",
    icon: (color) => <Feather name="phone" size={24} color={color} />,
    route: "/(main)/contact",
  },
  {
    name: "নোটিফিকেশন",
    icon: (color) => <Ionicons name="notifications" size={24} color={color} />,
    route: "/(main)/notification",
  },
  {
    name: "প্রোফাইল",
    icon: (color) => <FontAwesome5 name="user" size={24} color={color} />,
    route: "/(main)/profile",
  },
];

const FooterMenu = ({ currentPage, setCurrentPage }) => {
  const handlePress = (item) => {
    if (currentPage !== item.name) {
      setCurrentPage(item.name);
      router.push(item.route);
    }
  };

  return (
    <View style={styles.footerMenuContainer}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={styles.footerButton}
          onPress={() => handlePress(item)}
        >
          {item.icon(currentPage === item.name ? "#2754cc" : "#888")}
          <Text
            style={[
              styles.footerButtonText,
              currentPage === item.name && {
                color: "#2754cc",
                fontWeight: "700",
              },
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default memo(FooterMenu); // Prevents unnecessary re-renders

const styles = StyleSheet.create({
  footerMenuContainer: {   
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: scale(2),
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: verticalScale(5),
    paddingBottom: verticalScale(10),
    borderTopWidth: 1,
    borderColor: "#eee",
    elevation: 3,
    position: 'absolute',
    bottom: 0
  },
  footerButton: {
    alignItems: "center",
    gap: verticalScale(2),
    paddingHorizontal: scale(18),
  },
  footerButtonText: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: "#888",
  },
});
