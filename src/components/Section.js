import React from "react";
import { Box, Typography } from "@mui/material";
import {
  ArrowUpward,
  ArrowDownward,
  Functions,
  Straighten,
  Public,
} from "@mui/icons-material";
import mt from "../images/mt.png";

import "../styles/main.css";

const Section = ({ data }) => {
  const mtUrl = `https://mapa-turystyczna.pl/route/${data.mt_uuid}?utm_source=external_web&amp;utm_medium=widget&amp;utm_campaign=route_widget`;
  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
        mb: 1,
        p: 1,
        pl: 3,
        backgroundColor: "primary.main",
        color: "primary.lighter",
        fontWeight: '600'
      }}
    >
      <Typography variant="h6" color="primary.lighter">
        {data.start} - {data.finish}
      </Typography>

      <Box
        className="statistics"
        sx={{
          width: "40%",
          display: "flex",
          direction: "row",
        }}
      >
        <Box
          sx={{
            width: "23%",
          }}
        >
          <ArrowUpward sx={{ verticalAlign: "middle" }} />
          {data.ascent}m
        </Box>
        <Box
          sx={{
            width: "23%",
          }}
        >
          <ArrowDownward sx={{ verticalAlign: "middle" }} />
          {data.descent}m
        </Box>
        <Box
          sx={{
            width: "23%",
          }}
        >
          <Straighten sx={{ verticalAlign: "middle", mr:.5 }} />
          {data.length}km
        </Box>
        <Box
          sx={{
            width: "23%",
          }}
        >
          <Functions sx={{ verticalAlign: "middle" }} />
          {data.total_length}km
        </Box>
        <Box
          sx={{
            width: "8%",
          }}
        >
          <a href={mtUrl} target="_blank" rel="noreferrer">
            <Box
              component="img"
              className="logo"
              sx={{
                width: 25,
                height: 25,
                "&:hover": {
                  backgroundColor: "#e0f2f1",
                },
              }}
              src={mt}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Section;
