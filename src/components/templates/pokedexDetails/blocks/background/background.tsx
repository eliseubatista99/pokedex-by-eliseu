import { CustomImage } from "@components";
import {
  APP_HEADER_HEIGHT,
  APP_PADDING_LEFT,
  APP_PADDING_RIGHT,
  APP_PADDING_TOP,
} from "@constants";

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
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: `calc(100% + ${APP_PADDING_LEFT + APP_PADDING_RIGHT}px)`,
        top: `-${APP_HEADER_HEIGHT + APP_PADDING_TOP}px`,
        height: "230px",
        zIndex: 2,
      }}
    >
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "absolute",
          top: "-250px",
          height: "500px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "138%",
            height: "100%",
            borderRadius: "50%",
            position: "relative",
            top: "0",
            backgroundColor,
          }}
        />
      </div>

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
              width: "36%",
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
              width: "60%",
              maxWidth: "240px",
              zIndex: 1,
              justifyContent: "flex-end",
              position: "absolute",
              bottom: "-80px",
            }}
          />
        )}
      </div>
    </div>
  );
};
