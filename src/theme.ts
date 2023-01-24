import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: {
      "50": "#FEFEFE",
    },
    black: {
      "900": "#0A0A0A",
    },
  },
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        // bg: props.colorMode === "dark" ? "gray.900" : "white.50",
        bg: "gray.900",
        color: "#fff",
        height: "100%",
        fontFamily: "Nunito",
      },
    }),
  },
});
