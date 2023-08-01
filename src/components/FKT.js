import React, { Component } from "react";
import { List } from "@mui/material";
import { Person } from "@mui/icons-material";
import InternalListItem from "./InternalListItem";
import Breadcrumb from "./info/Breadcrumb";
import pw from "../images/fkt/pw.jpg";
import es from "../images/fkt/es.jpg";
import pp from "../images/fkt/pp.jpg";
import ms from "../images/fkt/ms.jpg";
import ac from "../images/fkt/ac.jpg";
import zp from "../images/fkt/zp.jpg";

class FKT extends Component {
  render() {
    return (
      <>
        <Breadcrumb parent="Trasa" parentUrl="/trail" name="Rekordy trasy" />

        <List sx={{ width: "100%", bgcolor: "secondary.lighter" }}>
          <InternalListItem
            avatar={pw}
            primaryText="Piotr Witaszewski, 9d, 11h, 58m"
            secondaryText="Czerwiec, 2023. Całość, start w Bardzie"
          />
          <InternalListItem
            avatar={es}
            primaryText="Ewelina Solak, 15d, 7h, 13m"
            secondaryText="Lipiec, 2023. Całość, start w Bardzie"
          />
          <InternalListItem
            avatar={pp}
            primaryText="Piotr Piasecki, 17d, 10h"
            secondaryText="Czerwiec, 2022. Całość, start w Bardzie"
          />
          <InternalListItem
            avatar={ms}
            primaryText="Mateusz Stawarz, 18d 9h 45m"
            secondaryText="Wrzesień, 2021. Całość, start w Bardzie. Pierwszy zdobywca trasy"
          />
          <InternalListItem
            avatar={Person}
            primaryText="Marcin Drozdowski, 19d 10h"
            secondaryText="Maj, 2022. Całość, start w Bardzie."
          />
          <InternalListItem
            avatar={zp}
            primaryText="Marcin Makaruk, 19d 15h"
            secondaryText="Czerwic/Lipiec, 2023. Całość, start w Bardzie."
          />
          <InternalListItem
            avatar={ac}
            primaryText="Anna Czarnota, Na raty"
            secondaryText="Jesień, 2021"
          />
        </List>
      </>
    );
  }
}

export default FKT;
