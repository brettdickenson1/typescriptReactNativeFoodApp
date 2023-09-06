import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Categories from "./Categories";

const CardSlide = () => {
  return (
    <View>
      <Text style={styles.heading}>Categories</Text>
      <Categories />
      <Text style={styles.heading}>Popular</Text>
    </View>
  );
};

export default CardSlide;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    fontWeight: "normal",
    marginTop: 5,
  },
});
