import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CustomNavbar from "@/src/components/atoms/CustomNavbar";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomNavbar />
      <View style={styles.cardRow}>
        {/* Personal Info Card */}
        <View style={styles.card}>
          <View style={styles.iconRow}>
            <FontAwesome name="user" size={18} color="#333" />
            <Text style={styles.sectionTitle}>ব্যক্তিগত তথ্য</Text>
          </View>

          <Text style={styles.label}>নামঃ</Text>
          <Text style={styles.value}>মোঃ নিশান আলী</Text>

          <Text style={styles.label}>শিক্ষাগত যোগ্যতাঃ</Text>
          <Text style={styles.value}>
            কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং বিভাগ, রুয়েট(৪র্থ বর্ষ)
          </Text>

          <Text style={styles.label}>মোবাইল নম্বরঃ</Text>
          <Text style={styles.value}>০১৭৭১৩৩৭৮৯৬ </Text>
        </View>

        {/* Teaching Info Card */}
        <View style={styles.card}>
          <View style={styles.iconRow}>
            <MaterialIcons name="menu-book" size={20} color="#333" />
            <Text style={styles.sectionTitle}>পড়ানোর তথ্য</Text>
          </View>

          <Text style={styles.label}>বিষয়ঃ</Text>
          <Text style={styles.value}>গণিত, পদার্থবিজ্ঞান, রসায়ন, আইসিটি</Text>

          <Text style={styles.label}>শ্রেণিঃ</Text>
          <Text style={styles.value}>৯ম-১০ম, ১১শ-১২শ</Text>

          <Text style={styles.label}>এলাকাসমুহঃ </Text>
          <Text style={styles.value}>রাজশাহী সদর, বোয়ালিয়া</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        {/* Personal Info Card */}
        <View style={styles.card}>
          <View style={styles.iconRow}>
            <FontAwesome name="user" size={18} color="#333" />
            <Text style={styles.sectionTitle}>ব্যক্তিগত তথ্য</Text>
          </View>

          <Text style={styles.label}>নামঃ</Text>
          <Text style={styles.value}>মোঃ নিশান আলী</Text>

          <Text style={styles.label}>শিক্ষাগত যোগ্যতাঃ</Text>
          <Text style={styles.value}>
            কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং বিভাগ, রুয়েট(৪র্থ বর্ষ)
          </Text>

          <Text style={styles.label}>মোবাইল নম্বরঃ</Text>
          <Text style={styles.value}>০১৭৭১৩৩৭৮৯৬ </Text>
        </View>

        {/* Teaching Info Card */}
        <View style={styles.card}>
          <View style={styles.iconRow}>
            <MaterialIcons name="menu-book" size={20} color="#333" />
            <Text style={styles.sectionTitle}>পড়ানোর তথ্য</Text>
          </View>

          <Text style={styles.label}>বিষয়ঃ</Text>
          <Text style={styles.value}>গণিত, পদার্থবিজ্ঞান, রসায়ন, আইসিটি</Text>

          <Text style={styles.label}>শ্রেণিঃ</Text>
          <Text style={styles.value}>৯ম-১০ম, ১১শ-১২শ</Text>

          <Text style={styles.label}>এলাকাসমুহঃ </Text>
          <Text style={styles.value}>রাজশাহী সদর, বোয়ালিয়া</Text>
        </View>
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
  scrollContainer: {
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: moderateScale(10),
    margin: moderateScale(5),
    backgroundColor: "#fff",
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card: {},
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  label: {
    fontWeight: "700",
    fontSize: moderateScale(14),
    color: "#333",
    marginTop: 8,
  },
  value: {
    fontSize: moderateScale(14),
    color: "#333",
    flexWrap: "wrap", // allow text wrapping
    maxWidth: moderateScale(140), // or adjust based on your layout
    lineHeight: 20,
  },
});
