import { ImageAssets } from "@assets";
import { CustomImage, Typography } from "@components";
import { useNameAndPhotoHelper } from "./nameAndPhoto.hook";

export const NameAndPhoto = () => {
  const { username } = useNameAndPhotoHelper();

  return (
    <div
      style={{
        width: "calc(100% + 24px)",
        padding: "4.5px 12px",
        flexDirection: "row",
        alignItems: "center",
        gap: "9px",
        borderBottom: "1px solid var(--escala-de-cinza-50, #F2F2F2)",
      }}
    >
      <CustomImage
        src={ImageAssets.accountIcon}
        alt={"Profile Picture"}
        containerStyles={{ width: "33px", height: "33px", borderRadius: "50%" }}
      />
      <Typography styles={{ fontSize: "13.5px", fontWeight: 600 }}>
        {username}
      </Typography>
    </div>
  );
};
