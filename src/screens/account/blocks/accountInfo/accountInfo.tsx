import { ImageAssets } from "@assets";
import { CustomImage } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
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
          padding: "12px 0",
          cursor: "pointer",
        }}
        onClick={() => onClick?.()}
      >
        <div style={{ flex: 1, flexDirection: "column" }}>
          <Typography styles={{ fontSize: "14px", fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography
            styles={{ fontSize: "14px", fontWeight: 600, color: "#4D4D4D" }}
          >
            {content}
          </Typography>
        </div>
        <CustomImage
          src={ImageAssets.back}
          alt={"Arrow pointing to the right"}
          containerStyles={{
            transform: "scaleX(-1)",
            width: "14px",
            height: "14px",
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
        styles={{ fontSize: "16px", fontWeight: 600, margin: "24px auto 0 0" }}
      >
        {"Account information"}
      </Typography>
      {getAccountEntry("Name", username, onClickName)}
      {getAccountEntry("Email", email, onClickEmail)}
      {getAccountEntry("Password", "••••••••••••••••", onClickPassword)}
    </div>
  );
};
