import { NoEncryption } from "@mui/icons-material";
import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const PanelBox = ({ title, image, url }) => {
  return (
    <Box
      sx={(theme) =>({
        display: "flex",
        flexDirection: "column",
        width: "50%",
        textAlign: "center",
        mb: 1,
        [theme.breakpoints.down("md")]: {
          width: "100%",
          mt: 1
        }
      })}
    >
      <Link component={RouterLink} to={url} sx={{textDecoration: 'none'}}>
        <Typography
          variant="h3"
          sx={{
            color: "primary.darker",
            mb: -1,
            fontWeight: 800,
            textTransform: "uppercase",
            fontFamily: '',

          }}
        >
          {title}
        </Typography>
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
