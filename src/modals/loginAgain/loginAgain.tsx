import { CustomButton, CustomInputField } from "@components";
import { Modals } from "@constants";
import {
  Modal,
  Typography,
  type ModalProps,
} from "@eliseubatista99/react-scaffold-core";
import { type User } from "firebase/auth";
import { useLoginAgainModalHelper } from "./loginAgain.hook";

export interface ModalLoginAgainProps extends Omit<ModalProps, "id"> {
  currentUser?: User | null;
  onLoginDone?: (user: User) => void;
}

export const ModalLoginAgain = (props: ModalLoginAgainProps) => {
  const { formRef, onSubmitForm, formData, onClickContinue } =
    useLoginAgainModalHelper(props);

  return (
    <Modal data-testid="login-again-modal" {...props} id={Modals.loginAgain}>
      <form style={{ width: "100%" }} ref={formRef} onSubmit={onSubmitForm}>
        <Typography
          styles={{
            color: "#4d4d4d",
            fontSize: "15px",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          {"We need to confirm your identity"}
        </Typography>
        <Typography
          styles={{ fontSize: "13.5px", fontWeight: 600, textAlign: "center" }}
        >
          {"Please enter your password do proceed"}
        </Typography>
        <CustomInputField
          name="password"
          type="password"
          placeHolder="Password"
          bottomMessage={formData.password.bottomMessage}
          error={formData.password.error}
          containerProps={{ margin: "12px auto 0 auto" }}
        />
      </form>
      <CustomButton
        type="primary"
        text="Continue"
        onClick={onClickContinue}
        styles={{
          margin: "30px auto 0 auto",
          height: "37.5px",
          maxWidth: "150px",
        }}
      />
    </Modal>
  );
};
