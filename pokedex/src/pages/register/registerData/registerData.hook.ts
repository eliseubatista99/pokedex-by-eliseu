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
  formRef: React.RefObject<HTMLFormElement>;
  onClickBack: () => void;
  onClickContinue: () => void;
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const useRegisterDataHelper = (): RegisterDataHelperOutputProps => {
  const navigate = useNavigate();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [name, setName] = React.useState<RegisterFormField>({});
  const [email, setEmail] = React.useState<RegisterFormField>({});
  const [password, setPassword] = React.useState<RegisterFormField>({});
  const [confirmPassword, setConfirmPassword] =
    React.useState<RegisterFormField>({});

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToRegisterDone = () => {
    navigate(Pages.registerDone);
  };

  const handleClickContinue = () => {
    //navigate(Pages.login);

    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleValidateName = (value: string) => {
    const error = value.trim().length < 1;

    setName((prevState) => ({
      ...prevState,
      value,
      bottomMessage: error ? "Your name can't be empty" : undefined,
      error,
    }));

    return error;
  };

  const handleValidateEmail = (value: string) => {
    const error = !EMAIL_REGEX.test(value);

    setEmail((prevState) => ({
      ...prevState,
      value,
      bottomMessage: "Use a valid email address",
      error,
    }));
    return error;
  };

  const handleValidatePassword = (value: string) => {
    const error = value.length < 8;

    setPassword((prevState) => ({
      ...prevState,
      value,
      bottomMessage: "Your password must have at least 8 characters",
      error,
    }));
    return error;
  };

  const handleValidateConfirmPasswordChanged = (
    value: string,
    comparePassword: string
  ) => {
    const error = value !== comparePassword;

    setConfirmPassword((prevState) => ({
      ...prevState,
      value,
      bottomMessage: error ? "Your passwords must match" : undefined,
      error,
    }));
    return error;
  };

  const handleSubmitForm = (event: any) => {
    // Preventing the page from reloading
    event.preventDefault();

    const formName = event.currentTarget.elements[0].value as string;
    const formEmail = event.currentTarget.elements[1].value as string;
    const formPassword = event.currentTarget.elements[2].value as string;
    const formConfirmPassword = event.currentTarget.elements[3].value as string;

    let error = false;

    error = error || handleValidateName(formName);
    error = error || handleValidateEmail(formEmail);
    error = error || handleValidatePassword(formPassword);
    error =
      error ||
      handleValidateConfirmPasswordChanged(formConfirmPassword, formPassword);

    if (!error) {
      //TODO: Register to firebase
      handleGoToRegisterDone();
    }
  };

  return {
    name,
    email,
    password,
    confirmPassword,
    formRef,
    onClickBack: handleGoBack,
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
