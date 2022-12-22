import { Box, Link } from "@mui/material";
import Breadcrumb from "./Breadcrumb";
import InfoSection from "./InfoSection";
import InfoTemplate from "./InfoTemplate";

import noPhoto from "../../images/no_photo.png";
import brusek from "../../images/history/przelecz.jpg";
import niedzwiedz from "../../images/vicinity/niedzwiedz.jpeg";
import morava from "../../images/vicinity/morava.png";
import strumien from "../../images/vicinity/strumien.jpeg";
import szczerba from "../../images/vicinity/szczerba.jpeg";
import zieleniec from "../../images/vicinity/zieleniec.jpg";
import wambierzyce from "../../images/vicinity/wambierzyce.jpeg";
import bozkow from "../../images/vicinity/bozkow.jpeg";
import zdanow from "../../images/vicinity/zdanow.jpeg";
import rogowiec from "../../images/vicinity/rogowiec.jpeg";
import krasnoludki from "../../images/vicinity/krasnoludki.jpeg";
import miedzianka from "../../images/vicinity/miedzianka.jpeg";
import cmentarz from "../../images/vicinity/cmentarz.jpg";

const Vicinity = () => {
  return (
    <>
      <Breadcrumb parent="Ciekawostki" parentUrl="/trivia" name="Poza trasą" />
      <InfoTemplate>
        Tutaj będą informacje o fajnych miejscach, do których jednak trzeba
        nieco zejść ze szlaku. Jeśli się nie spieszysz - polecam!
      </InfoTemplate>

      <InfoSection
        image={noPhoto}
        imageAlt=""
        imageToLeft={true}
        header="Lądek-Zdrój"
        source=""
      >
        Jedno z najstarszych uzdrowisk na polskich ziemiach o średniowiecznych
        początkach. Pierwsze zakłady lecznicze powstały już w końcówce XV wieku.
        Rozwój trwał nieprzerwanie do XX wieku, miasto uniknęło też zniszczeń
        wojennych. W uzdrowisku leczyli się m.in. Goethe, cesarzowa Katarzyna
        II, cesarz Aleksander I, królowie pruscy, John Quincy Adams – późniejszy
        prezydent USA.
        <p>
          Lądek leży około 2km od szlaku. Jest dobrym miejscem na szukanie
          noclegu i uzupełnianie zapasów
        </p>
      </InfoSection>

      <InfoSection
        image={brusek}
        imageAlt=""
        imageToLeft={false}
        header="Brusek"
        source=""
      >
        Wyraźny szczyt położony na mocno wypłaszczonych okolicach Przełęczy
        Trzech Granic z którego roztaczają się wspaniałe widoki.
        <p>
          Na Brusek można podejść nieznakowaną lecz wyraźną ścieżką, znajduje
          się około 300 metrów od szlaku
        </p>
      </InfoSection>

      <InfoSection
        image={niedzwiedz}
        imageUrl="https://commons.wikimedia.org/w/index.php?curid=40617100"
        imageAlt="Autorstwa Jacek Halicki - Praca własna, CC BY-SA 3.0 pl"
        imageToLeft={true}
        header="Jaskinia Niedźwiedzia"
        source="https://pl.wikipedia.org/wiki/Jaskinia_Nied%C5%BAwiedzia_(Sudety)"
      >
        Najdłuższa jaskinia Sudetów. Jaskinię odkryto 14 października 1966 roku
        podczas eksploatacji wyrobiska marmuru. Nazwę wzięła od znalezionych w
        środku szkieletów niedzwiedzia jaskiniowego. Partie środkowe (około 700
        m) są dostępne dla turystów od 1983 roku, a ich największą atrakcją są
        nacieki wewnątrz jaskini. Jaskinia jest czynna przez cały rok oprócz
        poniedziałków i czwartków (w czwartki czynna od maja do sierpnia).
        <p>
          Jaskinia leży około 3.5km od szlaku, więc dłuższa wycieczka.
          Koniecznie trzeba dowiedzieć się wcześniej, czy jest możliwość wejscia
        </p>
      </InfoSection>

      <InfoSection
        image={morava}
        imageAlt=""
        imageToLeft={false}
        header="Horni Morava - spacer w chmurach"
        source="https://www.dolnimorava.cz/sky-bridge-721"
      >
        Po czeskiej stronie Masywu Śnieżnika otworzono atrakcję - spacer w
        chmurach oraz największy górski most wiszacy na świecie. Atrakcje
        płatne, trzeba liczyć się z kolejkami.
        <p>
          Do Horni Moravy można zejść czerwonym szlakiem z dawnego pieszego
          przejścia graniczego Jodłów-Horní Morava
        </p>
      </InfoSection>

      <InfoSection
        image={strumien}
        imageUrl="https://commons.wikimedia.org/w/index.php?curid=31681621"
        imageAlt="Autorstwa Pudelek (Marcin Szala) - Praca własna, CC BY-SA 3.0"
        imageToLeft={true}
        header="Czerwony Strumień - ruiny wsi"
        source="https://pl.wikipedia.org/wiki/Czerwony_Strumie%C5%84"
      >
        Wieś powstała w czasach średniowiecznych. W 1840 roku wieś liczyła 130
        mieszkańców. Zabudowa rozciągała się na wysokościach 650–700 m n.p.m. W
        czasie wytyczania granicy państwowej po II wojnie światowej w latach
        1947-1948 wieś została całkowicie wysiedlona, aczkolwiek jej wyludnianie
        rozpoczęło się już w okresie międzywojennym. Obecnie po wsi zostały
        tylko fragmenty fundamentów obejść gospodarczych, zniszczone postumenty
        przydrożnych figur religijnych i kamienne mury barokowej kaplicy z XVIII
        wieku.
        <p>
          Aby dojśc do Czerwonego Strumienia trzeba odejść kilometr od trasy
          zielonym szlakiem za Kamieńczykiem.
        </p>
      </InfoSection>

      <InfoSection
        image={szczerba}
        imageUrl="https://commons.wikimedia.org/w/index.php?curid=11882617"
        imageAlt="Autorstwa Ktw - Praca własna, CC BY-SA 3.0"
        imageToLeft={false}
        header="Zamek Szczerba"
        source="https://pl.wikipedia.org/wiki/Zamek_Szczerba"
      >
        Zamek Szczerba zbudowano pod koniec XIII wieku z nieobrobionego
        kamienia. Mury obronne o długości ponad 100 m, wysokości 9 m i grubości
        około 1,5 m otaczały niewielki dziedziniec zamkowy. Zamek został
        zniszczony w 1428 podczas husyckiego najazdu na Śląsk, od tamtego czasu
        pozostał w ruinie.
        <p>
          Zamek jest dość daleko od trasy, przed Czerńcem trzeba skręcić czarnym
          szlakiem na wschód. Ale można połaczyć z atrakcją z kolejnego punktu
        </p>
      </InfoSection>

      <InfoSection
        image={noPhoto}
        imageToLeft={true}
        header="Solna Jama"
        source="https://pl.wikipedia.org/wiki/Solna_Jama"
      >
        Niewielka jaskinia krasowa w wyrobisku starego kamieniołomu. Powstała w
        wyniku wypłukiwania przez wodę marmurów. Obecne wejście do jaskini
        zostało odsłonięte w trakcie prac w kamieniołomie, dawniej naturalny
        otwór znajdował się niżej, nad samym brzegiem potoku Gołodolnik
        <p>
          Aby dojść do jaskini trzeba przed Czerńcem trzeba skręcić czarnym
          szlakiem na wschód i przejść nim około 2km.
        </p>
      </InfoSection>

      <InfoSection
        image={zieleniec}
        imageAlt=""
        imageToLeft={false}
        header="Torfowisko pod Zieleńcem"
        source="https://zieloniwpodrozy.pl/torfowisko-pod-zielencem/"
      >
        Torfowisko w dużym bezodpływowym rozmiarze z wygodną infrastrukturą dla
        turystów, śliczną przyrodą i wodą koloru brązowego.
        <p>
          Torfowisko jest oddalone kilometr od trasy GSS 2.0, trzeba odbić na
          zachód zielonym szlakiem.
        </p>
      </InfoSection>

      <InfoSection
        image={wambierzyce}
        imageUrl="https://commons.wikimedia.org/w/index.php?curid=40169565"
        imageAlt="Autorstwa Jacek Halicki - Praca własna, CC BY-SA 3.0 pl"
        imageToLeft={true}
        header="Wambierzyce"
        source="https://pl.wikipedia.org/wiki/Solna_Jama"
      >
        Ośrodek pielgrzymkowy i turystyczny, zwany śląskim Jeruzalem.
        Wambierzyce zostały założone najprawdopodobniej w roku 1253 przez króla
        czeskiego Przemysła Ottokara II. Na początku XVIII wieku wybudowano w
        Wambierzycach kościół Nawiedzenia Najświętszej Maryi Panny, o barokowej
        architekturze. We wnętrzu świątyni znajduje się m.in. wykonana z drewna
        lipowego rzeźba Matki Boskiej Królowej Rodzin, datowana na XIV w.
        <p>
          Aby dojść do Wambierzyc należy zejść 2.5km czarnym szlakiem spod
          Drzewnej. Wambierzyce są dobrym miejscem na uzupełnienie zapasów.
        </p>
      </InfoSection>

      <InfoSection
        image={bozkow}
        imageUrl="https://commons.wikimedia.org/w/index.php?curid=31573365"
        imageAlt="Autorstwa Jacek Halicki - Praca własna, CC BY-SA 3.0 pl"
        imageToLeft={false}
        header="Pałac w Bożkowie"
        source="https://pl.wikipedia.org/wiki/Pa%C5%82ac_w_Bo%C5%BCkowie"
      >
        Zabytkowy pałac z XVI w. wzniesiony przez hrabiego von Magnisa.
        Wielokrotnie zmieniał właściciela, wielokrotnie przebudowywany. Po
        wojnie przez lata mieściły się tam szkoły, później jednak nie miał
        szczęścia do właścicieli i stopniowo zamieniał sie w ruinę. Możliwość
        zwiedzania w środku nie jest pewna.
        <p>
          Pałac jest w odległości około kilometra od trasy na odcinku Gorzuchów
          - Słupiec.
        </p>
      </InfoSection>

      <InfoSection
        image={zdanow}
        imageUrl="https://commons.wikimedia.org/w/index.php?curid=34889341"
        imageAlt="Autorstwa Jar.ciurus - Praca własna, CC BY-SA 3.0 pl"
        imageToLeft={true}
        header="Wiadukt Żdanowski"
        source="https://pl.wikipedia.org/wiki/Kolej_Sowiog%C3%B3rska"
      >
        Bliźniaczy wiadukt do wiaduktu w Srebrej Górze.
        <p>
          Aby dojść do wiaduktu 2.5km niebieskimi i zielonym szlakiem z
          przełęczy Srebrnej.
        </p>
      </InfoSection>

      <InfoSection
        image={noPhoto}
        imageAlt=""
        imageToLeft={false}
        header="Muchołapka w Ludwikowicach Kłodzkich / Muzeum Molke"
        source="https://www.gorytajemnic.pl/ciekawe-miejsca/mucholapka-z-muzeum-molke-w-ludwikowicach-klodzkich.html"
      >
        Tajemnicza konstrukcja o niepewnym przeznaczeniu, zbudowana pod koniec
        wojny. Tuż obok muzeum Techniki Militarnej – Riese – Mölke
        <p>
          Aby zobaczyć te obiekty trzeba zejść nieco dłuższą drogą czarnym
          szlakiem do Ludwikowic Kłodzkich
        </p>
      </InfoSection>

      <InfoSection
        image={noPhoto}
        imageAlt=""
        imageToLeft={true}
        header="Kamieniołom Melafiru 'Kamyki' w Głuszycy. "
        source="https://gorskiewyrypy.pl/kamyki-w-gorach-suchych/"
      >
        Prace wydobywcze w Głuszycy Górnej były prowadzone przez Niemców w
        trakcie, po wojnie były kontynuowane do lat 70-tych XX wieku. Po
        zakończonej eksploatacji wyrobisko zostało zalane wodą. Z czasem zbocza
        porosły drzewami.
        <p>
          Aby zobaczyć te obiekty trzeba zejść z grani Gór Kamiennych
          nieoznakowanymi ścieżkami na zboczach Raroga. Trzeba uważać, bo jako
          kamieniołom kończy się stromymi ścianami - trzeba przejść dookoła.
        </p>
      </InfoSection>

      <InfoSection
        image={rogowiec}
        imageAlt="Autorstwa Edward Knapczyk - Praca własna, CC BY-SA 3.0 pl"
        imageUrl="https://commons.wikimedia.org/w/index.php?curid=21464873"
        imageToLeft={false}
        header="Ruiny zamku Rogowiec"
        source="https://pl.wikipedia.org/wiki/Zamek_Rogowiec"
      >
        Ruiny kamiennego zamku Rogowiec z końca XIII wieku położone są w
        północnej części Gór Suchych. Najpierw zdewastowany przez Husytów,
        poźniej całkowicie zniszczony przez wojska Macieja Korwina. Do
        dzisiejszych czasów zachowane relikty książęcego zamku składają się z
        fragmentów murów obwodowych, nikłych pozostałości po basztach oraz
        fragmentu cylindrycznej wież. Byl to najwyżej położony zamek w Polsce
        <p>
          Zamek jest dość daleko od trasy, bo trzeba przejść ok. 4km ze
          schroniska Andrzejówka. Ale warto - śliczne góry, fajne ruiny,
          fantastyczne widoki z góry.
        </p>
      </InfoSection>

      <InfoSection
        image={noPhoto}
        imageAlt=""
        imageToLeft={true}
        header="Czartowskie Skały"
        source="https://przyrodniczo.pl/pomniki-przyrody/czartowskie-skaly/"
      >
        Widowiskowe skałki znajdujące się w najbardziej wysuniętym na północ
        paśmie Gór Stołowych - Zaworach.
        <p>
          Aby dojść do Czartowskich Skał należy podejść kilometr niebieskim
          szlakiem na wschód od Łącznej.
        </p>
      </InfoSection>

      <InfoSection
        image={krasnoludki}
        imageAlt="Autorstwa Jacek Halicki - Praca własna, CC BY-SA 4.0"
        imageUrl="https://commons.wikimedia.org/w/index.php?curid=54650635"
        imageToLeft={false}
        header="Rezerwat przyrody Głazy Krasnoludków"
        source="https://pl.wikipedia.org/wiki/Rezerwat_przyrody_G%C5%82azy_Krasnoludk%C3%B3w"
      >
        Rezerwat położony jest w Zaworach – północno-zachodniej części Gór
        Stołowych, w Sudetach Środkowych, na zboczu zalesionego wzniesienia, nad
        potokiem Jawiszówka, około 2,0 km na południowy zachód od Gorzeszowa.
        Znajdują się tu Gorzeszowskie Skałki, tworzące formy przypominające
        postacie, ściany, wieże, grzyby, zwierzęta, zbudowane z piaskowców i
        margli wyżłobionych przez wodę.
        <p>
          Dojście do Głazów może być problematyczne. Choć w linii prostej jest
          minimalnie około 1.5km, to nie ma żadnego szlaku a i ścieżki leśne
          niespecjalnie prowadzą w ich kierunku. Z Chełmska Śląskiego szlakiem
          jest 5km.
        </p>
      </InfoSection>

      <InfoSection
        image={miedzianka}
        imageAlt=""
        imageToLeft={true}
        header="Miedzianka"
        source="https://pl.wikipedia.org/wiki/Miedzianka_(wojew%C3%B3dztwo_dolno%C5%9Bl%C4%85skie)"
      >
        Wieś położona jest na północno-zachodnich stokach wzgórza Miedziana
        Góra, pomiędzy przełomowym odcinkiem doliny Bobru. Dziś jest to zaledwie
        kilka domów otoczonych licznymi hałdami i wyrobiskami, pozostałością po
        pracach górniczych o 700-letniej historii, oraz ruinami jednego z
        piękniejszych Śląskich miast, mimo dużych zniszeń spowodowancyh
        najazdami husyckimi i Wojną Trzydziestoletnią. Miasto było znane z
        wydobycia miedzi, później kobaltu, po wojnie zaś uranu. W latach 60-tych
        w wyniku szkód górniczych miasto zostało wyburzone, a ludzie przesiedlni
        do Jeleniej Góry.Po 1989 miejscowość zaczęła się odradzać. Wielką
        popularność przyniosła jej opublikowana w 2011 reporterska książka
        Filipa Springera Miedzianka. Historia znikania. W 2013 zamieszkałych
        było 11 domów.
        <p>
          Miedzianka jest dość daleko od szlaku. Ale jeśli zejdziecie do Janowic
          Wielkich, to stamtąd 2km drogą do znanego browaru i zaraz za nim jest
          juz Miedzanka
        </p>
      </InfoSection>

      <InfoSection
        image={cmentarz}
        imageAlt=""
        imageUrl=""
        imageToLeft={false}
        header="Symboliczny cmentarz ofiar gór"
        source="https://pl.wikipedia.org/wiki/Cmentarz_Ofiar_G%C3%B3r_w_Karkonoszach"
      >
        Górski symboliczny cmentarz poświęcony ofiarom gór położony na wysokości
        ok. 1300 m n.p.m. w Karkonoskim Parku Narodowym, w górnej części Kotła
        Łomniczki, na urwistym stoku u podnóża Kopy (1377 m n.p.m.). Założony
        został z inicjatywy Koła Przewodników Sudeckich z Jeleniej Góry dla
        upamiętnienia ludzi gór, którzy zginęli tragicznie w górach, jak i osób,
        które wniosły wiele wkładu w rozwój turystyki w Karkonoszach
        <p>
          Aby dojść do cmentarza należy zejść odrobinę spod Domu Śląskiego czerwonym szlakiem w kierunku Kotła Łomniczki. A potem wejść z powrotem.
        </p>
      </InfoSection>
    </>
  );
};

export default Vicinity;
