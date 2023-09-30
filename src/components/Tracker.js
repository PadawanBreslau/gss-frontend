import { Box } from "@mui/material";
import poltrax from "../images/poltrax.png";


const Tracker = () => {
  return (
    <Box>
      <Box>
        <h2>Trackery na trasę</h2>
        <p>Dla każdego chętnego na GSS 2.0 (czy to całość czy fragment) oferujemy bezpłatnie tracker z Poltraxa. Nie jest wymagana
        żadna opłata czy kaucja, można też zdecydować, czy chce się być na ogólnodostępnej mapie, czy raczej prywatnej dla siebie 
        samego.</p>

        <p>System nie jest do końca przystosowany co prawda do takiego zastosowania, więc na przykład wyniki tam pokazane nie są wiarygodne</p>

        <p>Tracker ma wymiary 3x4x8cm, waży około 100 gramów, ładowany jest standardowym wejsciem USB-C. Można ustalić różny czas raportowania
        (czym częściej, tym częściej też ładować trzeba). Nie wymaga własnej konfiguracji, jedynie trzeba pamiętać by włączać, wyłączać i ładować.</p>
      </Box>
      <Box>
        <h2>Wysyłka i zwroty</h2>

        <p>
          W celu wysyłki najlepiej zgłosić się przynajmniej tydzień wcześniej i warto przypominać. Trzeba podać swoje dane do odbioru, oczywiście :)
          W sezonie będziemy stosowali system wymian - tj. uczestnik co już skończył nie odsyła do mnie, ale czeka na kolejnego chętnego - i wysyła do niego bez
          mojego pośredniczenia. Zdecydowanie preferuję wysyłanie paczkomatem - póki co inPost nas nie zawodził i jest szybki w dostarczaniu.

          Pod koniec sezonu zaś wysyłamy do biura na dane
            <Box>
            Michał Piórkowski
            604 47 33 12 / michal@poltrax.live
            Paczkomat WAW192M (Warszawa, Gwiaździsta 13)
            </Box>  
        </p>

      </Box>

      <Box component="img" className="moi" src={poltrax} sx={{ width: "30%" }} />
    </Box>
  );
};

export default Tracker;
