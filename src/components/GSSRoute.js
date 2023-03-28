import React from "react";
import { Box, Typography, Button,Link } from "@mui/material";
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
            Pobierz całość trasy GSS 2.0 (12.2022) - GPX
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
      <Box>
        <Typography variant="h3">Część 1</Typography>
        <MapaTurystyczna mtUuid="3yd3b" horizontalMap withLink />
      </Box>
      <Box>
        <Typography variant="h3">Część 2</Typography>
        <MapaTurystyczna mtUuid="3yd34" horizontalMap withLink />
      </Box>
    </Box>
  );
};

export default GSSRoute;
