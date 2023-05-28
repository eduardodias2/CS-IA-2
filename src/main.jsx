import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import themesPalette from "./styles/themes";
import { Routers } from "./routers";
import { AuthProvider } from "./hooks/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themesPalette}>
      <AuthProvider>
        <Routers />
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
