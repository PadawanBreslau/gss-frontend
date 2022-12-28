import { Box, Typography } from "@mui/material";

const TipTemplate = ({ children, header }) => {
  return (
    <Box
      sx={(theme) => ({
        width: "45%",
        p: 2,
        backgroundColor: "teal.main",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
          width: "90%",
        },
      })}
    >
      <Typography variant="h3">{header}</Typography>
      <Box>{children}</Box>
    </Box>
  );
};

export default TipTemplate;
