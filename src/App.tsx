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
            <Text>i do swe, pl, and cs ed!</Text>
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
              <Link href={`http://niners.me/resume.pdf`}>
                <IoMdDocument size={30} />
              </Link>
              <ColorModeSwitcher />
            </HStack>
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
          <Text>Hiya! 👋</Text>
          <Text>
            I'm Andrew, a fifth-year studying CS at UW Seattle's{" "}
            <Link color={color} fontWeight="bold" href="https://cs.uw.edu/">
              Paul G. Allen School of Computer Science and Engineering
            </Link>
            .
          </Text>
          <Text>
            I spent Summer 2022 working at{" "}
            <Link
              fontWeight="bold"
              color={color}
              href="https://www.amazon.com/"
            >
              Amazon
            </Link>{" "}
            as a SWE intern.
          </Text>
          <Text>
            This fall, I'm working toward getting my Bachelor's and Master's
            degrees as part of the Allen School's{" "}
            <Link
              color={color}
              fontWeight="bold"
              href="https://www.cs.washington.edu/academics/bsms/"
            >
              BS/MS program
            </Link>
            .
          </Text>
          <Text>
            I'm also a research assistant at UW's{" "}
            <Link color={color} fontWeight="bold" href="https://uwplse.org/">
              PLSE lab
            </Link>{" "}
            under the mentorship of Dr. Zachary Tatlock and Gus Smith.
          </Text>{" "}
          🧪
          <Text>
            For several years I was a core member of the teaching staff of{" "}
            <Link color={color} fontWeight="bold" href="https://cs.uw.edu/142">
              CSE 142
            </Link>
            {", "}the intro CS course at UW.
          </Text>
          <Text>
            Further back, I tutored athletes in Computer Science at the Allen
            School and did webdev for{" "}
            <Link color={color} fontWeight="bold" href="https://rainydawg.org/">
              Rainy Dawg Radio
            </Link>
            .
          </Text>
          <Text>
            When I'm not at school, I love making stuff, whether it's{" "}
            <Link
              color={color}
              fontWeight="bold"
              href="https://github.com/ninehusky/ninechip"
            >
              programming projects,{" "}
            </Link>
            food, doodles, or{" "}
            <Link
              color={color}
              fontWeight={"bold"}
              href="https://www.youtube.com/watch?v=VmgY0_I1LAs&list=PLxkXYkNGR0iJBZ_K3CIK__PPQK9BjJ1_2"
            >
              music
            </Link>
            . (Plenty of room to improve with all of those, though!)
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
