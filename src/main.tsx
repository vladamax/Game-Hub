import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={defaultSystem}>
    <App />
  </ChakraProvider>
);
