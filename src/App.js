import { Routes, Route, Outlet } from "react-router-dom";
import {
  Container,
  ThemeProvider,
  useMediaQuery,
  Box,
} from "@mui/material";
import { green } from "@mui/material/colors";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import GSSRoute from "./components/GSSRoute";
import FKT from "./components/FKT";
import Partners from "./components/Partners";
import MenuItem from "./components/MenuItem";
import Panel from "./components/info/Panel";
import Support from "./components/info/Support";
import Approach from "./components/info/Approach";
import Accomodation from "./components/info/Accomodation";
import Supplies from "./components/info/Supplies";
import Tips from "./components/info/Tips";
import Media from "./components/info/Media";
import Movies from "./components/info/Movies";
import Written from "./components/info/Written";
import Gallery from "./components/info/Gallery";
import Trivia from "./components/info/Trivia";
import Monuments from "./components/info/Monuments";
import Towers from "./components/info/Towers";
import Vicinity from "./components/info/Vicinity";
import fb from "./images/fb.png";
import greenTheme from "./components/themes/greenTheme";
import mobileTheme from "./components/themes/mobileTheme";
import "./styles/main.css";

function App() {
  return (
    <Container
      className="App"
      sx={(theme) => ({
        width: "80  %",
        backgroundColor: green[50],
        pb: 20,
        [theme.breakpoints.down("md")]: {
          width: '100%'
        }
      })}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="route" element={<GSSRoute />} />
          <Route path="fkt" element={<FKT />} />
          <Route path="partners" element={<Partners />} />
          <Route path="info" element={<Panel />} />
          <Route path="support" element={<Support />} />
          <Route path="trail" element={<Panel />} />
          <Route path="trivia" element={<Trivia />} />
          <Route path="media" element={<Panel />} />
          <Route path="approach" element={<Approach />} />
          <Route path="accomodation" element={<Accomodation />} />
          <Route path="supplies" element={<Supplies />} />
          <Route path="tips" element={<Tips />} />
          <Route path="relations" element={<Media />} />
          <Route path="movies" element={<Movies />} />
          <Route path="written" element={<Written />} />
          <Route path="galleries" element={<Gallery />} />
          <Route path="monuments" element={<Monuments />} />
          <Route path="towers" element={<Towers />} />
          <Route path="vicinity" element={<Vicinity />} />
        </Route>
      </Routes>
    </Container>
  );
}

function Layout() {
  const isMobileMatch = useMediaQuery("(max-width:600px)");
  const theme = isMobileMatch ? mobileTheme : greenTheme;

  return (
    <ThemeProvider theme={theme}>
      <Header isMobile={isMobileMatch}>
        <MenuItem url="/" label="O projekcie" />
        <MenuItem url="/route" label="Trasa" />
        <MenuItem url="/fkt" label="Rekordy" />
        <MenuItem url="/info" label="Baza Wiedzy" />
        {!isMobileMatch && <MenuItem url="/partners" label="Partnerzy" />}
        <a href="https://www.facebook.com/gssreloaded" target="_blank" rel="noreferrer">
          <Box
            component="img"
            className="fb"
            sx={(theme) => ({
              width: 16,
              height: 16,
              ml: 10,
              [theme.breakpoints.down("md")]: { ml: 0.5 },
            })}
            src={fb}
          />
        </a>
      </Header>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
