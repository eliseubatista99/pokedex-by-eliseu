import { Typography } from "@components";
import { ChangeEvent, CSSProperties, HTMLInputTypeAttribute } from "react";

export interface CustomInputFieldProps {
  name: string;
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
  name,
  label,
  bottomMessage,
  placeHolder,
  error,
  value,
  type = "text",
  onChange,
  containerProps,
}: CustomInputFieldProps) => {
  const onValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value);
  };

  return (
    <div style={{ width: "100%", maxWidth: "268px", ...containerProps }}>
      {label && (
        <Typography
          styles={{
            fontSize: "10.5px",
            fontWeight: 500,
          }}
        >
          {label}
        </Typography>
      )}
      <input
        name={name}
        type={type}
        style={{
          width: "100%",
          height: "39px",
          margin: "6px auto 0 auto",
          border: "1.5px solid #000000",
          borderRadius: "5px",
          padding: "3.75px 11.25px",
          color: "#000000",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "18px",
        }}
        placeholder={placeHolder}
        value={value}
        onChange={onValueChanged}
      />
      {bottomMessage && (
        <Typography
          styles={{
            fontSize: "9px",
            fontWeight: 400,
            margin: "6px auto 0 auto",
            color: error ? "red" : "#4D4D4D",
          }}
        >
          {bottomMessage}
        </Typography>
      )}
    </div>
  );
};
