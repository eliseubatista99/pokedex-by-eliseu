import { CustomButton, Typography } from "@components";
import { BaseDrawer, type BaseDrawerProps } from "../_baseDrawer";
import { useLogoutDrawerHelper } from "./logout.hook";

export const DrawerLogout = (props: BaseDrawerProps) => {
  const { onCloseDrawer } = props;
  const { onClickLogout } = useLogoutDrawerHelper(props);

  return (
    <BaseDrawer {...props}>
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
        onClick={onCloseDrawer}
        styles={{
          margin: "10px auto 0 auto",
          height: "27.5px",
          maxWidth: "225px",
        }}
      />
    </BaseDrawer>
  );
};
