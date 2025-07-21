import { CustomButton } from "@components";
import { Drawers } from "@constants";
import {
  Drawer,
  Typography,
  type DrawerProps,
} from "@eliseubatista99/react-scaffold-core";
import { useLogoutDrawerHelper } from "./logout.hook";

export const DrawerLogout = (props: Omit<DrawerProps, "id">) => {
  const { onCloseDrawer } = props;
  const { onClickLogout } = useLogoutDrawerHelper(props);

  return (
    <Drawer {...props} id={Drawers.logout}>
      <Typography
        styles={{
          color: "#4d4d4d",
          fontSize: "12px",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {"Are you sure you want to logout?"}
      </Typography>
      <CustomButton
        type="primary"
        text="Yes, logout"
        onClick={onClickLogout}
        styles={{
          margin: "18px auto 0 auto",
          height: "37.5px",
          maxWidth: "225px",
          border: "none",
          background: "#CD3131",
        }}
      />
      <CustomButton
        type="ghost"
        text="No, go back"
        onClick={() => onCloseDrawer?.()}
        styles={{
          margin: "10px auto 0 auto",
          height: "27.5px",
          maxWidth: "225px",
        }}
      />
    </Drawer>
  );
};
