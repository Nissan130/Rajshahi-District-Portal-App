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
    adderName: "Nissan",
    adderImage: require("@/src/assets/images/man_logo.png"),
    restuarantImage: require("@/src/assets/images/baishakhi_hotel.png"),
    restuarantName: "Baishakhi Hotel and Restaurant",
    thana: "Rajpara",
    address: "Rajshahi",
  },
  {
    id: "2",
    adderName: "Nissan",
    adderImage: require("@/src/assets/images/man_logo.png"),
    restuarantImage: require("@/src/assets/images/masterchef.png"),
    restuarantName: "Master Chef Chinese Resturent and Party Centre",
    thana: "Rajpara",
    address: "Rajshahi",
  },
];

const Index = () => {

    //format date
    const formatDate = (isoDate) => {
      return moment(isoDate).format("D MMMM YYYY");
    }
  

   const renderItem = ({ item }: any) => (
     <View style={styles.hospitalContainer}>
       <View style={styles.adderInfo}>
         <View style={styles.adderImageContainer}>
           <Image source={item.adderImage} style={styles.adderImage} />
         </View>
         <View style={{ gap: 2 }}>
           <Text style={styles.adderNameText}>{item.adderName}</Text>
           <Text style={styles.submissionDate}>25 june, 2025</Text>
         </View>
       </View>
       <View style={styles.hospitalInfo}>
         <View style={styles.imageContainer}>
           <Image style={styles.image} source={item.restuarantImage} />
         </View>

         <View style={styles.infoContainer}>
           <Text style={styles.hospitalName}>{item.restuarantName}</Text>
           <Text style={styles.infoText}>
             <Text style={{ fontWeight: "700" }}>থানাঃ </Text>
             {item.thana}
           </Text>
           <Text style={styles.infoText}>
             <Text style={{ fontWeight: "700" }}>ঠিকানাঃ </Text>
             {item.address}
           </Text>
           <View style={styles.buttonContainer}>
             <TouchableOpacity
               activeOpacity={0.8}
               style={[styles.button, { backgroundColor: "#ff8000" }]}
             >
               <Text style={styles.buttonText}>গুগল ম্যাপ</Text>
             </TouchableOpacity>
             <TouchableOpacity
               activeOpacity={0.8}
               style={[styles.button, { backgroundColor: "#2754cc" }]}
             >
               <Text style={[styles.buttonText, { color: "#fff" }]}>
                 হটলাইন
               </Text>
             </TouchableOpacity>
           </View>
         </View>
       </View>
     </View>
   );

  return (
     <SafeAreaView style={styles.container}>
          <CustomNavbar />
          <SearchInput placeholderText="রেস্টুরেন্ট খুজুন ... " />
          <FlatList data={data} renderItem={renderItem} numColumns={1} />
          
        </SafeAreaView>
  );
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hospitalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    margin: moderateScale(4),
    padding: moderateScale(10),
    // borderWidth: 1,
    elevation: 1,
    borderRadius: moderateScale(10)
  },
  adderInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: scale(10),
    
  },
  adderImageContainer: {
    width: scale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(100),
  },
  adderImage: {
    width: "100%",
    height: "100%",
    borderRadius: moderateScale(100),
  },
  adderNameText: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: '#333'
  },
  submissionDate: {
    fontSize: moderateScale(12),
    fontWeight: "600",
    color: '#555'
  },

  hospitalInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    gap: scale(12),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  imageContainer: {
    width: scale(120),
    height: verticalScale(100),
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
