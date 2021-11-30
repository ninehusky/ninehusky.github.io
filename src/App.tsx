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

// TODO: color provider

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box mt={["10vh", "10vh"]} mx={"auto"} maxW="container.md" lineHeight="2">
      <Box textAlign="right" mr={3}>
        <Heading as="h1" size="3xl">
          niners!
        </Heading>
        <Text>student. educator. researcher. tinkerer.</Text>
      </Box>
      <VStack mx={3} mt={"10vh"} fontSize="lg" spacing={5}>
        <Text>
          hi! i'm niners, aka andrew, a fourth-year studying CS at UW Seattle.
        </Text>
        <Text>
          outside of school, i spend a lot of time as the section lead ta for{" "}
          <Link fontWeight="bold" href="https://cs.uw.edu/142">
            CSE 142
          </Link>
          , the introductory computer science class at UW.
        </Text>
        <Text>
          this summer i started work on the{" "}
          <Link href="#" fontWeight="bold">
            code quality checker
          </Link>
          , a static analysis tool that automates the grading of hundreds of
          submissions every week. given the sensitive nature of grading
          criteria, the repository isn't public, but i'd love to answer any
          questions about this!
        </Text>
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
          <Link fontWeight="bold" href="https://github.com/ninehusky/ninechip">
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
          , a disassembler and interpreter for the intel 8080 assembly language.
        </Text>
      </VStack>
    </Box>
  </ChakraProvider>
);
