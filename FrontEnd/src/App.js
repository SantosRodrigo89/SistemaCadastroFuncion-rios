import React from "react";
import Feed from "./Pages/Feed/feed";
import { ThemeProvider } from "@mui/material";
import theme from "./Constants/theme";
import FontStyles from "./fontStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontStyles />
      <Feed />
    </ThemeProvider>
  );
}

export default App;
