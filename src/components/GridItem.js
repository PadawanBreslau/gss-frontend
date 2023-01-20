import { ImageListItem } from "@mui/material";

const GridItem = ({ counter, src, alt }) => {
  return (
    <>
      {[...Array(counter)].map((e, i) => (
        <ImageListItem key={i} sx={{border: '1px solid', backgroundColor: 'white'}}>
          <img src={src} srcSet={src} alt={alt} loading="lazy" />
        </ImageListItem>
      ))}
    </>
  );
};

export default GridItem;
