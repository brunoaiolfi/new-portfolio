import { Flex, Text, Heading } from "@chakra-ui/react";
import { FiMonitor } from "react-icons/fi";

interface ServiceCardProps {
    Resume: string,
    Title: string,
    Icon: JSX.Element
}
export function ServiceCard({ Icon, Resume, Title, }: ServiceCardProps) {
    return (

        <Flex
            bg="#08080A"
            flexDir="column"
            borderRadius="40px"
            py="30px"
            px="40px"
            gap="15px"
            my="50px"
            alignItems="center"
            maxW={400}
            maxH={300}
        >
            <Flex
                align="center"
                justifyContent="center"
                bg="#6B09B2"
                w="65px"
                h="65px"
                borderRadius="20px"
            >
                {Icon}
            </Flex>
            <Heading fontSize={["20px", "30px"]}>{Title}</Heading>
            <Text textAlign="justify" maxW="380px" color="#B6B6B6">
                {Resume}
            </Text>
        </Flex>
    )
}
