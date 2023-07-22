import { ImageAssets } from "@assets";
import { CustomImage, Typography } from "@components";
import { useAccountInfoHelper } from "./accountInfo.hook";

export const AccountInfo = () => {
  const { username, email } = useAccountInfoHelper();

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
        }}
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
            width: "12px",
            height: "12px",
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
      {getAccountEntry("Name", username)}
      {getAccountEntry("Email", email)}
      {getAccountEntry("Password", "••••••••••••••••")}
    </div>
  );
};
