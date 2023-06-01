import * as React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Heading,
  Divider,
  HStack,
  theme,
  Text,
  Link,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoMdDocument } from "react-icons/io";

import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={10}>
          <Image src="findmii.png" alt="Andrew Cheung" maxWidth="20%" />
          <HStack justifyContent={"center"} width={"80%"} spacing={10}>
            <VStack alignItems={"center"}>
              <Heading fontSize={"6xl"}>Andrew Cheung</Heading>
              <Heading fontSize={"xl"}>
                Grad Student @ UW | Researcher @ PLSE | Coordinator/TA @ CSE 12X
                {/* UW Grad Student | PLSE Researcher | CSE 12X Coordinator/TA{" "} */}
              </Heading>
              <Box textAlign={["center", "right"]} mx={["auto", 3]}>
                <HStack justifyContent={["center", "flex-end"]}>
                  <Link href="mailto:acheung8@cs.washington.edu">
                    <GrMail size={30} />
                  </Link>
                  <Link href="https://github.com/ninehusky">
                    <FaGithub size={30} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/acheung88/">
                    <FaLinkedin size={30} />
                  </Link>
                  <Link href={`resume.pdf`}>
                    <IoMdDocument size={30} />
                  </Link>
                </HStack>
              </Box>
            </VStack>
          </HStack>
          <Divider orientation="horizontal" />
          <HStack width={"60%"}>
            <VStack alignItems={"flex-start"}>
              <Text textAlign={"left"}>
                I'm a master's student at the University of Washington studying
                computer science at the{" "}
                <Link fontWeight={"bold"} href="https://cs.washington.edu/">
                  Paul G. Allen School of Computer Science and Engineering
                </Link>
                . The goal of my master's degree is to use research as a way to
                learn more about PL techniques and apply them in novel ways!
              </Text>
              <Heading fontSize={"4xl"}>Research</Heading>
              <Text textAlign={"left"}>
                I currently conduct research at{" "}
                <Link fontWeight={"bold"} href="https://uwplse.org">
                  UW PLSE
                </Link>
                , under the mentorship of{" "}
                <Link fontWeight={"bold"} href="https://justg.us">
                  Gus Smith
                </Link>{" "}
                and{" "}
                <Link fontWeight={"bold"} href="https://ztatlock.com">
                  Zachary Tatlock
                </Link>
                .
              </Text>
              <Text textAlign={"left"}>
                Right now, I'm a core member of the team working on Lakeroad, a
                tool that leverages program synthesis to compile hardware
                designs to complex programmable units such as DSPs. Lakeroad is
                able to synthesize designs in a way that is both correct by
                construction and comparable to proprietary tools.
              </Text>
              <Text textAlign={"left"}>
                In addition to Lakeroad, I also work on 3LA alongside
                researchers at UW, Princeton, and Harvard. 3LA is a methodology that
                aims to make it easier for developers to develop and test
                accelerators.
              </Text>
              <Text textAlign={"left"}>
                As part of the 3LA project, I helped work on an IR for tensor
                operations called{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://github.com/gussmith23/glenside"
                >
                  Glenside
                </Link>
                . Specifically, I extended the language's operators so that it
                could support a wider set of machine learning kernels.
              </Text>
              <Heading fontSize={"4xl"}>Teaching</Heading>
              <Text textAlign={"left"}>
                I'm currently onboarding as the CSE 12X TA Coordinator! I'll be
                regularly working with the intro instructors and{" "}
                <Link fontWeight={"bold"} href="https://www.linkedin.com/in/chloe-fong/">
                  Chloe Fong
                </Link>,{" "}
                my co-coordinator
                to make sure that 12X runs smoothly.
              </Text>
              <Text textAlign={"left"}>
                I'm a lead teaching assistant for CSE 12X (the
                introductory programming sequence at UW). Right now, I TA for{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://courses.cs.washington.edu/courses/cse123/23sp/"
                >
                  CSE 123
                </Link>
                , taught by{" "}
                <Link fontWeight={"bold"} href="https://homes.cs.washington.edu/~brettwo/">Brett Wortzman</Link>.
                Last quarter, I wrapped up my first quarter as a lead TA for{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://courses.cs.washington.edu/courses/cse122/23wi/"
                >
                  CSE 122
                </Link>
                , taught by{" "}
                <Link fontWeight={"bold"} href="https://www.linkedin.com/in/miya-natsuhara-72861a94/">Miya Natsuhara</Link>.
              </Text>
              <Text textAlign={"left"}>
                Further back in the past, for several years I also was a lead TA
                for{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://courses.cs.washington.edu/courses/cse142"
                >
                  CSE 142
                </Link>
                , the prior iteration of UW's CS1 course.
              </Text>
              <Text textAlign={"left"}>
                While there, I led a team composed of myself and 2 other
                talented TAs (
                <Link fontWeight={"bold"} href="https://www.linkedin.com/in/ng-kelvin/">Kelvin Ng</Link> +{" "}
                <Link fontWeight={"bold"} href="https://sumantguha.github.io/">Sumant Guha</Link>) in a push to create the
                14X autograder, a tool that leverages static analysis techniques
                to help catch errors in student code. This tool helped catch
                many errors that would otherwise have gone unnoticed by TAs!
              </Text>
              <Text textAlign={"left"}>
                Even further back in the past, I was a Allen School tutor for
                student athletes; I worked with a student athlete throughout the
                quarter to support them in their CS courses.
              </Text>
              <Heading fontSize={"4xl"}>Industry</Heading>
              <Text textAlign={"left"}>
                This summer, I'll be going to{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://www.intel.com/content/www/us/en/research/overview.html"
                >
                  Intel Labs
                </Link>{" "}
                as a formal verification research intern. There, I'll be{" "}
                working with <Link fontWeight={"bold"} href="https://www.linkedin.com/in/jin-yang-87a9587b/">Jin Yang</Link>'s team to{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://www.intel.com/content/www/us/en/newsroom/news/intel-collaborate-microsoft-darpa-program.html"
                >
                  help the push
                </Link>{" "}
                in developing hardware that supports{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://en.wikipedia.org/wiki/Homomorphic_encryption#Fully_homomorphic_encryption"
                >
                  fully homomorphic encryption
                </Link>
                .
              </Text>
              <Text textAlign={"left"}>
                Last summer, I had the pleasure of interning at{" "}
                <Link fontWeight={"bold"} href="https://www.amazon.com">
                  Amazon
                </Link>{" "}
                as a software development engineer intern. Alongside{" "}
                <Link fontWeight={"bold"} href="https://www.linkedin.com/in/antonni/">
                  Anton Nikitin
                </Link>{" "}(my manager) and{" "}
                <Link fontWeight={"bold"} href="https://www.linkedin.com/in/yiweilu/">
                  Yi-Wei Lu
                </Link>{" "}(my mentor),{" "}
                I designed and
                implemented a full-stack web app aimed at improving the
                experience of Amazon employees working in fulfillment centers.
              </Text>
              <Heading fontSize={"4xl"}>Other</Heading>
              <Text textAlign={"left"}>
                In general, when I'm not at school I'm either making something
                or eating something. Things that I make include{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://github.com/ninehusky/ninechip"
                >
                  programming projects
                </Link>
                ,{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://www.youtube.com/watch?v=VmgY0_I1LAs&list=PLxkXYkNGR0iJBZ_K3CIK__PPQK9BjJ1_2"
                >
                  music
                </Link>
                , and food.
              </Text>
              <Text align={"left"}>
                I also really enjoy drawing. Some famous pieces of mine include:
                <UnorderedList>
                  <ListItem>
                    <Link fontWeight={"bold"} href="sasha.png">a portrait</Link> of{" "}
                    <Link fontWeight={"bold"} href="https://turtleshell.me/">Sasha</Link>{" (MS Paint, 2020)"}
                  </ListItem>
                  <ListItem>
                    <Link fontWeight={"bold"} href="nami.jpg">this picture</Link> of Nami (Notability, 2022)
                  </ListItem>
                  <ListItem>
                    <Link fontWeight={"bold"} href="dog.png">a dog</Link> I drew for one of my friends (likely May) (Notability, 2021)
                  </ListItem>
                  <ListItem>
                    <Link fontWeight={"bold"} href="evangelion.jpeg">Shinji</Link> from Evangelion (MS Paint, 2020)
                  </ListItem>
                  <ListItem>
                    <Link fontWeight={"bold"} href="guinea.png">A guinea pig</Link> (Notability, 2021)
                  </ListItem>
                </UnorderedList>
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
