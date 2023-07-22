import { EMAIL_REGEX, ScreenPaths } from "@constants";
import React, { useState } from "react";
import { useFirebaseContext } from "@contexts";
import { useBaseStore, useUserStore } from "@store";
import { FirebaseError } from "firebase/app";
import { useCustomNavigation } from "@hooks";

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

export interface RegisterDataHelperOutputProps {
  registerFormData: RegisterFormData;
  formRef: React.RefObject<HTMLFormElement>;
  onClickBack: () => void;
  onClickContinue: () => void;
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const useRegisterDataHelper = (): RegisterDataHelperOutputProps => {
  const { goBack, goTo } = useCustomNavigation();
  const { setLoading } = useBaseStore();
  const { setPartialState: setUserData } = useUserStore();
  const { signUp, currentUser } = useFirebaseContext();

  const formRef = React.useRef<HTMLFormElement>(null);

  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
    name: {},
    email: {},
    password: {},
    confirmPassword: {},
  });

  const handleGoBack = () => {
    goBack(-1);
  };

  const handleGoToRegisterDone = () => {
    goTo(ScreenPaths.registerDone);
  };

  const handleCreateAccount = async (
    email: string,
    password: string,
    username: string
  ) => {
    try {
      setLoading({
        isLoading: true,
        loadingText: "Creating User Account...",
        style: "transparent",
      });

      await signUp(email, password, username);
      setLoading({
        isLoading: false,
        loadingText: undefined,
      });
      setUserData({
        name: currentUser?.displayName,
        email: currentUser?.email,
      });
      handleGoToRegisterDone();
    } catch (error: unknown) {
      const firebaseError = error as FirebaseError;
      console.error("Failed to create an account. Error: ", firebaseError.code);
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

  const handleSubmitForm = (event: any) => {
    // Preventing the page from reloading
    event.preventDefault();

    const formName = event.currentTarget.elements[0].value as string;
    const formEmail = event.currentTarget.elements[1].value as string;
    const formPassword = event.currentTarget.elements[2].value as string;
    const formConfirmPassword = event.currentTarget.elements[3].value as string;

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

    if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
      handleCreateAccount(formEmail, formPassword, formName);
    }
  };

  return {
    registerFormData,
    formRef,
    onClickBack: handleGoBack,
    onClickContinue: handleClickContinue,
    onSubmitForm: handleSubmitForm,
  };
};
