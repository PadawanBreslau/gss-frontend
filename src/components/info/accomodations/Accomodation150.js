import { useState } from "react";

import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";
import { Star } from "@mui/icons-material";
import HidableTemplate from "../HidableTemplate";

const Accomodation150 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <HidableTemplate
      visible={visible}
      setVisible={setVisible}
      header="Kilometry 101-150"
    >
      {visible && (
          <List
            sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}
          >
            <InternalListItem
              icon={<Star />}
              primaryText="Zejście do Międzylesia, 100-110km."
              secondaryText="Kilka agroturystyk albo przy szlaku albo blisko od trasy"
            />
            <InternalListItem
              icon={<Star />}
              primaryText="Międzylesie. ~110km"
              secondaryText="Międzylesie nie jest miejscowościa turystyczną, ale dostępnych jest parę miejsc noclegowych"
            />
            <InternalListItem
              icon={<Star />}
              primaryText="Kamieńczyk, ~115km"
              secondaryText="W miejscowości jest dostępnych kilka agroturystyk"
            />
            <InternalListItem
              icon={<Star />}
              primaryText="Gniewoszów, ~125km"
              secondaryText="W miejscowości jest dostępnych kilka agroturystyk"
            />
            <InternalListItem
              icon={<Star />}
              primaryText="Schronisko PTTK 'Jagodna', ~140km"
              secondaryText="Schronisko położone 3km za szczytem Jagodnej"
              url="https://pl.wikipedia.org/wiki/Schronisko_PTTK_%E2%80%9EJagodna%E2%80%9D"
            />
            <InternalListItem
              icon={<Star />}
              primaryText="Lasówka', ~150km"
              secondaryText="Kilka opcji noclegowych"
            />
          </List>
      )}
    </HidableTemplate>
  );
};

export default Accomodation150;
