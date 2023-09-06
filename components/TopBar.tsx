import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import * as Font from "expo-font";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/profile.png")}
      />
      <Feather name="menu" size={24} color="black" />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
});
