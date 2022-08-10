import React from "react";
import Feed from "./Pages/Feed/feed";
import { ThemeProvider } from "@mui/material";
import theme from "./Constants/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Feed />
    </ThemeProvider>
  );
}

export default App;
