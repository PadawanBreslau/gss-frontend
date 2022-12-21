import { Box, Typography, Link } from "@mui/material";

const Article = ({ image, url, title }) => {
  return (
    <Box sx={{ textAlign: "center", pt: 3, backgroundColor: "teal.lighter", width: "50%" }}>
      <Typography variant="h5" sx={{fontWeight: 800, backgroundColor: 'primary.main'}}>{title}</Typography>
      <Link href={url} target="_blank">
        <Box
          component="img"
          className="article"
          sx={{
            width: "82%",
            mb: 1,
          }}
          src={image}
        />
      </Link>
    </Box>
  );
};

export default Article;
