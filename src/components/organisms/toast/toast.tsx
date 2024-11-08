import { Typography } from "@components";
import { useToastHelper } from "./toast.hook";

export interface ToastProps {
  duration: number;
  icon?: React.ReactNode;
  text: string;
}

export const Toast = (props: ToastProps) => {
  const { icon, text } = props;
  useToastHelper(props);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        padding: "12px 32.25px",
        textAlign: "center",
        background: "#173EA5",
        minHeight: "65.25px",
        flexDirection: "column",
        justifyContent: "center",
        borderBottomRightRadius: "35%",
        borderBottomLeftRadius: "35%",
      }}
    >
      {icon && <>{icon}</>}
      <Typography
        styles={{ fontSize: "13.5px", fontWeight: 600, color: "#ffffff" }}
      >
        {text}
      </Typography>
    </div>
  );
};
