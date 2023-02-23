
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { FiMonitor } from "react-icons/fi";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <Box bg="#0E0E0E" borderRadius="40px" mt="120px">
      <Container maxW="container.lg" mx="auto">
        <Heading color="#B6B6B6" fontSize="38px" pt="60px">Serviços</Heading>
        <Flex
          justifyContent="space-between"
          direction={["column", "row"]}
        >
          <ServiceCard
            Title={"MOBILE"}
            Icon={<HiDevicePhoneMobile size={26} />}
            Resume={"Desenvolvimento de aplicativos para android e também para IOS."}
          />
          <ServiceCard
            Title={"FRONT-END"}
            Icon={<FiMonitor size={26} />}
            Resume={"Desenvolvimento de páginas web responsivas."}
          />
        </Flex>
      </Container>
    </Box>
  );
};