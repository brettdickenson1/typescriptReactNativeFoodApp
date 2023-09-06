import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopBar from "../components/TopBar";
import Title from "../components/Title";
import Input from "../components/Input";
import CardSlide from "../components/CardSlide";
import Popular from "../components/Popular";

const HomeScreen = () => {
  let heading: string;
  heading = "Delivery";
  let subHeading: string;
  subHeading = "Food";

  return (
    <View style={styles.container}>
      <TopBar />
      <Title heading={heading} subHeading={subHeading} />
      <Input />
      <CardSlide />
      <Popular />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
