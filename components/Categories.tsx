import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
import { IUser } from "../model";

const DATA = [
  {
    id: "1",
    name: "Pizza",
    image: require("../assets/images/pizzaIcon.png"),
  },
  {
    id: "2",
    name: "Seafood",
    image: require("../assets/images/shrimpIcon.png"),
  },
  {
    id: "3",
    name: "Soft Drinks",
    image: require("../assets/images/cokeIcon.png"),
  },
];

const Categories = () => {
  return (
    <ScrollView horizontal={true}>
      <View>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={({ item }) => <CategoryItem data={item} />}
          keyExtractor={(item: IUser) => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
