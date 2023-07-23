import { Typography } from "@components";
import { DrawerLogout } from "@drawers";
import { useLogoutHelper } from "./logout.hook";

export const Logout = () => {
  const {
    username,
    logoutDrawerVisible,
    onCloseLogoutDrawer,
    onClickOpenLogoutDrawer,
  } = useLogoutHelper();

  return (
    <>
      <div
        style={{
          width: "100%",
          flexDirection: "column",
          gap: "16px",
          marginTop: "auto",
          paddingTop: "24px",
        }}
      >
        <Typography styles={{ fontSize: "16px", fontWeight: 600 }}>
          {"Others"}
        </Typography>
        <div
          style={{
            width: "100%",
            flexDirection: "column",
            gap: "2px",
            cursor: "pointer",
          }}
          onClick={() => onClickOpenLogoutDrawer()}
        >
          <Typography
            styles={{ fontSize: "14px", fontWeight: 600, color: "#CD3131" }}
          >
            {"Logout"}
          </Typography>
          <Typography
            styles={{ fontSize: "14px", fontWeight: 400, color: "#4d4d4d" }}
          >
            {`You logged in as ${username}`}
          </Typography>
        </div>
      </div>
      <DrawerLogout
        isVisible={logoutDrawerVisible}
        onCloseDrawer={onCloseLogoutDrawer}
      />
    </>
  );
};
