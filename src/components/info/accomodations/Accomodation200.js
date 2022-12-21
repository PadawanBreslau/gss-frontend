import { useState } from "react";

import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";
import { Star } from "@mui/icons-material";
import HidableTemplate from "../HidableTemplate";

const Accomodation200 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <HidableTemplate visible={visible} setVisible={setVisible} header="Kilometry 151-200">
      {visible && (
        <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}>
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK Pod Muflonem. ~160km"
            secondaryText="Schronisko nad Dusznikami-Zdrojem"
            url="https://muflon.com.pl/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Lądek-Zdrój. ~160km"
            secondaryText="Mnóstwo opcji noclegowych."
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Kozia Hala. ~165km"
            secondaryText="Ośrodek wypoczynkowy przy Autostradzie Sudeckiej"
            url="https://meteor-turystyka.pl/nakoziejhali-duszniki-zdroj,duszniki-zdroj.html"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Olešnice v Orlických horách ~170km"
            secondaryText="Kilka opcji noclegowych."
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Lewin Kłodzki ~175km"
            secondaryText="Kilka opcji noclegowych."
          />
          <InternalListItem
            icon={<Star />}
            primaryText=" Agroturystyka Koniec Świata, Leśna ~178km"
            secondaryText=""
            url="https://www.koniec-swiata.com.pl/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText=" Łężyce ~180km"
            secondaryText="Trzeba odejść około 1km od szlaku. Kilka agroturystyk"
          />
          <InternalListItem
            icon={<Star />}
            primaryText=" Karłów ~193km"
            secondaryText="Trzeba odejść około 2km od szlaku. Sporo opcji, choć w weekendy może być ciężko"
          />
        </List>
      )}
    </HidableTemplate>
  );
};

export default Accomodation200;
