import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const bloodRequests = [
  {
    id: 1,
    name: "মাহিন ইসলাম",
    bloodGroup: "A+",
    phone: "01712345678",
    dateNeeded: "৭ জুলাই ২০২৫",
    location: "রাজশাহী মেডিকেল কলেজ হাসপাতাল",
    reason: "দুর্ঘটনায় আহত",
  },
  {
    id: 2,
    name: "রাহেলা খাতুন",
    bloodGroup: "O-",
    phone: "01876543210",
    dateNeeded: "৮ জুলাই ২০২৫",
    location: "প্রাইভেট ক্লিনিক, সাহেব বাজার",
    reason: "সিজার অপারেশন",
  },
  {
    id: 3,
    name: "তাসনুভা রহমান",
    bloodGroup: "AB+",
    phone: "01900112233",
    dateNeeded: "৯ জুলাই ২০২৫",
    location: "ল্যাবএইড হাসপাতাল",
    reason: "থ্যালাসেমিয়া",
  },
];

const makePhoneCall = (phoneNumber: string) => {
  if (!phoneNumber) {
    Alert.alert("ফোন নাম্বার খালি রাখা যাবে না");
    return;
  }

  const phoneUrl = `tel:${phoneNumber}`;
  Linking.canOpenURL(phoneUrl)
    .then((supported) => {
      if (supported) {
        return Linking.openURL(phoneUrl);
      } else {
        Alert.alert("কল করতে ব্যর্থ");
      }
    })
    .catch(() => {
      Alert.alert("কোনো সমস্যা হয়েছে, পরে আবার চেষ্টা করুন");
    });
};

const BloodNeedSection = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.description}>
        যদি আপনার বা আপনার পরিচিত কারো রক্তের প্রয়োজন হয়, তাহলে এখানে রক্তের অনুরোধ করতে পারবেন।
      </Text>

      {bloodRequests.map((request) => (
        <View key={request.id} style={styles.card}>
          <Text style={styles.name}>নামঃ {request.name}</Text>
          <Text style={styles.bloodGroup}>
            রক্তের গ্রুপঃ <Text style={{ color: "red" }}>{request.bloodGroup}</Text>
          </Text>
          <Text style={styles.detail}>ঠিকানাঃ {request.location}</Text>
          <Text style={styles.detail}>তারিখঃ {request.dateNeeded}</Text>
          <Text style={styles.detail}>কারণঃ {request.reason}</Text>
          <TouchableOpacity
            style={styles.callButton}
            onPress={() => makePhoneCall(request.phone)}
          >
            <Text style={styles.callButtonText}>কল করুন</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default BloodNeedSection;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(15),
    backgroundColor: "#fff",
    borderRadius: moderateScale(8),
    elevation: 2,
  },
  heading: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    marginBottom: verticalScale(8),
    color: "#cc0000",
  },
  description: {
    fontSize: moderateScale(14),
    color: "#333",
    lineHeight: 22,
    marginBottom: verticalScale(10),
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: moderateScale(12),
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(12),
    elevation: 1,
  },
  name: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    color: "#333",
  },
  bloodGroup: {
    fontSize: moderateScale(14),
    color: "#444",
    marginVertical: verticalScale(4),
  },
  detail: {
    fontSize: moderateScale(13),
    color: "#555",
  },
  callButton: {
    marginTop: verticalScale(10),
    backgroundColor: "#cc0000",
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(5),
    alignItems: "center",
  },
  callButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
