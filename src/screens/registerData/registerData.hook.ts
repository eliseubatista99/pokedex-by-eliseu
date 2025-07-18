import { EMAIL_REGEX, ScreenPaths } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useFirebaseFirestore } from "@hooks";
import { useBaseStore } from "@store";
import React, { useState } from "react";
import { usePokedexFirebaseAuth } from "../../contexts";
import { useUserStore } from "../../store";

export interface RegisterFormField {
  value?: string;
  error?: boolean;
  bottomMessage?: string;
}

export interface RegisterFormData {
  name: RegisterFormField;
  email: RegisterFormField;
  password: RegisterFormField;
  confirmPassword: RegisterFormField;
}

export const useRegisterDataHelper = () => {
  const { goTo } = useNavigation();
  const { showLoader, hideLoader } = useBaseStore();
  const { signUp } = usePokedexFirebaseAuth();
  const { createUser } = useFirebaseFirestore();
  const { setFirebaseUser } = useUserStore();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
    name: {},
    email: {},
    password: {},
    confirmPassword: {},
  });

  const handleGoToRegisterDone = React.useCallback(() => {
    goTo(ScreenPaths.registerDone);
  }, [goTo]);

  const handleCreateAccount = React.useCallback(
    async (email: string, password: string, username: string) => {
      try {
        showLoader({
          loadingText: "Creating User Account...",
          style: "opaque",
        });

        const newUser = await signUp?.(email, password, username);

        if (!newUser) {
          throw new Error("");
        }

        createUser(newUser.user);
        hideLoader();
        setFirebaseUser(newUser.user);
        handleGoToRegisterDone();
      } catch (error: unknown) {
        console.error("Failed to create an account. Error: ", error);
        hideLoader();
      }
    },
    [
      createUser,
      handleGoToRegisterDone,
      hideLoader,
      setFirebaseUser,
      showLoader,
      signUp,
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

  const handleValidateEmail = (value: string) => {
    const error = !EMAIL_REGEX.test(value);

    return error;
  };

  const handleValidatePassword = (value: string) => {
    const error = value.length < 8;

    return error;
  };

  const handleValidateConfirmPasswordChanged = (
    value: string,
    comparePassword: string
  ) => {
    const error = value !== comparePassword;

    return error;
  };

  const handleSubmitForm = React.useCallback(
    (event: any) => {
      // Preventing the page from reloading
      event.preventDefault();

      const formName = event.currentTarget.elements[0].value as string;
      const formEmail = event.currentTarget.elements[1].value as string;
      const formPassword = event.currentTarget.elements[2].value as string;
      const formConfirmPassword = event.currentTarget.elements[3]
        .value as string;

      const nameError = handleValidateName(formName);
      const emailError = handleValidateEmail(formEmail);
      const passwordError = handleValidatePassword(formPassword);
      const confirmPasswordError = handleValidateConfirmPasswordChanged(
        formConfirmPassword,
        formPassword
      );

      setRegisterFormData((prevState) => ({
        ...prevState,
        name: {
          ...prevState.name,
          value: formName,
          bottomMessage: nameError ? "Your name can't be empty" : undefined,
          error: nameError,
        },
        email: {
          ...prevState.email,
          value: formEmail,
          bottomMessage: "Use a valid email address",
          error: emailError,
        },
        password: {
          ...prevState.password,
          value: formPassword,
          bottomMessage: "Your password must have at least 8 characters",
          error: passwordError,
        },
        confirmPassword: {
          ...prevState.confirmPassword,
          value: formConfirmPassword,
          bottomMessage: confirmPasswordError
            ? "Your passwords must match"
            : undefined,
          error: confirmPasswordError,
        },
      }));

      if (
        !nameError &&
        !emailError &&
        !passwordError &&
        !confirmPasswordError
      ) {
        handleCreateAccount(formEmail, formPassword, formName);
      }
    },
    [handleCreateAccount]
  );

  return {
    registerFormData,
    formRef,
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
