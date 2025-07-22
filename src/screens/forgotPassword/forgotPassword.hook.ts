import { EMAIL_REGEX } from "@constants";
import { usePokedexFirebaseAuth } from "@contexts";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";

import { useBaseStore } from "@store";
import { FirebaseError } from "firebase/app";
import React, { useState } from "react";

export interface ForgotPasswordFormField {
  value?: string;
  error?: boolean;
  bottomMessage?: string;
}

export interface ForgotPasswordFormData {
  email: ForgotPasswordFormField;
}

export const useForgotPasswordHelper = () => {
  const { goBack } = useNavigation();
  const { showLoader, hideLoader } = useBaseStore();
  const { resetPassword } = usePokedexFirebaseAuth();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [forgotPasswordFormData, setForgotPasswordFormData] =
    useState<ForgotPasswordFormData>({
      email: {},
    });

  const handleForgotPassword = React.useCallback(
    async (email: string) => {
      try {
        showLoader({
          loadingText: "Sending password recovery email...",
          style: "opaque",
        });

        goBack();

        await resetPassword?.(email);
        hideLoader();
      } catch (error: unknown) {
        const firebaseError = error as FirebaseError;
        console.error("Failed to reset password. Error: ", firebaseError.code);
        hideLoader();
      }
    },
    [goBack, hideLoader, resetPassword, showLoader]
  );

  const handleClickContinue = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleValidateEmail = (value: string) => {
    const error = !EMAIL_REGEX.test(value);

    return error;
  };

  const handleSubmitForm = React.useCallback(
    (event: any) => {
      // Preventing the page from reloading
      event.preventDefault();

      const formEmail = event.currentTarget.elements[0].value as string;

      const emailError = handleValidateEmail(formEmail);

      setForgotPasswordFormData((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          value: formEmail,
          bottomMessage: "Use a valid email address",
          error: emailError,
        },
      }));

      if (!emailError) {
        handleForgotPassword(formEmail);
      }
    },
    [handleForgotPassword]
  );

  return {
    forgotPasswordFormData,
    formRef,
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
