// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// import { MantineProvider } from "@mantine/core";
// import "@mantine/core/styles.css";
// import "@mantine/notifications/styles.css";

// import "./styles/global.css";

// import App from "./App";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <MantineProvider defaultColorScheme="light">
//         <App />
//       </MantineProvider>
//     </BrowserRouter>
//   </StrictMode>
// );

// import { StrictMode, useState } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// import {
//   MantineProvider,
//   ColorSchemeScript,
// } from "@mantine/core";

// import "@mantine/core/styles.css";

// import App from "./App";

// function Root() {
//   const [colorScheme, setColorScheme] = useState(
//     localStorage.getItem("theme") || "light"
//   );

//   const toggleTheme = () => {
//     const next = colorScheme === "dark" ? "light" : "dark";

//     setColorScheme(next);

//     localStorage.setItem("theme", next);
//   };

//   return (
//     <MantineProvider
//       defaultColorScheme={colorScheme}
//       forceColorScheme={colorScheme}
//     >
//       <App
//         colorScheme={colorScheme}
//         toggleTheme={toggleTheme}
//       />
//     </MantineProvider>
//   );
// }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Root />
//     </BrowserRouter>
//   </StrictMode>
// );

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