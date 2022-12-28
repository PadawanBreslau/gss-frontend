import { Box, Typography, Button } from "@mui/material";

const HidableTemplate = ({ children, visible, setVisible, header }) => {
  return (
    <Box sx={{ backgroundColor: "teal.lighter", p: 1, m: 1 }}>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Typography
          sx={(theme) => ({
            textAlign: "center",
            fontWeight: 600,
            fontSize: "2rem",
            flex: 10,
            [theme.breakpoints.down("md")]: {
              fontSize: "1.2rem",
            },
          })}
        >
          {header}
        </Typography>
        <Button
          variant="contained"
          sx={(theme) => ({
            backgroundColor: "secondary.darker",
            height: "100%",
            fontWeight: 600,
            [theme.breakpoints.down("md")]: {
              width: "100px",
              fontSize: '.8rem',
              mb: .5,
              
            },
          })}
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
