import { Button, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <Container color="#B6B6B6" maxW="container.lg" mx="auto" textAlign="center" pt="120px" pb="50px">
      <Heading fontSize="32px">Vamos conversar 😁</Heading>
      <Text fontSize="16px" fontWeight="bold" py="15px" display="block">Criciúma - SC</Text>
      <Text fontWeight="bold" fontSize={["18px", "26px"]} py="15px">bruno.aiolfi154@gmail.com</Text>

      <Link
        borderRadius={["10px", "15px"]}
        href='https://wa.me/5512997972034'
        target='_blank'
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap='10px'
        my="20px"
        w="260px"
        h="55px"
        fontSize={["16px", "20px"]}
        bg="#7206C2"
        transition='0.5s'
        mx="auto"
        _hover={{
          textDecoration: 'none',
          backgroundColor: '#6507ad'
        }}

      >
        <Text fontSize='16px'>Fale comigo</Text>
        <FaWhatsapp />
      </Link>

      <Flex gap="6" justifyContent='center' py="20px">
        <Link href="https://www.instagram.com/jnrandradx/" target="_blank"><FiInstagram size={26} color="#7206C2" /></Link>
        <Link href="https://www.linkedin.com/in/jlsnjnr/" target="_blank"><FiLinkedin size={26} color="#7206C2" /></Link>
        <Link href="https://github.com/jlsnjnr" target="_blank"><FiGithub size={26} color="#7206C2" /></Link>
      </Flex>
    </Container>
  );
}