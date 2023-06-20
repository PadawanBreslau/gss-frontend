import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import MapaTurystyczna from "./MapaTurystyczna";

const GSSRoute = () => {
  return (
    <Box>
      <Button variant="contained" sx={{ mr: 1, mb: 2 }}>
        <Link
          href="/gss20-full-official-2023.gpx"
          target="_blank"
          rel="noreferrer"
          download
        >
          <Typography variant="h5" color="primary.lighter">
            GPX trasy: Start w Bardzie
          </Typography>
        </Link>
      </Button>

      <Button variant="contained" sx={{ mr: 1, mb: 2 }}>
        <Link
          href="/gss20-full-official-2023-reverse.gpx"
          target="_blank"
          rel="noreferrer"
          download
        >
          <Typography variant="h5" color="primary.lighter">
            GPX trasy: start w Czerniawie
          </Typography>
        </Link>
      </Button>

      <Button variant="contained" sx={{ mr: 1, mb: 2 }}>
        <Link href="https://poltrax.live/gss2" target="_blank" rel="noreferrer">
          <Typography variant="h5" color="primary.lighter">
            Interaktywna mapa trasy
          </Typography>
        </Link>
      </Button>
    </Box>
  );
};

export default GSSRoute;
