import { Typography } from "@components";
import styled from "@emotion/styled";
import { ChangeEvent, CSSProperties, HTMLInputTypeAttribute } from "react";

export interface CustomInputFieldProps {
  name: string;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  bottomMessage?: string;
  placeHolder?: string;
  error?: boolean;
  value?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
  inputStyles?: CSSProperties;
  containerProps?: CSSProperties;
}

const ContainerDiv = styled.div`
  input:focus {
    border: none;
    outline: none;
    background: none;
  }

  input:autofill {
    background-color: #00000000;
  }

  input:-webkit-autofill {
    background-color: #00000000;
  }
`;

export const CustomInputField = ({
  name,
  label,
  leftIcon,
  rightIcon,
  bottomMessage,
  placeHolder,
  error,
  value,
  type = "text",
  onChange,
  inputStyles,
  containerProps,
}: CustomInputFieldProps) => {
  const onValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value);
  };

  return (
    <ContainerDiv
      style={{ width: "100%", maxWidth: "357px", ...containerProps }}
    >
      {label && (
        <Typography
          styles={{
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {label}
        </Typography>
      )}
      <div
        style={{
          flexDirection: "row",
          width: "100%",
          height: "47px",
          margin: "8px auto 0 auto",
          border: "2px solid #000000",
          borderRadius: "5px",
          padding: "5px 15px",
          color: "#000000",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          outline: "none",
          alignItems: "center",
          gap: "10px",
          ...inputStyles,
        }}
      >
        {leftIcon && <div style={{ cursor: "pointer" }}>{leftIcon}</div>}
        <input
          name={name}
          type={type}
          style={{
            flex: 1,
            border: "none",
            color: "inherit",
            fontFamily: "inherit",
            fontStyle: "inherit",
            fontWeight: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            outline: "inherit",
          }}
          placeholder={placeHolder}
          value={value}
          onChange={onValueChanged}
        />
        {rightIcon && <div style={{ cursor: "pointer" }}>{rightIcon}</div>}
      </div>

      {bottomMessage && (
        <Typography
          styles={{
            fontSize: "12px",
            fontWeight: 400,
            margin: "8px auto 0 auto",
            color: error ? "red" : "#4D4D4D",
          }}
        >
          {bottomMessage}
        </Typography>
      )}
    </ContainerDiv>
  );
};
