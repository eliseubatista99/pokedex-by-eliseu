import React, { useState } from "react";
import { useBaseStore } from "@store";
import { useCustomNavigation } from "@hooks";
import { FormFieldData } from "@types";
import { useFirebaseAuth } from "@contexts";

interface FormData {
  password: FormFieldData;
}

export const useUpdatePasswordHelper = () => {
  const { goBack } = useCustomNavigation();
  const { showLoader, hideLoader, setToastData } = useBaseStore();
  const { updatePassword } = useFirebaseAuth();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    password: {},
  });

  const handleUpdatePassword = React.useCallback(
    async (name: string) => {
      try {
        showLoader({
          loadingText: "Updating password...",
          style: "opaque",
        });
        await updatePassword?.(name);

        hideLoader();
        setToastData({
          text: "Action performed successfully",
        });
        goBack();
      } catch (error: unknown) {
        console.error("Failed to change password. Error: ", error);
        hideLoader();
      }
    },
    [goBack, hideLoader, setToastData, showLoader, updatePassword]
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
        handleUpdatePassword(formPassword);
      }
    },
    [handleUpdatePassword]
  );

  return {
    formData,
    formRef,
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
