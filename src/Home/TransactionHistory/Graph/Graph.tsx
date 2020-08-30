import React, { useRef, useLayoutEffect } from "react";
import { Dimensions } from "react-native";
import moment from "moment";
import {
  Transitioning,
  TransitioningView,
  Transition,
} from "react-native-reanimated";

import { Theme, Box, useTheme } from "../../../components";

import Underlay, { MARGIN } from "./Underlay";
import { lerp } from "./Scale";

const { width: wWidth } = Dimensions.get("window");

const ASPECT_RATIO = 195 / 305;
const transition = (
  <Transition.Together>
    <Transition.In
      type="slide-bottom"
      durationMs={650}
      interpolation="easeInOut"
    />
  </Transition.Together>
);

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
  id: number;
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const ref = useRef<TransitioningView | null>(null);
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * ASPECT_RATIO;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];
  const step = width / numberOfMonths;
  const values = data.map((p) => p.value);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  useLayoutEffect(() => {
    ref.current?.animateNextTransition();
  }, []);

  return (
    <Box paddingBottom={MARGIN} paddingLeft={MARGIN} marginTop="xl">
      <Underlay
        numberOfMonths={numberOfMonths}
        startDate={startDate}
        minY={minY}
        maxY={maxY}
        step={step}
      />
      <Transitioning.View
        style={{ width: width, height: height, overflow: "hidden" }}
        ref={ref}
        transition={transition}
      >
        {data.map((point) => {
          const i = moment(point.date).diff(moment(startDate), "month");
          return (
            <Box
              key={point.id}
              position="absolute"
              width={step}
              left={i * step}
              bottom={0}
              height={lerp(0, height, point.value / maxY)}
            >
              <Box
                position="absolute"
                top={0}
                bottom={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={point.color}
                opacity={0.1}
                borderTopRightRadius="m"
                borderTopLeftRadius="m"
              />
              <Box
                backgroundColor={point.color}
                position="absolute"
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                borderRadius="m"
              />
            </Box>
          );
        })}
      </Transitioning.View>
    </Box>
  );
};

export default Graph;
