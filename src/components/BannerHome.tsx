import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Bg from "/Bg.png";
import Atom from "/Atom.png";
import Code from "/Code.png";
import FigmaLogo from "/FigmaLogo.png";
import Lightbulb from "/Lightbulb.png";
import { FiInstagram, FiLinkedin, FiGithub, FiYoutube } from "react-icons/fi";
import { useAboutMe } from "../context/AboutMeContext";

export const BannerHome = () => {
  return (
    <Flex flexDir={["column", "row"]} alignItems="center" gap="60px 40px">
      <Flex pos="relative" flexDirection="column">
        <Text
          pos="absolute"
          left={["0", "-25px"]}
          style={{ transform: "rotate(-45deg)" }}
          color="#7206C2"
          fontWeight="bold"
        >
          Olá
        </Text>
        <Heading textAlign={["center", "left"]} fontSize={["34px", "46px"]} my="20px">
          Bem vindo(a)! 👋
        </Heading>
        <Text textAlign={["center", "left"]} maxW={["100%", "390px"]} color="#828282" fontSize="16px">
          Meu nome é Bruno. Atualmente tenho 19
          anos e trabalho focado como desenvolvedor front-end e mobile. Aqui você vai
          encontrar um pouco das minhas experiências.
        </Text>

        <Flex mt="22" justifyContent={["center", "flex-start"]} gap="6">
          <Link href="https://www.instagram.com/jnrandradx/" target="_blank"><FiInstagram size={26} color="#7206C2" /></Link>
          <Link href="https://www.linkedin.com/in/jlsnjnr/" target="_blank"><FiLinkedin size={26} color="#7206C2" /></Link>
          <Link href="https://github.com/jlsnjnr" target="_blank"><FiGithub size={26} color="#7206C2" /></Link>
        </Flex>
      </Flex>

      <Box ml="auto" position="relative">
        <Image
          mx={["auto", "0"]}
          maxW={["60%", "400px"]}
          src={"https://avatars.githubusercontent.com/brunoaiolfi"}
          alt="Background"
          borderBottomLeftRadius={150}
          borderTopRightRadius={150}
        />
        <Flex
          className="image"
          align="center"
          justifyContent="center"
          bg="#D9D9D9"
          w="60px"
          h="60px"
          borderRadius="full"
          top="20"
          right="1"
          pos="absolute"
        >
          <Image src={Atom} alt="Atom icon" />
        </Flex>
        <Flex
          className="image"
          align="center"
          justifyContent="center"
          bg="#D9D9D9"
          w="60px"
          h="60px"
          borderRadius="full"
          left={["0", "-5"]}
          bottom="20"
          pos="absolute"
        >
          <Image src={Code} alt="Code icon" />
        </Flex>
        <Flex
          className="image"
          align="center"
          justifyContent="center"
          bg="#D9D9D9"
          w="60px"
          h="60px"
          borderRadius="full"
          left="5"
          top="20"
          pos="absolute"
        >
          <Image src={FigmaLogo} alt="Figma Logo icon" />
        </Flex>
        <Flex
          className="image"
          align="center"
          justifyContent="center"
          bg="#D9D9D9"
          w="60px"
          h="60px"
          borderRadius="full"
          right="20"
          bottom="5"
          pos="absolute"
        >
          <Image src={Lightbulb} alt="Light bulb icon" />
        </Flex>
      </Box>
    </Flex>
  );
};
