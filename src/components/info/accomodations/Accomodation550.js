import { useState } from "react";

import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";
import { Star } from "@mui/icons-material";
import HidableTemplate from "../HidableTemplate";

const Accomodation550 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <HidableTemplate visible={visible} setVisible={setVisible} header="Kilometry 501-515">
      {visible && (
        <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}>
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko Chatka Górzystów, ~501km"
            secondaryText="Górskie schronisko znane z legendarnych naleśników"
            url="http://www.orleturystyczne.pl/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Czerniawa-Zdrój, ~515km"
            secondaryText="W Czerniawie jest sporo opcji, w sąsiednim Świeradowie do którego i tak trzeba podejść zaś mnóstwo"
          />
        </List>
      )}
    </HidableTemplate>
  );
};

export default Accomodation550;
