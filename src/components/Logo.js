import React, { Component } from "react";
import { Box } from "@mui/material";
import logo from "../images/web-green.svg";
import "../styles/main.css";

class Logo extends Component {
  render() {
    return (
      <Box
        component="img"
        className="logo"
        sx={{
          width: 100,
          height: 100,
          '&:hover': {
            backgroundColor: "#e0f2f1"
          }
        }}
        src={logo}
      />
    );
  }
}

export default Logo;
