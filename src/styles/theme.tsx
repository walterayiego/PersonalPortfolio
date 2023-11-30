import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "dark",
    // background: {
    //   default: "##e4e1de", // Set the default background color
    // },
    primary: {
      main: "#556cd6",
      dark: "#030303",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
      
  },
});

export default theme;
