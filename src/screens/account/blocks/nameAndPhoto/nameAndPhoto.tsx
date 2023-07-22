import { ImageAssets } from "@assets";
import { CustomImage, Typography } from "@components";
import { useNameAndPhotoHelper } from "./nameAndPhoto.hook";

export const NameAndPhoto = () => {
  const { username } = useNameAndPhotoHelper();

  return (
    <div
      style={{
        width: "calc(100% + 32px)",
        padding: "6px 16px",
        flexDirection: "row",
        alignItems: "center",
        gap: "12px",
        borderBottom: "1px solid var(--escala-de-cinza-50, #F2F2F2)",
      }}
    >
      <CustomImage
        src={ImageAssets.accountIcon}
        alt={"Profile Picture"}
        containerStyles={{ width: "44px", height: "44px", borderRadius: "50%" }}
      />
      <Typography styles={{ fontSize: "18px", fontWeight: 600 }}>
        {username}
      </Typography>
    </div>
  );
};
