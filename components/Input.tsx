import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = () => {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        autoCorrect={false}
        placeholder="Search..."
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    // height: 50,
    width: "100%",
    fontSize: 20,
    borderBottomColor: "#CDCDCD",
    borderBottomWidth: 2,
    // color: "black",
    marginVertical: 40,
    textAlign: "start",
  },
});
