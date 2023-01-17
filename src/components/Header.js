import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Logo from "./Logo";

class Header extends Component {
  render() {
    const marginTop = this.props.isMobile ? 1 : 3;
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
          sx={(theme) =>({
            mt: marginTop,
            ml: 12,
            [theme.breakpoints.down("md")]: {ml: 1}
          })}
        >
          {this.props.children}
        </Box>
      </Box>
    );
  }
}

export default Header;
