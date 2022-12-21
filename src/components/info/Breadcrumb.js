import { Box, Typography, Link } from "@mui/material";

const Breadcrumb = ({ parent, parentUrl, name }) => {
  return (
    <Box sx={{ maxHeight: "1rem", mb: 2, ml: 1  }}>
      <Link
        href="/info"
        sx={{
          fontSize: "1.2rem",
          fontColor: "primary.dark",
          fontWeight: 500,
          textTransform: "uppercase",
        }}
      >
        Baza Wiedzy /
      </Link>
      {parent && (
        <Link
          href={parentUrl}
          sx={{
            fontSize: "1.2rem",
            fontColor: "primary.dark",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          {" "}
          {parent} /
        </Link>
      )}
      <Link
        href="#"
        sx={{
          fontSize: "1.2rem",
          fontColor: "primary.dark",
          fontWeight: 500,
          textTransform: "uppercase",
        }}
      >
        {" "}
        {name}
      </Link>
    </Box>
  );
};

export default Breadcrumb;
