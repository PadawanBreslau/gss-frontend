import { useState } from "react";

import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";
import { Star } from "@mui/icons-material";
import HidableTemplate from "../HidableTemplate";

const Accomodation350 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <HidableTemplate visible={visible} setVisible={setVisible} header="Kilometry 301-350">
      {visible && (
        <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}>
          <InternalListItem
            icon={<Star />}
            primaryText="Sierpnica, ~305km"
            secondaryText="Kilka agroturystyk. Trzeba zejść około 1km"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Sokolec, ~310km"
            secondaryText="Dużo opcji noclegowych"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Ludwikowice Kłodzkie. ~313km"
            secondaryText="Agroturystyka: Noclegi Pan Leon"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Świerki. ~320km"
            secondaryText="Agroturystyki"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK Andrzejówka ~337km"
            secondaryText="Bardzo popularne schronisko w Górach Suchych"
            url="https://www.andrzejowka.eu/http://www.schroniskonasniezniku.eu/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Sokołowsko, ~340km"
            secondaryText="Mała, ale urocza miejscowośc turystyczna. Kilka opcji, jedne blisko szlaku, inne wymagają podejścia"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Mieroszów, ~348km"
            secondaryText="BRAK NOCLEGÓW!!!"
          />
        </List>
      )}
    </HidableTemplate>
  );
};

export default Accomodation350;
