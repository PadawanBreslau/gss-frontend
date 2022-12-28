import { Box } from "@mui/material";
import { List, Typography } from "@mui/material";
import {
  LooksOne,
  LooksTwo,
  Looks3,
  Looks4,
  Looks5,
  Looks6,
} from "@mui/icons-material";
import InternalListItem from "../InternalListItem";
import Breadcrumb from "./Breadcrumb";
import TipTemplate from "../TipTemplate";

const Tips = () => {
  return (
    <Box>
      {" "}
      <Breadcrumb
        parent="Informacje praktyczne"
        parentUrl="/support"
        name="Porady"
      />
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h2">
          Porady od ludzi, co ukończyli GSS 2.0
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            backgroundColor: "teal.main",
          }}
        >
          <TipTemplate header="Piotr (Strefa Wędrowca)">
            <List
              sx={{
                width: "100%",
                bgcolor: "teal.lighter",
                minHeight: "200px",
              }}
            >
              <InternalListItem
                icon={<LooksOne />}
                primaryText="Dobrze przemyśl i przetestuj ekwipunek, który zamierzasz zabrać. Zrób z nim dłuższą trasę by sprawdzić, czy nie za ciężki. Naucz się też pakować w trasie. Jeśli masz namiot/hamak, materac, śpiwór, trenuj rozkładanie i pakowanie rzeczy do plecaka. Wyrobisz sobie automat, co na szlaku ułatwi każdy poranek"
              />
              <InternalListItem
                icon={<LooksTwo />}
                primaryText="Niezależnie od tego czy planujesz noclegi pod dachem czy w namiocie - sprawdź jakie masz możliwości, byś nie szukał noclegu o 18 wieczorem lub dostał mandat od leśniczego za nocleg w niedozwolonym miejscu"
              />
              <InternalListItem
                icon={<Looks3 />}
                primaryText="Jeśli masz jakiekolwiek wątpliwości do jakiegokolwiek aspektu przejścia, nie wahaj się pytać ludzi z doświadczeniem w trasie"
              />
              <InternalListItem
                icon={<Looks4 />}
                primaryText="Na samym początku nie narzucaj tempa. Na szlaku spędzisz trochę czasu, a nie warto już na początku złapać kontuzje. Sprawdza się zasada pierwszych 4 dni. Jak one Cię nie złamią, to już nic nie złamie. Później słuchaj swojego organizmu, dostosuj tempo do formy, kondycji i pogody."
              />
              <InternalListItem
                icon={<Looks5 />}
                primaryText="Sprawdzaj pogodę. Niespodziewana burza czy deszcz lub inne załamanie pogody nie jest przyjemne, dlatego warto wiedzieć wcześnie"
              />
              <InternalListItem
                icon={<Looks6 />}
                primaryText="Zadbaj o nawigację. Na szlaku często idzie się szlakami granicznymi i będzie problem z zasięgiem. Pamiętaj też, że GSS2 idzie różnymi kolorami szlaków, momentami szlaki są słabo oznaczone. Pamiętaj też o logistyce, szczególnie na początkowych odcinkach jest raczej mało sklepów, czy źródeł wody"
              />
            </List>
          </TipTemplate>
        </Box>
      </Box>
    </Box>
  );
};

export default Tips;
