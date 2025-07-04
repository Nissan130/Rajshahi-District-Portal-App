import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Linking,
    Alert,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const donor_list = [
    {
        id: 1,
        name: "সাদিক রহমান",
        bloodGroup: "A+",
        phone: "01712345678",
        lastDonation: "১২ জুন ২০২৫",
        address: "তালাইমারি, রাজশাহী",
        profileImage: require("@/src/assets/images/profile.png"),
    },
    {
        id: 2,
        name: "আবির হাসান",
        bloodGroup: "O-",
        phone: "01898765432",
        lastDonation: "৫ মে ২০২৫",
        address: "সাহেব বাজার, রাজশাহী",
        profileImage: require("@/src/assets/images/profile.png"),
    },
    {
        id: 3,
        name: "নাসরিন আক্তার",
        bloodGroup: "B+",
        phone: "01911223344",
        lastDonation: "২০ এপ্রিল ২০২৫",
        address: "ভাটাপাড়া, রাজশাহী",
        profileImage: require("@/src/assets/images/profile.png"),
    },
    {
        id: 4,
        name: "সাকিলা খাতুন",
        bloodGroup: "AB+", 
        phone: "01911223344",
        lastDonation: "২০ এপ্রিল ২০২৫",
        address: "ভাটাপাড়া, রাজশাহী",
        profileImage: require("@/src/assets/images/profile.png"),
    },
];

const DonorSection = () => {

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

    //send message
    const sendMessage = (phoneNumber: string) => {
  if (!phoneNumber) {
    Alert.alert("ফোন নাম্বার খালি রাখা যাবে না");
    return;
  }

  const smsUrl = `sms:${phoneNumber}`;

  Linking.canOpenURL(smsUrl)
    .then((supported) => {
      if (!supported) {
        Alert.alert("মেসেজ অ্যাপ খোলা যাচ্ছে না");
      } else {
        return Linking.openURL(smsUrl);
      }
    })
    .catch((err) => {
      console.error("Messaging error", err);
      Alert.alert("কোনো সমস্যা হয়েছে! পরে আবার চেষ্টা করুন");
    });
};

    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.description}>
                এখানে আপনি রক্তদাতাদের তালিকা দেখতে পারবেন এবং নতুন রক্তদাতা হিসেবে নিবন্ধন করতে পারবেন।
            </Text>

            {donor_list.map((donor) => (
                <View key={donor.id} style={styles.card}>
                    <Image source={donor.profileImage} style={styles.image} />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{donor.name}</Text>
                        <Text style={styles.bloodGroup}>রক্তের গ্রুপঃ <Text style={{color: "red"}}>{donor.bloodGroup} </Text></Text>
                        <Text style={styles.lastDonation}>সর্বশেষ রক্তদানঃ  {donor.lastDonation}</Text>
                        <Text style={styles.address}>ঠিকানাঃ {donor.address}</Text>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: "#ff8000" }]}
                                onPress={() => makePhoneCall(donor.phone)}
                            >
                                <Text style={styles.buttonText}>কল করুন</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: "#2754cc" }]}
                                onPress={() => sendMessage(donor.phone)}
                            >
                                <Text style={styles.buttonText}>মেসেজ দিন</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export default DonorSection;

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
        color: "#2754cc",
    },
    description: {
        fontSize: moderateScale(14),
        color: "#333",
        lineHeight: 22,
        marginBottom: verticalScale(10),
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: verticalScale(15),
        backgroundColor: "#f9f9f9",
        padding: moderateScale(10),
        borderRadius: moderateScale(8),
        elevation: 1,
    },
    image: {
        width: scale(80),
        height: scale(80),
        borderRadius: 25,
        marginRight: scale(10),
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: moderateScale(16),
        fontWeight: "bold",
        color: "#333",
    },
    bloodGroup: {
        fontSize: moderateScale(13),
        color: "#555",
    },
    lastDonation: {
        fontSize: moderateScale(13),
        color: "#555",
        // marginBottom: verticalScale(5)
    },
    address: {
        fontSize: moderateScale(13),
        color: "#555",
        marginBottom: verticalScale(5)
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        // gap: scale(10),
    },
    button: {
        paddingVertical: verticalScale(4),
        paddingHorizontal: scale(12),
        borderRadius: moderateScale(5),
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: moderateScale(13),
    },
});
