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
          gap: "12px",
          marginTop: "auto",
          paddingTop: "18px",
        }}
      >
        <Typography styles={{ fontSize: "12px", fontWeight: 600 }}>
          {"Others"}
        </Typography>
        <div
          style={{
            width: "100%",
            flexDirection: "column",
            gap: "1.5px",
            cursor: "pointer",
          }}
          onClick={() => onClickOpenLogoutDrawer()}
        >
          <Typography
            styles={{ fontSize: "10.5px", fontWeight: 600, color: "#CD3131" }}
          >
            {"Logout"}
          </Typography>
          <Typography
            styles={{ fontSize: "10.5px", fontWeight: 400, color: "#4d4d4d" }}
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
