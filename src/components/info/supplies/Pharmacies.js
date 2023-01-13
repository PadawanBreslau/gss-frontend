import { LocalPharmacy } from "@mui/icons-material";
import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";

const Pharmacies = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "100px" }}>
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
  );
};

export default Pharmacies;
