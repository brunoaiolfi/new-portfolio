import { Container, Heading, Text } from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Container color="#B6B6B6" maxW="container.lg" mx="auto" textAlign="center" pt="120px" pb="50px">
      <Heading fontSize="32px">Vamos conversar 😁</Heading>
      <Text fontWeight="bold" fontSize={["18px", "26px"]} py="15px">bruno.aiolfi154@gmail.com</Text>
      <Text fontSize="16px" fontWeight="bold" display="block">Criciúma - SC</Text>

    </Container>
  );
}