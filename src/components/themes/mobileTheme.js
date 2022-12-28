import { createTheme } from "@mui/material";
import { green, orange, teal } from "@mui/material/colors";

const mobileTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
      mid: green[250],
      lighter: green[50],
      darker: green[800],
    },
    darker: {
      main: green[500],
    },
    secondary: {
      darker: orange[700],
      main: orange[300],
      lighter: orange[50],
    },
    teal: {
      main: teal[500],
      lighter: teal[300],
      light: teal[200],
      darker: teal[700],
    },
  },
  typography: {
    fontSize: 11,
    h1: {
      fontSize: "1.4rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: ".85rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: ".7rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: ".6rem",
      fontWeight: 600,
    },
    p1: {
      fontSize: ".6rem",
    },
  },
});

export default mobileTheme;
