import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomNavbar from '@/src/components/atoms/CustomNavbar';
import SearchInput from '@/src/components/atoms/SearchInput';
import { Image } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import moment from 'moment';

const data = [
  {
    id: "1",
    fireServiceImage: require("@/src/assets/images/rajshahi_fireservice.png"),
    fireServiceName: "ফায়ার সার্ভিস ও সিভিল ডিফেন্স, রাজশাহী",
    address: "Rajpara",
    contact_no: "01771337896",
  },
  {
    id: "2",
    fireServiceImage: require("@/src/assets/images/tanor_fireservice.png"),
    fireServiceName: "Tanore Fire Station",
    address: "Rajpara",
    contact_no: "01609313886",
  },
];

const Index = () => {

    //format date
    const formatDate = (isoDate) => {
      return moment(isoDate).format("D MMMM YYYY");
    }
  

   const renderItem = ({ item }: any) => (
     <View style={styles.hospitalContainer}>
       <View style={styles.hospitalInfo}>
         <View style={styles.imageContainer}>
           <Image style={styles.image} source={item.fireServiceImage} />
         </View>

         <View style={styles.infoContainer}>
           <Text style={styles.hospitalName}>{item.fireServiceName}</Text>
           <Text style={styles.infoText}>
             <Text style={{ fontWeight: "700" }}>ঠিকানাঃ </Text>
             {item.address}
           </Text>
           <Text style={styles.infoText}>
             <Text style={{ fontWeight: "700" }}>যোগাযোগের নম্বরঃ </Text>
             {item.contact_no}
           </Text>
         </View>
       </View>
     </View>
   );

  return (
     <SafeAreaView style={styles.container}>
          <CustomNavbar />
          <SearchInput placeholderText="ফায়ার সার্ভিস খুজুন ... " />
          <FlatList data={data} renderItem={renderItem} numColumns={1} />
          
        </SafeAreaView>
  );
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  hospitalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    margin: moderateScale(4),
    padding: moderateScale(10),
    // borderWidth: 1,
    elevation: 1,
    borderRadius: moderateScale(10),
    backgroundColor: "#fff",
  },
 
  hospitalInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    gap: scale(20),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  imageContainer: {
    width: scale(80),
    height: verticalScale(70),
    borderRadius: moderateScale(8),
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  hospitalName: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "#333",
    marginBottom: verticalScale(4),
  },
  infoText: {
    fontSize: moderateScale(13),
    color: "#555",
    marginBottom: verticalScale(2),
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: scale(70),
    marginTop: verticalScale(10),
  },
  button: {
    borderRadius: moderateScale(5),
    // borderWidth:2,
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(5),
    // borderColor:'#2754cc'
  },
  buttonText: {
    fontWeight: "700",
    color: "#fff",
  },
});
