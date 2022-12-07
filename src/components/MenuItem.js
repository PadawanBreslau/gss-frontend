import { Link as RouterLink } from "react-router-dom";
import { Button, Link, Typography} from "@mui/material";

const MenuItem = ({ url, label }) => {
  return (
    <Button variant="contained" sx={{ mr: 1, p: .75 }}>
      <Link component={RouterLink} to={url}>
        <Typography variant="h5" color="primary.lighter"  >{label}</Typography>
      </Link>
    </Button>
  );
};

export default MenuItem;