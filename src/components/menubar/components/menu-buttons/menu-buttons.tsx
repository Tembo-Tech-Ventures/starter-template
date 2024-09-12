import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";

export default function MenuButton({
  link,
  text,
  color,
  icon,
}: {
  link: string;
  text: string;
  color: string;
  icon: string;
}) {
  return (
    <ListItem>
      <ListItemButton
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          transition: "0.3s ease-in-out",
          border: "1px solid transparent",
          borderRadius: 3,
          ":hover": {
            transform: "translateY(-2px) scale(1.1)",
            border: `1px solid ${color}`,
          },
        }}
        href={link}
      >
        <Stack sx={{ display: "flex", position: "relative", width: "30%" }}>
          <ListItemIcon>
            <span className="material-symbols-outlined">{icon}</span>
          </ListItemIcon>
        </Stack>
        <Stack sx={{ display: "flex", position: "relative", width: "70%" }}>
          <Typography variant="h6">{text}</Typography>
        </Stack>
      </ListItemButton>
    </ListItem>
  );
}
