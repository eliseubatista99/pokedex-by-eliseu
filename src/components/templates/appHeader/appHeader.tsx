import { ImageAssets } from "@assets";
import { useAppHeaderHelper } from "./appHeader.hook";

export interface AppHeaderProps {
  title: string;
  hideBack?: boolean;
}

export const AppHeader = ({ title, hideBack }: AppHeaderProps) => {
  const { onClickBack } = useAppHeaderHelper();

  const maskTopScroll = (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: "-5px",
        height: "100%",
        background: "#ffffff",
        zIndex: 0,
      }}
    />
  );

  return (
    <div
      style={{
        width: "100%",
        height: "55px",
        padding: "5px 30px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 0",
        position: "sticky",
        background: "#ffffff",
        top: "0px",
        zIndex: 100,
      }}
    >
      {maskTopScroll}
      <div
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {!hideBack && (
          <img
            alt=""
            src={ImageAssets.back}
            style={{
              width: "15px",
              height: "15px",
              position: "absolute",
              left: "15px",
              cursor: "pointer",
            }}
            onClick={() => onClickBack()}
          />
        )}

        <p
          style={{
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
};
