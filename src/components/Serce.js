import { Box, ImageList, Typography } from "@mui/material";
import serce from "../images/serce.jpeg";
import gss2 from "../images/logo-green.svg";
import empty from "../images/white.png";
import GridItem from "./GridItem";

const Serce = () => {
  return (
    <Box>
      <a href="https://www.sercedziecka.org.pl/" target="_blank" rel="noreferrer">
        <Box
          component="img"
          className="serce"
          src={serce}
          sx={{ width: "50%", mb: 5, margin: 'auto' }}
        />
      </a>
      <Box
        sx={{
          textAlign: "left",
          fontSize: "1.2rem",
          width: "100%",
          ml: 3,
          mb: 5,
        }}
      >
        <p>
          Od początku projektowania GSS 2.0 mialem z tyłu głowy, aby połaczyć to
          z jakąś akcją charytatywną. Ale że do 2023 projekt był mocno niszowy i
          średnio znany, to nie miałem jeszcze motywacji by z tym ruszyć.
        </p>

        <p>
          Jako że spodobał mi się sposów w jaki kolega Rafał znany jako &nbsp;
          <a href="https://www.facebook.com/SzybkiePodroze/" target="_blank" rel="noreferrer">
            Szybkie Podróże
          </a>
          &nbsp;zbiera pieniądze w swoich akcjach charytatywnych - gdzie
          sponsorzy wpłacają pieniądze na zbiórkę za każdy kilometr który on
          zrobi. Tutaj zaś będzie odwrotnie, to szlak będzie wpłacał środki za
          każdy kilometr jaki którykolwiek z Was zrobi.
        </p>

        <p>
          Fundacją na którą będę wpłacać jest <b>Serce dziecka</b> - fundacja
          zajmująca się dziećmi z problemami kardiologicznymi. Jest to fundacja
          rzetelna i przeznaczająca zebrane środki na leczenie dzieci, zakup
          sprzętu i pomoc rodzinom w trudnych chwilach. Więcej informacji na ich
          &nbsp;
          <a href="https://www.sercedziecka.org.pl/" target="_blank" rel="noreferrer">
            stronie
          </a>
        </p>

        <p>
          Na starcie zaczynam od wpłaty jako twórca szlaku 10gr za każdy
          kilometr, jaki <b>ktokolwiek</b> z Was zrobi podczas przechodzenia GSS
          2.0, ale{" "}
          <b>
            mam nadzieję, że znajdę ludzi i firmy które dołączą się do tej akcji
          </b>
          , nawet z symbolicznym groszem.
        </p>

        <p>
          <i>Staszek</i>
        </p>
      </Box>

      <Box sx={{width: '60%', margin: 'auto', mb: 3}}>
        <Typography variant="h3">Każdy kwadrat to 1gr za każdy 1km każdego zweryfikowanego turysty na GSS 2.0</Typography>
      </Box> 
      <ImageList
        sx={{width: '60%', margin: 'auto'}} 
        rows={10}
        cols={10}
        gap={2}
      >
        <GridItem counter={10} src={gss2} alt="GSS 2.0"/>
        <GridItem counter={90} src={empty} alt="Wolne"/>
      </ImageList>
    </Box>
  );
};

export default Serce;
