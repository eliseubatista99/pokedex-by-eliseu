import { EMAIL_REGEX } from "@constants";
import React, { useState } from "react";
import { useFirebaseContext } from "@contexts";
import { useBaseStore } from "@store";
import { FirebaseError } from "firebase/app";
import { useCustomNavigation } from "@hooks";

export interface ForgotPasswordFormField {
  value?: string;
  error?: boolean;
  bottomMessage?: string;
}

export interface ForgotPasswordFormData {
  email: ForgotPasswordFormField;
}

export const useForgotPasswordHelper = () => {
  const { goBack } = useCustomNavigation();
  const { setLoading } = useBaseStore();
  const { resetPassword } = useFirebaseContext();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [forgotPasswordFormData, setForgotPasswordFormData] =
    useState<ForgotPasswordFormData>({
      email: {},
    });

  const handleForgotPassword = async (email: string) => {
    try {
      setLoading({
        isLoading: true,
        loadingText: "Sending password recovery email...",
        style: "opaque",
      });

      goBack();

      await resetPassword?.(email);
      setLoading({
        isLoading: false,
        loadingText: undefined,
      });
    } catch (error: unknown) {
      const firebaseError = error as FirebaseError;
      console.error("Failed to reset password. Error: ", firebaseError.code);
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

  const handleValidateEmail = (value: string) => {
    const error = !EMAIL_REGEX.test(value);

    return error;
  };

  const handleSubmitForm = (event: any) => {
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
  };

  return {
    forgotPasswordFormData,
    formRef,
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
