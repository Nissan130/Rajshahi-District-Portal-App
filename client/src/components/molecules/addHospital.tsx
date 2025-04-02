import { View, Text, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import ImageUploadComponent from "../atoms/ImageUploadComponent";
import InputComponent from "../atoms/InputComponent";
import ButtonComponent from "../atoms/ButtonComponent";
import DropDownPickerComponent from "../atoms/DropDownPickerComponent";
import thana_list from "@/src/assets/thana_list";
import { scale } from "react-native-size-matters";

const AddHospital = ({ openHospitalModal, setOpenHospitalModal }) => {
  const [image, setImage] = useState<string | null>(null);
  const [openDropDown, setOpenDropdown] = useState(false);
  const [dropDownItems, setDropDownItems] = useState(thana_list);

  const [thana, setThana] = useState("");
  return (
    <Modal
      visible={openHospitalModal}
      transparent={true}
      onRequestClose={() => setOpenHospitalModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          <View style={styles.imageContainer}>
            <Text style={styles.headingText}>হাসপাতালের তথ্য যুক্ত করুন</Text>
            <ImageUploadComponent
              image={image}
              setImage={setImage}
              imageStyles={{ width: 100, height: 100 }}
            />
          </View>
          <View style={styles.formContainer}>
            <InputComponent
              label="হাসপাতালের নাম"
              icon="hospital-alt"
              iconPackage="FontAwesome5"
              keyboardType="default"
            />
            <DropDownPickerComponent
              open={openDropDown}
              items={dropDownItems}
              value={thana}
              setOpen={setOpenDropdown}
              setItems={setDropDownItems}
              setValue={setThana}
            />
            <InputComponent
              label="ঠিকানা"
              icon="location-pin"
              iconPackage="SimpleLineIcons"
              keyboardType="default"
            />
            <InputComponent
              label="হটলাইন নাম্বার"
              icon="mobile"
              iconPackage="FontAwesome"
              keyboardType="number"
            />
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              buttonText="বাতিল করুন" 
              style={styles.cancelButton}
              activeOpacity={0.8}
              onPress= {()=>{setOpenHospitalModal(false), setImage(null)}}
            />
            <ButtonComponent
              buttonText="সাবমিট করুন"
              style={styles.submitButton}
              activeOpacity={0.8}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddHospital;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  modalBody: {
    width: "90%",
    backgroundColor: "#fff",
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    alignItems: "center",
    elevation: 10
  },
  headingText: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: "#333",
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: verticalScale(5),
  },
  formContainer: {},
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: scale(50),
  },
  cancelButton: {
    paddingHorizontal: scale(15),
    backgroundColor: '#ff8000',
  },
  submitButton: {
    paddingHorizontal: scale(15),
  },
});
