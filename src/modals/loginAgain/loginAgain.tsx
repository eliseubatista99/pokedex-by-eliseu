import { CustomButton, CustomInputField, Typography } from "@components";
import { User } from "firebase/auth";
import { BaseModal, BaseModalProps } from "../_baseModal";
import { useLoginAgainModalHelper } from "./loginAgain.hook";

export interface ModalLoginAgainProps extends BaseModalProps {
  currentUser?: User | null;
  onLoginDone?: (user: User) => void;
}

export const ModalLoginAgain = (props: ModalLoginAgainProps) => {
  const { formRef, onSubmitForm, formData, onClickContinue } =
    useLoginAgainModalHelper(props);

  return (
    <BaseModal {...props}>
      <form style={{ width: "100%" }} ref={formRef} onSubmit={onSubmitForm}>
        <Typography
          styles={{
            color: "#4d4d4d",
            fontSize: "20px",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          {"We need to confirm your identity"}
        </Typography>
        <Typography
          styles={{ fontSize: "18px", fontWeight: 600, textAlign: "center" }}
        >
          {"Please enter your password do proceed"}
        </Typography>
        <CustomInputField
          name="password"
          type="password"
          placeHolder="Password"
          bottomMessage={formData.password.bottomMessage}
          error={formData.password.error}
          containerProps={{ margin: "16px auto 0 auto" }}
        />
      </form>
      <CustomButton
        type="primary"
        text="Continue"
        onClick={onClickContinue}
        styles={{
          margin: "40px auto 0 auto",
          height: "50px",
          maxWidth: "200px",
        }}
      />
    </BaseModal>
  );
};
