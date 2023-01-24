import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface AboutMeProviderProps {
  children: ReactNode
}

type AboutMeContextData = UseDisclosureReturn;

const AboutMeContext = createContext({} as AboutMeContextData);

export function AboutMeProvider({ children }: AboutMeProviderProps) {
  const disclosure = useDisclosure();

  return (
    <AboutMeContext.Provider value={disclosure}>
      {children}
    </AboutMeContext.Provider>
  )
}

export const useAboutMe = () => useContext(AboutMeContext);