import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX, Pages } from "@constants";
import React from "react";

export interface RegisterFormField {
  value?: string;
  error?: boolean;
  bottomMessage?: string;
}

export interface RegisterDataHelperOutputProps {
  name: RegisterFormField;
  email: RegisterFormField;
  password: RegisterFormField;
  confirmPassword: RegisterFormField;
  onClickBack: () => void;
  onClickContinue: () => void;
  onFormNameChanged: (value: string) => void;
  onFormEmailChanged: (value: string) => void;
  onFormPasswordChanged: (value: string) => void;
  onFormConfirmPasswordChanged: (value: string) => void;
}

export const useRegisterDataHelper = (): RegisterDataHelperOutputProps => {
  const navigate = useNavigate();

  const [name, setName] = React.useState<RegisterFormField>({});
  const [email, setEmail] = React.useState<RegisterFormField>({});
  const [password, setPassword] = React.useState<RegisterFormField>({});
  const [confirmPassword, setConfirmPassword] =
    React.useState<RegisterFormField>({});

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleClickContinue = () => {
    navigate(Pages.login);
  };

  const handleFormNameChanged = (value: string) => {
    const error = value.trim().length < 1;

    setName((prevState) => ({
      ...prevState,
      value,
      bottomMessage: error ? "Your name can't be empty" : undefined,
      error,
    }));
  };

  const handleFormEmailChanged = (value: string) => {
    const error = !value.match(EMAIL_REGEX);

    setEmail((prevState) => ({
      ...prevState,
      value,
      bottomMessage: "Use a valid email address",
      error,
    }));
  };

  const handleFormPasswordChanged = (value: string) => {
    const error = value.length < 8;

    setPassword((prevState) => ({
      ...prevState,
      value,
      bottomMessage: "Your password must have at least 8 characters",
      error,
    }));
  };

  const handleFormConfirmPasswordChanged = (value: string) => {
    const error = value !== password.value;

    setConfirmPassword((prevState) => ({
      ...prevState,
      value,
      bottomMessage: error ? "Your passwords must match" : undefined,
      error,
    }));
  };

  const validateName = () => {};

  return {
    name,
    email,
    password,
    confirmPassword,
    onClickBack: handleGoBack,
    onClickContinue: handleClickContinue,
    onFormNameChanged: handleFormNameChanged,
    onFormEmailChanged: handleFormEmailChanged,
    onFormPasswordChanged: handleFormPasswordChanged,
    onFormConfirmPasswordChanged: handleFormConfirmPasswordChanged,
  };
};
