import { createTheme } from "@mui/material";
import { green, orange, teal } from "@mui/material/colors";

const greenTheme = createTheme({
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
        darker: teal[700]
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: "Georgia",
    fontWeight: 600,
    h1: {
      marginTop: "1rem",
      marginBottom: "1rem",
      fontSize: "3.2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2.4rem",
      fontWeight: 600,
      marginBottom: "2rem",
    },
    h3: {
      marginTop: "1rem",
      marginBottom: "1rem",
      fontSize: "1.9rem",
      fontWeight: 600,
    },
  },
});

export default greenTheme;
