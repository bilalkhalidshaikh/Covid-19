import React from "react";
import ReactDOM from "react-dom";
import serviceWorker from "./serviceWorker";
import App from "./App";
import "rsuite/dist/styles/rsuite-default.css";
import 'antd/dist/antd.css';
import { ChakraProvider } from "@chakra-ui/react"


ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,

  document.getElementById("root")
);

serviceWorker.register();
