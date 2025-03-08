import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const SearchInput = ({ placeholderText }:any) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="#2754cc" />
      <TextInput placeholder={placeholderText} style={styles.inputText} />
    </View>
  );
};

export default SearchInput

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
    marginHorizontal: scale(10),
    marginVertical: verticalScale(5),
    backgroundColor: "#e8edf9",
    elevation: 3,
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
  },
  inputText: {
    width:'100%',
    paddingVertical: verticalScale(5),
    fontSize: moderateScale(15),
    fontWeight:'600',
  }
});