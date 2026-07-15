import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import App from "./App";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <MantineProvider defaultColorScheme="light">
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);