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
        <Flex
          animation={animation}
          alignItems="center"
          justify="center"
          w="100px"
          h="100px"
          borderRadius="full"
          border="1px dashed #7206C2"
          pos="absolute"
          top="0"
          right="20px"
          zIndex='8'
        >
          <Flex
            alignItems="center"
            justify="center"
            w="70px"
            h="70px"
            borderRadius="full"
            border="1px dashed #7206C2"
          />
        </Flex>
        <Box pos="absolute" zIndex='8' top="35px" right="55px">
          <FiTrendingUp color="#7206C2" size={24} />
        </Box>

        <Flex flexDir="column">
          <Flex
            transition="0.5s !important"
            borderRadius="10px"
            position='relative'
            my="15px"
            h={["100%", "283px"]}
            w="full"
            bg="#0E0E0E"
          >
            <Image
              display='block'
              width='100%'
              borderRadius="10px"
              w="full"
              objectFit='cover'
              src='/poke.png'
            />

            <Box position='absolute'
              top='0'
              bottom='0'
              left='0'
              right='0'
              height='100%'
              width='100%'
              opacity='0'
              transition='.5s ease'
              backgroundColor='rgba(14, 14, 14, 0.5)'

              _hover={{
                opacity: 1,
              }}

            >
              <Link
                color='white'
                font-size='20px'
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                text-align='center'
                href="https://pokemon-api-k926.vercel.app/"
                target='_blank'
              >Conheça o projeto</Link>
            </Box>
          </Flex>

          <Flex
            transition="0.5s !important"
            borderRadius="10px"
            position='relative'
            my="15px"
            h={["100%", "207px"]}
            w="full"
            bg="#0E0E0E"
          >
            <Image display='block' width='100%' height='auto' borderRadius="10px" w="full" objectFit='cover' src='/dashgo.png' />

            <Box position='absolute'
              top='0'
              bottom='0'
              left='0'
              right='0'
              height='100%'
              width='100%'
              borderRadius="10px"
              opacity='0'
              transition='.5s ease'
              backgroundColor='rgba(14, 14, 14, 0.5)'

              _hover={{
                opacity: 1,
              }}

            >
              <Link
                color='white'
                font-size='20px'
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                text-align='center'
                href="https://dashgo-ashy.vercel.app/"
                target='_blank'
              >Conheça o projeto</Link>
            </Box>
          </Flex>
        </Flex>

        <Flex flexDir="column">
          <Flex
            transition="0.5s !important"
            borderRadius="10px"
            position='relative'
            my="15px"
            h="207px"
            w="full"
            bg="#0E0E0E"
          >
            <Image display='block' width='100%' height='auto' borderRadius="10px" w="full" objectFit='cover' src='/trip.png' />

            <Box position='absolute'
              top='0'
              bottom='0'
              left='0'
              right='0'
              height='100%'
              width='100%'
              borderRadius="10px"
              opacity='0'
              transition='.5s ease'
              backgroundColor='rgba(14, 14, 14, 0.5)'

              _hover={{
                opacity: 1,
              }}

            >
              <Link
                color='white'
                font-size='20px'
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                text-align='center'
                href="https://world-trip-gamma.vercel.app/"
                target='_blank'
              >Conheça o projeto</Link>
            </Box>
          </Flex>

          <Flex
            transition="0.5s !important"
            borderRadius="10px"
            position='relative'
            my="15px"
            h="283px"
            w="full"
            bg="#0E0E0E"
          >
            <Image display='block' width='100%' height='auto' borderRadius="10px" w="full" objectFit='cover' src='/hbo-max.png' />

            <Box position='absolute'
              top='0'
              bottom='0'
              left='0'
              right='0'
              height='100%'
              width='100%'
              borderRadius="10px"
              opacity='0'
              transition='.5s ease'
              backgroundColor='rgba(14, 14, 14, 0.5)'

              _hover={{
                opacity: 1,
              }}

            >
              <Link
                color='white'
                font-size='20px'
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                text-align='center'
                href="https://hbo-max-clone.vercel.app/"
                target='_blank'
              >Conheça o projeto</Link>
            </Box>
          </Flex>
        </Flex>

        <Flex flexDir="column">
          <Flex
            transition="0.5s !important"
            borderRadius="10px"
            position='relative'
            my="15px"
            h={["100%", "277px"]}
            w="full"
            bg="#0E0E0E"
          >
            <Image display='block' width='100%' height='auto' borderRadius="10px" w="full" objectFit='cover' src='/dt-money.png' />

            <Box position='absolute'
              top='0'
              bottom='0'
              left='0'
              right='0'
              height='100%'
              width='100%'
              borderRadius="10px"
              opacity='0'
              transition='.5s ease'
              backgroundColor='rgba(14, 14, 14, 0.5)'

              _hover={{
                opacity: 1,
              }}

            >
              <Link
                color='white'
                font-size='20px'
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                text-align='center'
                href="https://dt-money-kappa.vercel.app/"
                target='_blank'
              >Conheça o projeto</Link>
            </Box>
          </Flex>

          <Flex
            transition="0.5s !important"
            borderRadius="10px"
            position='relative'
            my="15px"
            h={["100%", "213px"]}
            w="full"
            bg="#0E0E0E"
          >
            <Image display='block' width='100%' height='auto' borderRadius="10px" w="full" objectFit='cover' src='/ignews.png' />

            <Box position='absolute'
              top='0'
              bottom='0'
              left='0'
              right='0'
              height='100%'
              width='100%'
              borderRadius="10px"
              opacity='0'
              transition='.5s ease'
              backgroundColor='rgba(14, 14, 14, 0.5)'

              _hover={{
                opacity: 1,
              }}
            >
              <Link
                color='white'
                font-size='20px'
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                text-align='center'
                href="https://ignews-jlsnjnr.vercel.app/"
                target='_blank'
              >Conheça o projeto</Link>
            </Box>
          </Flex>
        </Flex>
      </SimpleGrid>
    </Container >
  );
};
