import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomNavbar from "@/src/components/atoms/CustomNavbar";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Institution from "./institution";

const EducationalInstitute = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [institutions, setInstitutions] = useState([]);
  const [filteredInstitution, setFilteredInstitution] = useState([]);
  const [institutionType, setInstitutionType] = useState("school");
  const [institutionTypeBan, setInstitutionTypeBan] = useState("");
  const [refresh, setRefresh] = useState(false);

  console.log(institutionType);
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

  useEffect(() => {
    const fetchInstitutions = async () => {
      const res = await fetch(
        "http://10.1.1.108:3000/api/main/educational-institution/get-institution"
      );
      const { getData } = await res.json();
      setInstitutions(getData);
    };
    fetchInstitutions();
  }, [refresh]); 

  //filter data on data mount or type chnages
  useEffect(() => {
    if (institutions.length > 0) {
      // filter institution by specific type
      const filteredType = institutions.filter(
        (item) => item.institutionType === institutionType
      );
      setFilteredInstitution(filteredType);
    }

  }, [institutions, institutionType]);

  //toggle refresh after refetching
  const refreshInstitutions = ()=> {
    setRefresh((prev)=> !prev)
  }

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
            );
          })}
        </View>
        {/* {handleInstitutionType()} */}
        {/* render institution  */}
        <Institution
          institutionType={institutionType}
          institutionTypeBan={institutionTypeBan}
          filteredInstitution={filteredInstitution}
          refreshInstitutions={refreshInstitutions}
        />
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
