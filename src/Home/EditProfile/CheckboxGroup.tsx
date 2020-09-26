import React, { useState } from "react";

import { Box, Button, useTheme } from "../../components";

interface CheckboxGroupProps {
  options: { value: string; label: string }[];
  radio?: boolean;
}

const CheckboxGroup = ({ options, radio }: CheckboxGroupProps) => {
  const theme = useTheme();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="s">
      {options.map(({ label, value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        return (
          <Button
            style={{
              height: "auto",
              width: "auto",
              padding: 16,
              marginBottom: theme.spacing.m,
              marginRight: theme.spacing.s,
            }}
            variant={isSelected ? "primary" : "default"}
            onPress={() => {
              if (radio) setSelectedValues([value]);
              else {
                if (isSelected) {
                  selectedValues.splice(index, 1);
                } else {
                  selectedValues.push(value);
                }
                setSelectedValues([...selectedValues]);
              }
            }}
            key={value}
            label={label}
          />
        );
      })}
    </Box>
  );
};

export default CheckboxGroup;
