import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import FooterMenu from "@/src/components/molecules/FooterMenu";
import { GlobalContext } from "@/src/context/globalContext";

const Notification =  () => {
  const {state} = useContext(GlobalContext);
   const [currentPage, setCurrentPage] = useState("নোটিফিকেশন");

  


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"red"} />
      <View style={styles.headerContainer}>
        <Text>Heading</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>{JSON.stringify(state.user, null, 6)}</Text>
        <Image
          source={{ uri: state.user.image.url }}
          style={{ width: 120, height: 120 }}
        />
      </View>

      {/* footer menu */}
      <FooterMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </SafeAreaView>
  );
};

export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  headerContainer: {
    backgroundColor: "yellow",
    width: "100%",
    height: verticalScale(50),
  },
  bodyContainer: {
    flex: 1,
  },
});
