import { Box, FormLabel, Switch } from "@chakra-ui/react";
import * as React from "react";

export interface VerboseSwitchProps {
  viewSetting: "concise" | "verbose";
  onClick: (event: React.FormEvent) => void;
}

export const VerboseSwitch = (props: VerboseSwitchProps) => {
  return (
    <Box>
      <FormLabel>
        View Setting:{" "}
        {props.viewSetting.charAt(0).toUpperCase() +
          props.viewSetting.substring(1)}
      </FormLabel>
      <Box textAlign={["center", "left"]}>
        <Switch size="lg" onChange={props.onClick} />
      </Box>
    </Box>
  );
};
