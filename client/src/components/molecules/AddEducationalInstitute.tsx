import { View, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { moderateScale, scale } from "react-native-size-matters";
import DropDownPickerComponent from "../atoms/DropDownPickerComponent";
import ButtonComponent from "../atoms/ButtonComponent";

import ImageUploadComponent from "../atoms/ImageUploadComponent";
import InputComponent from "../atoms/InputComponent";

const AddEducationalInstitute = ({ openModal, setOpenModal }: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Java", value: "java" },
    { label: "python", value: "python" },
  ]);

  //input field value
  const [institutionName, setInstitutionName] = useState("");
  const [establishedYear, setEstablishedYear] = useState("");
  const [thana, setThana] = useState("");
  const [address, setAddress] = useState("");
  //upload image
  const [image, setImage] = useState<string | null>(null);

  return (
    <Modal visible={openModal} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          {/* image upload  */}
          <ImageUploadComponent image={image} setImage={setImage} />
          <View style={styles.inputContainer}></View>
          <InputComponent
            label="নাম"
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
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
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
              }}
            />
            <ButtonComponent
              buttonText="সাবমিট করুন"
              style={styles.submitButton}
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
