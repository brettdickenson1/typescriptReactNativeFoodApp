import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
import PopularItem from "./PopularItem";
import { IUser } from "../model";

const DATA = [
  {
    id: "1",
    heading: "top of the week",
    name: "Primavera Pizza",
    weight: "Weight 540 gr",
    rating: "5.0",
    image: require("../assets/images/pizza1.png"),
  },
  {
    id: "2",
    heading: "top of the week",
    name: "Primavera Pizza",
    weight: "Weight 540 gr",
    rating: "5.0",
    image: require("../assets/images/pizza2.png"),
  },
  {
    id: "3",
    heading: "top of the week",
    name: "Primavera Pizza",
    weight: "Weight 540 gr",
    rating: "5.0",
    image: require("../assets/images/pizza3.png"),
  },
];

const Popular = () => {
  return (
    <ScrollView>
      <View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <PopularItem data={item} />}
          keyExtractor={(item: IUser) => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default Popular;

const styles = StyleSheet.create({});
