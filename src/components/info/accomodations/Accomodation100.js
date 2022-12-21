import { useState } from "react";

import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";
import { Star } from "@mui/icons-material";
import HidableTemplate from "../HidableTemplate";

const Accomodation100 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <HidableTemplate visible={visible} setVisible={setVisible} header="Kilometry 51-100">
      {visible && (
        <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}>
          <InternalListItem
            icon={<Star />}
            primaryText="Nowy Gierałtów, ~55km"
            secondaryText="Kilka agroturystyk. Trzeba zejść około 1km"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Bielice, ~65km"
            secondaryText="W Bielicach jest kilka opcji noclegowych, trzeba zejść ze szlaku około 1.5km"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Paprsek, turistická chata. ~70km"
            secondaryText="Czeskie schronisko"
            url="https://pl.wikipedia.org/wiki/Paprsek"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Chata Klaske Sedlo. ~80km"
            secondaryText="Pensjonat położony po czeskiej stronie Przełęczy Płoszczyna"
            url="https://kladske-sedlo.cz/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK na Śnieżniku ~90km"
            secondaryText="Na zejściu z Śnieżnika. Trzeba nieco odbić"
            url="http://www.schroniskonasniezniku.eu/"
          />
        </List>
      )}
    </HidableTemplate>
  );
};

export default Accomodation100;
