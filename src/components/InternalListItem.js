import { ListItem, ListItemAvatar, Avatar, ListItemText, Link } from "@mui/material";

const InternalListItem = ({
  icon,
  avatar,
  primaryText,
  secondaryText,
  url,
}) => {
  return (
    <ListItem>
      <ListItemAvatar>
        {icon && <Avatar sx={{ bgcolor: "primary.darker" }}>{icon}</Avatar>}
        {avatar && (
          <Avatar
            src={avatar}
            sx={(theme) => ({
              width: 56,
              height: 56,
              mr: 2,
              [theme.breakpoints.down("md")]: { width: 32, height: 32 },
            })}
          />
        )}
      </ListItemAvatar>
      {!url && (
        <ListItemText
          primaryTypographyProps={{ fontSize: "1.2rem" }}
          secondaryTypographyProps={{ fontSize: "1rem" }}
          primary={primaryText}
          secondary={secondaryText}
        />
      )}

      {url && (
        <Link href={url} target="_blank" color='primary.darker'>
          <ListItemText
            primaryTypographyProps={{ fontSize: "1.2rem" }}
            secondaryTypographyProps={{ fontSize: "1rem" }}
            primary={primaryText}
            secondary={secondaryText}
          />
        </Link>
      )}
    </ListItem>
  );
};

export default InternalListItem;
