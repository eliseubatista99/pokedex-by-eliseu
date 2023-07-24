import { ImageAssets } from "@assets";
import { CustomImage, Typography } from "@components";
import { useAccountInfoHelper } from "./accountInfo.hook";

export const AccountInfo = () => {
  const { username, email, onClickName, onClickEmail, onClickPassword } =
    useAccountInfoHelper();

  const getAccountEntry = (
    title: string,
    content: string | null | undefined,
    onClick?: () => void
  ) => {
    return (
      <div
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          padding: "9px 0",
          cursor: "pointer",
        }}
        onClick={() => onClick?.()}
      >
        <div style={{ flex: 1, flexDirection: "column" }}>
          <Typography styles={{ fontSize: "10.5px", fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography
            styles={{ fontSize: "10.5px", fontWeight: 600, color: "#4D4D4D" }}
          >
            {content}
          </Typography>
        </div>
        <CustomImage
          src={ImageAssets.back}
          alt={"Arrow pointing to the right"}
          containerStyles={{
            transform: "scaleX(-1)",
            width: "10.5px",
            height: "10.5px",
          }}
        />
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        styles={{ fontSize: "12px", fontWeight: 600, margin: "18px auto 0 0" }}
      >
        {"Account information"}
      </Typography>
      {getAccountEntry("Name", username, onClickName)}
      {getAccountEntry("Email", email, onClickEmail)}
      {getAccountEntry("Password", "••••••••••••••••", onClickPassword)}
    </div>
  );
};
