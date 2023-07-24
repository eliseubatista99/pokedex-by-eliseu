import { ImageAssets } from "@assets";
import { CustomButton, CustomImage, Typography } from "@components";
import { useGuestHook } from "./guest.hook";

export const Guest = () => {
  const { onClickLoginOrRegister } = useGuestHook();
  return (
    <div
      style={{
        width: "calc(100% + 24px)",
        padding: "4.5px 12px 12px 12px",
        flexDirection: "column",
        alignItems: "center",
        gap: "9px",
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
            fontSize: "12px",
            fontWeight: 400,
            color: "#4d4d4d",
            flex: 1,
            paddingRight: "21px",
          }}
        >
          {"Keep your Pokédex up to date and participate in this world."}
        </Typography>
        <CustomImage
          src={ImageAssets.loginOrRegisterFigure}
          alt={"Profile Picture"}
          containerStyles={{
            width: "90px",
            height: "75px",
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
        styles={{ marginTop: "12px", height: "32.7px" }}
      />
    </div>
  );
};
