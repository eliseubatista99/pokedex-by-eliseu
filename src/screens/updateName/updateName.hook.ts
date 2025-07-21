import { Toasts } from "@constants";
import { usePokedexFirebaseAuth } from "@contexts";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { useFirebaseFirestore } from "@hooks";
import { useBaseStore } from "@store";
import type { FormFieldData } from "@types";
import React, { useState } from "react";

interface FormData {
  name: FormFieldData;
}

export const useUpdateNameHelper = () => {
  const { goBack } = useNavigation();
  const { showLoader, hideLoader, setToastData } = useBaseStore();
  const { updateName } = usePokedexFirebaseAuth();
  const { updateUserName } = useFirebaseFirestore();
  const { showItem } = useFeedback();

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
        showItem(Toasts.base);
        goBack();
      } catch (error: unknown) {
        console.error("Failed to change name. Error: ", error);
        hideLoader();
      }
    },
    [
      goBack,
      hideLoader,
      setToastData,
      showItem,
      showLoader,
      updateName,
      updateUserName,
    ]
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
