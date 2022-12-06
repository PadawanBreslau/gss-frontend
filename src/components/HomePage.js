import React, { Component } from "react";
import { GetApp } from "@mui/icons-material";
import { Link, Box, Typography, Button } from "@mui/material";
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
              width: 600,
              height:   450,              
            }}
          />
          <Typography variant="h3">
            500km trasy, 20km przewyższenia, mnóstwo gór, historii i bez
            nadmiernych asfaltów
          </Typography>
        </Box>
        <Button variant="contained" sx={{ mr: 1 }}>
        <Link href="/gss20-full-official-2022.gpx" target="_blank" download>
          <GetApp sx={{mr: 1, mt: .5}}/>
          Całość trasy GSS 2.0 (po poprawkach)
        </Link></Button>
      </Box>
    );
  }
}

export default HomePage;
