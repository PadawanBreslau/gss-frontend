import React, { Component } from "react";
import { TurnRight, Landscape, Castle, HighlightOff, QueryStats } from "@mui/icons-material";
import {
  Link,
  Box,
  Typography,
  Button,
  List,
} from "@mui/material";
import InternalListItem from "./InternalListItem";
import Map from "../images/homepage2.jpg";

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
              width: '90%',
              height: '90%',
            }}
          />
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
              icon={<QueryStats />}
              primaryText="Statystyki"
              secondaryText="516km długości, 20,000 metrów podejść, większość najważniejszych szczytów polskich Sudetów"
            />
            <InternalListItem
              icon={<TurnRight />}
              primaryText="Trasa"
              secondaryText="Przebiega w ponad 99% przebiegu po istniejących szlakach turystycznych"
            />
            <InternalListItem
              icon={<Landscape />}
              primaryText="Szczyty"
              secondaryText="Śnieżke, Śnieżnik, Szczeliniec, Jagodna, Wielka Sowa, Włodzicka Góra, Waligóra, Skalnik, Sokoliki, Borówkowa, Smrek, Smrk i wiele, wiele innych"
            />
            <InternalListItem
              icon={<Castle />}
              primaryText="Widoki"
              secondaryText="Pełno widowiskowych miejsc na trasie zarówno dla pasjonatów dziczy, jak i fanów zabytków"
            />
            <InternalListItem
              icon={<HighlightOff />}
              primaryText="Nawierzchnia"
              secondaryText="Asfalty i trasy po równym na trasie zostały ograniczone do minimum. Życie jest za krótkie by po takich chodzić :)"
            />
          </List>
        </Box>
      </Box>
    );
  }
}

export default HomePage;
