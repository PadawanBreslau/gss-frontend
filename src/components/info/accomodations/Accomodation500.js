import { useState } from "react";
import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";
import { Star } from "@mui/icons-material";
import HidableTemplate from "../HidableTemplate";

const Accomodation500 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <HidableTemplate visible={visible} setVisible={setVisible} header="Kilometry 451-500">
      {visible && (
        <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}>
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK Samotnia, ~452km"
            secondaryText="Jedno z najpiękniej położonych polskich schronisk"
            url="http://samotnia.com.pl/?d=2"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK Strzecha Akademicka, ~453km, można ewentualnie zejść na 460km"
            secondaryText="Duże schronisko, acz często nocują grupy"
            url="http://www.strzechaakademicka.pl/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Dom Śląski. ~455km oraz ~457km"
            secondaryText="Duży, zawsze zatłoczony obiekt"
            url="https://pl.wikipedia.org/wiki/Paprsek"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko Odrodzenie. ~470km"
            secondaryText="Schronisko na Przełęczy Karkonoskiej. Dostępne też hotele po czeskiej stronie"
            url="http://www.schroniskoodrodzenie.pl/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK pod Łabskim Szczytów ~480km"
            secondaryText="Schronisko na trasie GSS 2.0"
            url="https://naszeszlaki.com.pl/schronisko-pod-labskim-szczytem/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK na Szrenicy ~483km"
            secondaryText="Duży obiekt z świetnymi widokami   "
            url="https://szrenica.pl/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko PTTK na Hali Szrenickiej ~485km"
            secondaryText="Duży obiekt z niewiele gorszymi widokami"
            url="https://halaszrenicka.pl/"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Jakuszyce ~492km"
            secondaryText="Kilka hoteli, raczej droższe opcje"
          />
          <InternalListItem
            icon={<Star />}
            primaryText="Schronisko Orle, ~495km"
            secondaryText="Schronisko w starym budynku szkoły"
            url="http://www.orleturystyczne.pl/"
          />
        </List>
      )}
    </HidableTemplate>
  );
};

export default Accomodation500;
