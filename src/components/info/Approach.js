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
          sx={(theme) => ({
            width: "45%",
            p: 2,
            backgroundColor: "teal.main",
            textAlign: "center",
            height: "600px",
            [theme.breakpoints.down("md")]: {
              width: "100%",
              height: "420px",
            },
          })}
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
          sx={(theme) => ({
            width: "45%",
            p: 2,
            backgroundColor: "teal.lighter",
            textAlign: "center",
            height: "600px",
            [theme.breakpoints.down("md")]: {
              width: "100%",
              height: "420px",
            },
          })}
        >
          <Typography variant="h2">Dojazd do Świeradowa-Zdroju</Typography>
          <Box>
            <List sx={{ width: "100%", bgcolor: "teal.main" }}>
              <InternalListItem
                icon={<Train />}
                primaryText="Pociągiem"
                secondaryText="Od grudnia 2023 kursują pociągi do Gryfowa Śląskiego, gdzie trzeba się dalej przesiadać. Choć jest to poprawa sytuacji którą mielśmy wcześnie, wciąż dojazd/wyjazd ze Świeradowa jest dużo trudniejszy jak z Barda"
              />
              <InternalListItem
                icon={<DirectionsBus />}
                primaryText="Autobusem"
                secondaryText="Autobusy jeżdżą, ale dość rzadko i trzeba rezerwować miejsca."
              />
            </List>
          </Box>
          <Typography variant="h5" sx={{ mt: 2, textAlign: "left" }}>
            Świeradów jest wciąż przeciętnie skomunikowany z resztą świata, ale duży rozwój
            tej miejscowości daje nadzieję na poprawę tej sytuacji
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Approach;
