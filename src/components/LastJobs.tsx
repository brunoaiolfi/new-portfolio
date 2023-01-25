import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  keyframes,
  usePrefersReducedMotion,
  SimpleGrid,
  Image,
  Stack,
  Link,
} from "@chakra-ui/react";
import { useState } from 'react'
import { FiTrendingUp } from "react-icons/fi";
import { Project } from "./Project";

const spin = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

export const LastJobs = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return (
    <Container maxW="container.lg" mx="auto">
      <Heading color="#B6B6B6" fontSize="38px" pt="60px">
        Últimos Trabalhos
      </Heading>
      <Text color="#B6B6B6" pt="40px" maxW="530px">
        Cada trabalho contém uma grande dose de entusiasmo e conhecimento.
        Acompanhando sempre as últimas tendências, priorizando o design sólido e
        intuitivo para o cliente e usuário. Esse é o resultado.
      </Text>

      <SimpleGrid columns={[1, 3]} spacing={10} gap="10px" w="full" mt="50px" pos="relative">
        <Flex flexDir="column">
          <Project
            src="/dashgo.png"
            url="https://github.com/brunoaiolfi/dashGo"
          />
          <Project
            src="dashgoAPI.png"
            url="https://github.com/brunoaiolfi/DashGo-server"
          />
        </Flex>
        <Flex flexDir="column">
          <Project
            src="/ignews.png"
            url="https://github.com/brunoaiolfi/ig-news"
          />
          <Project
            src="/goFinances.png"
            url="https://github.com/brunoaiolfi/goFinances"
          />
        </Flex>
        <Flex flexDir="column">
          <Project
            src="/buymeacoffee.png"
            url="https://brunoaiolfi.github.io/buyMeACoffee/"
          />
          <Project
            src="/spacetreveling.png"
            url="https://github.com/brunoaiolfi/Spacetreveling"
          />
        </Flex>

       
      </SimpleGrid>
    </Container >
  );
};
