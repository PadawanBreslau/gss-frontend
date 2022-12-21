import { Box } from "@mui/material";
import Breadcrumb from "./Breadcrumb";
import InfoSection from "./InfoSection";
import bardo from "../../images/history/bardo.jpg";
import obryw from "../../images/history/obryw.jpg";
import zloty from "../../images/history/zloty-stok.jpg";
import karpien from "../../images/history/karpien.jpg";
import solidarnosc from "../../images/history/solidarnosc.jpg";
import przelecz from "../../images/history/przelecz.jpg";
import miedzylesie from "../../images/history/miedzylesie.jpeg";
import autostrada from "../../images/history/autostrada.jpeg";
import chopin from "../../images/history/chopin.jpg";
import wiadukt from "../../images/history/wiadukt.jpeg";
import naroznik from "../../images/history/naroznik.jpeg";
import karol from "../../images/history/karol.jpeg";
import srebrna from "../../images/history/srebrna.jpg";
import riese from "../../images/history/riese.jpg";

const Monuments = () => {
  return (
    <>
      <Breadcrumb
        parent="Ciekawostki"
        parentUrl="/trivia"
        name="Historia i zabytki"
      />
      <Box sx={{ display: "flex", flexDirection: "column", mt: 1, p: 2 }}>
        <InfoSection
          image={bardo}
          imageToLeft={true}
          header="Bazylika w Bardzie"
          source="https://polska-org.pl/526879,Bardo,Bazylika_Nawiedzenia_Najswietszej_Marii_Panny.html"
        >
          Kościół jako budowla barokowa powstał w latach 1686-1704 początkowo
          wg. proj. Giovanniego Battisty Quadro realizowanego od 1693 pod
          kierunkiem budowniczego Michała Kleina z Nysy. Wcześniejsza budowla
          uległa zniszczeniu podczas walk z husytami w 1421r. Remontowany po
          pożarze w 1711-1712, restaurowany w 1852, w 1864 powiększony o kruchtę
          zachodnią.
        </InfoSection>

        <InfoSection
          image={obryw}
          imageToLeft={false}
          header="Obryw Skalny nad Nysą Kłodzką"
          source="https://przyrodniczo.pl/cenne-tereny/obryw-skalny/"
        >
          Obryw skalny na terenie Sudetów, który spowodował zmianę biegu koryta
          Nysy Kłodzkiej i zagroził zalaniem Barda. Obecne stanowi doskonały
          punkt widokowy
        </InfoSection>

        <InfoSection
          image={zloty}
          imageToLeft={true}
          header="Kopalnia Złota w Złotym Stoku"
          source="https://kopalniazlota.pl/historia-kopalni-zlota-w-zlotym-stoku/"
        >
          Dawna kopalina złota i arsenu. Najstarsze prace wydobywcze prowadzono
          w okolicach Złotego Stoku już około 2000 lat p.n.e. Od tego czasu aż
          do lat dzisiejszych zdołano wydrążyć przeszło 300 km sztolni, szybów i
          chodników rozmieszczonych aż na 21 poziomach. Największy rozkwit
          górnictwa złota przypadł w Złotym Stoku na początek XVI w. W 1507 r.
          przeniesiono tu z Ząbkowic Śląskich mennicę książęcą i zaczęto bić
          złote dukaty. Przyniosło to wzrost rangi miasta i wymierne korzyści
          finansowe. W drugiej dekadzie XVI w. zaczęły tu inwestować europejskie
          spółki górniczo-hutnicze. W tym czasie ze swoich prawie 200 kopalni
          Złoty Stok dostarczał około 8% całej europejskiej produkcji złota
        </InfoSection>

        <InfoSection
          image={karpien}
          imageToLeft={false}
          header="Zamek Karpień"
          source="https://pl.wikipedia.org/wiki/Zamek_Karpie%C5%84"
        >
          Zrujnowany średniowieczny zamek na szczycie Karpiaka (782 m n.p.m.).
          Teorie datują powstanie pierwszego grodu w tym miejscu na wczesne
          średniowiecze. Zamek w XIV i XV w. był siedzibą szlachty władającej
          państewkiem feudalnym obejmującym obszar całej Doliny Górnej Białej
          Lądeckiej i jej dopływów. Pomyślne trwanie państewka trwało półtora
          wieku. Okres wojen husyckich spustoszył okolicę i sam zamek. W marcu
          1428 r. dokonano najazdu: zamek spalono wówczas po raz pierwszy by
          dokończyć zniszczeń trzy lata później. Opuszczony, na wpół zrujnowany
          zamek był do 1513 r. siedliskiem rabusiów, dopóki mieszczanie lądeccy
          nie przegonili ich stamtąd równając z ziemią zamek ostatecznie.
        </InfoSection>

        <InfoSection
          image={solidarnosc}
          imageToLeft={true}
          header="Solidarność Polsko-Czechosłowacka"
          source="http://naszesudety.pl/szlak-kurierow-solidarnosci-w-gorach-zlotych.html"
        >
          W drugiej połowie lat 80-tych ubiegłego wieku działania kurierskie
          Solidarności Polsko-Czechosłowackiej zostały wyprowadzone z
          symbolicznego i tradycyjnego miejsca spotkań na Drodze Przyjaźni w
          Karkonoszach. Nasz wybór padł wówczas na Sudety Wschodnie i ich
          zalesione grzbiety. Na tych terenach łatwiej było zachować
          anonimowość, a inwigilacja ze strony służb bezpieczeństwa i wojsk
          ochrony granic nie była tak prosta, jak na wyeksponowanych i
          pozbawionych osłony lasów szlakach turystycznych głównego grzbietu
          Karkonoszy.
        </InfoSection>

        <InfoSection
          image={przelecz}
          imageToLeft={false}
          header="Przełęcz Trzech Granic"
          source="https://pl.wikipedia.org/wiki/Prze%C5%82%C4%99cz_u_Trzech_Granic"
        >
          Przełęcz ta jest miejscem styku historycznych granic trzech krain:
          Śląska, Moraw i ziemi kłodzkiej. Warto podkreślić, że Ziemia Kłodzka
          ani historycznie ani geograficznie nie należy do (Dolnego) Śląska i
          zajmuje teren dużo większy, jak sama Kotlina Kłodzka.
        </InfoSection>

        <InfoSection
          image={miedzylesie}
          imageAlt="Autorstwa Jacek Halicki - Praca własna, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=69173382"
          imageToLeft={true}
          header="Pałac w Międzylesiu"
          source="https://pl.wikipedia.org/wiki/Zamek_w_Mi%C4%99dzylesiu"
        >
          Kompleks zamkowo-pałacowy składający się z trzech skrzydeł:
          średniowieczno-renesansowego zamku oraz dwóch skrzydeł pałacowych
          utrzymanych w stylu barokowym. Pierwotny zamek wzniesiono tu na
          miejscu wcześniejszego grodu w 1370. Został zniszczony w czasie wojen
          husyckich. W latach 1580–1590 rodzina Tschirnhausów na miejscu zamku
          wzniosła renesansowy dwór, być może przez wykorzystanie fragmentów
          średniowiecznych, a na pewno przez dołączenie częściowo zachowanej
          wieży pierwotnego zamku
        </InfoSection>

        <InfoSection
          image={autostrada}
          imageAlt="Autorstwa Jacek Halicki - Praca własna, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=61771051"
          imageToLeft={false}
          header="Autostrada Sudecka"
          source="https://pl.wikipedia.org/wiki/Droga_wojew%C3%B3dzka_nr_389"
        >
          Autostradę Sudecką zbudowano jako element Drogi Sudeckiej
          (Sudetenstraße) – szosy turystycznej poprowadzonej wzdłuż całych
          Sudetów. Droga miała też pełnić funkcje wojskowe, o czym świadczą
          ruiny obiektów strategiczno-obronnych (fortyfikacje i schrony)
          wybudowanych w pobliżu drogi w rejonie Przełęczy nad Porębą. Wiąże się
          z tym nieoficjalna nazwa drogi: "Autostrada Göringa", ponieważ w
          latach 1942-44 przedsięwzięcie nadzorował Marszałek Rzeszy Hermann
          Göring.
        </InfoSection>

        <InfoSection
          image={chopin}
          imageAlt=""
          imageToLeft={true}
          header="Festiwal Chopinowski w Dusznikach-Zdroju"
          source="https://pl.wikipedia.org/wiki/Mi%C4%99dzynarodowy_Festiwal_Chopinowski_w_Dusznikach-Zdroju"
        >
          Najstarszy na świecie nieprzerwanie działającym festiwal pianistycznym
          i zarazem najstarszy polskim festiwal muzyczny. Pierwszy festiwal
          odbył się 25 i 26 sierpnia 1946 dla uczczenia 120. rocznicy występów
          Chopina w Dusznikach. Duszniki wybrano z racji tego, iż w sierpniu
          1826 16-letni Fryderyk Chopin wraz z matką oraz siostrami (Ludwiką i
          Emilią) przybył tutaj w celu kuracji w miejscowym zdroju.
        </InfoSection>

        <InfoSection
          image={wiadukt}
          imageAlt="Autorstwa Jacek Halicki - Praca własna, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=71673402"
          imageToLeft={false}
          header="Wiadukt Kolejowy w Lewinie Kłodzkim"
          source="https://pl.wikipedia.org/wiki/Wiadukt_kolejowy_w_Lewinie_K%C5%82odzkim"
        >
          Wiadukt kolejowy nad doliną Klikawy (Bystrej) i drogą krajową nr 8
          wybudowany przez włoskich inżynierów w latach 1903−1905. Efektowny,
          wieloprzęsłowy wiadukt wykonany z kamienia ma 27 m wysokości i 120 m
          długości.
        </InfoSection>

        <InfoSection
          image={naroznik}
          imageAlt="Autorstwa 1089hruskapetr, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=52419745"
          imageToLeft={true}
          header="Narożnik - tragedia w Górach Stołowych"
          source="https://interwencja.polsatnews.pl/reportaz/2022-06-27/zabojstwo-w-kudowie-powiazane-ze-zbrodnia-w-gorach-stolowych-nowy-trop/"
        >
          17 sierpnia 1997 para studentów wrocławskiej Akademii Rolniczej: Anna
          Kembrowska i Robert Odżga wyruszyli z Dusznik w góry, kierując się
          niebieskim szlakiem do Karłowa. Do Karłowa nigdy nie dotarli , ich
          ciała zostały znalezione dziesięć dni później przez ratowników. Przez
          25 lat nie udało się złapać sprawców, jednak w pierwszej połowie 2022
          roku przy okazji innego morderstwa zostały odnalezione mocne poszlaki
          w sprawie Anny i Roberta. Śledztwo póki co jest utajnione.
        </InfoSection>

        <InfoSection
          image={karol}
          imageAlt="By Jacek Halicki - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=40262123"
          imageToLeft={false}
          header="Fort Karola"
          source="https://pl.wikipedia.org/wiki/Fort_Karola"
        >
          Pozostałości fortu na Górze Ptak (841 m n.p.m.) koło Lisiej Przełęczy.
          Fort wybudowano w 1790 r., z rozkazu króla Prus Fryderyka Wilhelma II
          jako niewielką strażnicę na granicy Prus i Austrii. Przy wznoszeniu
          fortu wykorzystano znajdujące się na miejscu piaskowcowe skały, które
          włączono również w system obronny. W XIX wieku fort został opuszczony
          i zaczął popadać w ruinę.
        </InfoSection>

        <InfoSection
          image={srebrna}
          imageAlt="Srebrna Góra"
          imageToLeft={true}
          header="Twierdza Srebrnogórska"
          source="https://pl.wikipedia.org/wiki/Twierdza_srebrnog%C3%B3rska"
        >
          Twierdzę srebrnogórską zbudowano w XVIII w. Twierdza miała
          zabezpieczyć militarnie Śląsk zdobyty przez Prusy w 1740 roku. Pod
          budowę fortyfikacji wybrano dwa górujące nad Przełęczą Srebrną (586 m
          n.p.m.) wzniesienia: Forteczną (Warowną) Górę (686 m n.p.m.) oraz
          Ostróg (627 m n.p.m.). Twierdza składa się z sześciu fortów. Budowa
          całego zespołu trwała 12 lat. Jedynym sprawdzianem dla obronności
          fortyfikacji było oblężenie przez wojska napoleońskie podczas wojny
          Prus z Francją (1806–1807). W 1860 roku wydano rozkaz likwidacji
          przestarzałej już twierdzy. Ostatni żołnierze opuścili ją w 1867 roku;
          przez kilka następnych lat fortyfikacje służyły jako poligon
          doświadczalny
        </InfoSection>

        <InfoSection
          image={riese}
          imageAlt=""
          imageToLeft={false}
          header="Projekt Riese"
          source="https://pl.wikipedia.org/wiki/Riese"
        >
          Wobec nasilających się alianckich nalotów bombowych w 1943
          nazistowskie Niemcy przeniosły dużą część swej strategicznej produkcji
          zbrojeniowej w – uważany za bezpieczny – rejon Sudetów. Mniej więcej
          wówczas powstał projekt utworzenia nowej kwatery głównej Adolfa
          Hitlera na zamku Książ oraz w potężnych bunkrach i budowlach
          podziemnych wydrążonych w Górach Sowich. Prace zostały wykonane tylko
          w części. Przed wkroczeniem Armii Czerwonej wiele podziemnych
          konstrukcji zostało zniszczonych, a przynajmniej tunele do nich
          prowadzące zostały wysadzone.
        </InfoSection>
      </Box>
    </>
  );
};

export default Monuments;
