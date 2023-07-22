import { EMAIL_REGEX, ScreenPaths } from "@constants";
import React, { useState } from "react";
import { useFirebaseContext } from "@contexts";
import { useBaseStore, useUserStore } from "@store";
import { FirebaseError } from "firebase/app";
import { useCustomNavigation } from "@hooks";

export interface LoginFormField {
  value?: string;
  error?: boolean;
  bottomMessage?: string;
}

export interface loginFormData {
  email: LoginFormField;
  password: LoginFormField;
}

export const useLoginDataHelper = () => {
  const { goBack, goTo } = useCustomNavigation();
  const { setLoading } = useBaseStore();
  const { setPartialState: setUserData } = useUserStore();
  const { logIn, currentUser } = useFirebaseContext();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [loginFormData, setloginFormData] = useState<loginFormData>({
    email: {},
    password: {},
  });

  const handleGoBack = () => {
    goBack(-1);
  };

  const handleGoToLoginDone = () => {
    goTo(ScreenPaths.loginDone);
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading({
        isLoading: true,
        loadingText: "Logging in...",
        style: "opaque",
      });
      await logIn?.(email, password);
      setLoading({
        isLoading: false,
        loadingText: undefined,
      });
      console.log(currentUser);

      setUserData({
        name: currentUser?.displayName,
        email: currentUser?.email,
      });
      handleGoToLoginDone();
    } catch (error: unknown) {
      const firebaseError = error as FirebaseError;
      console.error("Failed to login. Error: ", firebaseError.code);
      setLoading({
        isLoading: false,
        loadingText: undefined,
      });
    }
  };

  const handleClickContinue = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleClickForgotPassword = () => {
    goTo(ScreenPaths.forgotPassword);
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

    setloginFormData((prevState) => ({
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
    loginFormData,
    formRef,
    onClickBack: handleGoBack,
    onClickContinue: handleClickContinue,
    onClickForgotPassword: handleClickForgotPassword,
    onSubmitForm: handleSubmitForm,
  };
};
