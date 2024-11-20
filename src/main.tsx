import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./components/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);
