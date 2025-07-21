import { usePokedexFirebaseAuth } from "@contexts";
import { useBaseStore } from "@store";
import type { FormFieldData } from "@types";
import React, { useState } from "react";
import { type ModalLoginAgainProps } from "./loginAgain";

interface FormData {
  password: FormFieldData;
}

export const useLoginAgainModalHelper = ({
  onLoginDone,
}: ModalLoginAgainProps) => {
  const { showLoader, hideLoader } = useBaseStore();
  const { currentUser, logIn } = usePokedexFirebaseAuth();

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event: any) => {
      // Preventing the page from reloading
      event.preventDefault();

      const formPassword = event.currentTarget.elements[0].value as string;

      const error = handleValidatePassword(formPassword);

      console.log("ZAUZAU", error);

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
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
