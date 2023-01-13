import { Shop } from "@mui/icons-material";
import { List } from "@mui/material";
import InternalListItem from "../../InternalListItem";

const Shops = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "teal.light", minHeight: "100px" }}>
      <InternalListItem
        icon={<Shop />}
        primaryText="Przełęcz Lądecka,  Sklep Panda (40km) "
        secondaryText="Po czeskiej stronie granicy, trzeba troche zejść"
      />
    </List>
  );
};

export default Shops;
