import { Routes, Route, Outlet } from "react-router-dom";
import {
  Container,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  Box,
  Link,
} from "@mui/material";
import { green, cyan, purple, yellow } from "@mui/material/colors";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import GSSRoute from "./components/GSSRoute";
import FKT from "./components/FKT";
import Partners from "./components/Partners";
import MenuItem from "./components/MenuItem";
import fb from "./images/fb.png";

import "./styles/main.css";

function App() {
  return (
    <Container
      className="App"
      sx={{ backgroundColor: green[50], pb: 20 }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="route" element={<GSSRoute />} />
          <Route path="fkt" element={<FKT />} />
          <Route path="partners" element={<Partners />} />
        </Route>
      </Routes>
    </Container>
  );
}

function Layout() {
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
        main: yellow[300],
        lighter: yellow[50],
      },
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
      },
      h3: {
        marginTop: "1rem",
        marginBottom: "1rem",
        fontSize: "1.8rem",
        fontWeight: 500,
      },
    },
  });
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
        fontSize: '.6rem',
      },
    },
  });
  const isMobileMatch = useMediaQuery("(max-width:600px)");
  const theme = isMobileMatch ? mobileTheme : greenTheme;

  return (
    <ThemeProvider theme={theme}>
      <Header isMobile={isMobileMatch}>
        <MenuItem url="/" label="O projekcie" />
        <MenuItem url="/route" label="Trasa" />
        <MenuItem url="/fkt" label="Rekordy" />
        {!isMobileMatch && <MenuItem url="/partners" label="Partnerzy" />}
        <a href='https://www.facebook.com/gssreloaded' target="_blank"><Box
          component="img"
          className="fb"
          sx={(theme) => ({
            width: 16,
            height: 16,
            ml: 10,
            [theme.breakpoints.down("md")]: {ml: .5}
          })}
          src={fb}
        /></a>
      </Header>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
