import { Box, Flex, Image, Link } from "@chakra-ui/react";

interface IProject {
    src: string;
    url: string;
}

export function Project({ src, url }: IProject) {
    return (
        <Flex
            transition="0.5s !important"
            borderRadius="10px"
            position='relative'
            my="15px"
            h={["100%", "207px"]}
            w="full"
            bg="#0E0E0E"
        >
            <Image display='block' width='100%' height='auto' borderRadius="10px" w="full" objectFit='cover' src={src} />

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
                    href={url}
                    target='_blank'
                >
                    Ver mais
                </Link>
            </Box>
        </Flex>
    )

}