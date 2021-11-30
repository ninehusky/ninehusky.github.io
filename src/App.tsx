import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";

import { VerboseSwitch } from "./components/VerboseSwitch";
import { VerboseText } from "./components/VerboseText";

// TODO: color provider

export const App = () => {
  const [viewSetting, changeViewSetting] = React.useState<
    "concise" | "verbose"
  >("concise");

  const handleViewChange = (event: React.FormEvent) => {
    changeViewSetting(viewSetting === "concise" ? "verbose" : "concise");
  };

  return (
    <ChakraProvider theme={theme}>
      <Box mt={["10vh", "10vh"]} mx={"auto"} maxW="container.md" lineHeight="2">
        <Box textAlign="right" mr={3}>
          <Heading as="h1" size="3xl">
            niners!
          </Heading>
          <Text>student. educator. researcher. tinkerer.</Text>
        </Box>
        <VerboseSwitch viewSetting={viewSetting} onClick={handleViewChange} />
        <VStack
          mx={3}
          mt={"10vh"}
          fontSize="lg"
          spacing={5}
          display="flex"
          alignItems="flex-start"
        >
          <Text>
            hi! i'm niners, aka andrew, a fourth-year studying cs at uw seattle.
          </Text>
          <Text>
            most people know me as the section lead ta for{" "}
            <Link fontWeight="bold" href="https://cs.uw.edu/142">
              CSE 142
            </Link>
            , the introductory computer science class at uw.
          </Text>
          <VerboseText viewSetting={viewSetting}>
            as a teaching assistant, a lot of my time goes toward teaching
            weekly classes of about 20 undergraduates. as a section lead, a
            large portion of ta duties is also dedicated to planning and
            presenting weekly debriefs to course staff!
          </VerboseText>
          <Text>
            outside of my teaching job, i work on the{" "}
            <Link href="#" fontWeight="bold">
              code quality checker
            </Link>
            , a static analysis tool that automates the grading of hundreds of
            submissions every week.
          </Text>
          <VerboseText viewSetting={viewSetting}>
            nearly every TA spends about 7 hours a week grading student
            assignments, which are java programs written to a specification.
            it's imperative in 142 that students get clear, accurate, and
            actionable feedback on their homework so they know exactly what to
            improve on in the future, which inadvertently makes grading an
            arduous task, especially for new TAs.
          </VerboseText>
          <VerboseText viewSetting={viewSetting}>
            the code quality checker's goal is to alleviate the staff workload
            by automatically creating and parsing the syntax tree corresponding
            to a student's submission, and automatically posting feedback
            annotations/assignment scores according to the assignment's
            criteria.
          </VerboseText>
          <VerboseText viewSetting={viewSetting}>
            given the private nature of the criteria covered in the project, the
            repository is private, but i'm happy to answer any questions about
            the project!
          </VerboseText>
          {/* <Text>
          i'm also involved with{" "}
          <Link href="http://uwplse.org/" fontWeight="bold">
            PLSE
          </Link>
          . i do research with the checker framework.
        </Text> */}
          <Text>
            outside of work and research, i love making apps to show my friends.
          </Text>
          <Text>
            in particular, i made{" "}
            <Link
              fontWeight="bold"
              href="https://github.com/ninehusky/ninechip"
            >
              ninechip
            </Link>
            , an emulator for the CHIP-8, and{" "}
            <Link fontWeight="bold" href="https://ninepasta.me">
              ninepasta
            </Link>
            , a full-stack web app for making emojipastas.
          </Text>
          <Text>
            i'm also making{" "}
            <Link
              fontWeight="bold"
              href="https://github.com/ninehusky/nine-eighty"
            >
              nine-eighty
            </Link>
            , a disassembler and interpreter for the intel 8080 assembly
            language.
          </Text>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};
