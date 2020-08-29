import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Text, Box } from "../../components";
import BorderlessTap from "../../components/BorderlessTap";

const OUTER_RADIUS = 34;
const INNER_RADIUS = 30;

interface CategoryProps {
  category: {
    color: string;
    title: string;
    id: string;
  };
}

const Category = ({ category: { color, title } }: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessTap onPress={() => setSelected((prev) => !prev)}>
      <Box marginLeft="m" marginTop="s" alignItems="center">
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center"
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: color,
                borderWidth: 1,
              }}
            />
          )}
          <View
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor: color,
            }}
          />
        </Box>

        <Text textAlign="center" marginTop="s">
          {title}
        </Text>
      </Box>
    </BorderlessTap>
  );
};

export default Category;
