import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import CustomNavbar from "@/src/components/atoms/CustomNavbar";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Institution from "./institution";
import api from "@/src/utils/api";
import Toast from "react-native-toast-message";

const EducationalInstitute = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [institutions, setInstitutions] = useState([]);
  const [filteredInstitution, setFilteredInstitution] = useState([]);
  const [institutionType, setInstitutionType] = useState("school");
  const [institutionTypeBan, setInstitutionTypeBan] = useState("");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const institutionTypeBangla = [
    "স্কুল",
    "কলেজ",
    "মাদরাসা",
    "বিশ্ববিদ্যালয়",
    "কোচিং সেন্টার",
  ];
  const InstitutionCategories = [
    "school",
    "college",
    "madrasha",
    "university",
    "coachingCenter",
  ];

  // Fetch institutions from API
  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(
          "/main/educational-institution/get-institution"
        );
        setInstitutions(data.getData || []);
      } catch (error) {
        console.error("Fetch Error:", error);
        Toast.show({
          type: "error",
          text1: "ডাটা আনতে সমস্যা হয়েছে! দয়া করে আবার চেষ্টা করুন।",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchInstitutions();
  }, [refresh]);

  // Filter institutions based on the selected type
  useEffect(() => {
    if (institutions.length > 0) {
      const filtered = institutions.filter(
        (item) => item.institutionType === institutionType
      );
      setFilteredInstitution(filtered);
    }
  }, [institutions, institutionType]);

  // Refresh function to reload data
  const refreshInstitutions = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomNavbar />
      <View style={styles.instituteContainer}>
        <View style={styles.institutionHeadings}>
          {InstitutionCategories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => {
                setActiveIndex(index);
                setInstitutionType(item);
                setInstitutionTypeBan(institutionTypeBangla[index]);
              }}
              style={[
                styles.institutionHeadingButton,
                activeIndex === index && styles.activeButton,
              ]}
            >
              <Text
                style={activeIndex === index && styles.activeInstitutionText}
              >
                {institutionTypeBangla[index]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Show loading indicator while fetching data */}
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ff8000" />
            <Text>লোড হচ্ছে...</Text>
          </View>
        ) : (
          <Institution
            institutionType={institutionType}
            institutionTypeBan={institutionTypeBan}
            filteredInstitution={filteredInstitution}
            refreshInstitutions={refreshInstitutions}
          />
        )}
      </View>
      <Toast />
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
