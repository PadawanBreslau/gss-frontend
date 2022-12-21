import { useState } from "react";

import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";
import { Star } from "@mui/icons-material";
import HidableTemplate from "../HidableTemplate";

const Accomodation450 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <HidableTemplate visible={visible} setVisible={setVisible} header="Kilometry 401-450">
      {visible && (
        <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}>
          <InternalListItem
            icon={<Star />}
            primaryText="Czarnów, ~401km"
            secondaryText="Kilka agroturystyk, w tym byłe schronisko Czartak. Trzeba trochę zejść"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Janowice Wielkie, ~410km"
            secondaryText="Kilka opcji noclegowych, trzeba zejść ze szlaku około 1.5km"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK Szwajcarka. ~420km"
            secondaryText="Schronisko obok Sokolików"
            url="http://schronisko-szwajcarka.pl/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Karpniki. ~425km"
            secondaryText="Kilka agroturystyk, a nawet hotel w pałacu"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Mysłakowice ~432km"
            secondaryText="Kilka opcji agroturystycznych i hotelowych"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Mysłakowice ~435km"
            secondaryText="Kilka opcji agroturystycznych, ale także dwa pałace"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Sosnowka ~442km"
            secondaryText="Bardzo dużo opcji agroturystycznych i hotelowych."
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Karpacz ~448km"
            secondaryText="Rekordzista Polski pod względem rocznej liczby turystów. Aż nie chce mi się więcej pisać :)"
          />
        </List>
      )}
    </HidableTemplate>
  );
};

export default Accomodation450;
