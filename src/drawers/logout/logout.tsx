import { CustomButton, Typography } from "@components";
import { BaseDrawer, BaseDrawerProps } from "../_baseDrawer";
import { useLogoutDrawerHelper } from "./logout.hook";

export const DrawerLogout = (props: BaseDrawerProps) => {
  const { onCloseDrawer } = props;
  const { onClickLogout } = useLogoutDrawerHelper(props);

  return (
    <BaseDrawer {...props}>
      <Typography
        styles={{
          color: "#4d4d4d",
          fontSize: "16px",
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
          margin: "24px auto 0 auto",
          height: "50px",
          maxWidth: "200px",
          background: "#CD3131",
        }}
      />
      <CustomButton
        type="ghost"
        text="No, go back"
        onClick={onCloseDrawer}
        styles={{
          margin: "24px auto 0 auto",
          height: "50px",
          maxWidth: "200px",
        }}
      />
    </BaseDrawer>
  );
};
