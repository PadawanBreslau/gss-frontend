import { Box } from "@mui/material";

const YTFrame = ({ uuid, title }) => {
  return (
    <Box>
      <Box sx={{ mr: 0.66 }}>
        <iframe
          width="368"
          height="210"
          src={`https://www.youtube.com/embed/${uuid}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title ? title : "GSS 2.0"}
        />
      </Box>
    </Box>
  );
};

export default YTFrame;
