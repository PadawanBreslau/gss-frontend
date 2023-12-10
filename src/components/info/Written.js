import { Box, Typography } from "@mui/material";
import Article from "./Article";

import {
  zielony1,
  zielony2,
  zielony3,
  zielony4,
  zielony5,
  zielony6,
  zielony7,
  zielony8,
  zielony9,
  zielony10,
  zielony11,
  zielony12,
  zielony13,
  zielony14,
  zielony15,
  dominik,
} from "./ArticleImages";
import Breadcrumb from "./Breadcrumb";

const Written = () => {
  return (
    <>
      <Box>
        <Breadcrumb parent="Media" parentUrl="/relations" name="Relacje" />
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Dominik - relacja dzień po dniu
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "left",
            mb: 2,
            textAlign: "center",
          }}
        >
          <Article
            title="Dominik - strona relacji"
            url="https://mygss20.blogspot.com/"
            image={dominik}
          />
        </Box>
      </Box>
      <Box>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Mateusz Stawarz - Zieloni w Podróży
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "left",
            mb: 2,
            textAlign: "center",
          }}
        >
          <Article
            title="Obryw Bardzki – Złoty Stok – GSS 2.0 dzień 1"
            url="https://zieloniwpodrozy.pl/obryw-bardzki-klodzka-gora-zloty-stok-gss-2-0-dzien-1/"
            image={zielony1}
          />
          <Article
            title="Złoty Stok – Przełęcz Lądecka – GSS 2.0 dzień 2"
            url="https://zieloniwpodrozy.pl/zloty-stok-borowkowa-gora-przelecz-ladecka-gss-2-0-dzien-2/"
            image={zielony2}
          />
          <Article
            title="Kowadło – Śnieżnik – GSS 2.0 dzień 3"
            url="https://zieloniwpodrozy.pl/kowadlo-rudawiec-snieznik-gss-2-0-dzien-3/"
            image={zielony3}
          />
          <Article
            title="Śnieżnik – Międzylesie – GSS 2.0 dzień 4"
            url="https://zieloniwpodrozy.pl/snieznik-trojmorski-wierch-miedzylesie-gss-2-0-dzien-4/"
            image={zielony4}
          />
          <Article
            title="Międzylesie – Jagodna – GSS 2.0 dzień 5"
            url="https://zieloniwpodrozy.pl/miedzylesie-czerniec-jagodna-gss-2-0-dzien-5/"
            image={zielony5}
          />
          <Article
            title="Lasówka – Lewin Kłodzki – GSS 2.0 dzień 6"
            url="https://zieloniwpodrozy.pl/lasowka-schronisko-pod-muflonem-lewin-klodzki-gss-2-0-dzien-6/"
            image={zielony6}
          />
          <Article
            title="Pasterka – Karłów – GSS 2.0 dzień 7"
            url="https://zieloniwpodrozy.pl/sawanna-pasterska-szczeliniec-wielki-karlow-gss-2-0-dzien-7/"
            image={zielony7}
          />
          <Article
            title="Radkowskie Skały i Skalne Grzyby – GSS 2.0 dzień 8"
            url="https://zieloniwpodrozy.pl/radkowskie-skaly-i-skalne-grzyby-gss-2-0-dzien-8/"
            image={zielony8}
          />
          <Article
            title="Suszyna – Twierdza Srebrna Góra – GSS 2.0 dzień 9"
            url="https://zieloniwpodrozy.pl/suszyna-slupiec-twierdza-srebrna-gora-gss-2-0-dzien-9/"
            image={zielony9}
          />
          <Article
            title="Kalenica – Wielka Sowa – GSS 2.0 dzień 10"
            url="https://zieloniwpodrozy.pl/kalenica-lisie-skaly-wielka-sowa-gss-2-0-dzien-10/"
            image={zielony10}
          />
          <Article
            title="Walim – Świerki – GSS 2.0 dzień 11"
            url="https://zieloniwpodrozy.pl/walim-osowka-swierki-gss-2-0-dzien-11/"
            image={zielony11}
          />
          <Article
            title="Waligóra – Sokołowsko – GSS 2.0 dzień 12"
            url="https://zieloniwpodrozy.pl/waligora-andrzejowka-sokolowsko-gss-2-0-dzien-12/"
            image={zielony12}
          />
          <Article
            title="Sokołowsko – Chełmsko Śląskie – GSS 2.0 dzień 13"
            url="https://zieloniwpodrozy.pl/sokolowsko-chelmsko-slaskie-gss-2-0-dzien-13/"
            image={zielony13}
          />
          <Article
            title="Chełmsko Śląskie – Przełęcz Okraj - GSS 2.0 dzień 14"
            url="https://zieloniwpodrozy.pl/chelmsko-slaskie-lysocina-przelecz-okraj-gss-2-0-dzien-14/"
            image={zielony14}
          />
          <Article
            title="Rudawy Janowickie – GSS 2.0 dzień 15"
            url="https://zieloniwpodrozy.pl/rudawy-janowickie-ostra-mala-skalnik-zamek-bolczow-sokolik-krzyzna-gora-gss-2-0-dzien-15/"
            image={zielony15}
          />
        </Box>
      </Box>
    </>
  );
};

export default Written;
