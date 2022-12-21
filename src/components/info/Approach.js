import { Box, Typography, List } from "@mui/material";
import InternalListItem from "../InternalListItem";
import { Train, DirectionsBus } from "@mui/icons-material";
import Breadcrumb from "./Breadcrumb";

const Approach = () => {
  return (
    <>
      <Breadcrumb
        parent="Informacje praktyczne"
        parentUrl="/support"
        name="Dojazd"
      />

      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Box
          sx={{
            width: "45%",
            p: 2,
            backgroundColor: "teal.main",
            textAlign: "center",
            height: "600px",
          }}
        >
          <Typography variant="h2">Dojazd do Barda</Typography>
          <Box>
            <List
              sx={{
                width: "100%",
                bgcolor: "teal.lighter",
                minHeight: "200px",
              }}
            >
              <InternalListItem
                icon={<Train />}
                primaryText="Pociągiem"
                secondaryText="Do Barda dojeżdżają bezpośrednie pociągi z Wrocławia. Jeżdżą bardzo często, potrzebują nieco ponad godzinę"
              />
              <InternalListItem
                icon={<DirectionsBus />}
                primaryText="Autobusem"
                secondaryText="Podobnie jak z PKP, autobusy są często i szybko dojeżdzają."
              />
            </List>
          </Box>
          <Typography variant="h5" sx={{ pt: 2, textAlign: "left" }}>
            Bardo jest świetnie skomunikowane z Wrocławiem, leżąc na trasie
            Warszawa-Wrocław-Praga - zarówno drogowej, jak i kolejowej. Jest to
            zresztą jeden z powodów, dla którego szlak tam startuje
          </Typography>
        </Box>
        <Box
          sx={{
            width: "45%",
            p: 2,
            backgroundColor: "teal.lighter",
            textAlign: "center",
            height: "600px",
          }}
        >
          <Typography variant="h2">Dojazd do Świeradowa-Zdroju</Typography>
          <Box>
            <List sx={{ width: "100%", bgcolor: "teal.main" }}>
              <InternalListItem
                icon={<Train />}
                primaryText="Pociągiem"
                secondaryText="Aby skorzystać z pociągu trzeba najpierw dostać się do Szklarskiej Poręby lub Gryfowa Śląskiego. 
              Jeśli masz jeszcze wolne, można zrobić na deser fajną wycieczkę do tego pierwszego, bo dojazd komunikacją jest tam też słaby"
              />
              <InternalListItem
                icon={<DirectionsBus />}
                primaryText="Autobusem"
                secondaryText="Autobusy jeżdżą, ale dość rzadko i trzeba rezerwować miejsca."
              />
            </List>
          </Box>
          <Typography variant="h5" sx={{ mt: 2, textAlign: "left" }}>
            Świeradów jest słabo skomunikowany z resztą świata, ale duży rozwój
            tej miejscowości daje nadzieję na poprawę tej sytuacji
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Approach;
