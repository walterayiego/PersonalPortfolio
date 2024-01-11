import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import "./styles/index.css";
import "./styles/App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "./styles/theme";
import AppRoutes from "./apis/AppRoutes";
import { ContextProvider } from "./apis/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContextProvider>
        <AppRoutes />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
