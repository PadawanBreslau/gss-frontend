import { Box } from "@mui/material";
import { Info } from "@mui/icons-material";

const InfoTemplate = ({ children }) => {
  return (
    <Box
      sx={{ m: 1, p: 1, backgroundColor: "teal.lighter", fontSize: "1.2rem" }}
    >
      <Info sx={{ width: 50, fontSize: "1.5rem", color: "primary.dark" }} />
      {children}
    </Box>
  );
};

export default InfoTemplate;
