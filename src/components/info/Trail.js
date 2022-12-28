import { Box } from "@mui/material";
import PanelBox from "./PanelBox";
import Breadcrumb from "./Breadcrumb";

import las from "../../images/photos/las.jpg";
import mgla from "../../images/photos/mgla.jpg";
import jesien from "../../images/photos/jesien.jpg";
import wodospad from "../../images/photos/wodospad.jpg";

const Trail = () => {
  return (
    <>
      <Breadcrumb name="Trasa" />
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <PanelBox
          url="/route_description"
          image={wodospad}
          title="Opis przebiegu"
        />
        <PanelBox url="/fkt" image={las} title="Rekordy" />
        <PanelBox url="/verify" image={jesien} title="Zasady Weryfikacji" />
        <PanelBox url="/kgp" image={mgla} title="Korona Gór Polski" />
      </Box>
    </>
  );
};

export default Trail;
