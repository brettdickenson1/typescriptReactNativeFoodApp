import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IUser } from "../model";

type Props = {
  data: IUser;
};

const CategoryItem: React.FC<Props> = ({ data }) => (
  <View
    style={[
      styles.container,
      data.id === "1"
        ? { backgroundColor: "#F5CA48" }
        : { backgroundColor: "white" },
    ]}
  >
    <View style={styles.imageContainer}>
      <Image source={data.image} style={styles.image} />
      <Text style={styles.text}>{data.name}</Text>
    </View>
  </View>
);
export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    width: 105,
    height: 177,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    paddingVertical: 30,
  },
  yellowContainer: {
    backgroundColor: "#F5CA48",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    marginTop: 10,
  },
  image: {
    height: 60,
    width: 60,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
