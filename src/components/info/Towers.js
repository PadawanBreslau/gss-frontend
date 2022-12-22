import { Box, Link } from "@mui/material";
import Breadcrumb from "./Breadcrumb";
import InfoSection from "./InfoSection";
import InfoTemplate from "./InfoTemplate";

import klodzka from "../../images/towers/klodzka.jpg";
import jawornik from "../../images/towers/jawornik.jpg";
import borowkowa from "../../images/towers/borowkowa.jpg";
import snieznik from "../../images/towers/snieznik.jpg";
import trojmorski from "../../images/towers/trojmorski.jpg";
import czerniec from "../../images/towers/czerniec.jpg";
import jagodna from "../../images/towers/jagodna.jpg";
import suszyna from "../../images/towers/suszyna.jpg";
import kalenica from "../../images/towers/kalenica.jpg";
import sowa from "../../images/towers/sowa.jpg";
import wlodzicka from "../../images/towers/wlodzicka.jpg";
import spicak from "../../images/towers/spicak.jpg";
import mieroszow from "../../images/towers/mieroszow.jpg";
import henryk from "../../images/history/henryk.jpeg";
import smrek from "../../images/towers/smrek.jpg";

const Towers = () => {
  return (
    <>
      <Breadcrumb
        parent="Ciekawostki"
        parentUrl="/trivia"
        name="Wieże widokowe"
      />
      <InfoTemplate>
        Podziękowania dla serwisu <Link href="https://www.wiezedolnegoslaska.pl/" sx={{color: 'secondary.light', fontWeight: 600 }}>Wieże Widokowe Dolnego Śląska</Link> za część zdjęć i możlwość użycia opisów :)
      </InfoTemplate>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 1, p: 2 }}>
        <InfoSection
          image={klodzka}
          imageToLeft={true}
          header="Kłodzka Góra"
          source="https://www.wiezedolnegoslaska.pl/2022/02/24/wieza-widokowa-na-klodzkiej-gorze/"
        >
          Oddana w ręce turystów w 2020 roku wieża na Kłodzkiej Górze jest
          jednym z najwyższych tego typu obiektów na Dolnym Śląsku (wysokość
          całkowita 34,5 m; górny taras widokowy umiejscowiony na poziomie 30
          metrów)
          <p>
            Panoramy Masywu Śnieżnika, Gór Orlickich, Bardzkich i Sowich; przy
            dobrej widoczności ujrzymy również Karkonosze i Wrocław
          </p>
        </InfoSection>
        <InfoSection
          image={jawornik}
          imageToLeft={false}
          header="Jawornik Wielki"
          source="https://www.wiezedolnegoslaska.pl/2022/02/24/wieza-widokowa-na-jaworniku-wielkim/"
        >
          Niska wieża, z której wraz z wzrostem roślinności coraz mniej widać.
          Ale dodaje z kronikarskiego obowiązku :)
          <p>
            Przedgórze Sudeckie (m.in. Przedgórze Paczkowskie i Masyw Ślęży),
            jezioro Otmuchowskie , miejscowość Złoty Stok
          </p>
        </InfoSection>

        <InfoSection
          image={borowkowa}
          imageToLeft={true}
          header="Borówkowa"
          source="https://www.wiezedolnegoslaska.pl/2022/02/24/wieza-widokowa-na-borowkowej/"
        >
          Czeska wieża widokowa w oryginalnym - zamkniętym stylu.
          <p>
            Ziemia Kłodzka, Masyw Jesenika, Pogórze Sudeckie, tereny
            opolszczyzny z dobrze widocznymi jeziorami, Paczków, Kamieniec
            Ząbkowicki
          </p>
        </InfoSection>

        <InfoSection
          image={snieznik}
          imageToLeft={false}
          header="Śnieżnik"
          source="https://www.wiezedolnegoslaska.pl/2022/02/24/wieza-widokowa-na-sniezniku-w-budowie/"
        >
          Nowa, kontrowersyjna wieża, ale widoków z niej nic nie odbierze. Można
          wejść, szczególnie że jest jedynym miejscem na szczycie, gdzie jej nie
          widać :P
          <p>
            Karkonosze, Ślęża, Jezioro Otmuchowskie oraz Nyskie, Zieleniec, Góry
            Bystrzyckie, Góry Orlickie, Mały Śnieżnik, Trójmorski Wierch,
            Stronie Śląskie, JeseníkPrzedgórze Sudeckie (m.in. Przedgórze
            Paczkowskie i Masyw Ślęży), jezioro Otmuchowskie , miejscowość Złoty
            Stok
          </p>
        </InfoSection>

        <InfoSection
          image={trojmorski}
          imageToLeft={true}
          header="Trójmorski Wierch"
          source="https://www.facebook.com/GminaMiedzylesie/posts/pfbid02Mc9z36Sja9eF83Yp1jAeX1cHdWZcPHifAikvq9dqXGJzELuTbShuL33JXgHbSXpXl"
        >
          Wieża zbudowana w 2009, szybko jednak została zamknięta. w 2022 roku
          przeszła remont i znów nadaje się do użytku.
          <p>Ziemia Kłodzka, Masyw Jesenika, Masyw Śnieżnika</p>
        </InfoSection>

        <InfoSection
          image={czerniec}
          imageToLeft={false}
          header="Czerniec"
          source="https://www.wiezedolnegoslaska.pl/2022/02/24/wieza-widokowa-na-czerncu/"
        >
          Nowa wieża, otwarta w 2021 w ramach międzygranicznej współpracy
          polsko-czeskiej z dużą pomocą środków unijnych.
          <p>
            Góry Orlickie, masyw Śnieżnika, góry Bystrzyckie, Góry Sowie, Góry
            Złote, Góry Stołowe, Kotlina Kłodzka
          </p>
        </InfoSection>

        <InfoSection
          image={jagodna}
          imageToLeft={true}
          header="Jagodna"
          source="https://www.wiezedolnegoslaska.pl/2022/02/24/wieza-widokowa-na-jagodnej/"
        >
          Góra na którą łatwo wejśc od Przełęczy Spalonej. Wieża i bycie na
          liście KGP przyciągają tu sporo turystów.
          <p>Góry Orlickie, masyw Śnieżnika, miasto Bystrzyca Kłodzka</p>
        </InfoSection>

        <InfoSection
          image={suszyna}
          imageToLeft={false}
          header="Suszyna"
          source="https://www.wiezedolnegoslaska.pl/2022/02/23/wieza-widokowa-w-suszynie/"
        >
          Oryginalna, zabudowana wieża. Dostępny jest podgląd live z kamer na
          niej umieszczonych.
          <p>
            Góry Stołowe, Broumovskie Ściany, Góra Świętej Anny, Góra Wszystkich
            Świętych, Góry Bardzkie, Góry Orlickie, Góry Sowie, Góry Złote oraz
            Masyw Śnieżnika
          </p>
        </InfoSection>

        <InfoSection
          image={kalenica}
          imageToLeft={true}
          header="Kalenica"
          source="https://www.wiezedolnegoslaska.pl/2022/02/23/wieza-widokowa-na-kalenicy/"
        >
          Bardzo stara wieża metalowa, której początki sięgają czasów
          niemieckich. W 2022 roku wyremontowana
          <p>
            Karkonosze ze Śnieżką, Góry Kamienne i Wałbrzyskie, Góry Sowie,
            fragment wsi Jugów, Góry Bardzkie i Złote, Masyw Śnieżnika,
            Przedgórze Sudeckie, Kotlina Kłodzka, Kotlina Dzierżoniowska, Masyw
            Ślęży
          </p>
        </InfoSection>

        <InfoSection
          image={sowa}
          imageToLeft={false}
          header="Wielka Sowa"
          source="https://www.wiezedolnegoslaska.pl/2022/02/16/wieza-widokowa-na-wielkiej-sowie/"
        >
          Umiejscowiona na najwyższym szczycie Gór Sowich konstrukcja została
          wzniesiona w latach 1905-1906, co czyni ją prawdziwą babunią wśród
          dolnośląskich budowli widokowych. Niestety obecnie wieża na Wielkiej
          Sowie przechodzi generalny remont, który potrwa przynajmniej do maja
          2023 roku.
          <p>
            Widać niemal całe Sudety, od Karkonoszy po Masyw Śnieżnika; przy
            dobrej widoczności można dostrzec nawet Wrocław
          </p>
        </InfoSection>

        <InfoSection
          image={wlodzicka}
          imageToLeft={true}
          header="Włodzicka Góra"
          source="https://www.wiezedolnegoslaska.pl/2022/02/24/wieza-widokowa-na-wlodzickiej-gorze/"
        >
          Nowa wieża o zamkniętej konstrukcji i schodach drabinowych na szczyt
          <p>
            Góry Sowie, Góry Wałbrzyskie, Góry Suche; miejscowości Głuszyca,
            Bartnica, Świerki
          </p>
        </InfoSection>

        <InfoSection
          image={spicak}
          imageToLeft={false}
          header="Ruprechtický Špičák"
          source="https://www.wiezedolnegoslaska.pl/2022/02/24/wieza-widokowa-na-ruprechtickim-szpiczaku-cz-ruprechticky-spicak/"
        >
          Czeska wieża widokowa z 2002 roku.
          <p>
            Góry Stołowe, Góry Orlickie, Masyw Śnieżnika, Góry Bardzkie, Góry
            Sowie, Góry Kamienne, Kotlina Broumovska
          </p>
        </InfoSection>

        <InfoSection
          image={mieroszow}
          imageToLeft={true}
          header="Mieroszów"
          source="https://www.wiezedolnegoslaska.pl/2022/02/24/wieza-widokowa-w-mieroszowie/"
        >
          Dość nisko położona wieża, trochę oddalona od trasy GSS 2.0
          <p>
            Mieroszów, Broumowskie Ściany, Góry Kamienne, Kotlina Broumowska,
            Karkonosze, Góry Stołowe
          </p>
        </InfoSection>

        <InfoSection
          image={spicak}
          imageToLeft={false}
          header="Ruprechtický Špičák"
          source="https://www.wiezedolnegoslaska.pl/2022/02/24/wieza-widokowa-na-ruprechtickim-szpiczaku-cz-ruprechticky-spicak/"
        >
          Czeska wieża widokowa z 2002 roku.
          <p>
            Góry Stołowe, Góry Orlickie, Masyw Śnieżnika, Góry Bardzkie, Góry
            Sowie, Góry Kamienne, Kotlina Broumovska
          </p>
        </InfoSection>

        <InfoSection
          image={henryk}
          imageToLeft={true}
          header="Wieża Hernyka"
          source="https://www.wiezedolnegoslaska.pl/2022/02/22/wieza-widokowa-zamku-ksiecia-henryka/"
        >
          Wieża na najwyższym szczycie Wzgórz Łomnickich. Wejście płatne. 
          <p>
            prawie całe pasmo Karkonoszy (włącznie ze Śnieżką), zalew w Sosnówce, okoliczne miejscowości
          </p>
        </InfoSection>

        <InfoSection
          image={smrek}
          imageToLeft={false}
          header="Smrek"
          source="https://www.wiezedolnegoslaska.pl/2022/02/24/wieza-widokowa-na-smreku-cz-smrk/"
        >
          Pierwsza wieża widokowa na Smreku wybudowana została jeszcze w XIX wieku. Niestety po II wojnie światowej popadła w ruinę. Obecna konstrukcja powstawała w latach 2001-2003.
          <p>
            Góry Łużyckie i czeska część Gór Izerskich, Pogórze Izerskie, polska część Gór Izerskich, Karkonosze
          </p>
        </InfoSection>
      </Box>
    </>
  );
};

export default Towers;
