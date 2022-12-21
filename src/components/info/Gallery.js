import { Typography } from "@mui/material";
import Breadcrumb from "./Breadcrumb";

const Gallery = () => {
  return (
    <>
      <Breadcrumb parent="Media" parentUrl="/relations" name="Galerie zdjęć" />
      <Typography variant="h2">Jak bedzie więcej zdjęć :)</Typography>
    </>
  );
};

export default Gallery;
