import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { IUser } from "../model";

type Props = {
  data: IUser;
};

const PopularItem: React.FC<Props> = ({ data }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.text}>
        {" "}
        <FontAwesome5 name="crown" size={14} color="#F5CA48" /> {data.heading}
      </Text>
      <Text style={styles.text2}>{data.name}</Text>
      <Text style={styles.text3}>{data.weight}</Text>
      <View style={styles.bottomLeft}>
        <Text style={styles.text}>{data.rating}</Text>
        <Text style={styles.text}>{data.rating}</Text>
      </View>
    </View>
    <View>
      <Image source={data.image} style={styles.image} />
    </View>
  </View>
);
export default PopularItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    height: 177,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    flexDirection: "row",
    overflow: "hidden",
  },
  text: {
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
  text2: {
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    marginTop: 20,
  },
  text3: {
    fontSize: 12,
    fontFamily: "Montserrat-Light",
    marginTop: 5,
  },
  image: {
    position: "absolute",
    height: 125,
    width: 250,
    marginLeft: 40,
  },
  bottomLeft: {
    flexDirection: "row",
    marginTop: 20,
  },
});
