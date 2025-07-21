import { Toasts } from "@constants";
import {
  Toast as ToastBase,
  Typography,
  type ToastProps as ToastBaseProps,
} from "@eliseubatista99/react-scaffold-core";

export interface ToastProps extends Omit<ToastBaseProps, "id"> {
  icon?: React.ReactNode;
  text: string;
}

export const Toast = (props: ToastProps) => {
  const { icon, text } = props;

  return (
    <ToastBase
      {...props}
      id={Toasts.base}
      durationInSeconds={10000000}
      styles={{
        width: "100%",
        zIndex: 1000,
        padding: "12px 32.25px",
        textAlign: "center",
        background: "#173EA5",
        minHeight: "65.25px",
        flexDirection: "column",
        justifyContent: "center",
        top: 0,
        border: "none",
        borderRadius: 0,
        borderBottomRightRadius: "35%",
        borderBottomLeftRadius: "35%",
        ...props.styles,
      }}
    >
      {icon && <>{icon}</>}
      <Typography
        styles={{ fontSize: "13.5px", fontWeight: 600, color: "#ffffff" }}
      >
        {text}
      </Typography>
    </ToastBase>
  );
};
