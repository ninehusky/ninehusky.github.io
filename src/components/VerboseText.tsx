import { Box } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

export interface VerboseSwitchProps {
  viewSetting: "concise" | "verbose";
  children: string;
}

export const VerboseText = (props: VerboseSwitchProps) => {
  const color = useColorModeValue("blue.500", "#8FCDF4");

  return props.viewSetting === "verbose" ? (
    <Box color={color}>{props.children}</Box>
  ) : (
    <></>
  );
};
