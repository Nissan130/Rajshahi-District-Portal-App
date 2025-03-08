import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomNavbar from "@/src/components/atoms/CustomNavbar";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import School from "./School";
import College from "./College";
import Madrasha from "./Madrasha";
import CoachingCenter from "./CoachingCenter";
import University from "./University";

const EducationalInstitute = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [institutionTpye, setInstitutionType] = useState("স্কুল");
  const InstitutionCategories = [
    "স্কুল",
    "কলেজ",
    "মাদরাসা",
    "বিশ্ববিদ্যালয়",
    "কোচিং সেন্টার",
  ];

  const handleInstitutionType = () => {
    switch (institutionTpye) {
      case "স্কুল":
        return <School />;
      case "কলেজ":
        return <College />;
      case "মাদরাসা":
        return <Madrasha />;
      case "বিশ্ববিদ্যালয়":
        return <University />;
      case "কোচিং সেন্টার":
        return <CoachingCenter />;
      default:
        return <School />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomNavbar />
      <View style={styles.instituteContainer}>
        <View style={styles.institutionHeadings}>
          {InstitutionCategories.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => {
                  setActiveIndex(index);
                  setInstitutionType(item);
                }}
                style={[
                  styles.institutionHeadingButton,
                  activeIndex === index && styles.activeButton,
                ]}
              >
                <Text
                  style={activeIndex === index && styles.activeInstitutionText}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {handleInstitutionType()}
      </View>
    </SafeAreaView>
  );
};

export default EducationalInstitute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  instituteContainer: {
    flex: 1,
  },
  institutionHeadings: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: scale(10),
    backgroundColor: "#e8edf9",
    elevation: moderateScale(2),
  },
  institutionHeadingButton: {
    borderBottomWidth: 2,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    borderBottomColor: "transparent",
  },
  activeButton: {
    borderBottomColor: "#ff8000",
  },
  activeInstitutionText: {
    color: "#ff8000",
    fontWeight: "700",
  },
});
