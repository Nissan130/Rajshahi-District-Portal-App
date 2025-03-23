import { View, Modal, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import DropDownPickerComponent from "../atoms/DropDownPickerComponent";
import ButtonComponent from "../atoms/ButtonComponent";
import ImageUploadComponent from "../atoms/ImageUploadComponent";
import InputComponent from "../atoms/InputComponent";
import { Text } from "react-native";
import * as mime from "react-native-mime-types";
import { router } from "expo-router";
import thana_list from "@/src/assets/thana_list";
import Loading from "../atoms/Loading";

const AddEducationalInstitute = ({
  openModal,
  setOpenModal,
  institutionType,
  institutionTypeBan,
  refreshInstitutions,
}: any) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(thana_list);
  // console.log(institutionTypeEnglish);

  //input field value
  const [institutionName, setInstitutionName] = useState("");
  const [establishedYear, setEstablishedYear] = useState("");
  const [thana, setThana] = useState("");
  const [address, setAddress] = useState("");
  //upload image
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsloading] = useState(false);

  //handle submit
  const handleSubmit = async () => {
    try {
      if (
        !institutionName ||
        !establishedYear ||
        !thana ||
        !address ||
        !image
      ) {
        Alert.alert("All fields are required");
        return ;
      }

      setIsloading(true)
      //get actual file type
      const imageType = mime.lookup(image) || "image/jpg";

      // console.log(imageType);

      const formData = new FormData();
      formData.append("image", {
        uri: image,
        name: `profile.${imageType.split("/")[1]}`, // File name
        type: imageType, // MIME type
      } as any);

      formData.append("institutionName", institutionName);
      formData.append("establishedYear", establishedYear);
      formData.append("thana", thana);
      formData.append("address", address);
      formData.append("institutionType", institutionType);

      const res = await fetch(
        "http://10.1.1.108:3000/api/main/educational-institution/add-institution",
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      refreshInstitutions(); //re-fetch data after adding

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        Alert.alert(data?.message);
      } else {
        Alert.alert(data?.message);
      }
      setOpenModal(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsloading(false)
      setInstitutionName("");
      setEstablishedYear("");
      setThana("");
      setAddress(""),
      setImage(null)
    }
  };

  return (
    <Modal
      visible={openModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setOpenModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          <Text
            style={styles.heading}
          >{`${institutionTypeBan} যুক্ত করুন`}</Text>
          {/* image upload  */}
          <ImageUploadComponent
            image={image}
            setImage={setImage}
            imageStyles={{ width: 100, height: 100 }}
          />
          <View style={styles.inputContainer}></View>
          <InputComponent
            label={`${institutionTypeBan} এর নাম`}
            icon="pen-alt"
            iconPackage="FontAwesome5"
            keyboardType="default"
            value={institutionName}
            setValue={(e: any) => {
              setInstitutionName(e);
            }}
          />
          <InputComponent
            label="স্থাপিত সাল"
            icon="calendar"
            iconPackage="FontAwesome"
            keyboardType="default"
            value={establishedYear}
            setValue={(e: any) => {
              setEstablishedYear(e);
            }}
          />
          <DropDownPickerComponent
            open={open}
            value={thana}
            items={items}
            setOpen={setOpen}
            setValue={setThana}
            setItems={setItems}
          />

          <InputComponent
            label="ঠিকানা"
            icon="location-sharp"
            iconPackage="Ionicons"
            keyboardType="default"
            value={address}
            setValue={(e: any) => {
              setAddress(e);
            }}
          />
          <View style={styles.buttonContainer}>
            <ButtonComponent
              buttonText="বাতিল করুন"
              style={styles.cancelButton}
              onPress={() => {
                setOpenModal(false);
                setInstitutionName("");
                setEstablishedYear(""), setThana("");
                setAddress("");
                setImage(null)
              }}
            />
            <ButtonComponent
              buttonText={isLoading ? <Loading /> : "সাবমিট করুন"}
              style={styles.submitButton}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddEducationalInstitute;
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  modalBody: {
    backgroundColor: "#fff",
    width: "90%",
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    elevation: 10,
    alignItems: "center",
  },
  heading: {
    fontSize: moderateScale(20),
    paddingBottom: verticalScale(10),
    fontWeight: "700",
  },
  inputContainer: {},
  buttonContainer: {
    flexDirection: "row",
    gap: scale(70),
    alignItems: "center",
    justifyContent: "space-between",
  },
  submitButton: {
    paddingHorizontal: scale(10),
  },
  cancelButton: {
    paddingHorizontal: scale(10),
    backgroundColor: "#ff8000",
    borderColor: "#ff8000",
  },
});
