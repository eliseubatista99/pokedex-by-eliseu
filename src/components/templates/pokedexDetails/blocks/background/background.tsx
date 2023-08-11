import { CustomImage } from "@components";

export interface BackgroundProps {
  backgroundColor?: string;
  backgroundImage?: string;
  image?: string;
}

export const Background = (props: BackgroundProps) => {
  const { backgroundColor = "#fafafa", backgroundImage, image } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        top: 0,
        height: "200px",
      }}
    >
      <div
        style={{
          width: "138%",
          position: "absolute",
          top: "-250px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "200px",
            position: "absolute",
            flexDirection: "column",
            alignItems: "center",
            bottom: 0,
            zIndex: 1,
          }}
        >
          {backgroundImage && (
            <CustomImage
              src={backgroundImage}
              alt={"Background Image"}
              imageStyles={{ objectFit: "contain" }}
              containerStyles={{
                width: "74%",
                height: "92%",
                position: "absolute",
                zIndex: 0,
                opacity: 0.4,
                filter: "grayscale(100%) brightness(200%)",
              }}
            />
          )}

          {image && (
            <CustomImage
              src={image}
              alt={"Image"}
              imageStyles={{}}
              containerStyles={{
                width: "40%",
                maxWidth: "40%",
                zIndex: 1,
                justifyContent: "flex-end",
                position: "absolute",
                bottom: "-80px",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
