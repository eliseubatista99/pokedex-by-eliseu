import { ChangeEvent, CSSProperties, HTMLInputTypeAttribute } from "react";
import { Typography } from "../typography";

export interface CustomInputFieldProps {
  label?: string;
  bottomMessage?: string;
  placeHolder?: string;
  error?: boolean;
  value?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
  containerProps?: CSSProperties;
}

export const CustomInputField = ({
  label,
  bottomMessage,
  placeHolder,
  error,
  value,
  type = "text",
  onChange,
  containerProps,
}: CustomInputFieldProps) => {
  console.log("ZAU", { value });

  const onValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value);
  };

  return (
    <div style={{ width: "100%", maxWidth: "358px", ...containerProps }}>
      {label && (
        <Typography size="body_14" weight="medium">
          {label}
        </Typography>
      )}
      <input
        type={type}
        style={{
          width: "100%",
          height: "52px",
          margin: "8px auto 0 auto",
          border: "1.5px solid #000000",
          borderRadius: "5px",
          padding: "5px 15px",
          color: "#000000",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
        }}
        placeholder={placeHolder}
        value={value}
        onChange={onValueChanged}
      />
      {bottomMessage && (
        <Typography
          size="body_12"
          color={error ? "error" : "info"}
          containerProps={{ margin: "8px auto 0 auto" }}
        >
          {bottomMessage}
        </Typography>
      )}
    </div>
  );
};
