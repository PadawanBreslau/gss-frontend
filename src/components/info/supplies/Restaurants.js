import { LocalDining } from "@mui/icons-material";
import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";

const Restaurants = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "100px" }}>
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
  );
};

export default Restaurants;
