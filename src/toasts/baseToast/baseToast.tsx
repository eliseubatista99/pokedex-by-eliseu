import { Typography } from "@components";
import { useBaseToastHelper } from "./baseToast.hook";

export interface BaseToastProps {
  duration: number;
  icon?: React.ReactNode;
  text: string;
}

export const BaseToast = (props: BaseToastProps) => {
  const { icon, text } = props;
  useBaseToastHelper(props);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        padding: "16px 43px",
        textAlign: "center",
        background: "#173EA5",
        minHeight: "87px",
        flexDirection: "column",
        justifyContent: "center",
        borderBottomRightRadius: "35%",
        borderBottomLeftRadius: "35%",
      }}
    >
      {icon && <>{icon}</>}
      <Typography
        styles={{ fontSize: "18px", fontWeight: 600, color: "#ffffff" }}
      >
        {text}
      </Typography>
    </div>
  );
};
