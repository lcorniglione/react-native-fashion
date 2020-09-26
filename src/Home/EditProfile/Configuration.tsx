import React from "react";
import { ScrollView } from "react-native";

import { Box, Text } from "../../components";

import CheckboxGroup from "./CheckboxGroup";
import RoundedCheckboxGroup from "./RoundedCheckboxGroup";

const outfitType = [
  { value: "men", label: "For men" },
  { value: "women", label: "For women" },
  { value: "both", label: "For both" },
];

const sizes = [
  { value: "s" },
  { value: "m" },
  { value: "l" },
  { value: "xl" },
  { value: "xxl" },
];

const colours = [
  { value: "#0C0D34" },
  { value: "#FF0058" },
  { value: "#50B9DE" },
  { value: "#00D99A" },
  { value: "#FE5E33" },
];

const preferredBrands = [
  { value: "adidas", label: "Adidas" },
  { value: "nike", label: "Nike" },
  { value: "converse", label: "Converse" },
  { value: "tommy-hilfiger", label: "Tommy Hilfiger" },
  { value: "billionaire-boys-club", label: "Billionaire Boys Club" },
  { value: "jordan", label: "Jordan" },
  { value: "le-coq-sportif", label: "Le Coq Sportif" },
];

const Configuration = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="text">What type of outfit you usually wear?</Text>
        <CheckboxGroup options={outfitType} radio />
        <Text variant="text">What is your clothing size?</Text>
        <RoundedCheckboxGroup options={sizes} />
        <Text variant="text">My preferred clothing colors</Text>
        <RoundedCheckboxGroup options={colours} valueIsColour />
        <Text variant="text">My preferred brands</Text>
        <CheckboxGroup options={preferredBrands} />
      </Box>
    </ScrollView>
  );
};

export default Configuration;
