import { EMAIL_REGEX, Pages } from "@constants";
import React, { useState } from "react";
import { useAuthContext } from "@contexts";
import { useBaseStore, useUserStore } from "@store";
import { FirebaseError } from "firebase/app";
import { useCustomNavigation } from "@hooks";

export interface LoginFormField {
  value?: string;
  error?: boolean;
  bottomMessage?: string;
}

export interface LoginFormData {
  email: LoginFormField;
  password: LoginFormField;
}

export interface LoginDataHelperOutputProps {
  LoginFormData: LoginFormData;
  formRef: React.RefObject<HTMLFormElement>;
  onClickBack: () => void;
  onClickContinue: () => void;
  onClickForgotPassword: () => void;
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const useLoginDataHelper = (): LoginDataHelperOutputProps => {
  const { goBack, goTo } = useCustomNavigation();
  const setBaseStoreState = useBaseStore((state) => state.setPartialState);
  const setUserStoreState = useUserStore((state) => state.setPartialState);
  const { logIn, currentUser } = useAuthContext();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [LoginFormData, setLoginFormData] = useState<LoginFormData>({
    email: {},
    password: {},
  });

  const handleGoBack = () => {
    goBack(-1);
  };

  const handleGoToLoginDone = () => {
    goTo(Pages.loginDone);
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      setBaseStoreState({
        loader: { style: "transparent", text: "Logging in..." },
      });
      await logIn(email, password);
      setBaseStoreState({
        loader: undefined,
      });

      console.log(currentUser);

      setUserStoreState({
        name: currentUser?.displayName,
        email: currentUser?.email,
      });
      handleGoToLoginDone();
    } catch (error: unknown) {
      const firebaseError = error as FirebaseError;
      console.error("Failed to login. Error: ", firebaseError.code);
      setBaseStoreState({
        loader: undefined,
      });
    }
  };

  const handleClickContinue = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleClickForgotPassword = () => {
    goTo(Pages.forgotPassword);
  };

  const handleValidateEmail = (value: string) => {
    const error = !EMAIL_REGEX.test(value);

    return error;
  };

  const handleValidatePasswordData = (value: string) => {
    const error = !value || value.length < 8;

    return error;
  };

  const handleSubmitForm = (event: any) => {
    // Preventing the page from reloading
    event.preventDefault();

    const formEmail = event.currentTarget.elements[0].value as string;
    const formPassword = event.currentTarget.elements[1].value as string;

    const emailError = handleValidateEmail(formEmail);
    const passwordError = handleValidatePasswordData(formPassword);

    setLoginFormData((prevState) => ({
      ...prevState,
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
    }));

    if (!emailError && !passwordError) {
      handleLogin(formEmail, formPassword);
    }
  };

  return {
    LoginFormData,
    formRef,
    onClickBack: handleGoBack,
    onClickContinue: handleClickContinue,
    onClickForgotPassword: handleClickForgotPassword,
    onSubmitForm: handleSubmitForm,
  };
};
