import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomNavbar from "@/src/components/atoms/CustomNavbar";
import SearchInput from "@/src/components/atoms/SearchInput";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import AddItemIcon from "@/src/components/atoms/AddItemIcon";
import moment from 'moment'
import api from "@/src/utils/api";
import Adddiagnostics from "@/src/components/molecules/AddDiagnostics";
import Toast from "react-native-toast-message";

const Diagnostics = () => {
  const [diagnostics, setDiagnostics] = useState([]);
  const [openDiagnosticsModal, setOpenDiagnosticsModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  //make phone call
  const makePhoneCall = (phoneNumber: string) => {
    if (!phoneNumber) {
      Alert.alert("ফোন নাম্বার খালি রাখা যাবে না");
      return;
    }

    const phoneUrl = `tel:${phoneNumber}`;

    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (!supported) {
          Alert.alert("আপনার ফোন এই নাম্বারে কল করতে পারছে না");
        } else {
          return Linking.openURL(phoneUrl);
        }
      })
      .catch((err) => {
        console.error("Dialer error", err);
        Alert.alert("কোনো সমস্যা হয়েছে! পরে আবার চেষ্টা করুন");
      });
  };


  const openMapWithPlace = (place: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert("Google Maps খোলা যাচ্ছে না");
        }
      })
      .catch((err) => {
        Alert.alert("কিছু ভুল হয়েছে", err.message);
      });
  };


  //fetch diagnostics
  useEffect(() => {
    const fetchDiagnostics = async () => {
      try {
        const { data } = await api.get("/main/diagnostics/get-diagnostics");
        setDiagnostics(data.getdiagnosticData);
      } catch (error: any) {
            const errorMessage =
              error?.response?.data?.message ||
              error?.message ||
              "হাসপাতালের তথ্য আনতে সমস্যা হয়েছে!";
      
            // if (__DEV__) {
            //   console.error("Hospital fetch error:", message);
            // }
      
            Toast.show({
              type: "error",
              text1: errorMessage,
            });
          }

    };
    fetchDiagnostics();
  }, [refresh]);

  //format date
  const formatDate = (isoDate) => {
    return moment(isoDate).format("D MMMM YYYY");
  };

  // Refresh function to reload data
  const refreshDiagnostics = () => {
    setRefresh((prev) => !prev);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.diagnosticsContainer}>
      <View style={styles.adderInfo}>
        <View style={styles.adderImageContainer}>
          <Image
            source={{ uri: item.adderImage.url }}
            style={styles.adderImage}
          />
        </View>
        <View style={{ gap: 2 }}>
          <Text style={styles.adderNameText}>{item.adderName}</Text>
          <Text style={styles.submissionDate}>
            {formatDate(item.createdAt)}
          </Text>
        </View>
      </View>
      <View style={styles.diagnosticsInfo}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: item.diagnosticImage.url }}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.diagnosticsName}>{item.diagnosticName}</Text>
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: "700" }}>থানাঃ </Text>
            {item.thana}
          </Text>
          <Text style={styles.infoText}>
            <Text style={{ fontWeight: "700" }}>ঠিকানাঃ </Text>
            {item.address}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.button, { backgroundColor: "#ff8000" }]}
              onPress={() => openMapWithPlace(`${item.diagnosticName}, ${item.address}`)}
            >
              <Text style={styles.buttonText}>গুগল ম্যাপ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.button, { backgroundColor: "#2754cc" }]}
              onPress={() => makePhoneCall(item.hotlineNumber)}
            >
              <Text style={[styles.buttonText, { color: "#fff" }]}>হটলাইন</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <CustomNavbar />
      <SearchInput placeholderText="ডায়াগনস্টিক সেন্টার খুজুন... " />
      <FlatList data={diagnostics} renderItem={renderItem} numColumns={1} />
      {/* add item plus icon  */}
      <AddItemIcon onPress={() => setOpenDiagnosticsModal(true)} />

      <Adddiagnostics
        openDiagnosticsModal={openDiagnosticsModal}
        setOpenDiagnosticsModal={setOpenDiagnosticsModal}
        refreshDiagnostics={refreshDiagnostics}
      />
      <Toast />
    </SafeAreaView>
  );
};

export default Diagnostics;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  diagnosticsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    margin: moderateScale(3),
    padding: moderateScale(10),
    // borderWidth: 1,
    elevation: 1,
    borderRadius: moderateScale(10),
    backgroundColor: "#fff",
  },
  adderInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: scale(10),

  },
  adderImageContainer: {
    width: scale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(100),
  },
  adderImage: {
    width: "100%",
    height: "100%",
    borderRadius: moderateScale(100),
  },
  adderNameText: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: '#333'
  },
  submissionDate: {
    fontSize: moderateScale(12),
    fontWeight: "600",
    color: '#555'
  },

  diagnosticsInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    gap: scale(12),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  imageContainer: {
    width: scale(120),
    height: verticalScale(100),
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
  diagnosticsName: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "#333",
    marginBottom: verticalScale(4),
  },
  infoText: {
    fontSize: moderateScale(13),
    color: "#555",
    marginBottom: verticalScale(2),
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: scale(70),
    marginTop: verticalScale(10),
  },
  button: {
    borderRadius: moderateScale(5),
    // borderWidth:2,
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(5),
    // borderColor:'#2754cc'
  },
  buttonText: {
    fontWeight: "700",
    color: "#fff",
  },
});
