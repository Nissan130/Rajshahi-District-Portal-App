import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import * as ImagePicker from "expo-image-picker";

const ImageUploadComponent = ({ image, setImage, imageStyles }: any) => {
  const pickImage = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted) {
      // Let user pick an image from gallery
      let imageResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      if (!imageResult.canceled) {
        setImage(imageResult.assets[0].uri);
      }
    } else {
      Alert.alert(
        "Permission denied",
        "You need to allow access to the gallery."
      );
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (result.granted) {
      // Let user take a photo using camera
      let cameraResult = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        quality: 1,
      });

      if (!cameraResult.canceled) {
        setImage(cameraResult.assets[0].uri);
      }
    } else {
      Alert.alert(
        "Permission denied",
        "You need to allow access to the camera."
      );
    }
  };

  const handleImageSelection = () => {
    Alert.alert(
      "Choose an option",
      "Select an image from gallery or take a photo",
      [
        {
          text: "Take Photo",
          onPress: takePhoto,
        },
        {
          text: "Select from Gallery",
          onPress: pickImage,
        },
      ]
    );
  };

  return (
    <View style={[styles.imageContainer, imageStyles]}>
      <TouchableOpacity activeOpacity={0.7} onPress={handleImageSelection}>
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
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
