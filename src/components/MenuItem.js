import { Link as RouterLink } from "react-router-dom";
import { Button, Link } from "@mui/material";

const MenuItem = ({ url, label }) => {
  return (
    <Button variant="contained" sx={{ mr: 1 }}>
      <Link style={{ color: "white" }} component={RouterLink} to={url}>
        {label}
      </Link>
    </Button>
  );
};

export default MenuItem;
