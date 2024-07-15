import { Drawer, List, ListItem, Stack, Typography } from "@mui/material";
import "../../app/globalicons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faX } from "@fortawesome/free-solid-svg-icons";
import { PointBack, PointOut } from "../mousecontrols/mousecontrol";
import { Mice } from "../mice/mouse";
import { Controller } from "../mouse-movement-controls/mouse-movement-controls";
import { useState } from "react";

export function MenuBar() {
  const [open, setOpen] = useState(false);
  const decide = () => {
    setOpen(!open);
  };
  return (
    <Stack>
      <FontAwesomeIcon
        icon={faBars}
        style={{
          fontSize: 20,
          zIndex: 765,
          display: "flex",
          position: "absolute",
          top: "1%",
          left: "1%",
        }}
        id="bars"
        onMouseOver={PointOut}
        onMouseOut={PointBack}
        onClick={decide}
      />
      <Drawer
        open={open}
        onClose={decide}
        PaperProps={{ sx: { width: "200px" } }}
      >
        <span>
          <FontAwesomeIcon
            icon={faX}
            style={{
              fontSize: 15,
              display: "flex",
              position: "relative",
              float: "right",
              cursor: "pointer",
            }}
            onClick={decide}
          />
        </span>
        <List>
          <ListItem className="menuHolder">
            <FontAwesomeIcon icon={faCross} />
            <Typography variant="h5">Safety</Typography>
          </ListItem>
        </List>
      </Drawer>
    </Stack>
  );
}
