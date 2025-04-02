import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import * as ImagePicker from "expo-image-picker";
import { Feather, FontAwesome } from "@expo/vector-icons";

const ImageUploadComponent = ({ image, setImage, imageStyles }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const pickImageFromGallery = async () => {
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
        "You need to allow access to the gallery"
      );
    }
    setModalVisible(false);
  };

  const takePhotoUsingCamera = async () => {
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
    setModalVisible(false)
  };

  return (
    <View style={[styles.imageContainer, imageStyles]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setModalVisible(true)}
      >
        <Image
          style={styles.image}
          source={
            image
              ? { uri: image }
              : require("@/src/assets/images/gallery_icon.png")
          }
        />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={()=>setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View>
              <Text style={{ fontSize: moderateScale(16), color: "#000" }}>
                Choose an option
              </Text>
            </View>
            <View style={styles.chooseOption}>
              <TouchableOpacity style={styles.options} onPress={takePhotoUsingCamera}>
                <Feather name="camera" size={24} color="black" />
                <Text>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.options} onPress={pickImageFromGallery}>
                <FontAwesome name="photo" size={24} color="black" />
                <Text>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default ImageUploadComponent;

const styles = StyleSheet.create({
  imageContainer: {
    width: scale(100),
    height: verticalScale(100),
    borderRadius: moderateScale(10),
    overflow: "hidden",
    marginBottom: verticalScale(10),
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  modalOverlay: {
    backgroundColor: "rgba(0,0,0,0.1)",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modalContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: verticalScale(30),
    backgroundColor: "#eee",
    width: "100%",
    padding: moderateScale(10),
    paddingBottom: 50,
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    elevation: 10,
  },
  chooseOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: scale(100),
  },
  options: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
