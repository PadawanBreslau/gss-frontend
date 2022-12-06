import React, { Component } from "react";
import { GetApp } from "@mui/icons-material";
import { Link, Box } from "@mui/material";

class HomePage extends Component {
  render() {
    return (
      <Box className="home-track">
        <Link href="/gss20-full-official-2022.gpx" target="_blank" download>
          <GetApp />
          Całość trasy GSS 2.0 (po poprawkach)
        </Link>
      </Box>
    );
  }
}

export default HomePage;
