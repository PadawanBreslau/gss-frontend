import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Logo from "./Logo";

class Header extends Component {
  render() {
    const marginTop = this.props.isMobile ? 1 : 4
    return (
      <Box
        className="header"
        sx={{
          height: "1%",
        }}
      >
        <Link to="/">
          <Logo isMobile={this.props.isMobile}/>
        </Link>
        <Box
          className="menu"
          sx={{
            mt: marginTop,
            ml: 1,
          }}
        >
          {this.props.children}
        </Box>
      </Box>
    );
  }
}

export default Header;
