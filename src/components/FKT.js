import React, { Component } from "react";
import { Person } from "@mui/icons-material";
import InternalListItem from "./InternalListItem";
import Breadcrumb from "./info/Breadcrumb";
import { Box, Typography, List } from "@mui/material";

import generic from "../images/fkt/gen.jpg";

import pw from "../images/fkt/pw.jpg";
import es from "../images/fkt/es.jpg";
import pp from "../images/fkt/pp.jpg";
import ms from "../images/fkt/ms.jpg";
import ac from "../images/fkt/ac.jpg";
import zp from "../images/fkt/zp.jpg";
import mcp from "../images/fkt/mcp.jpg";
import mp from "../images/fkt/mp.png";
import ls from "../images/fkt/ls.jpg";
import bb from "../images/fkt/bb.jpg";
import dc from "../images/fkt/dc.jpg";
import wloczykij from "../images/fkt/wloczykij.png";

class FKT extends Component {
  render() {
    return (
      <>
        <Breadcrumb parent="Trasa" parentUrl="/trail" name="Rekordy trasy" />

        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <Box
            sx={(theme) => ({
              width: "45%",
              p: 2,
              backgroundColor: "teal.main",
              textAlign: "center",
              [theme.breakpoints.down("md")]: {
                width: "100%",
                height: "420px",
              },
            })}
          >
            <Typography variant="h2">Bardo - Świeradów</Typography>
            <List sx={{ width: "100%", bgcolor: "secondary.lighter" }}>
              <InternalListItem
                avatar={mcp}
                primaryText="Michał Piotrowski, 9d 5h 47m"
                secondaryText="Wrzesień, 2023"
              />
              <InternalListItem
                avatar={pw}
                primaryText="Piotr Witaszewski, 9d, 11h, 58m"
                secondaryText="Czerwiec, 2023"
              />
              <InternalListItem
                avatar={mp}
                primaryText="Michał Pustelnik, 10d 23h 17m"
                secondaryText="Sierpień, 2023"
              />
              <InternalListItem
                avatar={generic}
                url={'https://www.facebook.com/events/391836073516114'}
                primaryText="Piotr Stańczak, Jarosław Broniszewski, 12d ?h ?m"
                secondaryText="Wiosna, 2024"
              />
              <InternalListItem
                avatar={generic}
                primaryText="Martyna Piszczek, 14d 12h 47m"
                secondaryText="Sierpień, 2024"
              />

              <InternalListItem
                avatar={es}
                primaryText="Ewelina Solak, 15d, 7h, 13m"
                secondaryText="Lipiec, 2023"
              />
              <InternalListItem
                avatar={pp}
                primaryText="Piotr Piasecki, 17d, 10h"
                secondaryText="Czerwiec, 2022"
              />
              <InternalListItem
                avatar={ms}
                primaryText="Mateusz Stawarz, 18d 9h 45m"
                url='https://zieloniwpodrozy.pl/obryw-bardzki-klodzka-gora-zloty-stok-gss-2-0-dzien-1/'
                secondaryText="Wrzesień, 2021. Pierwszy zdobywca trasy"
              />
              <InternalListItem
                avatar={wloczykij}
                primaryText="Marcin Drozdowski, 19d 10h"
                secondaryText="Maj, 2022"
              />
              <InternalListItem
                avatar={zp}
                primaryText="Marcin Makaruk, 19d 15h"
                secondaryText="Czerwic/Lipiec, 2023"
              />
              <InternalListItem
                avatar={dc}
                primaryText="Dominik Chełstowski, 20d 3h 30m"
                url='https://mygss20.blogspot.com/'
                secondaryText="Czerwic/Lipiec, 2023"
              />
              <InternalListItem
                avatar={ac}
                primaryText="Anna Czarnota, Na raty"
                secondaryText="Jesień, 2021"
              />
              <InternalListItem
                avatar={generic}
                primaryText="Tomasz Wiński, Na raty"
                secondaryText="Lato/Jesień, 2024"
              />
            </List>
          </Box>
          <Box
            sx={(theme) => ({
              width: "45%",
              p: 2,
              backgroundColor: "teal.main",
              textAlign: "center",
              [theme.breakpoints.down("md")]: {
                width: "100%",
                height: "420px",
              },
            })}
          >
            <Typography variant="h2">Świeradów-Bardo</Typography>
            <List sx={{ width: "100%", bgcolor: "secondary.main" }}>
              <InternalListItem
                avatar={generic}
                primaryText="Sebastian Stawinoga, 14d 12h 51m"
                secondaryText="Sierpień, 2024"
              />

              <InternalListItem
                avatar={ls}
                primaryText="Łukasz Sowada, 15d 8h 53m"
                secondaryText="Wrzesień, 2023."
              />
              <InternalListItem
                avatar={bb}
                primaryText="Bartek Brzeszkiewicz, 20d 4h 48m"
                secondaryText="Sierpień, 2023."
              />
            </List>
          </Box>
        </Box>
      </>
    );
  }
}

export default FKT;
