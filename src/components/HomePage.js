import React, { Component } from "react";
import { TurnRight, Landscape, Castle, HighlightOff } from "@mui/icons-material";
import {
  Link,
  Box,
  Typography,
  Button,
  List,
} from "@mui/material";
import InternalListItem from "./InternalListItem";
import Map from "../images/gss2-map2.png";

class HomePage extends Component {
  render() {
    return (
      <Box className="home">
        <Box
          className="about"
          sx={{
            mb: 2,
            backgroundColor: "primary.lighter",
            p: 2,
          }}
        >
          <Typography variant="h2">
            Strona wirtualnego szlaku przez Sudety
          </Typography>
          <Box
            className="gssmap"
            component="img"
            src={Map}
            sx={{
              width: 400,
              height: 300,
            }}
          />
          <Typography variant="h3">
            500km trasy, 20km przewyższenia, mnóstwo gór, historii i bez
            nadmiernych asfaltów
          </Typography>
        </Box>
        <Button variant="contained" sx={{ mr: 1, mb: 2 }}>
          <Link href="/gss20-full-official-2022.gpx" target="_blank" rel="noreferrer" download>
            <Typography variant="h5" color="primary.lighter">
              Pobierz całość trasy GSS 2.0 (12.2022) - GPX
            </Typography>
          </Link>
        </Button>

        <Box>
          <List sx={{ width: "100%", bgcolor: "secondary.lighter" }}>
            <InternalListItem
              icon={<TurnRight />}
              primaryText="Trasa"
              secondaryText="Przebiega po istniejących szlakach"
            />
            <InternalListItem
              icon={<Landscape />}
              primaryText="Szczyty"
              secondaryText="Przechodzi przez większość najwyższych szczytów Sudetów"
            />
            <InternalListItem
              icon={<Castle />}
              primaryText="Widoki"
              secondaryText="Pełno widowiskowych i zabytkowych miejsc na trasie"
            />
            <InternalListItem
              icon={<HighlightOff />}
              primaryText="Nawierzchnia"
              secondaryText="Asfalty na trasie zostały ograniczone do minimum"
            />
          </List>
        </Box>
      </Box>
    );
  }
}

export default HomePage;
