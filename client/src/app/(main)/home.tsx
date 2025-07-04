import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import { scale } from "react-native-size-matters";
import FooterMenu from "@/src/components/molecules/FooterMenu";
import CustomNavbar from "@/src/components/atoms/CustomNavbar";
import HomeItemList from "@/src/components/molecules/HomeItemList";
import SearchInput from "@/src/components/atoms/SearchInput";
import categoriesData from "@/src/assets/categories_list";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("হোম");
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(categoriesData);


  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredData(categoriesData);
    } else {
      const query = searchText.toLowerCase();

      const filtered = categoriesData.filter((item) =>
        item.title.toLowerCase().includes(query) ||
        item.keywords?.some((keyword) => keyword.toLowerCase().includes(query))
      );

      setFilteredData(filtered);
    }
  }, [searchText]);



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#2754cc"} barStyle={"light-content"} />
      <CustomNavbar />

      <SearchInput
        placeholderText="খুজুন ..."
        value={searchText}
        onChangeText={setSearchText}
        onClear={() => setSearchText('')}
      />



      <View style={styles.bodyContainer}>
        <HomeItemList data={filteredData} />
      </View>

      <FooterMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    position: "relative",
  },
  bodyContainer: {
    flex: 1,
    paddingLeft: scale(10),
  },
});
