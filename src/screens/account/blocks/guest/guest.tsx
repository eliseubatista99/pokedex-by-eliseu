import { ImageAssets } from "@assets";
import { CustomButton, CustomImage, Typography } from "@components";
import { useGuestHook } from "./guest.hook";

export const Guest = () => {
  const { onClickLoginOrRegister } = useGuestHook();
  return (
    <div
      style={{
        width: "calc(100% + 24px)",
        padding: "6px 16px 16px 16px",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        borderBottom: "1px solid var(--escala-de-cinza-50, #F2F2F2)",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography
          styles={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#4d4d4d",
            flex: 1,
            paddingRight: "28px",
          }}
        >
          {"Keep your Pokédex up to date and participate in this world."}
        </Typography>
        <CustomImage
          src={ImageAssets.loginOrRegisterFigure}
          alt={"Profile Picture"}
          containerStyles={{
            width: "120px",
            height: "100px",
          }}
          imageStyles={{
            objectFit: "contain",
          }}
        />
      </div>
      <CustomButton
        type="secondary"
        text="Login or Register"
        onClick={onClickLoginOrRegister}
        styles={{ marginTop: "16px", height: "43px" }}
      />
    </div>
  );
};
