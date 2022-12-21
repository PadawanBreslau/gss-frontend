import { Box, Typography } from "@mui/material";
import YTFrame from "./YTFrame";
import Breadcrumb from "./Breadcrumb";

const Movies = () => {
  return (
    <Box>
      <Breadcrumb parent="Media" parentUrl="/relations" name="Filmy" />

      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Mateusz Stawarz - Zieloni w Podróży
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "left",
          mb: 2,
        }}
      >
        <YTFrame
          uuid="FfBXlxrrLG0"
          title="GSS 2.0. Zieloni w Podróży. Dzień 1"
        />
        <YTFrame
          uuid="X4azjMrU7yY"
          title="GSS 2.0. Zieloni w Podróży. Dzień 2"
        />
        <YTFrame
          uuid="r9sWdSSxW6s"
          title="GSS 2.0. Zieloni w Podróży. Dzień 3"
        />
        <YTFrame
          uuid="g_j_Mu6kiuU"
          title="GSS 2.0. Zieloni w Podróży. Dzień 4"
        />
        <YTFrame
          uuid="7RaSjVWBs08"
          title="GSS 2.0. Zieloni w Podróży. Dzień 5"
        />
        <YTFrame
          uuid="3NVbzdjqHRc"
          title="GSS 2.0. Zieloni w Podróży. Dzień 6"
        />
        <YTFrame
          uuid="03bdtezy87Q"
          title="GSS 2.0. Zieloni w Podróży. Dzień 7"
        />
        <YTFrame
          uuid="XG-EZf_m4hs"
          title="GSS 2.0. Zieloni w Podróży. Dzień 8"
        />
        <YTFrame
          uuid="zAQf5VJW3bU"
          title="GSS 2.0. Zieloni w Podróży. Dzień 9"
        />
        <YTFrame
          uuid="5CqcbgWI6UI"
          title="GSS 2.0. Zieloni w Podróży. Dzień 10"
        />
        <YTFrame
          uuid="NqWHGdswDQM"
          title="GSS 2.0. Zieloni w Podróży. Dzień 11"
        />
        <YTFrame
          uuid="bDVE_ZT0DfY"
          title="GSS 2.0. Zieloni w Podróży. Dzień 12"
        />
        <YTFrame
          uuid="NJ6oHYGowRM"
          title="GSS 2.0. Zieloni w Podróży. Dzień 13"
        />
        <YTFrame
          uuid="scdH-aRRArY"
          title="GSS 2.0. Zieloni w Podróży. Dzień 14"
        />
        <YTFrame
          uuid="rnr2JZbTvp0"
          title="GSS 2.0. Zieloni w Podróży. Dzień 15"
        />
        <YTFrame
          uuid="HCAFSXPlVAE"
          title="GSS 2.0. Zieloni w Podróży. Dzień 16"
        />
        <YTFrame
          uuid="GEDF33i0FTU"
          title="GSS 2.0. Zieloni w Podróży. Dzień 17-18"
        />
      </Box>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Wysoko i Nisko
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "left",
          mb: 2,
        }}
      >
        <YTFrame
          uuid="1sWrrI3ruwY"
          title="GSS 2.0. Wysoko i Nisko. Bardo - Lądek-Zdrój"
        />
      </Box>
    </Box>
  );
};

export default Movies;
