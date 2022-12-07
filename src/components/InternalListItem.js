import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

const InternalListItem = ({ icon, avatar, primaryText, secondaryText }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        {icon && <Avatar sx={{ bgcolor: "primary.darker" }}>{icon}</Avatar>}
        {avatar && (
          <Avatar
            src={avatar}
            sx={(theme) => ({ width: 56, height: 56, mr: 2, [theme.breakpoints.down("md")]: {width: 32, height: 32} })}
          />
        )}
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ fontSize: "1.2rem" }}
        secondaryTypographyProps={{ fontSize: ".9rem" }}
        primary={primaryText}
        secondary={secondaryText}
      />
    </ListItem>
  );
};

export default InternalListItem;
