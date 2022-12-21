import { Box, Typography, Link } from "@mui/material";

const InfoSection = ({
  children,
  image,
  imageAlt,
  imageToLeft,
  header,
  source,
}) => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <>
        {imageToLeft && (
          <Box
            component="img"
            alt={imageAlt}
            className="histImg"
            sx={{
              width: "50%",
              height: "100%",
            }}
            src={image}
          />
        )}
        <Box sx={{ width: "50%" }}>
          <Typography variant="h3" sx={{ textAlign: "center", mt: 7 }}>
            {header}
          </Typography>
          <Box sx={{ fontSize: "1rem", ml: 2, mr: 2 }}>
            <Typography variant="p">{children}</Typography>
            {source && (
              <Link href={source} target="_blank">
                <Typography
                  variant="h5"
                  sx={{ fontSize: ".8rem", fontWeight: 600, mt: 1 }}
                >
                  Źródło
                </Typography>
              </Link>
            )}
          </Box>
        </Box>
        {!imageToLeft && (
          <Box
            component="img"
            alt={imageAlt}
            className="histImg"
            sx={{
              width: "50%",
              height: "100%",
            }}
            src={image}
          />
        )}
      </>
    </Box>
  );
};

export default InfoSection;
