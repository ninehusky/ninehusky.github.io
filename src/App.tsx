import * as React from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  extendTheme,
  ThemeConfig,
  Link,
  VStack,
  useColorModeValue,
  HStack,
  Container,
} from "@chakra-ui/react";

import { GrMail } from "react-icons/gr";
import { IoMdDocument } from "react-icons/io";

import { VerboseSwitch } from "./components/VerboseSwitch";
import { VerboseText } from "./components/VerboseText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

// TODO: color provider

export const App = () => {
  const config: ThemeConfig = {
    initialColorMode: "dark",
  };

  // 3. extend the theme
  const theme = extendTheme({ config });
  const color = useColorModeValue("blue.300", "#8FCDF4");
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
        <Box
          display={"flex"}
          flexDirection={["column", "row-reverse"]}
          justifyContent={["center", "space-between"]}
        >
          <Box textAlign={["center", "right"]} mx={["auto", 3]}>
            <Heading as="h1" size="3xl">
              niners!
            </Heading>
            <Text>student, ta, researcher, and tinkerer!</Text>
            <HStack justifyContent={["center", "flex-end"]}>
              <Link href="mailto:acheung8@uw.edu">
                <GrMail size={30} />
              </Link>
              <Link href="https://github.com/ninehusky">
                <FaGithub size={30} />
              </Link>
              <Link href="https://www.linkedin.com/in/acheung88/">
                <FaLinkedin size={30} />
              </Link>
              <Link href={`http://niners.me/resume.pdf`}>
                <IoMdDocument size={30} />
              </Link>
              <ColorModeSwitcher />
            </HStack>
          </Box>
          <Box mx={["auto", 3]}>
            <VerboseSwitch
              viewSetting={viewSetting}
              onClick={handleViewChange}
              color={color}
            />
          </Box>
        </Box>
        <VStack
          mx={3}
          mt={"5vh"}
          fontSize="lg"
          spacing={5}
          display="flex"
          alignItems="flex-start"
        >
          <Text>
            hi! i'm niners, aka andrew, a fourth-year studying computer science
            at uw seattle.
          </Text>
          <Text>
            most people know me as the section lead ta for{" "}
            <Link color={color} fontWeight="bold" href="https://cs.uw.edu/142">
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
            <Link color={color} href="#" fontWeight="bold">
              code quality checker
            </Link>
            , a static analysis tool that automates the grading of hundreds of
            student programs every week.
          </Text>
          <VerboseText viewSetting={viewSetting}>
            teaching assistants for 142 spend ~7 hours a week hand-grading
            student submissions. the code quality checker's goal is to alleviate
            staff workload by automatically creating and parsing the syntax tree
            corresponding to a student's submission, before automatically
            posting feedback annotations/assignment scores according to an
            assignment's criteria.
          </VerboseText>
          <Text>
            i'm also involved with{" "}
            <Link color={color} href="http://uwplse.org/" fontWeight="bold">
              PLSE
            </Link>
            , the programming language research lab at uw.
          </Text>
          <Text>
            i'm currently onboarding with the team working on{" "}
            <Link
              color={color}
              href="https://github.com/gussmith23/glenside/"
              fontWeight="bold"
            >
              glenside
            </Link>
            , a programming language designed to optimize performance with
            machine learning.
          </Text>
          <VerboseText viewSetting={viewSetting}>
            specifically, it's a low-level language implemented in rust whose
            compiler is designed to perform low-level program rewrites, thereby
            optimizing performance within the context of machine learning.
          </VerboseText>
          <Text>
            outside of work and research, i love making apps to show my friends.
          </Text>
          <Text>
            in particular, i created{" "}
            <Link color={color} fontWeight="bold" href="https://ninepasta.me">
              ninepasta
            </Link>
            , a full-stack web app that helps users easily create{" "}
            <Link
              color={color}
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
            earlier this year, i made{" "}
            <Link
              color={color}
              fontWeight="bold"
              href="https://github.com/ninehusky/ninechip"
            >
              ninechip
            </Link>
            , an emulator for the{" "}
            <Link
              color={color}
              fontWeight="bold"
              href="https://en.wikipedia.org/wiki/CHIP-8"
            >
              CHIP-8
            </Link>{" "}
            written in java.
          </Text>
          <VerboseText viewSetting={viewSetting}>
            i wrote ninechip as a first step into the world of interpreters.
            ninechip fully emulates the hardware of the CHIP-8, i.e., the ram,
            cpu, and keypad, and simulates i/o and display using the swing
            library. it reads and executes any file written in CHIP-8 assembly
            at 60 hz.
          </VerboseText>
          <Text>
            i'm also making{" "}
            <Link
              color={color}
              fontWeight="bold"
              href="https://github.com/ninehusky/nine-eighty"
            >
              nine-eighty
            </Link>
            , a disassembler and interpreter for the intel 8080 assembly
            language.
          </Text>
          <VerboseText viewSetting={viewSetting}>
            the 8080 is a pretty famous chip, having powered influential
            machines such as the space invaders arcade cabinet. the level of
            complexity of the 8080 is significantly higher than the CHIP-8,
            meaning that more sophisticated unit tests are necessary to ensure
            that my interpreter is working correctly.
          </VerboseText>
          <VerboseText viewSetting={viewSetting}>
            given the age of the 8080, a lot of my time working on this project
            is diving deep into the intel 8080 programmer's manual, a job that
            is equally as frustrating as it is rewarding.
          </VerboseText>
          <Text>
            i'm open to talk about just about anything, whether it relates to
            computer science or not.{" "}
            <Link color={color} href="mailto:acheung8@uw.edu" fontWeight="bold">
              send me an email
            </Link>
            !
          </Text>
        </VStack>
      </Box>
      <Container maxW="container.md">
        <Text textAlign={["center", "right"]} fontSize="md">
          favicon art by{" "}
          <Link href="https://twemoji.twitter.com/" fontWeight="bold">
            twemoji
          </Link>
          .
        </Text>
        <Text textAlign={["center", "right"]} fontSize="md" mb={4}>
          proudly made using{" "}
          <Link href="https://chakra-ui.com/" fontWeight="bold">
            chakra-ui
          </Link>
          .
        </Text>
      </Container>
    </ChakraProvider>
  );
};
