import { EMAIL_REGEX } from "@constants";
import React, { useState } from "react";
import { useBaseStore } from "@store";
import { useCustomNavigation, useFirebaseAuth } from "@hooks";
import { FormFieldData } from "@types";

export interface UpdateEmailFormData {
  email: FormFieldData;
}

export const useUpdateEmailHelper = () => {
  const { goBack } = useCustomNavigation();
  const { showLoader, hideLoader } = useBaseStore();
  const { updateEmail } = useFirebaseAuth();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<UpdateEmailFormData>({
    email: {},
  });

  const handleUpdateEmail = React.useCallback(
    async (email: string) => {
      try {
        showLoader({
          loadingText: "Logging in...",
          style: "opaque",
        });
        await updateEmail?.(email);
        hideLoader();
        goBack();
      } catch (error: unknown) {
        console.error("Failed to change Email. Error: ", error);
        hideLoader();
      }
    },
    [goBack, hideLoader, showLoader, updateEmail]
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

      setFormData((prevState) => ({
        ...prevState,
        email: {
          ...prevState.email,
          value: formEmail,
          bottomMessage: "Use a valid email address",
          error: emailError,
        },
      }));

      if (!emailError) {
        handleUpdateEmail(formEmail);
      }
    },
    [handleUpdateEmail]
  );

  return {
    formData,
    formRef,
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
