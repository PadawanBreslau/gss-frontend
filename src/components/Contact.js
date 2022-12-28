import { Box, Typography, Link } from "@mui/material";
import moi from "../images/moi.jpg";

const Contact = () => {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "left",
          fontSize: "1.2rem",
          width: "80%",
          ml: 3,
          mb: 5,
        }}
      >
        Wbrew temu, co wielu sądzi, nie jestem Mateuszem aka. Zielonym w
        Podróży. Nazywam się Staszek i prowadzę ten projekt w pełni
        hobbystycznie, łacząc zamiłowanie do dwóch rzeczy: Sudetów i szlaków
        długodystansowych. Projekt jest nieoficjalny, niepowiązany z żadnymi
        organizacjami turystycznymi, jest i zawsze będzie non-profit. Dla osób
        które ukończą przewidziane są odznaki, a jak ktoś chce zrobić sobie
        koszulkę czy cokolwiek innego z logo szlaku - chętnie udostępnie plik.
        Sam szlak jest już w ostatecznym kształcie, choć oczywiście poprawki tu
        i ówdzie mogą się zdarzyć, jeśli szlaki zmienią przebieg.
        <p>W razie jakichkolwiek pytań jestem otwarty na pytania i sugestie.</p>
      </Box>

      <Box component="img" className="moi" src={moi} sx={{width: '70%'}}/>
      <Box>
        <p>
          FB: <Link href="https://www.facebook.com/gssreloaded">GSS 2.0</Link>
        </p>
        <p>Email: staszek@poltrax.live</p>
      </Box>
    </Box>
  );
};

export default Contact;
