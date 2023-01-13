import { Box } from "@mui/material";
import { useState } from "react";
import HidableTemplate from "./HidableTemplate";
import InfoTemplate from "./InfoTemplate";
import Breadcrumb from "./Breadcrumb";
import Shops from "./supplies/Shops";
import Restaurants from "./supplies/Restaurants";
import Pharmacies from "./supplies/Pharmacies";

const Supplies = () => {
  const [shopsVisible, setShopsVisible] = useState(false);
  const [foodVisible, setFoodVisible] = useState(false);
  const [pharmacyVisible, setPharmacyVisible] = useState(false);
  const [postOfficesVisible, setPostOfficesVisible] = useState(false);

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
        {shopsVisible && <Shops />}
      </HidableTemplate>
      <HidableTemplate
        visible={foodVisible}
        setVisible={setFoodVisible}
        header="Restauracje"
      >
        {foodVisible && <Restaurants />}
      </HidableTemplate>
      <HidableTemplate
        visible={pharmacyVisible}
        setVisible={setPharmacyVisible}
        header="Apteki"
      >
        {pharmacyVisible && <Pharmacies />}
      </HidableTemplate>
    </Box>
  );
};

export default Supplies;
