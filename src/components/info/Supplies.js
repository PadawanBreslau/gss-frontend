import { Box } from "@mui/material";
import { useState } from "react";
import { List } from "@mui/material";
import { LocalDining, LocalPharmacy, Shop } from "@mui/icons-material";
import HidableTemplate from "./HidableTemplate";
import InfoTemplate from "./InfoTemplate";
import InternalListItem from "../InternalListItem";
import Breadcrumb from "./Breadcrumb";

const Supplies = () => {
  const [shopsVisible, setShopsVisible] = useState(false);
  const [foodVisible, setFoodVisible] = useState(false);
  const [pharmacyVisible, setPharmacyVisible] = useState(false);

  return (
    <Box>
      <Breadcrumb
        parent="Informacje praktyczne"
        parentUrl="/support"
        name="Zaopatrzenie"
      />
      <InfoTemplate>
        Zakładam, że w każdym większym mieście bądź miasteczku znajdzie się
        jakiś sklep, restauracja, więc nie zamierzam o tym pisać Będzie opisane
        o mniej standardowych usługach obecnych na trasie, a także o miejscach
        gdzie można uzupełnić zapasy co są z dala od miast.
      </InfoTemplate>
      <HidableTemplate
        visible={shopsVisible}
        setVisible={setShopsVisible}
        header="Sklepy"
      >
        {shopsVisible && (
          <List
            sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}
          >
            <InternalListItem
              icon={<Shop />}
              primaryText="Przełęcz Lądecka,  Sklep Panda (40km) "
              secondaryText="Po czeskiej stronie granicy, trzeba troche zejść"
            />
          </List>
        )}
      </HidableTemplate>
      <HidableTemplate
        visible={foodVisible}
        setVisible={setFoodVisible}
        header="Restauracje"
      >
        {foodVisible && (
          <List
            sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}
          >
            <InternalListItem
              icon={<LocalDining />}
              primaryText="Przełęcz Lądecka,  Penzion & Restaurace Celnice. (40km) "
              secondaryText="Po czeskiej stronie granicy, trzeba troche zejść"
            />
            <InternalListItem
              icon={<LocalDining />}
              primaryText="Pisary (103km)"
              secondaryText="Smażalnia pstrąga"
            />
            <InternalListItem
              icon={<LocalDining />}
              primaryText="Kamieńczyk (110km)"
              secondaryText="Górska kawiarenka. Otwarte wyłącznie latem."
            />
            <InternalListItem
              icon={<LocalDining />}
              primaryText="Jamrozowa Polaca (165km)"
              secondaryText="Restauracja i browar."
            />
            <InternalListItem
              icon={<LocalDining />}
              primaryText="Restauracja Osówka (303km)"
              secondaryText="Restauracja przy atrakcji turystycznej."
            />
            <InternalListItem
              icon={<LocalDining />}
              primaryText="Horni Mala Upa(390km)"
              secondaryText="Browar Trautenberg."
            />
            <InternalListItem
              icon={<LocalDining />}
              primaryText="Jakuszyce (490km)"
              secondaryText="Kilka restauracji do wyboru."
            />
          </List>
        )}
      </HidableTemplate>
      <HidableTemplate
        visible={pharmacyVisible}
        setVisible={setPharmacyVisible}
        header="Apteki"
      >
        {pharmacyVisible && (
          <List
            sx={{ width: "100%", bgcolor: "teal.light", minHeight: "200px" }}
          >
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Bardo (0km)"
              secondaryText="Kilka aptek dostępnych"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Złoty Stok (25km)"
              secondaryText="Kilka aptek dostępnych"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Lądek Zdrój (40km)"
              secondaryText="Dużo aptek dostępnych, woda zdrojowa. Trzeba zejść ze szlaku"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Międzylesie (110km)"
              secondaryText="Apteka pod Słowikiem"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Duszniki Zdrój (160km)"
              secondaryText="Parę aptek, trzeba trochę podejść"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Słupiec (260km)"
              secondaryText="Duży wybór aptek"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Srebrna Góra (270km)"
              secondaryText="Punkty apteczne, trzeba sporo zejść"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Walin (300km)"
              secondaryText="Apteka Słoneczna"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Mieroszów (350km)"
              secondaryText="Apteka Farmakon"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Chełmsko Śląskie (360km)"
              secondaryText="Punkt apteczny"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Janowice Wielkie (415km)"
              secondaryText="Dwie apteki, trzeba zejść ze szlaku ok 2km"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Mysłakowice (430km)"
              secondaryText="Dwie apteki"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Karpacz (450km)"
              secondaryText="Dużo aptek, ale daleko od szlaku"
            />
            <InternalListItem
              icon={<LocalPharmacy />}
              primaryText="Świeradów-Zdrój (515km)"
              secondaryText="Dużo aptek, ale trzeba z mety przejśc do centrum miasta"
            />
          </List>
        )}
      </HidableTemplate>
    </Box>
  );
};

export default Supplies;
