import { Flex, Link, Text } from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa";

export const Header = () => {

  return (
    <>
      <Flex alignItems='center' justifyContent='space-between' my="40px">

        <Flex my="50px" alignItems="center" justifyContent={["center", "flex-start"]} flexDir={["column", "row"]} gap={["30px", "90px"]}>
          <Link download href="../../Curriculo.pdf">Baixar CV</Link>
        </Flex>

        <Link
          w={['150px', '240px']}
          h={['45px', '60px']}
          border="1px solid #fff"
          borderColor='white.50'
          bg='transparent'
          borderRadius={["10px", "15px"]}
          href='https://wa.me/48988060117'
          target='_blank'
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap='10px'
          transition='0.5s'
          ml="auto"
          _hover={{
            textDecoration: 'none',
            border: "1px solid #e4e4e4"
          }}
        >
          <Text>Contato</Text>
          <FaWhatsapp />
        </Link>
      </Flex>
    </>
  )
}