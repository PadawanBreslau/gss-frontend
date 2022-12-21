import { Box, Typography, Link } from "@mui/material";
import {
  Accomodation50,
  Accomodation100,
  Accomodation150,
  Accomodation200,
  Accomodation250,
  Accomodation300,
  Accomodation350,
  Accomodation400,
  Accomodation450,
  Accomodation500,
  Accomodation550,
} from "./accomodations/index";
import InfoTemplate from "./InfoTemplate";
import Breadcrumb from "./Breadcrumb";

const Accomodation = () => {
  return (
    <Box>
      <Breadcrumb
        parent="Informacje praktyczne"
        parentUrl="/support"
        name="Noclegi"
      />
      <InfoTemplate>
        <Typography variant="span">
          W przypadku miejscowości, gdzie dostępne jest wiele opcji noclegowych
          zostawiam wybór na Waszą rękę - nie chcę niczego proponować. W
          przypadku miejsc, gdzie nie ma alternatyw podaję konkretną nazwę i jak
          można daje link do strony noclegu.
        </Typography>
      </InfoTemplate>
      <Accomodation50 />
      <Accomodation100 />
      <Accomodation150 />
      <Accomodation200 />
      <Accomodation250 />
      <Accomodation300 />
      <Accomodation350 />
      <Accomodation400 />
      <Accomodation450 />
      <Accomodation500 />
      <Accomodation550 />
      <InfoTemplate>
        <Typography variant="span">
          W Sudetach w odróżnieniu od Beskidów niemal cały czas jest się w odległości mniejszej jak parę kilometrów od jakiejś miejscowości.
          Choc GSS 2.0 stara się unikać przechodzenia przez cywilizację, niemal w każdym momencie można szybko do niej wrócić. Najdłuższym fragmentem
          , że rzeczywiście nie ma przez dłuższy fragment absolutnie żadnej opcji noclegowej to pierwsze 20km trasy, gdzie raczej nikt tego noclegu nie bedzie
          potrzebować
        </Typography>
      </InfoTemplate>
      <InfoTemplate>
        <Typography variant="p">
          Jeśli myślisz, że powinienem coś dodać/usunąć/uzupełnić - napisz do mnie, najlepiej na <Link href="https://www.facebook.com/gssreloaded" sx={{color: 'secondary.darker', fontWeight: 800}}>Facebooku</Link>
        </Typography>
      </InfoTemplate>

      <InfoTemplate>
        <Typography variant="p">
          Jeśli jesteś właścicielem hotelu/pensjonatu/agroturystyki w miejscu gdzie jest dużo opcji noclegowych i chcesz by Twój obiekt był wyróżniony - napisz też.
          Mogę wyróżnić pod warunkiem zniżek dla ludzi idących GSS 2.0 :)
        </Typography>
      </InfoTemplate>
    </Box>
  );
};

export default Accomodation;
