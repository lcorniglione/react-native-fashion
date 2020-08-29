import React from "react";
import { ScrollView, View } from "react-native";

import Category from "./Category";

const categories = [
  {
    id: "newin",
    title: "New In",
    color: "#FFE8E9",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#F1E0FF",
  },
  {
    id: "activewear",
    title: "Active Wear",
    color: "#BFEAF5",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#BFEAF5",
  },
  {
    id: "accesories",
    title: "Accesories",
    color: "#FFE8E9",
  },
];

const Categories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
