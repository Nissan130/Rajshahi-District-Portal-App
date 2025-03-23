import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <ActivityIndicator color="#fff" />
      <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
        অপেক্ষা করুন
      </Text>
    </View>
  );
};

export default Loading;
