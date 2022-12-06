import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Logo from "./Logo";

class Header extends Component {
  render() {
    return (
      <Box
        className="header"
        sx={{
          height: 50,
        }}>
        <Link href="/">
          <Logo />
        </Link>
        <Box className="menu"
        sx={{
          mt: 3,
          ml: 3,
        }}>
        {this.props.children}
        </Box>
      </Box>
    );
  }
}

export default Header;
