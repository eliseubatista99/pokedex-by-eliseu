import React, { useState } from "react";
import { useBaseStore } from "@store";
import { FormFieldData } from "@types";
import { useFirebaseAuth } from "@contexts";
import { ModalLoginAgainProps } from "./loginAgain";

interface FormData {
  password: FormFieldData;
}

export const useLoginAgainModalHelper = ({
  onLoginDone,
}: ModalLoginAgainProps) => {
  const { showLoader, hideLoader } = useBaseStore();
  const { currentUser, logIn } = useFirebaseAuth();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    password: {},
  });

  const handleLogin = React.useCallback(
    async (password: string) => {
      try {
        showLoader({
          loadingText: "Logging in...",
          style: "opaque",
        });
        const user = await logIn?.(currentUser?.email || "", password);
        hideLoader();
        if (user) {
          onLoginDone?.(user.user);
        }
      } catch (error: unknown) {
        console.error("Failed to login. Error: ", error);
        hideLoader();
      }
    },
    [currentUser?.email, hideLoader, logIn, onLoginDone, showLoader]
  );

  const handleClickContinue = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleValidatePassword = (value: string) => {
    const error = value.length < 8;

    return error;
  };

  const handleSubmitForm = React.useCallback(
    (event: any) => {
      // Preventing the page from reloading
      event.preventDefault();

      const formPassword = event.currentTarget.elements[0].value as string;

      const error = handleValidatePassword(formPassword);

      setFormData((prevState) => ({
        ...prevState,
        password: {
          ...prevState.password,
          value: formPassword,
          bottomMessage: "Your password must have at least 8 characters",
          error: error,
        },
      }));

      if (!error) {
        handleLogin(formPassword);
      }
    },
    [handleLogin]
  );

  return {
    formData,
    formRef,
    onPointerDownContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
