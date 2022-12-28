import { Box, Typography, Link } from "@mui/material";

const Breadcrumb = ({ parent, parentUrl, name }) => {
  return (
    <Box sx={{ maxHeight: "1rem", mb: 2, ml: 1 }}>
      <Link
        href="/info"
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
          href={parentUrl}
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
        href="#"
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
