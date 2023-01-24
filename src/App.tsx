import { Container, Flex } from "@chakra-ui/react";
import { BannerHome } from "./components/BannerHome";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { LastJobs } from "./components/LastJobs";
import { Services } from "./components/Services";

const App = () => {
  return (
    <>
      <Flex
        flexDir="column"
        backgroundSize='100%'
        backgroundPosition="600px -1300px"
        backgroundRepeat='no-repeat'
        backgroundImage='/Gradiente.png'
      >
        <Container maxW='container.lg' mx='auto'>
          <Header />
          <BannerHome />
        </Container>
        <Services />
        <LastJobs />
        <Contact />
        <Container maxW='container.lg' mx='auto'>
          <Header />
        </Container>

      </Flex>
    </>
  )
}

export default App;