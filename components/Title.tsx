import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  heading: string;
  subHeading: string;
};

const Title: React.FC<Props> = ({ heading, subHeading }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subHeading}>{subHeading}</Text>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  heading: {
    fontSize: 32,
    fontFamily: "Montserrat-Bold",
    fontWeight: "normal",
    marginTop: 5,
  },
  subHeading: {
    fontSize: 20,
    fontFamily: "Montserrat-Light",
    fontWeight: "normal",
  },
});
