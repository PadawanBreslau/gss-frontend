import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const PanelBox = ({ title, image, url }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: '50%', textAlign: 'center', mb: 2 }}>
      <Link component={RouterLink} to={url}>
        <Typography variant="h4" sx={{color: 'secondary.darker', mb: -1, fontWeight: 800}}>{title}</Typography>
        <Box
          component="img"
          className="panel"
          sx={{
            width: "90%",
            height: "90%",
            mt: 1,
          }}
          src={image}
        />
      </Link>
    </Box>
  );
};

export default PanelBox;
