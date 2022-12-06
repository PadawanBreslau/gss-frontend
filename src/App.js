import { Routes, Route, Outlet } from "react-router-dom";
import {
  Container,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { green, cyan, purple, yellow } from "@mui/material/colors";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import GSSRoute from "./components/GSSRoute";
import FKT from "./components/FKT";
import Partners from "./components/Partners";
import MenuItem from "./components/MenuItem";
import "./styles/main.css";

function App() {
  return (
    <Container
      className="App"
      sx={{ width: "80%", backgroundColor: green[50], pb: 20 }}
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
        marginTop: "1rem",
        marginBottom: "1rem",
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
  const purpleTheme = createTheme({
    palette: {
      primary: {
        main: purple[300],
        lighter: purple[100],
      },
      darker: {
        main: purple[500],
      },
      white: {
        main: cyan[50],
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
    },
  });
  const isMobileMatch = useMediaQuery("(max-width:600px)");
  const theme = isMobileMatch ? purpleTheme : greenTheme;

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <MenuItem url="/" label="O projekcie" />
        <MenuItem url="/route" label="Trasa" />
        <MenuItem url="/fkt" label="Rekordy" />
        <MenuItem url="/partners" label="Partnerzy" />
      </Header>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
