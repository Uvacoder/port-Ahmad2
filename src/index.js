import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/core";

import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const colors = {
  black: "#000",
  white: "#fff",
  backgroundColor: "#000"
};

const newTheme = {
  ...theme,
  breakpoints,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac"
    }
  }
};

ReactDOM.render(
  <ThemeProvider theme={newTheme}>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider resetCSS>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
