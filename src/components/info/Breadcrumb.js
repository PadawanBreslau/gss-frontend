import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


const Breadcrumb = ({ parent, parentUrl, name }) => {
  return (
    <Box sx={{ maxHeight: "1rem", mb: 2, ml: 1 }}>
      <Link
       component={RouterLink}
        to="/info"
        sx={(theme) => ({
          fontSize: "typography.fontSize",
          fontColor: "primary.dark",
          fontWeight: 500,
          textTransform: "uppercase",
          textDecoration: "none",
          [theme.breakpoints.down("md")]: {
            fontSize: ".7rem",
          },
        })}
      >
        Baza Wiedzy /
      </Link>
      {parent && (
        <Link
          component={RouterLink}
          to={parentUrl}
          sx={(theme) => ({
            fontSize: "1rem",
            fontColor: "primary.dark",
            fontWeight: 500,
            textTransform: "uppercase",
            textDecoration: "none",
            [theme.breakpoints.down("md")]: {
              fontSize: ".7rem",
            },
          })}
        >
          {" "}
          {parent} /
        </Link>
      )}
      <Link
       component={RouterLink}
        to="#"
        sx={(theme) => ({
          fontSize: "typography.fontSize",
          fontColor: "primary.dark",
          fontWeight: 500,
          textTransform: "uppercase",
          textDecoration: "none",
            [theme.breakpoints.down("md")]: {
              fontSize: ".7rem",
            },
        })}
      >
        {" "}
        {name}
      </Link>
    </Box>
  );
};

export default Breadcrumb;
