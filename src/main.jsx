import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import themesPalette from "./styles/themes";
import { Routers } from "./routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themesPalette}>
      <Routers />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
