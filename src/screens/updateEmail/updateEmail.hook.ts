import { EMAIL_REGEX } from "@constants";
import React, { useState } from "react";
import { useBaseStore } from "@store";
import {
  useCustomNavigation,
  useFirebaseAuth,
  useFirebaseFirestore,
} from "@hooks";
import { FormFieldData } from "@types";

interface FormData {
  email: FormFieldData;
}

export const useUpdateEmailHelper = () => {
  const [showLoginAgainModal, setShowLoginAgainModal] =
    React.useState<boolean>(false);
  const { goBack } = useCustomNavigation();
  const { showLoader, hideLoader } = useBaseStore();
  const { updateEmail, currentUser } = useFirebaseAuth();
  const { updateUserEmail } = useFirebaseFirestore();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    email: {},
  });

  const handleUpdateEmail = React.useCallback(
    async (email: string) => {
      try {
        showLoader({
          loadingText: "Updating email...",
          style: "opaque",
        });
        const currentUser = await updateEmail?.(email);

        if (!currentUser) {
          throw new Error("");
        }
        updateUserEmail(currentUser, email);

        hideLoader();
        goBack();
      } catch (error: unknown) {
        console.error("Failed to change Email. Error: ", error);
        hideLoader();
      }
    },
    [goBack, hideLoader, showLoader, updateEmail, updateUserEmail]
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
    loginAgainModal: {
      isVisible: showLoginAgainModal,
      currentUser: currentUser,
    },
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
