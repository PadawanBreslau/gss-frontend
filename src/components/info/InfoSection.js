import { Box, Typography, Link } from "@mui/material";

const InfoSection = ({
  children,
  image,
  imageAlt,
  imageUrl,
  imageToLeft,
  header,
  source,
}) => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <>
        {imageToLeft && (
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Box
              component="img"
              alt={imageAlt}
              className="histImg"
              sx={{
                width: "100%",
                height: "100%",
              }}
              src={image}
            />
            {imageAlt && (
              <Box
                sx={{
                  backgroundColor: "secondary.main",
                  mt: -1,
                  height: 12,
                  fontSize: ".6rem",
                }}
              >
                <Typography variant="p" sx={{ p: 1 }}>
                  {imageAlt}
                </Typography>
                <Link
                  href={imageUrl}
                  target="_blank"
                  sx={{
                    ml: 2,
                    color: "primary.dark",
                    fontWeight: 600,
                    float: "right",
                  }}
                >
                  Źródło
                </Link>
              </Box>
            )}
          </Box>
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
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Box
              component="img"
              alt={imageAlt}
              className="histImg"
              sx={{
                width: "100%",
                height: "100%",
              }}
              src={image}
            />
            {imageAlt && (
              <Box
                sx={{
                  backgroundColor: "secondary.main",
                  mt: -1,
                  height: 12,
                  fontSize: ".6rem",
                }}
              >
                <Typography variant="p" sx={{ p: 1 }}>
                  {imageAlt}
                </Typography>
                <Link
                  href={imageUrl}
                  target="_blank"
                  sx={{
                    ml: 2,
                    color: "primary.dark",
                    fontWeight: 600,
                    float: "right",
                  }}
                >
                  Źródło
                </Link>
              </Box>
            )}
          </Box>
        )}
      </>
    </Box>
  );
};

export default InfoSection;
