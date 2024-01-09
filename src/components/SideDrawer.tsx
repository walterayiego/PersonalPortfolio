import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import DrawerContent from "./DrawerContent";

export default function SideDrawer({ children }: any) {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <React.Fragment>
      <div onClick={toggleDrawer(true)}>{children}</div>
      <SwipeableDrawer
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <DrawerContent toggleDrawer={toggleDrawer} />
      </SwipeableDrawer>
    </React.Fragment>
  );
}
