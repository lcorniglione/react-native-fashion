import React from "react";
import { Image, View } from "react-native";

import { Text } from "../../components";

import CardLayout from "./CardLayout";

export enum CardType {
  VISA,
  MASTERCARD,
}

export interface CardModel {
  id: number;
  type: CardType;
  last4digits: number;
  expirationDate: string;
}

interface CardProps {
  card: CardModel;
  selected: boolean;
  onSelect: () => void;
}

const visaLogo = require("./assets/visa-logo.png");
const mastercardLogo = require("./assets/mastercard-logo.png");

const Card = ({ card, selected, onSelect }: CardProps) => {
  return (
    <CardLayout
      onPress={onSelect}
      backgroundColor={selected ? "primary" : "background"}
    >
      <View style={{ height: 20 }}>
        <Image
          style={
            card.type === CardType.VISA
              ? { width: 39, height: 13 }
              : { width: 32.5, height: 20 }
          }
          source={card.type === CardType.VISA ? visaLogo : mastercardLogo}
        />
      </View>
      <Text
        variant="title3"
        marginTop="m"
        marginBottom="s"
        color={selected ? "background" : "text"}
      >
        **** {card.last4digits}
      </Text>
      <Text opacity={0.5}>Expiration</Text>
      <Text opacity={0.5} color={selected ? "background" : "text"}>
        {card.expirationDate}
      </Text>
    </CardLayout>
  );
};

export default Card;
