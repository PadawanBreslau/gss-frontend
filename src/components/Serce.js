import { Box, Link } from "@mui/material";
import serce from "../images/serce.jpeg";

const Serce = () => {
  return (
    <Box>
      <a href="https://www.sercedziecka.org.pl/" target="_blank">
        <Box
          component="img"
          className="serce"
          src={serce}
          sx={{ width: "50%", mb: 5 }}
        />
      </a>
      <Box
        sx={{
          textAlign: "left",
          fontSize: "1.2rem",
          width: "80%",
          ml: 3,
        }}
      >
        <p>
          Od początku projektowania GSS 2.0 mialem z tyłu głowy, aby połaczyć to
          z jakąś akcją charytatywną. Ale że do 2023 projekt był mocno niszowy i
          średnio znany, to nie miałem jeszcze motywacji by z tym ruszyć.
        </p>

        <p>
          Jako że spodobał mi się sposów w jaki kolega Rafał znany jako &nbsp;
          <a href="https://www.facebook.com/SzybkiePodroze/" target="_blank">
            Szybkie Podróże
          </a>
         &nbsp;zbiera pieniądze w swoich akcjach charytatywnych - gdzie sponsorzy
          wpłacają pieniądze na zbiórkę za każdy kilometr który on zrobi. Tutaj
          zaś będzie odwrotnie, to szlak będzie wpłacał środki za każdy kilometr
          jaki którykolwiek z Was zrobi.
        </p>

        <p>
          Fundacją na którą będę wpłacać jest <b>Serce dziecka</b> - fundacja
          zajmująca się dziećmi z problemami kardiologicznymi. Jest to fundacja
          rzetelna i przeznaczająca zebrane środki na leczenie dzieci, zakup
          sprzętu i pomoc rodzinom w trudnych chwilach. Więcej informacji na ich &nbsp;
          <a href="https://www.sercedziecka.org.pl/" target="_blank">stronie</a>
        </p>

        <p>
          Na starcie zaczynam od wpłaty jako twórca szlaku 10gr za każdy
          kilometr, jaki <b>ktokolwiek</b> z Was zrobi podczas przechodzenia GSS
          2.0, ale <b>mam nadzieję, że znajdę ludzi i firmy które dołączą się do
          tej akcji</b>, nawet z symbolicznym groszem.
        </p>

        <p><i>Staszek</i></p>
      </Box>
    </Box>
  );
};

export default Serce;
