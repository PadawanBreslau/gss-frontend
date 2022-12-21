import { useState } from "react";

import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";
import { Star } from "@mui/icons-material";
import HidableTemplate from "../HidableTemplate";

const Accomodation50 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <HidableTemplate visible={visible} setVisible={setVisible} header="Kilometry 1-50">
      {visible && (
        <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}>
          <InternalListItem
            icon={<Star />}
            primaryText="Bardo. 0km"
            secondaryText="W Bardzie dostępnych jest dużo miejsc noclegowych"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Agroturystyka 'Zacisze'. Chwalisław. ~20km"
            secondaryText="Agroturystyka na uboczu"
            url="http://www.agroturystykazacisze.pl/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Złoty Stok. ~26km"
            secondaryText="W Złotym Stoku dostępnych jest dużo miejsc noclegowych"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Lądek Zdrój. ~40km"
            secondaryText="W Lądku-Zdrój dostępnych jest dużo miejsc noclegowych. Potrzeba zejść z trasy ok. 2km"
          />
        </List>
      )}
    </HidableTemplate>
  );
};

export default Accomodation50;
