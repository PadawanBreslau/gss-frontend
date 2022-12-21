import { createTheme } from "@mui/material";
import { green, yellow } from "@mui/material/colors";

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
        main: yellow[300],
        lighter: yellow[50],
      },
    },
    typography: {
      fontSize: 9,
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