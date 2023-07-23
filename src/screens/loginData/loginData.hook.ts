import { EMAIL_REGEX, ScreenPaths } from "@constants";
import React, { useState } from "react";
import { useBaseStore } from "@store";
import { useCustomNavigation } from "@hooks";
import { useFirebaseAuth } from "@contexts";

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
  const { goTo } = useCustomNavigation();
  const { showLoader, hideLoader } = useBaseStore();
  const { logIn } = useFirebaseAuth();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [loginFormData, setloginFormData] = useState<loginFormData>({
    email: {},
    password: {},
  });

  const handleGoToLoginDone = React.useCallback(() => {
    goTo(ScreenPaths.loginDone);
  }, [goTo]);

  const handleLogin = React.useCallback(
    async (email: string, password: string) => {
      try {
        showLoader({
          loadingText: "Logging in...",
          style: "opaque",
        });
        await logIn?.(email, password);
        hideLoader();
        handleGoToLoginDone();
      } catch (error: unknown) {
        console.error("Failed to login. Error: ", error);
        hideLoader();
      }
    },
    [handleGoToLoginDone, hideLoader, logIn, showLoader]
  );

  const handleClickContinue = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleClickForgotPassword = React.useCallback(() => {
    goTo(ScreenPaths.forgotPassword);
  }, [goTo]);

  const handleValidateEmail = (value: string) => {
    const error = !EMAIL_REGEX.test(value);

    return error;
  };

  const handleValidatePasswordData = (value: string) => {
    const error = !value || value.length < 8;

    return error;
  };

  const handleSubmitForm = React.useCallback(
    (event: any) => {
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
    },
    [handleLogin]
  );

  return {
    loginFormData,
    formRef,
    onPointerDownContinue: handleClickContinue,
    onPointerDownForgotPassword: handleClickForgotPassword,
    onSubmitForm: handleSubmitForm,
  };
};
