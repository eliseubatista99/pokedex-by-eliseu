import { ImageAssets } from "@assets";
import { CustomButton, CustomImage, Typography } from "@components";
import { useGuestHook } from "./guest.hook";

export const Guest = () => {
  const { onClickLoginOrRegister } = useGuestHook();
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomImage
        src={ImageAssets.favoritesGuest}
        alt={"A boy in a pokemon suit"}
        containerStyles={{
          margin: "auto",
          maxWidth: "356px",
          height: "auto",
        }}
      />
      <Typography
        styles={{
          fontSize: "20px",
          fontWeight: 600,
          textAlign: "center",
          maxWidth: "327px",
          marginTop: "16px",
        }}
      >
        {"You need to be logged in to access this section"}
      </Typography>
      <Typography
        styles={{
          fontSize: "14px",
          fontWeight: 400,
          textAlign: "center",
          maxWidth: "327px",
          marginTop: "4px",
        }}
      >
        {"To access this functionality, you need to login or create an account"}
      </Typography>
      <CustomButton
        type="secondary"
        text="Login or Register"
        onClick={onClickLoginOrRegister}
        styles={{ marginTop: "24px" }}
      />
    </div>
  );
};