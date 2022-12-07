import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Jsona from "jsona";
import Section from "./Section";

const GSSRoute = () => {
  const [sections, setSections] = useState([]);
  const gssAPIendpoint = "https://gss-api.herokuapp.com/api/v1/sections"

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

  const dataFormatter = new Jsona();
  const sectionsFormatted = dataFormatter.deserialize(sections);

  return( 
  <Box>
     {sectionsFormatted && sectionsFormatted.map((s) => (<Section data={s} />))}
  </Box>);
};

export default GSSRoute;
