import { Box } from "@mui/material";
import { Info } from "@mui/icons-material";

const InfoTemplate = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        m: 1,
        p: 1,
        backgroundColor: "teal.lighter",
        fontSize: "1rem",
        [theme.breakpoints.down("md")]: {
          fontSize: ".85rem",
        },
      })}
    >
      <Info
        sx={{
          width: 50,
          fontSize: "1rem",
          color: "primary.dark",
        }}
      />
      {children}
    </Box>
  );
};

export default InfoTemplate;
