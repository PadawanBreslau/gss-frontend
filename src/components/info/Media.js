import { Box } from "@mui/material";
import PanelBox from "./PanelBox";
import Breadcrumb from "./Breadcrumb";

import mountains from "../../images/photos/mountains-2.jpg"
import trees from "../../images/photos/trees.jpg"
import sudetes from "../../images/photos/sudetes.jpg"

const Media = () => {
  return (
    <>
    <Breadcrumb name="Media"/>
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
      <PanelBox url="/movies" image={trees} title="Filmy" />
      <PanelBox url="/written" image={mountains} title="Relacje" />
      <PanelBox url="/galleries" image={sudetes} title="Galerie" />
    </Box>
    </>
  );
};

export default Media;