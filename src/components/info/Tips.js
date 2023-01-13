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

          <TipTemplate header="Mateusz (Zielony w Podrózy)">
            <List
              sx={{
                width: "100%",
                bgcolor: "teal.lighter",
                minHeight: "200px",
              }}
            >
              <InternalListItem
                icon={<LooksOne />}
                primaryText="GSS 2.0 prowadzi niekiedy szlakami, po których przez wiele godzin można wędrować samotnie. W czasie przejścia nie spotkamy jednak takich miejsc, z których zejście w stronę cywilizacji trwałoby dłużej niż dwie czy trzy godziny. Dlatego też nie zabieraj ze sobą za dużo. Jeśli ci się wydaje, że czegoś potrzebujesz, to raczej ci się wydaje. Pięć par skarpetek to jakoś o dwie za dużo, a koszulki termoaktywne schną szybko i łatwo się je pierze. Po drodze są również sklepy, więc nie trzeba zabierać kuchenki, gazu, czy liofilizatów. No, chyba że lubisz. Po drodze bez problemu uzupełniam zapasy, znajdziesz apteki, a nawet poczty. Jeśli uznasz, że faktycznie zabrałeś zbędne rzeczy, które cię na szlaku przytłaczają ciężarem, to nie bój się ich po prostu odesłać. Ja odesłałem ważący raptem 330 gramów mini statyw. Niewiele, ale to trzy paczki kabanosów."
              />
              <InternalListItem
                icon={<LooksTwo />}
                primaryText="Wiedz, dokąd idziesz. W przypadku pokonywania szlaków długodystansowych dobrze jest wiedzieć, gdzie i kiedy można odpocząć, jak daleko jesteśmy od sklepów oraz jakie możliwości noclegowe mamy w okolicy. Dzięki temu łatwiej będzie planować dzienne odcinki, uwzględniając kondycję czy pogodę. Jeśli bowiem kolejnego dnia zapowiadane są burze, to może lepiej ten odcinek skrócić, zregenerować się, a następnego poranka ruszyć pełnym sił. Może po kilku ciężkich dniach w deszczu chcemy wypocząć, a pobliskie schronisko oferuje tylko ostatnie łóżko w głośnej sali wieloosobowej? Być może wtedy warto nieco odbić od szlaku, dołożyć lub skrócić etap, by się wysuszyć i zregenerować.  Spontaniczne pokonywanie szlaku ma swoje plusy, ale świadomość otoczenia i przebiegu szlaku sprawia, że przyjemniej i łatwiej pokonuje się dystans."
              />
              <InternalListItem
                icon={<Looks3 />}
                primaryText="Zadbaj o swoją kondycję mentalną. Zakwasy da się załagodzić, odciski można zakleić. Kiepskie morale natomiast to szybka droga do zniechęcenia się. Pokonanie 500 km w czasie tych kilkunastu dni opiera się nie tyle na przygotowaniu sprzętowym i kondycyjnym, ile na wewnętrznym przekonaniu o słuszności wyzwania. Traktuj każdy dzień jako nową przygodę i okazję do odwiedzenia nieznanego miejsca. Nie zamartwiaj się tym, co czeka za 200 kilometrów. Dbaj o samopoczucie, rób przerwy jeśli potrzebujesz, nie bój się skracać odcinków, gdy czujesz się słabiej, albo wydłużać ich, kiedy czujesz, że to twój dzień. Zadbaj także o sen, w czym mogą pomóc stopery."
              />
              <InternalListItem
                icon={<Looks4 />}
                primaryText="Odżywianie na szlaku długodystansowym to ważna kwestia, natomiast czasami trzeba będzie się dostosować do reguł dyktowanych przez poszczególne etapy. Nie zawsze znajdzie się sklep, czasami w okolicy będzie tylko jedna knajpa. Staraj się jeść pożywnie i wartościowo, ale przede wszystkim jedz to, na co masz ochotę. Krótka przerwa z ulubionym smakołykiem nie tylko dostarcza energii, ale poprawia też samopoczucie. Jeśli możesz, postaraj się zjeść bogatą w białko kolację, tak aby dostarczyć mięśniom budulca do regeneracji. Jeszcze ważniejszą kwestia w czasie tak długiego marszu jest nawodnienie. Odwodnienie w czasie jednego etapu może nieść konsekwencje w kolejnych dniach, prowadząc do osłabienia i zniechęcenia. Dobrym rozwiązaniem będzie na pewno wzbogacanie wody o rozpuszczane w niej elektrolity i minerały, tak aby zniwelować skutki wysiłku i pocenia się. "
              />
              <InternalListItem
                icon={<Looks5 />}
                primaryText="Dbanie o stopy w czasie wielodniowego marszu to kluczowa sprawa. Organizm zaskakująco szybko przyzwyczaja się do wysiłku, natomiast przed wyruszeniem na szlak warto przynajmniej przez kilka dni pospacerować w butach, które planujesz zabrać na szlak. O tym, że raczej nie powinny być to buty nowe, pewnie wiesz. Dobrym rozwiązaniem jest również zabranie delikatnie obciążonego plecaka w ramach krótkiego treningu. Mowa nawet o godzinnym spacerze. Na szlak koniecznie zabierz plastry na odciski, a żeby do nich nie dopuścić Sudocrem. Przed wyjściem na szlak postaraj się posmarować stopy, a następnie w czasie przerw ściągnij buty, skarpetki i daj stopom nieco odpocząć. Jeśli skarpetki są wilgotne, możesz w czasie przerwy rozważyć ich zmianę na suchą parę. W taki sposób odsuniesz nieco widmo odcisków. "
              />
            </List>
          </TipTemplate>
        </Box>
      </Box>
    </Box>
  );
};

export default Tips;
