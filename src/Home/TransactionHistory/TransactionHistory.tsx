import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Image, StyleSheet, Dimensions } from "react-native";
import moment from "moment";

import { Box, Header, Text, makeStyles, Theme } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Graph, { DataPoint } from "./Graph";
import Transaction from "./Transaction";
import TopCurve from "./TopCurve";

const ASPECT_RATIO = 5.5;
const footerHeight = Dimensions.get("window").width / ASPECT_RATIO;

const startDate = new Date("2019-09-01").getTime();
const endDate = new Date("2020-03-01").getTime();
const numberOfMonths = moment(endDate).diff(moment(startDate), "month");

const data: DataPoint[] = [
  {
    date: new Date("2019-09-01").getTime(),
    value: 139.42,
    color: "violet",
    id: 245673,
  },
  {
    date: new Date("2019-12-01").getTime(),
    value: 281.23,
    color: "yellow",
    id: 245672,
  },

  {
    date: new Date("2020-02-01").getTime(),
    value: 198.54,
    color: "secondary",
    id: 245674,
  },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  const styles = useStyles();
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Transaction History"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
      />
      <Box padding="m" flex={1}>
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
        <Graph
          data={data}
          startDate={startDate}
          numberOfMonths={numberOfMonths}
        />
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {data.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ScrollView>
      </Box>
      <TopCurve footerHeight={footerHeight} />
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        height={footerHeight}
      >
        <Image
          style={styles.footer}
          source={require("../../components/assets/patterns/4.png")}
        />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));

export default TransactionHistory;
