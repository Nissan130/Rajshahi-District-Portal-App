import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import * as ImagePicker from "expo-image-picker";

const ImageUploadComponent = ({ image, setImage , imageStyles}: any) => {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={[styles.imageContainer, imageStyles]}>
      <TouchableOpacity activeOpacity={0.7} onPress={pickImage}>
        <Image
          style={styles.image}
          source={
            image
              ? { uri: image }
              : require("@/src/assets/images/upload_logo.png")
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageUploadComponent;

const styles = StyleSheet.create({
  imageContainer: {
    width: scale(140),
    height: verticalScale(120),
    borderRadius: moderateScale(10),
    overflow: "hidden",
    marginBottom: verticalScale(10),
    // backgroundColor:'red'
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    // borderRadius: moderateScale(20)
  },
});
