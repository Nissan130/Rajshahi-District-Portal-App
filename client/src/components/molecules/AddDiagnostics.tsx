import { View, Text, Modal, StyleSheet, Alert } from "react-native";
import React, { useContext, useState } from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import ImageUploadComponent from "../atoms/ImageUploadComponent";
import InputComponent from "../atoms/InputComponent";
import ButtonComponent from "../atoms/ButtonComponent";
import DropDownPickerComponent from "../atoms/DropDownPickerComponent";
import thana_list from "@/src/assets/thana_list";
import { scale } from "react-native-size-matters";
import * as mime from "react-native-mime-types"; 
import api from "@/src/utils/api";
import { GlobalContext } from "@/src/context/globalContext";

const AddDiagnostics = ({
  openDiagnosticsModal,
  setOpenDiagnosticsModal,
  refreshDiagnostics,
}) => {
  //user info
  const { userState } = useContext(GlobalContext);
  const adderName = userState?.user?.name;
  const adderId = userState?.user?._id;
  const adderImageId = userState?.user?.image?.public_id;
  const adderImageUrl = userState?.user?.image?.url;
  // console.log(adderName)
  // console.log(adderId);
  // console.log(adderImageId);
  // console.log(adderImageUrl);

  const [openDropDown, setOpenDropdown] = useState(false);
  const [dropDownItems, setDropDownItems] = useState(thana_list);

  //input field value
  const [diagnosticName, setDiagnosticName] = useState("");
  const [thana, setThana] = useState("");
  const [address, setAddress] = useState("");
  const [hotlineNumber, sethotlineNumber] = useState("");
  //upload image
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsloading] = useState(false);

  // console.log(diagnosticName)
  // console.log(thana)
  // console.log(address)
  // console.log(hotlineNumber)
  // console.log(image)

  //handle submit
  const handleSubmitDiagnostic = async () => {
    try {
      if (
        !adderId ||
        !adderImageId ||
        !adderImageUrl ||
        !adderName ||
        !diagnosticName ||
        !thana ||
        !address ||
        !hotlineNumber ||
        !image
      ) {
        Alert.alert("All fields are required");
        return;
      }

      setIsloading(true);
      //get actual file type
      const imageType = mime.lookup(image) || "image/jpg";

      // console.log(imageType);

      const formData = new FormData();
      formData.append("image", {
        uri: image,
        name: `profile.${imageType.split("/")[1]}`, // File name
        type: imageType, // MIME type
      } as any);

      formData.append("adderId", adderId);
      formData.append("adderImageId", adderImageId);
      formData.append("adderImageUrl", adderImageUrl);
      formData.append("adderName", adderName);
      formData.append("diagnosticName", diagnosticName);
      formData.append("thana", thana);
      formData.append("address", address);
      formData.append("hotlineNumber", hotlineNumber);

      // const res = await fetch(
      //   "http://10.1.1.108:3000/api/main/educational-institution/add-institution",
      //   {
      //     method: "POST",
      //     body: formData,
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );
      console.log(formData);
      const { data } = await api.post(
        "/main/diagnostics/add-diagnostics",
        formData
      );
      refreshDiagnostics(); //re-fetch data after adding

      // const data = await res.json();
      console.log(data);

      if (data.success) {
        Alert.alert(data?.message);
      } else {
        Alert.alert(data?.message);
      }
      setOpenDiagnosticsModal(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsloading(false);
      setDiagnosticName("");
      setThana("");
      setAddress(""), sethotlineNumber(""), setImage(null);
    }
  };

  return (
    <Modal
      visible={openDiagnosticsModal}
      transparent={true}
      onRequestClose={() => setOpenDiagnosticsModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          <View style={styles.imageContainer}>
            <Text style={styles.headingText}>
              ডায়াগনস্টিক সেন্টারের তথ্য যুক্ত করুন
            </Text>
            <ImageUploadComponent
              image={image}
              setImage={setImage}
              imageStyles={{ width: 100, height: 100 }}
            />
          </View>
          <View style={styles.formContainer}>
            <InputComponent
              label="ডায়াগনস্টিক সেন্টারের নাম"
              icon="institution"
              iconPackage="FontAwesome"
              keyboardType="default"
              value={diagnosticName}
              setValue={(e: any) => {
                setDiagnosticName(e);
              }}
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
              value={address}
              setValue={(e: any) => {
                setAddress(e);
              }}
            />
            <InputComponent
              label="হটলাইন নাম্বার"
              icon="mobile"
              iconPackage="FontAwesome"
              keyboardType="number"
              value={hotlineNumber}
              setValue={(e: any) => {
                sethotlineNumber(e);
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              buttonText="বাতিল করুন"
              style={styles.cancelButton}
              activeOpacity={0.8}
              onPress={() => {
                setOpenDiagnosticsModal(false), setImage(null);
              }}
            />
            <ButtonComponent
              buttonText="সাবমিট করুন"
              style={styles.submitButton}
              activeOpacity={0.8}
              onPress={handleSubmitDiagnostic}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddDiagnostics;

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
    elevation: 10,
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
    backgroundColor: "#ff8000",
  },
  submitButton: {
    paddingHorizontal: scale(15),
  },
});
