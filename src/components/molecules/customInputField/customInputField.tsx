import { Typography } from "@components";
import styled from "@emotion/styled";
import { ChangeEvent, CSSProperties, HTMLInputTypeAttribute } from "react";

export interface CustomInputFieldProps {
  name: string;
  label?: string;
  leftIcon?: React.ReactNode;
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
      style={{ width: "100%", maxWidth: "268px", ...containerProps }}
    >
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
      <div
        style={{
          flexDirection: "row",
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
          outline: "none",
          alignItems: "center",
          gap: "8px",
          ...inputStyles,
        }}
      >
        {leftIcon}
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
      </div>

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
    </ContainerDiv>
  );
};
