import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import DonorSection from "./DonorSection"; // Component for donor registration and list
import BloodNeedSection from "./BloodNeedSection"; // Component for blood requests
import CustomNavbar from "@/src/components/atoms/CustomNavbar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("donor");

  return (
    <SafeAreaView style={styles.container}>
      <CustomNavbar />
      {/* Top Navigation Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "donor" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("donor")}
        >
          <Text
            style={[styles.tabText, activeTab === "donor" && styles.activeTabText]}
          >
            রক্তদাতা
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "bloodNeed" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("bloodNeed")}
        >
          <Text
            style={[styles.tabText, activeTab === "bloodNeed" && styles.activeTabText]}
          >
            রক্ত প্রয়োজন
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dynamic Section Rendering */}
      <View style={styles.contentContainer}>
        {activeTab === "donor" ? <DonorSection /> : <BloodNeedSection />}
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: verticalScale(10),
    backgroundColor: "#ffffff",
    elevation: 4,
  },
  tab: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(20),
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#2754cc",
  },
  tabText: {
    fontSize: moderateScale(16),
    color: "#555",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#2754cc",
  },
  contentContainer: {
    flex: 1,
    padding: moderateScale(10),
  },
});
