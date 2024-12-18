import { Box } from "@mui/material";
import PanelBox from "./PanelBox";
import Breadcrumb from "./Breadcrumb";

import karkonosze from "../../images/photos/top.jpg";
import village from "../../images/photos/village.jpg";
import train from "../../images/photos/train.jpg";
import field from "../../images/photos/field.jpg";
import ptx from "../../images/mapa-ptx.png";
import odznaki from "../../images/odznaki.jpg";

const Support = () => {
  return (
    <>
      <Breadcrumb name="Informacje praktyczne" />
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <PanelBox url="/approach" image={train} title="Dojazd" />
        <PanelBox url="/accomodation" image={village} title="Noclegi" />
        <PanelBox url="/supplies" image={field} title="Zaopatrzenie" />
        <PanelBox url="/tips" image={karkonosze} title="Porady" />
        <PanelBox url="/tracker" image={ptx} title="Trackery" />
        <PanelBox url="/odznaki" image={odznaki} title="Odznaki" />
      </Box>
    </>
  );
};

export default Support;
