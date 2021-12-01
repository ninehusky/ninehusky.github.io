import { Box, FormLabel, Switch, Text } from "@chakra-ui/react";
import * as React from "react";

export interface VerboseSwitchProps {
  viewSetting: "concise" | "verbose";
  onClick: (event: React.FormEvent) => void;
  color: string;
}

export const VerboseSwitch = (props: VerboseSwitchProps) => {
  return (
    <Box>
      <FormLabel>
        View Setting:{" "}
        {props.viewSetting === "verbose" ? (
          <Text as="span" color={props.color}>
            {props.viewSetting.charAt(0).toUpperCase() +
              props.viewSetting.substring(1)}
          </Text>
        ) : (
          props.viewSetting.charAt(0).toUpperCase() +
          props.viewSetting.substring(1)
        )}
      </FormLabel>
      <Box textAlign={["center", "left"]}>
        <Switch size="lg" onChange={props.onClick} />
      </Box>
    </Box>
  );
};
