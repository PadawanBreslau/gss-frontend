import { Box } from "@mui/material";
import Breadcrumb from "./Breadcrumb";
import InfoSection from "./InfoSection";
import InfoTemplate from "./InfoTemplate";

import klodzka from "../../images/towers/klodzka.jpg";
import kowadlo from "../../images/trail/kowadlo.jpg";
import rudawiec from "../../images/trail/rudawiec.jpg";
import snieznik from "../../images/trail/snieznik.jpg";
import jagodna from "../../images/trail/jagodna.jpg";
import szczeliniec from "../../images/trail/szczeliniec.jpg";
import sowa from "../../images/towers/sowa.jpg";
import waligora from "../../images/trail/waligora.jpg";
import skalnik from "../../images/trail/skalnik.jpg";
import sniezka from "../../images/trail/sniezka.jpg";

const KGP = () => {
  return (
    <>
      <Breadcrumb parent="Trasa" parentUrl="/trail" name="Korona Gór Polski" />
      <InfoTemplate>
        Opis wszystkich szczytów z Korony Gór Polski na trasie GSS 2.0 (lub tuż
        obok trasy). Plus komentarz ode mnie :)
      </InfoTemplate>

      <Box sx={{ display: "flex", flexDirection: "column", mt: 1, p: 2 }}>
        <InfoSection
          image={klodzka}
          imageToLeft={true}
          header="Kłodzka Góra (757) - Góry Bardzkie"
          source=""
        >
          Drugi najwyższy szczyt Gór Bardzkich, po Szerokiej Górze. Na oba
          szczyty wchodzimy.
        </InfoSection>

        <InfoSection
          image={kowadlo}
          imageToLeft={false}
          header="Kowadło (988) - Góry Złote"
          source=""
        >
          Trasa przechodzi przez Kowadło. W Górach Złotych/Bialskich jest
          totalnie poplątane, więc by nie było wątpliwości szlak wchodzi na
          najwyższy szczyt w okolicy - Smrek
        </InfoSection>

        <InfoSection
          image={rudawiec}
          imageToLeft={true}
          header="Rudawiec (1106) - Góry Bialskie"
          source=""
        >
          Trasa nie przechodzi przez Rudawiec. Jednak jeśli chcesz zaliczyć ten
          szczyt to za Smrekiem zamiast iść na czeską stronę możesz iść
          alternatywną drogą cały czas granicą państw, gdzie zahaczysz o Rudawic
          po czym wrócisz na GSS 2.0
        </InfoSection>

        <InfoSection
          image={snieznik}
          imageToLeft={false}
          header="Śnieżnik (1423) - Masyw Śnieżnika"
          source=""
        >
          Przechodzimy :)
        </InfoSection>

        <InfoSection
          image={jagodna}
          imageToLeft={true}
          header="Jagodna (985) - Góry Bystrzyckie"
          source=""
        >
          Też przechodzimy. Jak ktoś jest gorliwy może odbić 200m na wyższy,
          północny wierzchołek :)
        </InfoSection>

        <InfoSection
          image={szczeliniec}
          imageToLeft={false}
          header="Szczeliniec (919) - Góry Stołowe"
          source=""
        >
          Oczywiście też przechodzimy i to dogłębnie :)
        </InfoSection>

        <InfoSection
          image={sowa}
          imageToLeft={true}
          header="Wielka Sowa (1015) - Góry Sowie"
          source=""
        >
          Też przechodzimy. Nawet jakbym chciał inaczej, to w Sowich się nie da
          :)
        </InfoSection>

        <InfoSection
          image={waligora}
          imageToLeft={false}
          header="Waligóra (933) - Góry Kamienne"
          source=""
        >
          Wchodzimy. Ale to zejście będziecie lepiej pamiętać :)
        </InfoSection>

        <InfoSection
          image={skalnik}
          imageToLeft={true}
          header="Skalnik (935) - Rudawy Janowickie"
          source=""
        >
          Nieznacznie wyższa jest Ostra Mała. Wchodzimy na oba szczyty.
        </InfoSection>

        <InfoSection
          image={sniezka}
          imageToLeft={false}
          header="Śnieżnka (1603) - Karkonosze"
          source=""
        >
          Jak można być szlakiem długodystansowym i nie prowadzić na najwyższy
          szczyt w promieniu 200km i najwybitniejszy szczyt Polski? :)
        </InfoSection>
      </Box>
    </>
  );
};

export default KGP;
