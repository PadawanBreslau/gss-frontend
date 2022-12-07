import React from "react";
import { Box, Typography } from "@mui/material";
import {
  ArrowUpward,
  ArrowDownward,
  Functions,
  Straighten,
} from "@mui/icons-material";
import mt from "../images/mt.png";

import "../styles/main.css";

const Section = ({ data }) => {
  const mtUrl = `https://mapa-turystyczna.pl/route/${data.mt_uuid}?utm_source=external_web&amp;utm_medium=widget&amp;utm_campaign=route_widget`;
  return (
    <Box
      sx={(theme) =>({
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
        mb: 1,
        p: 1,
        pl: 3,
        backgroundColor: "primary.main",
        color: "primary.lighter",
        fontWeight: "600",
        [theme.breakpoints.down("md")]: { pl: 1  },
      })}
    >
      <Box>
      <Typography variant="h6" color="primary.lighter">
        {data.start}
      </Typography>
      <Typography variant="h6" color="primary.lighter">
        {data.finish}
      </Typography>
      </Box>

      <Box
        className="statistics"
        sx={(theme) => ({
          width: "40%",
          display: "flex",
          direction: "row",
          [theme.breakpoints.down("md")]: { width: "50%" },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "23%",
          })}
        >
          <ArrowUpward sx={{ verticalAlign: "middle" }} />
          <Typography variant="p1" color="primary.lighter">
            {data.ascent}m
          </Typography>
        </Box>
        <Box
          sx={{
            width: "23%",
          }}
        >
          <ArrowDownward sx={{ verticalAlign: "middle" }} />
          <Typography variant="p1" color="primary.lighter">
            {data.descent}m
          </Typography>
        </Box>
        <Box
          sx={{
            width: "23%",
          }}
        >
          <Straighten sx={{ verticalAlign: "middle", mr: 0.5 }} />
          <Typography variant="p1" color="primary.lighter">
            {data.length}km
          </Typography>
        </Box>
        <Box
          sx={{
            width: "23%",
          }}
        >
          <Functions sx={{ verticalAlign: "middle" }} />
          <Typography variant="p1" color="primary.lighter">
            {data.total_length}km
          </Typography>
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
              sx={(theme) => ({
                width: 25,
                height: 25,
               [theme.breakpoints.down("md")]: { width: 18, height: 18 },
              })}
              src={mt}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Section;
