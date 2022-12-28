import Breadcrumb from "./Breadcrumb";
import InfoSection from "./InfoSection";
import InfoTemplate from "./InfoTemplate";

import bardzkie from "../../images/pasma/bardzkie.jpg";
import zlote from "../../images/pasma/zlote.jpg";
import snieznik from "../../images/pasma/snieznik.jpg";
import bystrzyckie from "../../images/pasma/bystrzyckie.jpg";
import lewinskie from "../../images/pasma/lewinskie.jpg";
import stolowe from "../../images/pasma/stolowe.jpg";
import scinawki from "../../images/pasma/scinawki.jpg";
import sowie from "../../images/pasma/sowie.jpg";
import kamienne from "../../images/pasma/kamienne.jpg";
import lysocina from "../../images/pasma/lysocina.jpg";
import rudawy from "../../images/pasma/rudawy.jpg";
import karkonosze from "../../images/pasma/karkonosze.jpg";
import kotlina from "../../images/pasma/kotlina.jpg";
import izery from "../../images/pasma/izery.jpg";

const RouteDesc = () => {
  return (
    <>
      <Breadcrumb parent="Trasa" parentUrl="/trail" name="Opis Trasy" />
      <InfoTemplate>
        To nie jest dokładny opis trasy. Już teraz są filmy i relacje, musiałbym
        pisać książkę, by dokładnie opisać każdy fragment, a i tak multimedia
        lepiej to wszystko pokażą. Nie mówie, że w końcu jej nie napiszę, ale
        może za dziesięć lat, jak szlak stanie się bardzo znany. :)
      </InfoTemplate>
      <InfoSection
        image={bardzkie}
        imageToLeft={true}
        header="Góry Bardzkie"
        source=""
      >
        Góry Bardzkie robimy krótko i na dwa podejścia. Na początku męczące
        podejście drogą krzyżową na Kalwarię, później zaś drugie dłuższe
        podejście czeka nas przez Szeroką i Kłodzką Górą. Po wszystkim czeka nas
        strome zejście na Przełęcz Kłodzką. Króki odcinek, około 12km.
      </InfoSection>
      <InfoSection
        image={zlote}
        imageToLeft={false}
        header="Góry Złote i Bialskie"
        source=""
      >
        Zaczynamy od dłuższego i bardzo łagodnego podejścia na Ptasznik, później
        zaś długie i łagodne zejście do Złotego Stoku. Za miastem wchodzimy w
        główne partie północnych Gór Złotych, na Jawornik, później na Borówkową.
        Stamtąd długa trasą granicą, o solidnych podejściach i zejściach, aż
        pierwszy raz wchodzimy na wysokość ponad tysiąca metrów by wejść na
        Smrek po czeskiej stronie granicy. Stamtad jeszcze kilka kilometrów
        częsciowo przez Czechy i opuszczamy pasmo na Przełęczy Płoszczyna.
      </InfoSection>
      <InfoSection
        image={snieznik}
        imageToLeft={true}
        header="Masyw Śnieżnika"
        source=""
      >
        Trasa w Masywie Śnieżnika to w zasadzie jedno całkiem długie i miejscami
        bardzo strome wejście. A potem bardzo, bardzo długie zejście do
        Międzylesia.
      </InfoSection>
      <InfoSection
        image={bystrzyckie}
        imageToLeft={false}
        header="Góry Bystrzyckie"
        source=""
      >
        Pasmo, w którym spędzicie najwięcej kilometrów. Nie spodziewałeś się
        tego, prawda? Nie będzie tu mocnych podejść, ale raczej łagodne
        podejścia i zejścia w sielankowych klimatach. Pamietaj, że po drodze w
        zasadzie jest tylko jedno schronisko i nic poza tym.
      </InfoSection>
      <InfoSection
        image={lewinskie}
        imageToLeft={true}
        header="Góry Orlickie i Wzgórza Lewińskie"
        source=""
      >
        Mały fragment, gdzie przechodzimy ledwo zahaczając o Góry Orlickie,
        potem schodzimy do Czech, by poprzez Wzgórza Lewińskie zmierzać w
        kierunku Gór Stołowych.
      </InfoSection>
      <InfoSection
        image={stolowe}
        imageToLeft={false}
        header="Góry Stołowe"
        source=""
      >
        W Górach Stołowych też spędzimy szmat czasu, ale głównie dlatego, że
        będziemy się kręcić. Nie będzie długich i ciężkich podejść, ale
        miejscami może być wymagająco. Ale widoki na setki różnych form skalnych
        powinno wam to wynagrodzić. Wisienką na torcie jest oczywiście labirynt
        na szczycie Szczelińca.
      </InfoSection>
      <InfoSection
        image={scinawki}
        imageToLeft={true}
        header="Obniżenie Ścinawki"
        source=""
      >
        Trzeba jakoś je przejść, dwadzieście parę kilometrów po mniej więcej
        równym terenie, tu i ówdzie trochę asfaltu. Potem na chwilkę zahaczamy
        znów o Góry Bardzkie, gdzie czeka nas dość łagodne podejście. Co ciekawe
        będziemy tylko jakieś 12km od startu trasy.
      </InfoSection>
      <InfoSection
        image={sowie}
        imageToLeft={false}
        header="Góry Sowie"
        source=""
      >
        Tutaj nie ma żadnej filozofii. Idziemy granią, więc czasem będą krótkie
        lecz intensywne podejścia, ale ogólnie trasa mało wymagająca.
      </InfoSection>
      <InfoSection
        image={kamienne}
        imageToLeft={true}
        header="Wzgórza Włodzickie, Góry Kamienne i Zawory"
        source=""
      >
        O ile poprzedni fragment był raczej dość monotonny, tutaj będzie
        ciekawie. Najpierw trochę kluczenia lasami i łąkami, zahaczając o kilka
        wiosek, później podejście na Włodzicką Górę będzie preludium dla
        wyzwania które was czeka w Górach Kamiennych. Jak tylko dojdziecie do
        pasma granicznego, to czeka Was 25 kilometrów bardzo ciężkich podejść i
        zejść - i to raczej bez chwili wytchnienia. Dopiero za Mieroszowem trasa
        zrobi się znów mało wymagająca.
      </InfoSection>
      <InfoSection
        image={lysocina}
        imageToLeft={false}
        header="Karkonosze - Grzbiet Lasocki"
        source=""
      >
        W tym odcinku najtrudniejsze będzie znalezienie przejścia przez Bramę
        Lubawską. Szlak tam jest zupełnie nieuczęszczany, do tego budowa trasy
        S3 po czeskiej stronie moze powodować zmiany w przyszłości. Później mamy
        zaś dość długie i jednostajne podejście w ten najmniej znany fragment
        Karkonoszy.
      </InfoSection>
      <InfoTemplate>
        Uwaga na czasowo zamykane szlaki z uwagi na okresy lęgowe dzikich
        zwierząt. Jak takie coś wam się przydarzy, improwizujcie :)
      </InfoTemplate>
      <InfoSection
        image={rudawy}
        imageToLeft={true}
        header="Rudawy Janowickie"
        source=""
      >
        Początkowo trasa jak trasa, szeroka ścieżka leśna aż pod sam Skalnik.
        Później robi się ciekawiej, podejście na Ostrą Mała i zejście ze
        Skalnika do najprzyjemniejszych nie należą, podobnie zejście z Wołka.
        Później zaś dużo skał i miejscami trudnych fragmentów.
      </InfoSection>
      <InfoSection
        image={kotlina}
        imageToLeft={false}
        header="Kotlina Jeleniogórska"
        source=""
      >
        Odpoczynek po Rudawach. Bardzo przyjemne trasy bez wielu podejść. W
        nagrodę piękne widoki dookoła. Największym wyzwaniem jest podejście z
        Sosnówki w Karkonosze.
      </InfoSection>
      <InfoSection
        image={karkonosze}
        imageToLeft={true}
        header="Karkonosze"
        source=""
      >
        No Karkonosze, co tu wiele dodawać. Będziecie dużo podchodzić i sporo
        schodzic, szczególnie jak trasę puściłem drogą nad reglami, a nie
        grzebietem. Ale jeśli będzie pogoda to nie bedzie wam to przeszkadzało.
      </InfoSection>
      <InfoTemplate>
        Ponownie: Uwaga na czasowo zamykane szlaki z uwagi na okresy lęgowe
        dzikich zwierząt. Jak takie coś wam się przydarzy, improwizujcie :)
      </InfoTemplate>
      <InfoSection
        image={izery}
        imageToLeft={false}
        header="Góry Izerskie"
        source=""
      >
        Pożegnanie ze szlakiem. W Izerach podejście zauważycie jedynie na
        ostatni szczyt - Smrk. Później zaś długie zejście na mostek w Czerniawie
        Zdroju.
      </InfoSection>
    </>
  );
};

export default RouteDesc;
