import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomNavbar from "@/src/components/atoms/CustomNavbar";
import { moderateScale, verticalScale } from "react-native-size-matters";

const notificationsData = [
  {
    id: "1",
    type: "approval",
    title: "আপনার তথ্য অনুমোদিত হয়েছে!",
    message: "আপনার আপলোড করা হাসপাতাল তথ্য অনুমোদিত হয়েছে।",
    icon: "checkmark-circle-outline",
    color: "green",
    date: "2 Apr, 2025",
  },
  {
    id: "2",
    type: "emergency",
    title: "জরুরি রক্তের অনুরোধ!",
    message: "A+ রক্তদাতা প্রয়োজন। অনুগ্রহ করে যোগাযোগ করুন।",
    icon: "alert-circle-outline",
    color: "red",
    date: "31 Mar, 2025",
  },
  {
    id: "3",
    type: "event",
    title: "নতুন ইভেন্ট!",
    message: "রাজশাহীতে নতুন মেডিকেল ক্যাম্প আসছে!",
    icon: "calendar-outline",
    color: "blue",
    date: "2 Feb, 2025",
  },
  {
    id: "4",
    type: "update",
    title: "অ্যাপ আপডেট",
    message: "Rajshahi District Portal-এর নতুন আপডেট এসেছে!",
    icon: "cloud-download-outline",
    color: "purple",
    date: "29 Jan, 2025",
  },
];

const Index = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const markAsRead = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
    Alert.alert("নোটিফিকেশন মুছে ফেলা হয়েছে!");
  };

  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity
      style={styles.notificationCard}
      activeOpacity={0.8}
    >
      <Ionicons
        name={item.icon}
        size={28}
        color={item.color}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <MaterialCommunityIcons
        name="close-circle-outline"
        size={24}
        color="gray"
        // onPress={() => markAsRead(item.id)}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <CustomNavbar />
      <View style={styles.notificationContainer}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderNotificationItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  notificationContainer: {
    paddingVertical: verticalScale(10)
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    // marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    // elevation: 2,
    // borderWidth: 1,
    borderColor: '#ccc',
    borderBottomWidth: 1
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  message: {
    fontSize: 15,
    color: "#555",
    marginTop: 2,
  },
  date: {
    marginTop: verticalScale(3),
    color: '#666',
    fontSize: moderateScale(12)
  }
});

export default Index;
