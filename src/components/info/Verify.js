import Breadcrumb from "./Breadcrumb";
import InfoTemplate from "./InfoTemplate";

const Verify = () => {
  return (
    <>
      <Breadcrumb parent="Trasa" parentUrl="/trail" name="Weryfikacja" />
      <InfoTemplate>
        Zasady weryfikacji są proste. Wyślij mi jakikolwiek dowód, że zrobiłeś
        trasę GSS 2.0 - może być lekko zmodyfikowana, może być we fragmentach,
        może być w formie plików z zegarka, zdjęć, filmików, wpisów na FB - czegokolwiek. Nie
        musi to być bardzo dokładna dokumentacja, ważne by wyglądało, że
        przeszedłeś całe Sudety :)
        <p>Żyjemy w czasach, że nie wierzę by ktoś szedł na dwa tygodnie w góry i nie zostawił sporego śladu cyfrowego :)</p>
      </InfoTemplate>
      <InfoTemplate>
        Możesz sobie na bieżąco modyfikować nieznacznie trasę. Chcesz zejść do
        Lądka i wrócić na szlak przez Ptasznik? Chcesz przejść przez Rudawiec,
        bo brakuje Ci go do Korony Gór Polski? Szerokiej drogi. Akceptuję
        każdą modyfikację o ile nie będą one nagminne i nie będą znacząco
        ułatwiały wyzwania.
      </InfoTemplate>
      <InfoTemplate>
        Wyjątkiem jest robienie tzw. FKT (jak nie wiesz co to oznacza, to znaczy
        że nie robisz :P). Wówczas proszę o zachowanie modyfikacji do
        niezbędnego minimum.
      </InfoTemplate>
    </>
  );
};

export default Verify;
