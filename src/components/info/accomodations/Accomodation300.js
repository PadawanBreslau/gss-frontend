import { useState } from "react";

import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";
import { Star } from "@mui/icons-material";
import HidableTemplate from "../HidableTemplate";

const Accomodation300 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <HidableTemplate visible={visible} setVisible={setVisible} header="Kilometry 251-300">
      {visible && (
        <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}>
          <InternalListItem
            icon={<Star />}
            primaryText="Słupiec, ~258km"
            secondaryText="Spore miasto, ale zupełnie nieturystyczne. Jakaś agroturystyka się jednak znajdzie"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Srebrna Góra, ~270km"
            secondaryText="Miejscowość turystyczne, duzo opcji noclegowych w tym schronisko PTTK"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK Zygmuntówka. ~287km"
            secondaryText="Schronisko w górach"
            url="https://www.schroniskozygmuntowka.pl/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Walim. ~299km"
            secondaryText="Miejscowość u podnóży Wielkiej Sowy, kilka opcji noclegowych"
          />
        </List>
      )}
    </HidableTemplate>
  );
};

export default Accomodation300;
