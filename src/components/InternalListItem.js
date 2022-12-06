import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

const InternalListItem = ({ icon, primaryText, secondaryText }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'primary.darker' }}>
           {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ fontSize: "1.5rem" }}
        secondaryTypographyProps={{ fontSize: "21px" }}
        primary={primaryText}
        secondary={secondaryText}
      />
    </ListItem>
  );
};

export default InternalListItem;
