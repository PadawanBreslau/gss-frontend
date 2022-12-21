import { useState } from "react";

import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";
import { Star } from "@mui/icons-material";
import HidableTemplate from "../HidableTemplate";

const Accomodation250 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <HidableTemplate visible={visible} setVisible={setVisible} header="Kilometry 201-250">
      {visible && (
        <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}>
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK Pasterka, ~205km"
            secondaryText="Malowniczo położone górskie schronisko"
            url="https://schroniskopasterka.pl/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Karłów (znowu), ~210km"
            secondaryText="Trzeba odejść około 2km od szlaku. Sporo opcji, choć w weekendy może być ciężko"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Wambierzyce ~235km"
            secondaryText="Dużo opcji noclegowych. Trzeba odejść około 2.5km"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Suszyna/Raszków~235km"
            secondaryText="Kilka agroturystyk"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Pałac w Piszkowicach, ~245kma"
            secondaryText="Jeśli ktoś chce zobaczyć pałac albo chce zaznać odrobinę luksusu, Trzeba odbić około 2km"
            url="https://piszkowice.com/"
          />
        </List>
      )}
    </HidableTemplate>
  );
};

export default Accomodation250;
