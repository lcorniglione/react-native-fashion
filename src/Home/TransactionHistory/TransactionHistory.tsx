import React from "react";

import { Box, Header, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Graph, { DataPoint } from "./Graph";

const data: DataPoint[] = [
  {
    date: new Date("2019-09-01").getTime(),
    value: 155,
    color: "primary",
  },
  {
    date: new Date("2019-10-01").getTime(),
    value: 122,
    color: "orange",
  },
  {
    date: new Date("2019-11-01").getTime(),
    value: 88,
    color: "violet",
  },
  {
    date: new Date("2019-12-01").getTime(),
    value: 95,
    color: "yellow",
  },
  {
    date: new Date("2020-01-01").getTime(),
    value: 122,
    color: "pink",
  },
  {
    date: new Date("2020-03-01").getTime(),
    value: 180,
    color: "secondary",
  },
  {
    date: new Date("2020-05-01").getTime(),
    value: 150,
    color: "gray",
  },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Transaction History"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
      />
      <Box padding="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Text variant="header" color="secondary" opacity={0.3}>
              TOTAL SPENT
            </Text>
            <Text variant="title1">$619,19</Text>
          </Box>
          <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
            <Text color="primary">All Time</Text>
          </Box>
        </Box>
        <Graph data={data} />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
