import { Box } from "@mui/material";
import PanelBox from "./PanelBox";
import Breadcrumb from "./Breadcrumb";

import wieza from "../../images/photos/wieza.jpg"
import lake from "../../images/photos/jeziorko.jpg"
import nature from "../../images/photos/natura.jpg"
import twierdza from "../../images/photos/twierdza.jpg"

const Trivia = () => {
  return (
    <>
    <Breadcrumb name="Ciekawostki"/>
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
      <PanelBox url="/monuments" image={twierdza} title="Historia i zabytki" />
      <PanelBox url="/towers" image={wieza} title="Wieże Widokowe" />
      <PanelBox url="/vicinity" image={lake} title="Poza Szlakiem" />
      <PanelBox url="/nature" image={nature} title="Przyroda Sudetów" />
    </Box>
    </>
  );
};

export default Trivia;