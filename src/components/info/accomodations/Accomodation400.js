import { useState } from "react";

import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";
import { Star } from "@mui/icons-material";
import HidableTemplate from "../HidableTemplate";

const Accomodation400 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <HidableTemplate visible={visible} setVisible={setVisible} header="Kilometry 351-400">
      {visible && (
        <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}>
          <InternalListItem
            icon={<Star />}
            primaryText="Łączna, ~355km"
            secondaryText="Słoneczna Zagroda"
            url="https://e-turysta.pl/sloneczna-zagroda-sunny-ridge-farm-laczna-103144.html"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Chełmsko Śląskie, ~362km"
            secondaryText="Kilka agroturystyk, trzeba trochę podejść"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Lubawka. ~370km"
            secondaryText="Kilka agroturystyk, trzeba podejść około 1km"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Niedamirów. ~384km"
            secondaryText="Kilka agroturystyk, trzeba zejść około 1km"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK Okraj ~390km"
            secondaryText="Dookoła schroniska też jest dużo prywatnych noclegów, szczególnie po czeskiej stronie"
            url="https://schroniskookraj.pl/"
          />
        </List>
      )}
    </HidableTemplate>
  );
};

export default Accomodation400;
