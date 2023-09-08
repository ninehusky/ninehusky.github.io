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
  Alert,
  AlertIcon,
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
              <Heading fontSize={"6xl"}>Andrew Cheung (he/him)</Heading>
              <Heading fontSize={"xl"}>
                Grad Student @ UW | Researcher @ PLSE | Coordinator/TA @ CSE 12X
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
                learn more about applying PL techniques in the domain of
                architecture.
              </Text>
              <Alert status="info">
                <AlertIcon />
                <Text>
                  I will be applying to PhD programs in the fall of 2023. If you
                  think I'd be a good fit for your lab, please{" "}
                  <Link href="mailto:acheung8@cs.washington.edu">
                    {" "}
                    reach out
                  </Link>
                  !
                </Text>
              </Alert>
              <Heading fontSize={"4xl"}>Research</Heading>
              <Text textAlign={"left"}>
                I'm very lucky to be a research assistant at UW's{" "}
                <Link fontWeight={"bold"} href="https://uwplse.org">
                  PLSE group
                </Link>
                , under the mentorship of{" "}
                <Link fontWeight={"bold"} href="https://justg.us">
                  Gus Smith
                </Link>{" "}
                and{" "}
                <Link fontWeight={"bold"} href="https://ztatlock.net">
                  Zachary Tatlock
                </Link>
                .
              </Text>
              <Text textAlign={"left"}>
                We're currently working on
                <Link
                  fontWeight={"bold"}
                  href="https://github.com/uwsampl/lakeroad"
                >
                  {" "}
                  Lakeroad
                </Link>
                , a tool that uses program synthesis to generate hardware
                designs. We presented{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://arxiv.org/pdf/2305.09580.pdf"
                >
                  some of our insights
                </Link>{" "}
                at{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://pldi23.sigplan.org/home/plarch-2023#program"
                >
                  PLARCH 2023
                </Link>
                !
              </Text>
              <Text textAlign={"left"}>
                As part of Lakeroad, I'm working on Cookie (
                <Link fontWeight={"bold"} href="cookie-paper.pdf">
                  extended abstract
                </Link>
                ,{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://www.youtube.com/live/bjJU1vP1vVI?si=-3PuswxQ-ODEIMgr&t=28448"
                >
                  talk
                </Link>
                ), a tool similar to{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://johnwickerson.github.io/papers/verismith_fpga20.pdf"
                >
                  Verismith
                </Link>{" "}
                that rigorously evaluates hardware compilers on their ability to
                fully leverage the power of the hardware they target. I
                presented this research at{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://icfp23.sigplan.org/track/icfp-2023-student-research-competition"
                >
                  ICFP 2023's Student Research Competition
                </Link>
                , and was awarded first place in the graduate category!
              </Text>
              <Text textAlign={"left"}>
                In the past, I worked with researchers at UW, Princeton, and
                Harvard on 3LA{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://arxiv.org/pdf/2203.00218.pdf"
                >
                  (paper)
                </Link>
                , a methodology that aims to make it easier for developers to
                develop and test accelerators.
              </Text>
              <Text textAlign={"left"}>
                As part of the 3LA project, I extended the functionality of{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://github.com/gussmith23/glenside"
                >
                  Glenside
                </Link>
                , an IR for tensor operations, so that it could support a wider
                set of machine learning kernels.
              </Text>
              <Heading fontSize={"4xl"}>Industry</Heading>
              <Text textAlign={"left"}>
                I'm currently working at{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://www.intel.com/content/www/us/en/research/overview.html"
                >
                  Intel Labs
                </Link>{" "}
                as a formal verification research intern. I'm working with{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://www.linkedin.com/in/jin-yang-87a9587b/"
                >
                  Jin Yang
                </Link>
                's team to{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://www.intel.com/content/www/us/en/newsroom/news/intel-collaborate-microsoft-darpa-program.html"
                >
                  help the push
                </Link>{" "}
                in creating and verifying hardware that supports{" "}
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
                <Link
                  fontWeight={"bold"}
                  href="https://www.linkedin.com/in/antonni/"
                >
                  Anton Nikitin
                </Link>{" "}
                (my manager) and{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://www.linkedin.com/in/yiweilu/"
                >
                  Yi-Wei Lu
                </Link>{" "}
                (my mentor), I designed and implemented a full-stack web app
                aimed at improving the experience of Amazon employees working in
                fulfillment centers.
              </Text>
              <Heading fontSize={"4xl"}>Teaching</Heading>
              <Text textAlign={"left"}>
                I'm currently onboarding as the CSE 12X/14X TA Coordinator!
                In other words, I help make sure that the CS department's largest classes run smoothly.
                This involves completing administrative tasks, such as
                collaborating with instructors and{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://www.linkedin.com/in/chloe-fong/"
                >
                  Chloe Fong
                </Link>
                , my co-coordinator, and interviewing, hiring, and training new TAs.
              </Text>
              <Text textAlign={"left"}>
                <Link fontWeight={"bold"} href="thefriends.jpeg">
                  Here
                </Link>
                's a picture of me and the very hardworking 12X TAs in Spring
                2023 (I'm in the middle)!
              </Text>
              <Text textAlign={"left"}>
                Before this, I was a lead teaching assistant for UW's recently
                redesigned intro sequence (specifically, I taught{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://courses.cs.washington.edu/courses/cse123/23sp/"
                >
                  CSE 123
                </Link>{" "}
                and{" "}
                <Link
                  fontWeight={"bold"}
                  href="https://courses.cs.washington.edu/courses/cse122/23wi/"
                >
                  CSE 122
                </Link>
                ). And before that, I was a lead TA for the old intro sequence for 10 quarters, where I concurrently
                worked on an autograder that used static anaylsis techniques to give feedback on student code quality.
              </Text>
              <Text textAlign={"left"}>
                Before I ever taught in a classroom, I was a Allen School tutor for
                student athletes; I worked with a student athlete throughout the
                quarter to support them in their CS courses.
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
                    <Link fontWeight={"bold"} href="cakepop.jpg">
                      an interpretation of the Starbucks bee cake pop
                    </Link>{" "}
                    (MS Paint, 2023)
                  </ListItem>
                  <ListItem>
                    a compilation of Lord of the Rings characters (work in
                    progress - MS Paint, 2023):
                    <UnorderedList>
                      <ListItem>
                        <Link fontWeight={"bold"} href="aragorn-angry.png">
                          Aragorn
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link fontWeight={"bold"} href="aragorn-dvd.png">
                          Aragorn Lite
                        </Link>{" "}
                      </ListItem>
                      <ListItem>
                        <Link fontWeight={"bold"} href="frodo.png">
                          Frodo
                        </Link>
                      </ListItem>
                    </UnorderedList>
                  </ListItem>
                  <ListItem>
                    <Link fontWeight={"bold"} href="nami.jpg">
                      this picture
                    </Link>{" "}
                    of Nami (Notability, 2022)
                  </ListItem>
                  <ListItem>
                    <Link fontWeight={"bold"} href="scoobers.png">
                      The Scooby Squad
                    </Link>{" "}
                    (MS Paint, 2021)
                  </ListItem>
                  <ListItem>
                    <Link fontWeight={"bold"} href="dog.png">
                      a dog
                    </Link>{" "}
                    I drew for one of my friends (likely May) (Notability, 2021)
                  </ListItem>
                  <ListItem>
                    <Link fontWeight={"bold"} href="guinea.png">
                      A guinea pig
                    </Link>{" "}
                    (Notability, 2021)
                  </ListItem>
                  <ListItem>
                    <Link fontWeight={"bold"} href="sasha.png">
                      a portrait
                    </Link>{" "}
                    of{" "}
                    <Link fontWeight={"bold"} href="https://turtleshell.me/">
                      Sasha
                    </Link>
                    {" (MS Paint, 2020)"}
                  </ListItem>
                  <ListItem>
                    <Link fontWeight={"bold"} href="evangelion.jpeg">
                      Shinji
                    </Link>{" "}
                    from Evangelion (MS Paint, 2020)
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
