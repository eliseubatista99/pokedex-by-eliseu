import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX, Pages } from "@constants";
import React, { useState } from "react";
import { useAuthContext } from "@contexts";
import { useBaseStore } from "@store";

export interface RegisterFormField {
  value?: string;
  error?: boolean;
  bottomMessage?: string;
}

export interface RegisterFormData {
  name: RegisterFormField;
  email: RegisterFormField;
  password: RegisterFormField;
  confirmPassword: RegisterFormField;
}

export interface RegisterDataHelperOutputProps {
  registerFormData: RegisterFormData;
  formRef: React.RefObject<HTMLFormElement>;
  onClickBack: () => void;
  onClickContinue: () => void;
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const useRegisterDataHelper = (): RegisterDataHelperOutputProps => {
  const navigate = useNavigate();
  const setStoreState = useBaseStore((state) => state.setPartialState);
  const { signUp } = useAuthContext();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
    name: {},
    email: {},
    password: {},
    confirmPassword: {},
  });

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

    return error;
  };

  const handleValidateEmail = (value: string) => {
    const error = !EMAIL_REGEX.test(value);

    return error;
  };

  const handleValidatePassword = (value: string) => {
    const error = value.length < 8;

    return error;
  };

  const handleValidateConfirmPasswordChanged = (
    value: string,
    comparePassword: string
  ) => {
    const error = value !== comparePassword;

    return error;
  };

  const handleSubmitForm = async (event: any) => {
    // Preventing the page from reloading
    event.preventDefault();

    const formName = event.currentTarget.elements[0].value as string;
    const formEmail = event.currentTarget.elements[1].value as string;
    const formPassword = event.currentTarget.elements[2].value as string;
    const formConfirmPassword = event.currentTarget.elements[3].value as string;

    const nameError = handleValidateName(formName);
    const emailError = handleValidateEmail(formEmail);
    const passwordError = handleValidatePassword(formPassword);
    const confirmPasswordError = handleValidateConfirmPasswordChanged(
      formConfirmPassword,
      formPassword
    );

    setRegisterFormData((prevState) => ({
      ...prevState,
      name: {
        ...prevState.name,
        value: formName,
        bottomMessage: nameError ? "Your name can't be empty" : undefined,
        error: nameError,
      },
      email: {
        ...prevState.email,
        value: formEmail,
        bottomMessage: "Use a valid email address",
        error: emailError,
      },
      password: {
        ...prevState.password,
        value: formPassword,
        bottomMessage: "Your password must have at least 8 characters",
        error: passwordError,
      },
      confirmPassword: {
        ...prevState.confirmPassword,
        value: formConfirmPassword,
        bottomMessage: confirmPasswordError
          ? "Your passwords must match"
          : undefined,
        error: confirmPasswordError,
      },
    }));

    if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
      setStoreState({
        loader: { style: "transparent", text: "Creating User Account..." },
      });
      // try {
      //   await signUp(formEmail, formPassword, formName);
      // } catch (error) {
      //   console.error("Failed to create an account. Error: ", error);
      // }
      //TODO: Register to firebase
      //handleGoToRegisterDone();
    }
  };

  return {
    registerFormData,
    formRef,
    onClickBack: handleGoBack,
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
