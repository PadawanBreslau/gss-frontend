import React, { Component, useState, useEffect } from "react";
import { Box } from "@mui/material";

const GSSRoute = () => {
  const [sections, setSections] = useState([]);
  const gssAPIendpoint = "http://localhost:4632/api/v1/sections"

  useEffect(() => {
    fetch(gssAPIendpoint)
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setSections(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  console.log(sections);
  return <Box />;
};

export default GSSRoute;
