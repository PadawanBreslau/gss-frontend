import React, { Component } from "react";
import { Box } from "@mui/material";
import logo from "../images/web-green.svg";
import "../styles/main.css";

class Logo extends Component {
  render() {
    const size = this.props.isMobile ? 50 : 120;
    return (
      <Box
        component="img"
        className="logo"
        sx={{
          width: size,
          height: size,
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
