import React, { useState } from "react";
import { useBaseStore } from "@store";
import { useCustomNavigation, useFirebaseFirestore } from "@hooks";
import { FormFieldData } from "@types";
import { useFirebaseAuth } from "@contexts";

interface FormData {
  name: FormFieldData;
}

export const useUpdateNameHelper = () => {
  const { goBack } = useCustomNavigation();
  const { showLoader, hideLoader, setToastData } = useBaseStore();
  const { updateName } = useFirebaseAuth();
  const { updateUserName } = useFirebaseFirestore();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: {},
  });

  const handleUpdateName = React.useCallback(
    async (name: string) => {
      try {
        showLoader({
          loadingText: "Updating name...",
          style: "opaque",
        });
        const currentUser = await updateName?.(name);

        if (!currentUser) {
          throw new Error("");
        }
        updateUserName(currentUser, name);

        hideLoader();
        setToastData({
          text: "Action performed successfully",
        });
        goBack();
      } catch (error: unknown) {
        console.error("Failed to change name. Error: ", error);
        hideLoader();
      }
    },
    [goBack, hideLoader, setToastData, showLoader, updateName, updateUserName]
  );

  const handleClickContinue = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const handleValidateName = (value: string) => {
    const error = value.trim().length < 1;

    return error;
  };

  const handleSubmitForm = React.useCallback(
    (event: any) => {
      // Preventing the page from reloading
      event.preventDefault();

      const formName = event.currentTarget.elements[0].value as string;

      const error = handleValidateName(formName);

      setFormData((prevState) => ({
        ...prevState,
        name: {
          ...prevState.name,
          value: formName,
          bottomMessage: error ? "Your name can't be empty" : undefined,
          error,
        },
      }));

      if (!error) {
        handleUpdateName(formName);
      }
    },
    [handleUpdateName]
  );

  return {
    formData,
    formRef,
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
