import { EMAIL_REGEX } from "@constants";
import React, { useState } from "react";
import { useAuthContext } from "@contexts";
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

export interface ForgotPasswordHelperOutputProps {
  forgotPasswordFormData: ForgotPasswordFormData;
  formRef: React.RefObject<HTMLFormElement>;
  onClickBack: () => void;
  onClickContinue: () => void;
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const useForgotPasswordHelper = (): ForgotPasswordHelperOutputProps => {
  const { goBack } = useCustomNavigation();
  const setBaseStoreState = useBaseStore((state) => state.setPartialState);
  const { resetPassword } = useAuthContext();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [forgotPasswordFormData, setForgotPasswordFormData] =
    useState<ForgotPasswordFormData>({
      email: {},
    });

  const handleGoBack = () => {
    goBack(-1);
  };

  const handleForgotPassword = async (email: string) => {
    try {
      setBaseStoreState({
        loader: {
          style: "transparent",
          text: "Sending password recovery email...",
        },
      });
      await resetPassword(email);
      setBaseStoreState({
        loader: undefined,
      });

      handleGoBack();
    } catch (error: unknown) {
      const firebaseError = error as FirebaseError;
      console.error("Failed to reset password. Error: ", firebaseError.code);
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
    onClickBack: handleGoBack,
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
