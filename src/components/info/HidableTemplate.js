import { Box, Typography, Button } from "@mui/material";

const HidableTemplate = ({ children, visible, setVisible, header}) => {
  return (
    <Box sx={{ backgroundColor: "teal.lighter", p: 1, m: 1 }}>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "2rem", flex: 10 }}>
          {header}
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "secondary.darker", height: "80%" }}
          onClick={() => setVisible(!visible)}
        >
          {visible ? "Ukryj" : "Pokaż"}
        </Button>
      </Box>
      {children}
    </Box>
  );
};

export default HidableTemplate;
