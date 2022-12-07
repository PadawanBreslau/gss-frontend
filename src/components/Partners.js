import React, { Component } from "react";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import pt from "../images/partners/poltrax.png";
import pb from "../images/partners/probit.png";
import vs from "../images/partners/visu.png";
import zl from "../images/partners/zielony.png";
import gw from "../images/partners/gw.jpg";
import mt from "../images/mt.png";

class Partners extends Component {
  render() {
    return (
      <>
        <Typography variant="h2">Wspierają nas</Typography>
        <ImageList sx={{ width: 800, height: 300 }} cols={3} rowHeight={256}>
          <ImageListItem sx={{ m: 2 }}>
            <a href="https://poltrax.live" target="_blank">
              <img src={pt} alt={"Poltrax"} loading="lazy" width="100%" />
            </a>
          </ImageListItem>
          <ImageListItem sx={{ m: 2 }}>
            <a href="https://probit.com.pl/" target="_blank">
              <img src={pb} alt={"Probit"} loading="lazy" width="100%" />
            </a>
          </ImageListItem>
          <ImageListItem sx={{ m: 2 }}>
            <a href="https://visuality.pl/" target="_blank">
              <img src={vs} alt={"Visuality"} loading="lazy" width="100%" />
            </a>
          </ImageListItem>
        </ImageList>
        <Typography variant="h2">Partnerzy medialni</Typography>
        <ImageList sx={{ width: 800, height: 300 }} cols={3} rowHeight={256}>
          <ImageListItem sx={{ m: 2 }}>
            <a href="https://zieloniwpodrozy.pl/" target="_blank">
              <img
                src={zl}
                alt={"Zieloni w Podróży"}
                loading="lazy"
                width="100%"
              />
            </a>
          </ImageListItem>
          <ImageListItem sx={{ m: 2 }}>
            <a href="https://mapa-tursytyczna.pl" target="_blank">
              <img
                src={mt}
                alt={"Mapa Turystyczna"}
                loading="lazy"
                width="100%"
              />
            </a>
          </ImageListItem>
          <ImageListItem sx={{ m: 2 }}>
            <a href="https://gorskiewyrypy.pl/" target="_blank">
              <img
                src={gw}
                alt={"Górskie Wyrypy"}
                loading="lazy"
                width="100%"
              />
            </a>
          </ImageListItem>
        </ImageList>
      </>
    );
  }
}

export default Partners;
