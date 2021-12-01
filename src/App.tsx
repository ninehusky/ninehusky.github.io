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
      <Box
        mt={["10vh", "10vh"]}
        mx={"auto"}
        mb={"10vh"}
        maxW="container.md"
        lineHeight="2"
      >
        <Box textAlign="right" mr={3}>
          <Heading as="h1" size="3xl">
            niners!
          </Heading>
          <Text>student. educator. researcher. tinkerer.</Text>
        </Box>
        <VerboseSwitch viewSetting={viewSetting} onClick={handleViewChange} />
        <VStack
          mx={3}
          mt={"5vh"}
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
            last summer, i started working with a team of tas on the{" "}
            <Link href="#" fontWeight="bold">
              code quality checker
            </Link>
            , a static analysis tool that automates the grading of hundreds of
            student programs every week.
          </Text>
          <VerboseText viewSetting={viewSetting}>
            teaching assistants for 142 spend a lot of time hand-grading student
            submissions every week. the code quality checker's goal is to
            alleviate the staff workload by automatically creating and parsing
            the syntax tree corresponding to a student's submission, and
            automatically posting feedback annotations/assignment scores
            according to the assignment's criteria.
          </VerboseText>
          <VerboseText viewSetting={viewSetting}>
            given the nature of the criteria covered in the project, the
            repository is private, but i'm happy to answer any questions about
            the project!
          </VerboseText>
          <Text>
            i'm also involved with{" "}
            <Link href="http://uwplse.org/" fontWeight="bold">
              PLSE
            </Link>
            , the programming language research lab at uw. i assist the team
            working on the{" "}
            <Link href="https://checkerframework.org/" fontWeight="bold">
              checker framework
            </Link>
            , a plugin to the java compiler aimed at catching common runtime
            errors in compilation.
          </Text>
          <Text>
            outside of work and research, i love making apps to show my friends.
          </Text>
          <Text>
            in particular, i made{" "}
            <Link fontWeight="bold" href="https://ninepasta.me">
              ninepasta
            </Link>
            , a full-stack web app that helps users easily create{" "}
            <Link
              fontWeight="bold"
              href="https://knowyourmeme.com/memes/emojipasta"
            >
              emojipastas
            </Link>
            .
          </Text>
          <VerboseText viewSetting={viewSetting}>
            this is a web app produced using the MERN stack (with extra help
            from chakra-ui). users can run crud operations on a no-sql database
            of word-emoji pairs. users are authenticated using a custom-made
            login system, and the service is hosted using github pages, heroku,
            and mongodb atlas.
          </VerboseText>

          <Text>
            i'm also very interested in reverse-engineering older hardware.
          </Text>

          <Text>
            in particular, i made{" "}
            <Link
              fontWeight="bold"
              href="https://github.com/ninehusky/ninechip"
            >
              ninechip
            </Link>
            , an emulator for the CHIP-8 written in java.
          </Text>
          <VerboseText viewSetting={viewSetting}>
            emulators are often described as problems that heavily test
            low-level programming concepts. although this is certainly true,
            making an emulator also tested my software engineering skills. the
            nature of the program makes it so that low-level code is present
            across the codebase, meaning that well-documented, modular code was
            a necessity.
          </VerboseText>
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
