import { Box } from "@mui/material";
import PanelBox from "./PanelBox";

import karkonosze from "../../images/photos/giant-mountains.jpg"
import trail from "../../images/photos/trail.jpg"
import valley from "../../images/photos/valley.jpg"
import rain from "../../images/photos/rain.jpg"

const Panel = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
      <PanelBox url="/support" image={valley} title="Informacje praktyczne" />
      <PanelBox url="/trail" image={trail} title="Przebieg trasy" />
      <PanelBox url="/trivia" image={rain} title="Ciekawostki" />
      <PanelBox url="/relations" image={karkonosze} title="Media" />
    </Box>
  );
};

export default Panel;
