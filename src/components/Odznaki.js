import { Box } from "@mui/material";
import odznaki from "../images/odznaki.jpg";


const Odznaki = () => {
  return (
    <Box>
      <Box>
        <h2>Odznaki za ukończenie</h2>
        <p>Każdy kto ukończył GSS 2.0, niezależnie od czasu czy sposobu, może dostać odznakę za ukończenie. Za odznakę i przesyłkę nie 
          pobieramy żadnej opłaty, jeśli chcecie coś od siebie dać, to wpłaćcie pieniądze na zbiórkę na <a href="https://www.sercedziecka.org.pl/">Serce Dziecka</a> 
        </p>

        <p>Odznaki są dostępne w trzech kolorach, jak widać na obrazku, przy czym żółty (złoty) jest zarezerwowany dla rekordzistów trasy i innych co się wyróżnili (tak, trochę uznaniowo).
           Żółtych jest bardzo mało, więc jak dostaniecie, to będziecie w elitarnym gronie. </p>

        <p>
          Odznaki wysyłam klasyczną pocztą, więc jeśli chcecie otrzymać, napiszcie do mnie jakkolwiek i podajcie adres oraz preferowany kolor.
          Czasem trzeba będzie trochę poczekać, ale nie ucieknie :)
        </p>
      </Box>
      <Box component="img" className="moi" src={odznaki} sx={{ width: "80%" }} />
    </Box>
  );
};

export default Odznaki;
